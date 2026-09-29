'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/navigation/Navbar';
import { ArchitectureBookingModal } from '@/components/modals/ArchitectureBookingModal';
import { StudioFooter } from '@/components/sections/StudioFooter';
import { FadeInView } from '@/components/ui/FadeInView';
import { StaggerContainer, StaggerItem } from '@/components/ui/StaggerContainer';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { navigateTo } from '@/src/navigation';
import {
  ShieldAlert,
  CheckCircle2,
  XCircle,
  ArrowRight,
  TrendingDown,
  Lock,
  GitBranch,
  Terminal,
  Activity,
  Layers,
  FileCode,
  Code2,
  Database,
  Cpu,
  ArrowUpRight,
  Check,
  ChevronRight,
  Bookmark,
  Share2,
  ExternalLink,
  Sliders,
} from 'lucide-react';

interface MetricComparison {
  label: string;
  before: string;
  after: string;
}

interface Finding {
  title: string;
  category: string;
  explanation: string;
  vulnerableSnippet?: string;
  hardenedSnippet?: string;
}

interface Teardown {
  id: string;
  num: string;
  category: 'fintech' | 'ai' | 'healthcare';
  categoryLabel: string;
  title: string;
  clientProfile: string;
  summary: string;
  pullQuote: string;
  heroMetrics: { label: string; value: string; detail: string }[];
  metrics: MetricComparison[];
  verificationBadge: string;
  triageSpecs: {
    turnaround: string;
    prsMerged: string;
    testKillRate: string;
    compliance: string;
  };
  stack: string[];
  problem: {
    overview: string;
    impact: string;
    trigger: string;
  };
  findings: Finding[];
  reEngineering: {
    title: string;
    methodology: string;
    codeExhibit?: string;
  }[];
  outcome: {
    summary: string;
    productionMetrics: string[];
  };
  relatedGate: {
    gate: string;
    title: string;
    route: string;
  };
}

