import React, { useState } from 'react';
import { Terminal, Copy, Check, ArrowRight } from 'lucide-react';

interface AuditCase {
  id: string;
  tabLabel: string;
  title: string;
  subtitle: string;
  severity: 'CRITICAL' | 'HIGH';
  vulnerability: {
    summary: string;
    impactTag: string;
  };
  solution: {
    summary: string;
    deliveryTag: string;
  };
  vibeCode: {
    filename: string;
    code: string;
  };
  airCode: {
    filename: string;
    code: string;
  };
}

const AUDIT_CASES: AuditCase[] = [
  {
    id: 'case-01',
    tabLabel: '01. Auth & Data Leaks',
    title: 'Tenant Isolation & Insecure Direct Object References (IDOR)',
    subtitle: 'Client-supplied ID trust vs. cryptographically bounded Row-Level Security',
    severity: 'CRITICAL',
    vulnerability: {
      summary:
        'Client-supplied IDs in URL parameters are queried directly without validating session actor ownership or tenant boundaries.',
      impactTag: 'Risk: Cross-tenant data exposure & unauthenticated PII leaks',
    },
    solution: {
      summary:
        'Enforce schema-level Zod bounds and database Row-Level Security (RLS) scoped strictly to authenticated tenant context.',
      deliveryTag: 'Verified: Server-side Row-Level Security & Zod schema gates',
    },
    vibeCode: {
      filename: 'routes/billing/invoice.ts',
      code: `// ❌ UNCHECKED IDOR: Blind query with client-supplied parameter
export async function GET(req: Request) {
  const url = new URL(req.url);
  const invoiceId = url.searchParams.get('id'); // No tenant validation

  // ⚠️ Any user can access competitor invoices by guessing IDs:
  const invoice = await db.query(
    \`SELECT * FROM invoices WHERE id = '\${invoiceId}'\`
  );

  return Response.json(invoice); // Returns unmasked PII & banking details
}`,
    },
    airCode: {
      filename: 'src/modules/billing/get-invoice.handler.ts',
      code: `// ✅ HARDENED BUILD: Verified isolation & deterministic authorization
export const getTenantInvoice = async (
  ctx: AuthenticatedContext,
  rawParams: unknown
): Promise<Result<SanitizedInvoiceDTO, BillingError>> => {
  const parsed = GetInvoiceSchema.safeParse(rawParams);
  if (!parsed.success) return Err({ code: 'INVALID_INPUT' });

  // Cryptographically verify session permissions before querying
  await enforcePermission(ctx.session, Permissions.INVOICE_READ, parsed.data.invoiceId);

  // PostgreSQL Row-Level Security strictly scoped to tenant context
  return await db.withTenantContext(ctx.session.tenantId, async (tx) => {
    const record = await tx.invoices.findUnique({
      where: { id: parsed.data.invoiceId, tenantId: ctx.session.tenantId },
    });
    return record ? Ok(record) : Err({ code: 'NOT_FOUND' });
  });
};`,
    },
  },
  {
    id: 'case-02',
    tabLabel: '02. Runaway AI Loops',
    title: 'Autonomous Tool Invocation & Infinite Loop Circuit Breaker',
    subtitle: 'Unchecked agent tool recursion vs. finite state machine with budget circuit breakers',
    severity: 'CRITICAL',
    vulnerability: {
      summary:
        'LLMs connected to external tools inside open while-loops execute recursively without token ceilings or circuit breakers.',
      impactTag: 'Risk: API balance exhaustion ($2,000+ overnight) & database cascade failure',
    },
    solution: {
      summary:
        'Deploy deterministic finite state machines with strict recursion ceilings, execution timeouts, and automated human handoff.',
      deliveryTag: 'Verified: Bounded loop limits, token quotas & sandboxed WASM tools',
    },
    vibeCode: {
      filename: 'services/agent/executor.ts',
      code: `// ❌ UNBOUNDED AGENT LOOP: No iteration limit or cost ceiling
export async function runAgentWorkflow(prompt: string) {
  let context = prompt;

  // ⚠️ Infinite tool recursion if LLM hallucinates continuous calls:
  while (true) {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [{ role: "user", content: context }]
    });

    const toolCall = response.choices[0].message.tool_calls?.[0];
    if (!toolCall) break;

    // Dangerous unvetted execution with zero rate limits or budgets
    const result = await executeTool(toolCall.function.name, toolCall.function.arguments);
    context += JSON.stringify(result);
  }
}`,
    },
    airCode: {
      filename: 'src/agentic/state-machine/tool-orchestrator.ts',
      code: `// ✅ HARDENED BUILD: Bounded state transitions & circuit breaker
export class DeterministicToolOrchestrator {
  private readonly circuitBreaker = new CircuitBreaker({ maxFailures: 3, resetTimeoutMs: 15_000 });

  async executeStep(workflowId: string, state: AgentState, budget: AgentBudget): Promise<Result> {
    // Invariant: Hard ceiling on recursive depth and token burn
    if (state.iterationCount >= budget.maxIterations || state.tokensSpent >= budget.tokenCeiling) {
      return this.haltGracefully(workflowId, 'BUDGET_CEILING_REACHED');
    }

    return await this.circuitBreaker.execute(async () => {
      const toolCall = await this.planner.planNextAction(state);
      if (toolCall.type === 'TERMINATE') return { status: 'COMPLETED' };

      // Dispatch through sandboxed WASM runtime with strict 4s timeout
      const result = await SafeRegistry.execute(toolCall, { timeoutMs: 4_000 });
      return this.advanceState(state, toolCall, result);
    });
  }
}`,
    },
  },
  {
    id: 'case-03',
    tabLabel: '03. Race Conditions',
    title: 'Concurrent Race Conditions & Distributed Money Movement',
    subtitle: 'Non-transactional mutation vs. strict ACID isolation with idempotency keys',
    severity: 'HIGH',
    vulnerability: {
      summary:
        'Rapid double-clicks on flaky connections trigger concurrent database mutations before the initial row write commits.',
      impactTag: 'Risk: Double-spending, duplicated credit provisioning & ledger corruption',
    },
    solution: {
      summary:
        'Wrap balance updates in atomic ACID transactions with cryptographic idempotency keys and row-level mutex locks.',
      deliveryTag: 'Verified: Strict ACID serialization & distributed idempotency locks',
    },
    vibeCode: {
      filename: 'api/wallet/transfer.ts',
      code: `// ❌ NON-ATOMIC MUTATION: Race condition vulnerability
export async function transferFunds(req: Request) {
  const { senderId, recipientId, amount } = await req.json();

  // ⚠️ Two rapid clicks execute balance check simultaneously:
  const sender = await db.user.findUnique({ where: { id: senderId } });
  if (sender.balance < amount) return Response.json({ error: "Insufficient funds" }, { status: 400 });

  // Provisioned twice before balance deduction completes!
  await db.user.update({ where: { id: recipientId }, data: { balance: { increment: amount } } });
  await db.user.update({ where: { id: senderId }, data: { balance: { decrement: amount } } });

  return Response.json({ success: true });
}`,
    },
    airCode: {
      filename: 'src/modules/ledger/atomic-transfer.service.ts',
      code: `// ✅ HARDENED BUILD: Serialized transaction with idempotency key
export const executeTransfer = async (
  ctx: TransactionContext,
  payload: TransferDTO
): Promise<Result<LedgerReceipt, LedgerError>> => {
  // 1. Idempotency lock prevents concurrent execution
  const lock = await redis.set(\`idempotency:\${payload.idempotencyKey}\`, 'LOCKED', 'EX', 60, 'NX');
  if (!lock) return Err({ code: 'DUPLICATE_IN_FLIGHT_REQUEST' });

  // 2. Strict ACID transaction with row-level locks
  return await db.$transaction(async (tx) => {
    const sender = await tx.$queryRaw\`SELECT balance FROM users WHERE id = \${payload.senderId} FOR UPDATE\`;
    if (sender.balance < payload.amount) return Err({ code: 'INSUFFICIENT_FUNDS' });

    await tx.users.update({ where: { id: payload.senderId }, data: { balance: { decrement: payload.amount } } });
    await tx.users.update({ where: { id: payload.recipientId }, data: { balance: { increment: payload.amount } } });

    return Ok({ transactionId: crypto.randomUUID(), timestamp: Date.now() });
  });
};`,
    },
  },
];