export default function TeardownsPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<'all' | 'fintech' | 'ai' | 'healthcare'>('all');
  const [activeTeardownId, setActiveTeardownId] = useState<string>('fintech-saas');
  const [activeCodeTab, setActiveCodeTab] = useState<'vulnerable' | 'hardened'>('hardened');

  const teardowns: Teardown[] = [
    {
      id: 'fintech-saas',
      num: '01',
      category: 'fintech',
      categoryLabel: 'Fintech & Multi-Tenant',
      title: 'Eliminating Insecure Direct Object Reference (IDOR) & Ledger Race Conditions',
      clientProfile: 'B2B Billing Platform · $4M Seed · 18 Enterprise Pilots',
      summary:
        'A multi-tenant billing platform authored via AI scaffolding was failing enterprise security audits: invoices could be viewed cross-organization by manipulating query parameters, and duplicate card charges occurred during network interruptions.',
      pullQuote:
        'When customer balances desynchronize during payment processing, no amount of AI prompting can reconstruct an accurate double-entry ledger. Isolation must be enforced at the database engine.',
      heroMetrics: [
        { label: 'CROSS-TENANT LEAKS', value: '0', detail: 'Native PostgreSQL RLS' },
        { label: 'DOUBLE CHARGES', value: '0', detail: 'In 140,000+ Transactions' },
        { label: 'MUTATION KILL SCORE', value: '100%', detail: '42/42 Stryker Mutants' },
        { label: 'ENTERPRISE SOC2', value: 'PASSED', detail: 'Zero Remediation Findings' },
      ],
      metrics: [
        { label: 'Cross-Tenant IDOR', before: 'CRITICAL (Guessed IDs leaked)', after: '0 DETECTED (PostgreSQL RLS)' },
        { label: 'Mutation Kill Score', before: '0% (Untracked assertions)', after: '100% (42/42 Mutants killed)' },
        { label: 'Double Charge Incidents', before: '14 / month on retry', after: '0 in 140,000+ transactions' },
        { label: 'Compliance Audit', before: 'Blocked on Risk Questionnaire', after: 'SOC2 Type II Certified' },
      ],
      verificationBadge: 'Verified via Third-Party SOC2 Type II Audit & Vanta Compliance Log',
      triageSpecs: {
        turnaround: '48h Diagnostic · 5-Day Delivery',
        prsMerged: '3 Production Pull Requests',
        testKillRate: '100% Invariant Mutation Score',
        compliance: 'SOC2 Type II / ISO 27001 Ready',
      },
      stack: ['Next.js App Router', 'PostgreSQL 16', 'Drizzle ORM', 'Redis Sentinel', 'Stripe Webhooks'],
      problem: {
        trigger: 'Enterprise buyer security team detected cross-organization invoice access during penetration screening.',
        overview:
          'The founders used AI assistance to ship an enterprise billing platform in 6 weeks. When prospective enterprise customers initiated penetration tests, security engineers discovered that altering the URL invoice parameter allowed any authenticated company to view raw invoices from competing clients. Concurrently, transient Stripe webhook retries were causing accounts to be billed twice.',
        impact:
          'Three six-figure enterprise pilots were halted pending remediation, and the executive team spent 15 hours every week issuing manual refunds and reconciling desynchronized database ledgers.',
      },
      findings: [
        {
          title: 'Unscoped Client-Side Authorization (Critical IDOR)',
          category: 'Access Control',
          explanation:
            'API routes looked up invoices using `select().where(eq(invoices.id, params.id))`. The database query lacked tenant scoping, blindly trusting the client session to pass the correct organization identifier.',
          vulnerableSnippet: `/* VULNERABLE CONTROLLER (Unscoped Inbound ID) */
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const invoiceId = searchParams.get('id');

  // ⚠️ CRITICAL IDOR: Any authenticated user can guess or increment
  // invoiceId to inspect another enterprise customer's invoice data!
  const invoice = await db.query.invoices.findFirst({
    where: eq(invoices.id, invoiceId)
  });

  return Response.json(invoice);
}`,
          hardenedSnippet: `/* HARDENED ENGINE-TIER ISOLATION (PostgreSQL RLS) */
export async function GET(req: Request) {
  const session = await verifySession(req); // Cryptographic JWT

  // Engine automatically enforces tenant_id match via RLS session setting.
  // Even if application code omits "where tenant_id", zero rows leak!
  return await db.transaction(async (tx) => {
    await tx.execute(sql\`SET LOCAL app.current_tenant_id = \${session.orgId}\`);
    const invoice = await tx.query.invoices.findFirst({
      where: eq(invoices.id, params.invoiceId)
    });
    if (!invoice) throw new NotFoundError("Invoice not found in organization");
    return Response.json(invoice);
  });
}`,
        },
        {
          title: 'Non-Transactional Sequential Ledger Writes',
          category: 'State Concurrency',
          explanation:
            'The payment webhook marked the invoice as paid in one query, then attempted to write ledger rows in a separate unlinked call. If the database connection dropped in between, the invoice was marked paid but customer balances desynchronized permanently.',
          vulnerableSnippet: `/* VULNERABLE WRITE (Unlinked Non-Atomic Operations) */
export async function handleWebhook(event: any) {
  // ⚠️ First query succeeds...
  await db.update(invoices)
    .set({ status: 'paid' })
    .where(eq(invoices.id, event.invoiceId));

  // ⚠️ Network timeout here leaves the invoice marked paid,
  // but customer account balance is never credited!
  await db.insert(ledger).values({
    amount: event.amount,
    accountId: event.accountId
  });
}`,
          hardenedSnippet: `/* HARDENED ATOMIC TRANSACTION WITH REDIS MUTEX */
export async function handleWebhook(event: StripeEvent) {
  const idempotencyKey = \`event:stripe:\${event.id}\`;
  
  // 1. Distributed mutex prevents duplicate concurrent webhook calls
  const acquired = await redis.set(idempotencyKey, 'locked', 'PX', 10000, 'NX');
  if (!acquired) return { status: 'duplicate_request_ignored' };

  // 2. Strict ACID Transaction: Either both tables commit, or neither commits
  return await db.transaction(async (tx) => {
    await tx.update(invoices)
      .set({ status: 'paid', paidAt: sql\`NOW()\` })
      .where(eq(invoices.id, event.invoiceId));

    await tx.insert(ledger).values({
      amount: event.amount,
      accountId: event.accountId,
      eventId: event.id
    });
  });
}`,
        },
      ],
      reEngineering: [
        {
          title: 'Engine-Tier PostgreSQL Row-Level Security (RLS)',
          methodology:
            'Rather than relying on human developers to remember "where tenant_id = currentOrg" in dozens of API endpoints, we pushed multi-tenant authorization directly into the PostgreSQL kernel. Every connection context carries the cryptographic session token, guaranteeing mathematical isolation.',
          codeExhibit: `-- ENGINE POLICY (0 LEAKS REGARDLESS OF DEVELOPER MEMORY)
ALTER TABLE invoices ENABLE ROW LEVEL SECURITY;
ALTER TABLE ledger ENABLE ROW LEVEL SECURITY;

CREATE POLICY tenant_isolation_invoices ON invoices
  FOR ALL USING (tenant_id = current_setting('app.current_tenant_id')::uuid);

CREATE POLICY tenant_isolation_ledger ON ledger
  FOR ALL USING (tenant_id = current_setting('app.current_tenant_id')::uuid);`,
        },
        {
          title: 'Stryker AST Mutation Test Harness',
          methodology:
            'We authored a comprehensive test suite verified by Stryker AST mutator. The harness deliberately sabotaged ledger arithmetic, swapped equality operators, and deleted rollback triggers, confirming that tests failed on 100% of injected code mutations.',
        },
      ],
      outcome: {
        summary:
          'The platform passed formal third-party penetration testing with 0 critical or medium vulnerabilities reported. Over the subsequent 6 months, the system processed 140,000+ customer transactions with zero double-billing incidents and achieved SOC2 Type II compliance.',
        productionMetrics: [
          '140,000+ consecutive transactions with 0 double-charges',
          'Passed independent third-party penetration audit with 0 cross-tenant leaks',
          'Founder weekly manual ledger reconciliation reduced from 15h to 0h',
          'All 3 enterprise pilots signed within 2 weeks of remediation verification',
        ],
      },
      relatedGate: {
        gate: 'Gate 03 · Engine-Tier Isolation',
        title: 'PostgreSQL Row-Level Security & Canary Deployment',
        route: '/rigor#three-gates',
      },
    },
    {
      id: 'ai-agent-runaway',
      num: '02',
      category: 'ai',
      categoryLabel: 'Enterprise AI Pipelines',
      title: 'Halting Runaway Agent Loops & Slashing $14k/mo API Token Bleed',
      clientProfile: 'LegalTech Contract Intelligence · Series A · 45 Enterprise Customers',
      summary:
        'An autonomous contract-parsing pipeline entered infinite recursive retry loops when processing unusual document tables, causing 504 Gateway Timeouts and burning $14,200 monthly in OpenAI API charges.',
      pullQuote:
        'AI agents must never be granted unconstrained loops. Deterministic state machines with strict recursion ceilings and semantic caching turn unpredictable token black holes into predictable enterprise software.',
      heroMetrics: [
        { label: 'TOKEN COST REDUCTION', value: '-72%', detail: 'Down from $14.2k to $3.9k/mo' },
        { label: 'P99 EXTRACTION LATENCY', value: '3.8s', detail: 'Dropped from 42.4s' },
        { label: 'RUNAWAY LOOP FAILS', value: '0', detail: 'Zero incidents in 6 months' },
        { label: 'OUTPUT SCHEMA PARSE', value: '100%', detail: 'Deterministic Pydantic/Zod' },
      ],
      metrics: [
        { label: 'Monthly LLM Token Spend', before: '$14,200 / month', after: '$3,980 / month (-72%)' },
        { label: 'P99 Extraction Latency', before: '42.4 seconds', after: '3.8 seconds' },
        { label: 'Runaway Loops Detected', before: '18 / week', after: '0 in 6 months' },
        { label: 'Output Schema Drift', before: '8.4% failed JSON parsing', after: '0% (Structured Outputs)' },
      ],
      verificationBadge: 'Verified via AWS CloudWatch & OpenAI Enterprise Billing Export',
      triageSpecs: {
        turnaround: '48h Diagnostic · 1-Sprint DAG Refactor',
        prsMerged: '2 Production Pull Requests',
        testKillRate: '100% State Machine Coverage',
        compliance: 'SOC2 Data Confidentiality Bound',
      },
      stack: ['LangGraph', 'Python 3.12', 'pgvector', 'FastAPI', 'Redis Semantic Cache'],
      problem: {
        trigger: 'Monthly cloud billing alert triggered after OpenAI charges spiked 340% in two weeks.',
        overview:
          'An enterprise legal-tech startup parsing complex commercial agreements suffered from runaway autonomous agent executions. When an uploaded PDF contained complex scanned tables, agents entered recursive self-correction while-loops, timing out HTTP gateways and producing $14,200 monthly OpenAI bills.',
        impact:
          'Gross margins plummeted to negative 35%, and users frequently experienced 504 Gateway Timeouts on standard 10+ page corporate contracts.',
      },
      findings: [
        {
          title: 'Unbounded While-Loop State Machine',
          category: 'Agent Architecture',
          explanation:
            'The extraction agent loop lacked hard execution depth limits. If an LLM response failed validation, the prompt was resent with an apology prompt in an open-ended loop that ran until worker timeout.',
          vulnerableSnippet: `/* VULNERABLE RECURSION (Unbounded Self-Correction) */
while (!validation.success) {
  // ⚠️ Open-ended recursion burning $2.50 per retry!
  // If the PDF table is malformed, this executes until the 120s worker timeout.
  response = await model.invoke(prompt + error);
  validation = validateOutput(response);
}`,
          hardenedSnippet: `/* HARDENED BOUNDED DAG (LangGraph Deterministic State Machine) */
const workflow = new StateGraph<ContractState>({
  channels: { contract: null, extractions: null, retryCount: null }
})
.addNode("extract", extractNode)
.addNode("verify", verifyNode)
.addConditionalEdges("verify", (state) => {
  // Hard invariant: Hard recursion limit of 3 hops.
  // If still ambiguous, drop safely into human triage fallback.
  if (state.isValid) return "complete";
  if (state.retryCount >= 3) return "humanReviewQueue";
  return "extract";
});`,
        },
        {
          title: 'Zero Semantic Caching on Standard Legal Boilerplate',
          category: 'Token Efficiency',
          explanation:
            'Identical standard indemnity, confidentiality, and governing law clauses were re-embedded and re-analyzed via expensive frontier reasoning models on every single document upload.',
          vulnerableSnippet: `/* VULNERABLE REDUNDANCY (Duplicate Clause Reasoning) */
for (const clause of contract.clauses) {
  // ⚠️ 65% of clauses across commercial agreements are standard
  // boilerplate, yet every clause was sent for full frontier inference!
  await expensiveLLMReasoning(clause);
}`,
          hardenedSnippet: `/* SEMANTIC CACHE LOOKUP BEFORE EXPENSIVE INVOCATION */
const clauseHash = sha256(normalizeText(clause.text));
const cachedAnalysis = await redis.get(\`clause:\${clauseHash}\`);

if (cachedAnalysis) {
  // ⚡ 0 token burn, sub-2ms response time
  return JSON.parse(cachedAnalysis);
}
// Only analyze novel or flagged high-risk clauses
const result = await model.invoke(clause);
await redis.set(\`clause:\${clauseHash}\`, JSON.stringify(result), 'EX', 86400 * 30);`,
        },
      ],
      reEngineering: [
        {
          title: 'Bounded LangGraph Directed Acyclic Graph (DAG)',
          methodology:
            'Re-architected the free-form agent loop into a deterministic state machine. Hard caps enforced: maximum 3 reasoning hops per node, with automated fallback to human review queue if confidence scores fall below 95%.',
        },
        {
          title: 'Zod & Pydantic Grammar Constraints with Structured Outputs',
          methodology:
            'Configured OpenAI Structured Outputs with strict grammar constraints, eliminating conversational preambles and markdown fencing errors entirely.',
        },
      ],
      outcome: {
        summary:
          '72% reduction in monthly LLM token spend ($14,200 down to $3,980/month). P99 extraction latency dropped from 42.4s to 3.8s for cached clauses, with zero runaway loop incidents over 6 months of continuous enterprise production.',
        productionMetrics: [
          '$10,220 saved per month in cloud LLM API costs',
          'P99 latency slashed from 42.4s to 3.8s',
          'Zero 504 gateway timeout incidents recorded since deployment',
          'Gross margins rebounded from -35% to +68%',
        ],
      },
      relatedGate: {
        gate: 'Gate 02 · Deterministic Recovery',
        title: 'Autonomous Agent Circuit Breakers & State Machines',
        route: '/rigor#three-gates',
      },
    },
    {
      id: 'healthcare-portal',
      num: '03',
      category: 'healthcare',
      categoryLabel: 'Healthcare & Systems',
      title: 'Eliminating Mobile White-Screen Crashes & Zero-Downtime Migration',
      clientProfile: 'Clinical Diagnostic Portal · 20,000 Monthly Patients · 42 Regional Centers',
      summary:
        'A clinical triage portal used on mobile tablets suffered from recurring white-screen unmounts due to nullable patient vitals, and engineers endured 25-minute system outages during untracked database migrations.',
      pullQuote:
        'When medical software crashes on a clinician’s tablet, doctors revert to handwritten notes. Production reliability in healthcare is not an optimization—it is an ethical prerequisite.',
      heroMetrics: [
        { label: 'CRASH-FREE SESSIONS', value: '99.98%', detail: 'Up from 95.2%' },
        { label: 'DEPLOYMENT DOWNTIME', value: '0s', detail: 'Down from ~25 minutes' },
        { label: 'TSC COMPILATION', value: '0 ERRORS', detail: '312 warnings eliminated' },
        { label: 'P95 API LATENCY', value: '118ms', detail: 'Down from 1,420ms' },
      ],
      metrics: [
        { label: 'Session Crash Rate', before: '4.8% (White screens)', after: '< 0.02% (99.98% crash-free)' },
        { label: 'Deployment Downtime', before: '~25 min maintenance outage', after: '0 seconds (Blue/Green)' },
        { label: 'TypeScript Soundness', before: '312 warnings & any casts', after: '0 warnings (Strict Null)' },
        { label: 'P95 Endpoint Latency', before: '1,420ms', after: '118ms' },
      ],
      verificationBadge: 'Verified via Sentry Crash-Free Telemetry & Google Cloud Run Logs',
      triageSpecs: {
        turnaround: '48h Diagnostic · 4-Day Zero-Downtime Rollout',
        prsMerged: '4 Production Pull Requests',
        testKillRate: '100% Null Handling Coverage',
        compliance: 'HIPAA Security Rule Aligned',
      },
      stack: ['Next.js App Router', 'TypeScript 5.7 Strict', 'PostgreSQL RLS', 'Docker', 'Google Cloud Run'],
      problem: {
        trigger: 'Regional clinic directors filed urgent escalations after clinicians experienced tablet crashes during morning patient check-in.',
        overview:
          'A clinical operations portal connecting regional medical diagnostic centers suffered from frequent frontend white-screen crashes on clinicians’ tablets. Doctors reported disappearing patient vitals, and engineers were afraid to deploy updates due to manual untracked SQL migrations that routinely took the portal offline during operating hours.',
        impact:
          'Clinicians were reverting to paper notes during system outages, risking patient care and generating severe executive dissatisfaction.',
      },
      findings: [
        {
          title: 'Silent Runtime Schema Drift on Nullable Vitals',
          category: 'Type Soundness',
          explanation:
            'When patient records lacked certain optional vitals, the backend returned `null`. The frontend code lacked optional chaining, calling `.toFixed(2)` on undefined properties and triggering fatal React rendering unmounts.',
          vulnerableSnippet: `/* VULNERABLE RENDER (Fatal React Unmount) */
export function VitalsDisplay({ patient }: { patient: any }) {
  // ⚠️ If systolic is null or undefined, .toFixed(2) throws:
  // "TypeError: Cannot read properties of null (reading 'toFixed')"
  // Because no ErrorBoundary was configured, the ENTIRE React tree crashed!
  return (
    <div>
      <span>{patient.vitals.bloodPressure.systolic.toFixed(2)}</span>
    </div>
  );
}`,
          hardenedSnippet: `/* HARDENED RUNTIME BOUNDARY WITH COMPONENT FALLBACK */
export const PatientVitalsSchema = z.object({
  systolic: z.number().nullable().default(null),
  diastolic: z.number().nullable().default(null),
});

export function VitalsDisplay({ data }: { data: unknown }) {
  // Safe runtime boundary contract:
  const parsed = PatientVitalsSchema.safeParse(data);
  if (!parsed.success) {
    return <span className="font-mono text-slate-500">Telemetry Unavailable</span>;
  }
  return (
    <span className="font-mono">
      {parsed.data.systolic !== null ? parsed.data.systolic.toFixed(0) : '--'}
    </span>
  );
}`,
        },
        {
          title: 'Manual Untracked Database Migrations over SSH',
          category: 'Infrastructure',
          explanation:
            'Engineers ran manual `ALTER TABLE` commands over SSH. Schema updates frequently locked clinical tables for 20+ minutes during clinic operating hours.',
          vulnerableSnippet: `/* DANGEROUS MANUAL MIGRATION RUN OVER SSH */
-- ⚠️ Locks clinical_records table exclusively for 22 minutes
-- during active clinic triage!
ALTER TABLE clinical_records ADD COLUMN provider_notes TEXT NOT NULL;`,
          hardenedSnippet: `/* EXPAND / CONTRACT ZERO-DOWNTIME MIGRATION */
-- PHASE 1: Add column as nullable (instant metadata lock, 0 downtime)
ALTER TABLE clinical_records ADD COLUMN provider_notes TEXT;

-- PHASE 2: Background worker backfills default values in batches
-- PHASE 3: Enforce NOT NULL without full table locks
ALTER TABLE clinical_records ADD CONSTRAINT notes_not_null 
  CHECK (provider_notes IS NOT NULL) NOT VALID;
ALTER TABLE clinical_records VALIDATE CONSTRAINT notes_not_null;`,
        },
      ],
      reEngineering: [
        {
          title: 'Shared Zod Boundary Contracts & Strict Null Checks',
          methodology:
            'Synchronized schema contracts across the client/server boundary. Enabled TypeScript strictNullChecks and exactOptionalPropertyTypes, forcing explicit fallback UI handling on every nullable field.',
        },
        {
          title: 'Automated Blue/Green Canary Deployments on Cloud Run',
          methodology:
            'Configured Google Cloud Run canary traffic splitting. Releases are tested against real-time health checks; if 5xx errors breach 0.1%, automated rollback occurs in <10 seconds.',
        },
      ],
      outcome: {
        summary:
          'Achieved a 99.98% crash-free session rate across 20,000+ monthly clinical triage interactions. Deployment cycles decreased from 25 minutes of stressful downtime to completely automated zero-downtime Blue/Green releases.',
        productionMetrics: [
          '99.98% crash-free session rate across 42 diagnostic centers',
          'Zero seconds of scheduled downtime over 18 subsequent production releases',
          'P95 latency decreased from 1,420ms to 118ms',
          'Eliminated 312 TypeScript compiler warnings and untyped any assertions',
        ],
      },
      relatedGate: {
        gate: 'Gate 01 · Static Soundness',
        title: 'Zod Runtime Boundary Parsing & Strict Null Safety',
        route: '/rigor#three-gates',
      },
    },
  ];

  const filteredTeardowns =
    activeFilter === 'all'
      ? teardowns
      : teardowns.filter((t) => t.category === activeFilter);

  const selectedTeardown =
    teardowns.find((t) => t.id === activeTeardownId) || teardowns[0];

  // Sync hash on mount and window hashchange
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && teardowns.some((t) => t.id === hash)) {
        setActiveTeardownId(hash);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Scroll to detail viewer on card click
  const handleSelectTeardown = (id: string) => {
    setActiveTeardownId(id);
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', `#${id}`);
    }
    const element = document.getElementById('teardown-dossier');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative w-full min-h-screen text-primary selection:bg-teal-500/30 selection:text-teal-200">
      {/* 1. Global Navigation */}
      <Navbar onBookCall={() => setIsBookingOpen(true)} isEntryCompleted={true} />

      {/* 2. Scoping Modal */}
      <ArchitectureBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      {/* ============================================================== */}
      {/* 1. MAGAZINE-STYLE PAGE HEADER                                 */}
      {/* ============================================================== */}
      <section className="relative pt-24 sm:pt-28 pb-10 sm:pb-12 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-theme">
        <FadeInView>
          {/* Volume / Issue Editorial Monograph Tag */}
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-secondary mb-6 tracking-wider">
            <span className="text-teal-400 font-semibold">PROJECT AIR · VOL. 2026.1</span>
            <span aria-hidden="true" className="text-muted/40">·</span>
            <span className="text-primary font-medium">ARCHITECTURAL FORENSICS</span>
            <span aria-hidden="true" className="text-muted/40">·</span>
            <span className="text-muted">PRODUCTION AUTOPSIES</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-4">
              <h1 className="heading-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-heading leading-[1.05]">
                The Autopsies of Fragile Software.
              </h1>
              <p className="font-sans text-lg sm:text-xl text-secondary max-w-3xl leading-relaxed">
                Line-by-line post-mortems of AI-scaffolded platforms that broke under production traffic—and how we re-engineered them with deterministic verification.
              </p>
            </div>

            {/* Quick Summary Pill Bar */}
            <div className="lg:col-span-4 p-5 rounded-2xl surface-card border border-theme space-y-3">
              <div className="text-[11px] font-mono text-teal-400 font-semibold uppercase tracking-wider">
                Audited Production Corpus
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-2.5 rounded-lg option-card-theme border border-theme">
                  <div className="text-muted text-[10px]">TRANSACTIONS</div>
                  <div className="text-heading font-bold mt-0.5">140,000+</div>
                </div>
                <div className="p-2.5 rounded-lg option-card-theme border border-theme">
                  <div className="text-muted text-[10px]">DOUBLE BILLS</div>
                  <div className="text-emerald-400 font-bold mt-0.5">0 INCIDENTS</div>
                </div>
                <div className="p-2.5 rounded-lg option-card-theme border border-theme">
                  <div className="text-muted text-[10px]">MUTATION KILL</div>
                  <div className="text-teal-400 font-bold mt-0.5">100% SCORE</div>
                </div>
                <div className="p-2.5 rounded-lg option-card-theme border border-theme">
                  <div className="text-muted text-[10px]">IDOR TOLERANCE</div>
                  <div className="text-emerald-400 font-bold mt-0.5">0 LEAKS</div>
                </div>
              </div>
            </div>
          </div>

          {/* Category Filter Selector */}
          <div className="mt-7 pt-5 border-t border-theme flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-muted uppercase tracking-wider mr-2">
                Filter Field:
              </span>
              {[
                { id: 'all', label: 'All Case Studies' },
                { id: 'fintech', label: 'Fintech & Multi-Tenant' },
                { id: 'ai', label: 'Autonomous AI Pipelines' },
                { id: 'healthcare', label: 'Healthcare & Systems' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFilter(tab.id as any)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                    activeFilter === tab.id
                      ? 'bg-teal-500/20 text-teal-400 border border-teal-500/40 font-semibold'
                      : 'option-card-theme text-secondary hover:text-heading border border-theme'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="text-xs font-mono text-muted">
              Showing {filteredTeardowns.length} In-Depth Technical Dossiers
            </div>
          </div>
        </FadeInView>
      </section>

      {/* ============================================================== */}
      {/* 2. TEARDOWN LISTING (STRUCTURED CASE STUDY CARDS)              */}
      {/* ============================================================== */}
      <section className="py-10 sm:py-14 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-theme">
        <div className="mb-6 sm:mb-8 flex items-center justify-between">
          <div>
            <span className="text-xs font-mono text-teal-400 uppercase tracking-wider font-semibold">
              INDEX OF PRODUCTION INVESTIGATIONS
            </span>
            <h2 className="heading-display text-2xl sm:text-3xl text-heading font-bold tracking-tight mt-1">
              Select an Architectural Dossier
            </h2>
          </div>
          <span className="text-xs font-mono text-muted hidden sm:inline">
            Click any card to inspect full code diffs
          </span>
        </div>

        {/* 3 Structured Case Study Cards Grid with Staggered Motion */}
        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {filteredTeardowns.map((td) => {
            const isSelected = activeTeardownId === td.id;
            return (
              <StaggerItem key={td.id} direction="up" distance={12}>
                <div
                  onClick={() => handleSelectTeardown(td.id)}
                  className={`h-full p-6 sm:p-7 rounded-2xl transition-all cursor-pointer flex flex-col justify-between space-y-6 group relative ${
                  isSelected
                    ? 'surface-card border-2 border-teal-400 shadow-[0_0_35px_rgba(45,212,191,0.14)]'
                    : 'surface-card border border-theme hover:border-teal-500/40'
                }`}
              >
                {/* Active Indicator Pin */}
                {isSelected && (
                  <div className="absolute -top-3 right-6 px-2.5 py-0.5 rounded-full bg-teal-400 text-slate-950 font-mono text-[10px] font-bold tracking-wide uppercase shadow-md flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-pulse" />
                    <span>Active Dossier</span>
                  </div>
                )}

                <div className="space-y-4">
                  {/* Case Tag & Category */}
                  <div className="flex items-center justify-between pb-3 border-b border-theme">
                    <span className="font-mono text-xs font-bold text-teal-400">
                      CASE {td.num}
                    </span>
                    <span className="font-mono text-[11px] text-muted">
                      {td.categoryLabel}
                    </span>
                  </div>

                  {/* Title & Short Summary */}
                  <div>
                    <h3 className="heading-display text-lg font-bold text-heading tracking-tight group-hover:text-teal-400 transition-colors">
                      {td.title}
                    </h3>
                    <p className="font-sans text-xs text-secondary mt-2.5 line-clamp-3 leading-relaxed">
                      {td.summary}
                    </p>
                  </div>

                  {/* Prominent Hero Metrics Grid inside Card */}
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    {td.heroMetrics.slice(0, 2).map((m, idx) => (
                      <div key={idx} className="p-2.5 rounded-xl option-card-theme border border-theme">
                        <div className="text-[10px] font-mono text-muted truncate">{m.label}</div>
                        <div className="text-base font-mono font-bold text-emerald-400 mt-0.5">{m.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Tech Stack + Read CTA */}
                <div className="pt-4 border-t border-theme space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {td.stack.slice(0, 3).map((st) => (
                      <span
                        key={st}
                        className="px-2 py-0.5 rounded option-card-theme border border-theme text-[10px] font-mono text-secondary"
                      >
                        {st}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    className="w-full pt-2 flex items-center justify-between text-xs font-mono text-teal-400 group-hover:text-teal-300 transition-colors cursor-pointer"
                  >
                    <span className="font-semibold">
                      {isSelected ? 'Viewing Detailed Dossier ↓' : 'Read Full Teardown →'}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </section>

    {/* ============================================================== */}
    {/* 3. INDIVIDUAL TEARDOWN DETAIL VIEW (SPLIT + MAGAZINE LAYOUT)   */}
    {/* ============================================================== */}
    <section id="teardown-dossier" className="py-10 sm:py-14 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto scroll-mt-24">
      {/* Dossier Quick Switcher Bar */}
      <div className="mb-6 sm:mb-8 p-3 sm:p-4 rounded-2xl surface-card border border-theme flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
              Forensic Autopsy Viewer
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {teardowns.map((td) => (
              <button
                key={td.id}
                type="button"
                onClick={() => setActiveTeardownId(td.id)}
                className={`px-3 py-1.5 rounded-xl font-mono text-xs transition-all cursor-pointer ${
                  activeTeardownId === td.id
                    ? 'bg-teal-500/20 text-teal-400 border border-teal-500/40 font-semibold'
                    : 'text-secondary hover:text-heading option-card-theme border border-theme'
                }`}
              >
                Case {td.num}: {td.categoryLabel.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* The Split Layout Grid: 8 Cols (Narrative) + 4 Cols (Sticky Technical Inspector) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* ================= LEFT / MAIN COLUMN (MAGAZINE NARRATIVE) ================= */}
          <div className="lg:col-span-8 space-y-9 sm:space-y-11">
            
            {/* Dossier Heading Block */}
            <FadeInView direction="up" distance={10} className="space-y-3.5 pb-6 border-b border-theme">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-teal-400 font-semibold uppercase tracking-wider">
                <span>CASE STUDY {selectedTeardown.num}</span>
                <span>·</span>
                <span className="text-muted">{selectedTeardown.clientProfile}</span>
              </div>

              <h2 className="heading-display text-3xl sm:text-5xl font-bold text-heading tracking-tight leading-[1.1]">
                {selectedTeardown.title}
              </h2>

              <p className="font-sans text-base sm:text-lg text-secondary leading-relaxed font-normal pt-1">
                {selectedTeardown.summary}
              </p>

              {/* Magazine Pull-Quote Callout */}
              <div className="my-5 p-5 sm:p-6 rounded-2xl bg-teal-500/10 border-l-4 border-teal-400 space-y-2">
                <p className="font-display text-base sm:text-lg italic text-teal-400 leading-relaxed">
                  &ldquo;{selectedTeardown.pullQuote}&rdquo;
                </p>
                <div className="text-xs font-mono text-muted pt-0.5">
                  — Project AIR Principal Systems Architect
                </div>
              </div>
            </FadeInView>

            {/* Phase 01: Problem Context & Failure Manifestation */}
            <FadeInView direction="up" distance={10} delay={0.04} className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded option-card-theme border border-theme font-mono text-xs font-bold text-teal-400">
                  PHASE 01
                </span>
                <h3 className="heading-display text-xl sm:text-2xl font-bold text-heading tracking-tight">
                  Failure Context &amp; Business Symptoms
                </h3>
              </div>

              <p className="font-sans text-sm sm:text-base text-secondary leading-relaxed">
                {selectedTeardown.problem.overview}
              </p>

              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 space-y-1.5">
                <div className="text-xs font-mono text-red-400 font-bold uppercase tracking-wider">
                  Operational &amp; Financial Impact
                </div>
                <p className="font-sans text-xs sm:text-sm text-secondary leading-relaxed">
                  {selectedTeardown.problem.impact}
                </p>
              </div>
            </FadeInView>

            {/* Phase 02: Forensic Audit Findings (The Code Roots) */}
            <FadeInView direction="up" distance={10} delay={0.06} className="space-y-5">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded option-card-theme border border-theme font-mono text-xs font-bold text-red-400">
                  PHASE 02
                </span>
                <h3 className="heading-display text-xl sm:text-2xl font-bold text-heading tracking-tight">
                  Forensic Audit Findings (Root Causes)
                </h3>
              </div>

              <p className="font-sans text-sm text-secondary leading-relaxed">
                Our line-by-line AST static analysis and transaction tracing identified {selectedTeardown.findings.length} critical architectural vectors that escaped standard developer testing:
              </p>

              <div className="space-y-5">
                {selectedTeardown.findings.map((finding, idx) => (
                  <div
                    key={idx}
                    className="p-5 sm:p-6 rounded-2xl surface-card border border-theme space-y-4"
                  >
                    <div className="flex items-center justify-between pb-3 border-b border-theme">
                      <div className="flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-red-400" />
                        <h4 className="heading-display text-base sm:text-lg font-bold text-heading">
                          {finding.title}
                        </h4>
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-muted px-2 py-0.5 rounded option-card-theme border border-theme">
                        {finding.category}
                      </span>
                    </div>

                    <p className="font-sans text-xs sm:text-sm text-secondary leading-relaxed">
                      {finding.explanation}
                    </p>

                    {/* Interactive Code Comparison View (Vulnerable vs Hardened) */}
                    {(finding.vulnerableSnippet || finding.hardenedSnippet) && (
                      <div className="space-y-3 pt-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono text-secondary font-semibold">
                            Code Exhibit:
                          </span>
                          <div className="inline-flex rounded-lg option-card-theme p-1 border border-theme text-[11px] font-mono">
                            <button
                              type="button"
                              onClick={() => setActiveCodeTab('vulnerable')}
                              className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                                activeCodeTab === 'vulnerable'
                                  ? 'bg-red-500/20 text-red-400 font-semibold'
                                  : 'text-muted hover:text-secondary'
                              }`}
                            >
                              Vulnerable Code
                            </button>
                            <button
                              type="button"
                              onClick={() => setActiveCodeTab('hardened')}
                              className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                                activeCodeTab === 'hardened'
                                  ? 'bg-teal-500/20 text-teal-400 font-semibold'
                                  : 'text-muted hover:text-secondary'
                              }`}
                            >
                              Hardened Invariant
                            </button>
                          </div>
                        </div>

                        {activeCodeTab === 'vulnerable' && finding.vulnerableSnippet && (
                          <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-red-500/30 font-mono text-xs text-red-400 overflow-x-auto whitespace-pre leading-relaxed">
                            {finding.vulnerableSnippet}
                          </div>
                        )}

                        {activeCodeTab === 'hardened' && finding.hardenedSnippet && (
                          <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-teal-500/30 font-mono text-xs text-teal-400 overflow-x-auto whitespace-pre leading-relaxed">
                            {finding.hardenedSnippet}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </FadeInView>

            {/* Phase 03: Architectural Re-Engineering */}
            <FadeInView direction="up" distance={10} delay={0.08} className="space-y-5">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded option-card-theme border border-theme font-mono text-xs font-bold text-teal-400">
                  PHASE 03
                </span>
                <h3 className="heading-display text-xl sm:text-2xl font-bold text-heading tracking-tight">
                  Architectural Re-Engineering &amp; Hardening
                </h3>
              </div>

              <div className="space-y-4">
                {selectedTeardown.reEngineering.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 sm:p-6 rounded-2xl bg-teal-500/10 border border-teal-500/20 space-y-3.5"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-teal-400" />
                      <h4 className="heading-display text-base sm:text-lg font-bold text-heading">
                        {item.title}
                      </h4>
                    </div>

                    <p className="font-sans text-xs sm:text-sm text-secondary leading-relaxed">
                      {item.methodology}
                    </p>

                    {item.codeExhibit && (
                      <div className="p-4 rounded-xl bg-[var(--bg-base)] border border-teal-500/25 font-mono text-xs text-teal-400 overflow-x-auto whitespace-pre leading-relaxed">
                        {item.codeExhibit}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </FadeInView>

            {/* Phase 04: Verifiable Production Outcome */}
            <FadeInView direction="up" distance={10} scale={0.99} delay={0.1} className="p-6 sm:p-8 rounded-3xl surface-card border border-teal-500/30 space-y-5">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded bg-emerald-500/20 border border-emerald-500/30 font-mono text-xs font-bold text-emerald-400">
                  PHASE 04
                </span>
                <h3 className="heading-display text-xl sm:text-2xl font-bold text-heading tracking-tight">
                  Verifiable Production Outcome
                </h3>
              </div>

              <p className="font-sans text-sm sm:text-base text-secondary leading-relaxed">
                {selectedTeardown.outcome.summary}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {selectedTeardown.outcome.productionMetrics.map((met, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl option-card-theme border border-theme flex items-start gap-2.5"
                  >
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="font-sans text-xs text-secondary leading-snug">
                      {met}
                    </span>
                  </div>
                ))}
              </div>

              {/* Related Standard Deep-Link */}
              <div className="pt-4 border-t border-theme flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
                <button
                  type="button"
                  onClick={() => navigateTo(selectedTeardown.relatedGate.route)}
                  className="text-teal-400 hover:text-teal-300 flex items-center gap-1.5 transition-colors cursor-pointer group"
                >
                  <span className="text-muted">Underlying Standard:</span>
                  <span className="underline decoration-teal-400/40 underline-offset-4">
                    {selectedTeardown.relatedGate.gate}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <button
                  type="button"
                  onClick={() => setIsBookingOpen(true)}
                  className="text-secondary hover:text-heading font-semibold flex items-center gap-1 cursor-pointer"
                >
                  Request Similar Audit →
                </button>
              </div>
            </FadeInView>

          </div>

          {/* ================= RIGHT COLUMN (STICKY TECHNICAL INSPECTOR DOSSIER) ================= */}
          <FadeInView direction="up" distance={12} delay={0.12} className="lg:col-span-4 lg:sticky lg:top-24 space-y-5">
            
            {/* Scorecard Box */}
            <div className="p-5 sm:p-6 rounded-2xl surface-card border border-theme space-y-5">
              <div>
                <div className="text-[10px] font-mono text-teal-400 uppercase tracking-widest font-semibold">
                  AUDIT SCORECARD · CASE {selectedTeardown.num}
                </div>
                <h4 className="heading-display text-lg font-bold text-heading mt-1">
                  Empirical Verification Delta
                </h4>
              </div>

              {/* Before / After Metrics List */}
              <div className="space-y-3">
                {selectedTeardown.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl option-card-theme border border-theme space-y-1"
                  >
                    <div className="text-[10px] font-mono text-muted uppercase tracking-wider">
                      {m.label}
                    </div>
                    <div className="text-xs font-mono text-red-400/80 line-through">
                      {m.before}
                    </div>
                    <div className="text-xs sm:text-sm font-mono font-bold text-emerald-400">
                      {m.after}
                    </div>
                  </div>
                ))}
              </div>

              {/* Verification Authority Footnote */}
              <div className="p-3 rounded-xl bg-teal-500/10 border border-teal-500/20 text-[11px] font-mono text-teal-400">
                <div className="flex items-center gap-1.5 font-bold mb-1">
                  <ShieldAlert className="w-3.5 h-3.5 text-teal-400" />
                  <span>AUDIT CITATION</span>
                </div>
                <p className="text-secondary leading-snug">
                  {selectedTeardown.verificationBadge}
                </p>
              </div>

              {/* Triage Timeline & Specifications */}
              <div className="space-y-2 pt-2 border-t border-theme text-xs font-mono">
                <div className="flex items-center justify-between text-muted">
                  <span>Turnaround:</span>
                  <span className="text-secondary">{selectedTeardown.triageSpecs.turnaround}</span>
                </div>
                <div className="flex items-center justify-between text-muted">
                  <span>Delivery:</span>
                  <span className="text-secondary">{selectedTeardown.triageSpecs.prsMerged}</span>
                </div>
                <div className="flex items-center justify-between text-muted">
                  <span>Mutation Invariant:</span>
                  <span className="text-emerald-400 font-bold">{selectedTeardown.triageSpecs.testKillRate}</span>
                </div>
                <div className="flex items-center justify-between text-muted">
                  <span>Compliance:</span>
                  <span className="text-teal-400">{selectedTeardown.triageSpecs.compliance}</span>
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-2 border-t border-theme">
                <div className="text-[10px] font-mono text-muted uppercase tracking-wider mb-2">
                  Engine &amp; Infrastructure
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedTeardown.stack.map((item) => (
                    <span
                      key={item}
                      className="px-2 py-0.5 rounded option-card-theme border border-theme text-[11px] font-mono text-secondary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Booking CTA */}
              <div className="pt-4 border-t border-theme">
                <button
                  type="button"
                  onClick={() => setIsBookingOpen(true)}
                  className="w-full py-3 bg-teal-400 hover:bg-teal-300 text-slate-950 font-sans text-xs font-semibold rounded-xl transition-all cursor-pointer text-center shadow-lg hover:shadow-teal-400/20"
                >
                  Schedule Codebase Diagnostic →
                </button>
                <div className="text-[10px] font-mono text-muted text-center mt-2">
                  Mutual NDA executed prior to repo clone
                </div>
              </div>
            </div>

            {/* Quick Navigation Between Teardowns */}
            <div className="p-4 rounded-2xl surface-card border border-theme text-xs font-mono space-y-2">
              <div className="text-muted text-[10px] uppercase tracking-wider">
                Navigate Teardowns:
              </div>
              {teardowns.map((td) => (
                <button
                  key={td.id}
                  type="button"
                  onClick={() => handleSelectTeardown(td.id)}
                  className={`w-full flex items-center justify-between p-2 rounded-lg transition-colors cursor-pointer text-left ${
                    selectedTeardown.id === td.id
                      ? 'bg-teal-500/10 text-teal-400 font-semibold border border-teal-500/30'
                      : 'text-secondary hover:text-heading hover:bg-[var(--bg-surface-elevated)]'
                  }`}
                >
                  <span className="truncate pr-2">Case {td.num}: {td.title.slice(0, 32)}...</span>
                  <ChevronRight className="w-3.5 h-3.5 shrink-0 text-muted" />
                </button>
              ))}
            </div>

          </FadeInView>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. HIGH-CONVERSION BOTTOM ARCHITECTURAL BANNER                 */}
      {/* ============================================================== */}
      <section className="py-10 sm:py-14 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-theme">
        <FadeInView scale={0.985} blur>
          <div className="p-7 sm:p-11 rounded-3xl surface-card border border-teal-500/30 relative overflow-hidden">
            <div className="max-w-3xl space-y-4">
              <span className="font-mono text-xs text-teal-400 uppercase tracking-widest font-semibold">
                CODEBASE FORENSIC AUDIT &amp; RESCUE
              </span>
              <h2 className="heading-display text-3xl sm:text-5xl text-heading font-bold tracking-tight">
                Have a repository showing signs of production rot?
              </h2>
              <p className="font-sans text-base sm:text-lg text-secondary leading-relaxed font-normal">
                Whether you are facing silent race conditions, runaway AI API token bills, or preparing for enterprise due diligence, we provide fixed-price forensic diagnostics in 48 hours.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <MagneticButton
                  variant="primary"
                  className="!px-6 !py-3.5 text-sm font-semibold"
                  onClick={() => setIsBookingOpen(true)}
                >
                  <span>Book Architecture Diagnostic →</span>
                </MagneticButton>

                <button
                  type="button"
                  onClick={() => navigateTo('/pricing')}
                  className="px-6 py-3.5 rounded-full option-card-theme border border-theme hover:border-teal-400/40 text-primary hover:text-heading font-sans text-xs font-medium tracking-wider transition-colors cursor-pointer text-center"
                >
                  View 48-Hour Quick Scan ($249)
                </button>
              </div>

              <div className="pt-6 border-t border-theme flex flex-wrap items-center gap-6 text-xs font-mono text-secondary">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>Direct Principal Systems Review</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>Mutual NDA Executed Prior to Repo Clone</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>Production Pull Requests Included</span>
                </div>
              </div>
            </div>
          </div>
        </FadeInView>
      </section>

      {/* 5. Studio Footer */}
      <StudioFooter onOpenBooking={() => setIsBookingOpen(true)} />
    </div>
  );
}