export const CodeDiffInspector: React.FC = () => {
  const [selectedCaseIndex, setSelectedCaseIndex] = useState(0);
  const [displayMode, setDisplayMode] = useState<'story' | 'code'>('story');
  const [copiedVibe, setCopiedVibe] = useState(false);
  const [copiedAir, setCopiedAir] = useState(false);

  const currentCase = AUDIT_CASES[selectedCaseIndex];

  const handleCopy = (code: string, type: 'vibe' | 'air') => {
    navigator.clipboard.writeText(code);
    if (type === 'vibe') {
      setCopiedVibe(true);
      setTimeout(() => setCopiedVibe(false), 2000);
    } else {
      setCopiedAir(true);
      setTimeout(() => setCopiedAir(false), 2000);
    }
  };

  return (
    <section id="the-counterweight" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-white/5">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <span className="font-sans text-xs font-medium tracking-wider text-teal-400 uppercase">
            02 · Rigor Inspection
          </span>
          <h2 className="heading-display text-2xl sm:text-4xl text-white tracking-tight mt-1.5">
            Why AI Prototypes Crash in Production
          </h2>
        </div>

        {/* View Mode Toggle: [ Story ] | [ Code ] in a clean glass pill */}
        <div className="flex items-center p-1 bg-white/[0.04] rounded-lg border border-white/10 self-start sm:self-auto font-sans text-xs">
          <button
            onClick={() => setDisplayMode('story')}
            className={`px-3.5 py-1.5 rounded-md transition-all cursor-pointer ${
              displayMode === 'story'
                ? 'bg-white/10 text-white font-medium shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Story
          </button>
          <button
            onClick={() => setDisplayMode('code')}
            className={`px-3.5 py-1.5 rounded-md transition-all cursor-pointer ${
              displayMode === 'code'
                ? 'bg-white/10 text-white font-medium shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Code
          </button>
        </div>
      </div>

      {/* A. Clean, Compact Tab Bar */}
      <div className="flex flex-wrap items-center gap-2 mb-6 border-b border-white/5 pb-4">
        {AUDIT_CASES.map((auditCase, idx) => {
          const isActive = idx === selectedCaseIndex;
          return (
            <button
              key={auditCase.id}
              onClick={() => setSelectedCaseIndex(idx)}
              className={`px-4 py-2 rounded-xl font-sans text-xs transition-all cursor-pointer ${
                isActive
                  ? 'bg-teal-500/10 text-teal-300 border border-teal-500/30 font-medium'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.03] border border-transparent'
              }`}
            >
              {auditCase.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Case Subheader */}
      <div className="mb-4">
        <h3 className="heading-display text-lg text-white">
          {currentCase.title}
        </h3>
        <p className="font-sans text-xs text-slate-400 mt-1">
          {currentCase.subtitle}
        </p>
      </div>

      {/* 
        B. Sleek Comparison Cards in 2-Column Layout (Story Mode)
      */}
      {displayMode === 'story' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Column: The Vulnerability */}
          <div className="surface-card rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="font-sans text-xs font-semibold text-orange-400 tracking-wider uppercase flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                <span>The Vulnerability</span>
              </div>
              <p className="text-slate-300 font-sans text-sm leading-relaxed">
                {currentCase.vulnerability.summary}
              </p>
            </div>
            <div className="font-sans text-xs text-slate-500 mt-5 pt-3 border-t border-white/5">
              {currentCase.vulnerability.impactTag}
            </div>
          </div>

          {/* Right Column: Project AIR Standard */}
          <div className="surface-card rounded-2xl p-6 flex flex-col justify-between border-teal-500/20">
            <div>
              <div className="font-sans text-xs font-semibold text-teal-400 tracking-wider uppercase flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                <span>How We Fix It</span>
              </div>
              <p className="text-slate-300 font-sans text-sm leading-relaxed">
                {currentCase.solution.summary}
              </p>
            </div>
            <div className="font-sans text-xs text-teal-400/90 mt-5 pt-3 border-t border-white/5">
              {currentCase.solution.deliveryTag}
            </div>
          </div>
        </div>
      )}

      {/* 
        C. Technical Code Diff View (Code Mode)
      */}
      {displayMode === 'code' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Left: Vibe Code */}
          <div className="bg-[#080B10] border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col">
            <div className="flex items-center justify-between px-4 py-2.5 bg-white/[0.02] border-b border-white/10">
              <span className="font-mono text-xs text-orange-400 flex items-center gap-1.5">
                <span>⚠️</span>
                <span>{currentCase.vibeCode.filename}</span>
              </span>
              <button
                onClick={() => handleCopy(currentCase.vibeCode.code, 'vibe')}
                className="font-mono text-[11px] text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
              >
                {copiedVibe ? <Check className="w-3.5 h-3.5 text-teal-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedVibe ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <pre className="p-4 font-mono text-xs leading-relaxed text-slate-300 overflow-x-auto selection:bg-orange-500/20">
              <code>{currentCase.vibeCode.code}</code>
            </pre>
          </div>

          {/* Right: Project AIR Hardened Code */}
          <div className="bg-[#080B10] border border-teal-500/30 rounded-xl overflow-hidden shadow-2xl flex flex-col">
            <div className="flex items-center justify-between px-4 py-2.5 bg-teal-950/20 border-b border-teal-500/20">
              <span className="font-mono text-xs text-teal-400 flex items-center gap-1.5">
                <span>✓</span>
                <span>{currentCase.airCode.filename}</span>
              </span>
              <button
                onClick={() => handleCopy(currentCase.airCode.code, 'air')}
                className="font-mono text-[11px] text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
              >
                {copiedAir ? <Check className="w-3.5 h-3.5 text-teal-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedAir ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <pre className="p-4 font-mono text-xs leading-relaxed text-slate-300 overflow-x-auto selection:bg-teal-500/20">
              <code>{currentCase.airCode.code}</code>
            </pre>
          </div>
        </div>
      )}
    </section>
  );
};
