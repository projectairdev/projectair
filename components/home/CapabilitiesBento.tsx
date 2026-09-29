import React from 'react';
import { Layers, Bot, ShieldAlert, Cpu } from 'lucide-react';
import { TiltCard } from '@/components/ui/TiltCard';
import { FadeInView } from '@/components/ui/FadeInView';

interface CapabilitiesBentoProps {
  onSelectCapability?: (id: string) => void;
  onOpenBooking?: () => void;
}

export const CapabilitiesBento: React.FC<CapabilitiesBentoProps> = () => {
  return (
    <section id="capabilities" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-b border-white/5">
      {/* Header */}
      <FadeInView className="mb-12">
        <span className="font-sans text-xs font-medium tracking-wider text-teal-400 uppercase">
          02 · Capabilities
        </span>
        <h2 className="heading-display text-2xl sm:text-4xl text-white tracking-tight mt-1.5">
          What We Build
        </h2>
        <p className="font-sans text-slate-400 text-sm max-w-xl mt-2 leading-relaxed">
          Full-stack web applications, autonomous AI agents, and secure cloud platforms built to institutional standards.
        </p>
      </FadeInView>

      {/* 4 Core Service Cards in 3D Tilt Containers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Card 1: Custom Web Applications & SaaS Platforms */}
        <FadeInView delay={0.05} className="h-full">
          <TiltCard className="p-6 sm:p-8 h-full" spotlightColor="rgba(45, 212, 191, 0.25)">
            <div>
              {/* Top Tag & Number */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/5">
              <span className="text-xs font-sans font-medium text-teal-400">
                01 · SaaS &amp; Web Applications
              </span>
              <span className="text-xs font-sans text-slate-500">
                Full-Cycle Engineering
              </span>
            </div>

            {/* Title & Tagline */}
            <div className="flex items-start gap-3.5 mb-3">
              <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-teal-400 shrink-0 mt-1">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h3 className="heading-display text-xl sm:text-2xl text-white tracking-tight">
                  Custom Web Applications &amp; SaaS Platforms
                </h3>
                <p className="text-xs sm:text-sm font-sans text-slate-400 mt-1">
                  Fast, responsive web software engineered to handle real paying customers.
                </p>
              </div>
            </div>

            {/* 3 Structured Overview Points */}
            <div className="space-y-3 my-6 pt-4 border-t border-white/5 text-xs font-sans">
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-slate-400 font-medium mb-1">
                  What it is:
                </div>
                <p className="text-slate-300 leading-relaxed">
                  A complete, professional web product built from the ground up. It loads instantly, works flawlessly on desktop and mobile, and safely handles customer data and credit card transactions.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-slate-400 font-medium mb-1">
                  Who it’s for:
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Founders launching new software products, multi-sided marketplaces, or high-value client portals who cannot afford broken logins or payment bugs.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-slate-400 font-medium mb-1">
                  What we deliver:
                </div>
                <p className="text-slate-300 leading-relaxed">
                  User authentication, billing/Stripe subscriptions, relational databases, responsive front-ends, admin dashboards, and automated end-to-end test suites.
                </p>
              </div>
            </div>
          </div>

          {/* Stack Badges */}
          <div className="pt-4 border-t border-white/5">
            <div className="flex flex-wrap gap-1.5">
              {['Next.js App Router', 'TypeScript', 'PostgreSQL', 'E2E Test Suites'].map((badge) => (
                <span
                  key={badge}
                  className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/5 font-sans text-xs text-slate-400"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </TiltCard>
      </FadeInView>

      {/* Card 2: Autonomous AI Agents & Intelligent Pipelines */}
      <FadeInView delay={0.15} className="h-full">
        <TiltCard className="p-6 sm:p-8 h-full" spotlightColor="rgba(45, 212, 191, 0.25)">
          <div>
            {/* Top Tag & Number */}
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/5">
              <span className="text-xs font-sans font-medium text-teal-400">
                02 · Autonomous AI Agents
              </span>
              <span className="text-xs font-sans text-slate-500">
                Deterministic AI Systems
              </span>
            </div>

            {/* Title & Tagline */}
            <div className="flex items-start gap-3.5 mb-3">
              <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-teal-400 shrink-0 mt-1">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="heading-display text-xl sm:text-2xl text-white tracking-tight">
                  Autonomous AI Agents &amp; Pipelines
                </h3>
                <p className="text-xs sm:text-sm font-sans text-slate-400 mt-1">
                  AI that actually executes workflows, not another generic popup chatbot.
                </p>
              </div>
            </div>

            {/* 3 Structured Overview Points */}
            <div className="space-y-3 my-6 pt-4 border-t border-white/5 text-xs font-sans">
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-slate-400 font-medium mb-1">
                  What it is:
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Specialized software agents that use AI models to read documents, query databases, make API calls, and complete complex multi-step tasks without manual oversight.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-slate-400 font-medium mb-1">
                  Who it’s for:
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Teams needing automated data extraction, autonomous task execution, customer support agents with verified citations, or high-volume internal tooling.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-slate-400 font-medium mb-1">
                  What we deliver:
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Multi-step tool-calling agents with fallback recovery loops (circuit breakers against infinite execution loops), custom RAG grounding, and automated evaluation suites.
                </p>
              </div>
            </div>
          </div>

          {/* Stack Badges */}
          <div className="pt-4 border-t border-white/5">
            <div className="flex flex-wrap gap-1.5">
              {['Python', 'FastAPI', 'LangGraph', 'pgvector', 'Eval Suites'].map((badge) => (
                <span
                  key={badge}
                  className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/5 font-sans text-xs text-slate-400"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </TiltCard>
      </FadeInView>

      {/* Card 3: Codebase Rescue & Security Audits */}
      <FadeInView delay={0.25} className="h-full">
        <TiltCard className="p-6 sm:p-8 h-full" spotlightColor="rgba(251, 146, 60, 0.25)">
          <div>
            {/* Top Tag & Number */}
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/5">
              <span className="text-xs font-sans font-medium text-orange-400">
                03 · Codebase Rescue &amp; Audits
              </span>
              <span className="text-xs font-sans text-orange-400/80 font-medium">
                Fixed-Price Tiers
              </span>
            </div>

            {/* Title & Tagline */}
            <div className="flex items-start gap-3.5 mb-3">
              <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-orange-400 shrink-0 mt-1">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <h3 className="heading-display text-xl sm:text-2xl text-white tracking-tight">
                  Codebase Rescue &amp; Security Audits
                </h3>
                <p className="text-xs sm:text-sm font-sans text-slate-400 mt-1">
                  We inspect, secure, and fix software built with AI tools or rushed freelance sprints.
                </p>
              </div>
            </div>

            {/* 3 Structured Overview Points */}
            <div className="space-y-3 my-6 pt-4 border-t border-white/5 text-xs font-sans">
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-slate-400 font-medium mb-1">
                  What it is:
                </div>
                <p className="text-slate-300 leading-relaxed">
                  A professional engineering rescue for codebases that have grown unstable, insecure, or messy. We diagnose exactly where the app will crash or leak data, and rewrite the broken parts.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-slate-400 font-medium mb-1">
                  Who it’s for:
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Founders whose prototypes are crashing, leaking data, or failing to pass security checks before investor or customer launch.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-slate-400 font-medium mb-1">
                  What we deliver:
                </div>
                <p className="text-slate-300 leading-relaxed">
                  7-point security inspection, closing data-isolation bugs, fixing broken authentication flows, and writing comprehensive automated test suites directly in your repository.
                </p>
              </div>
            </div>
          </div>

          {/* Turnaround & Tiers */}
          <div className="pt-4 border-t border-white/5">
            <div className="flex flex-wrap gap-1.5">
              {['Quick Scan ($249 / 48 hrs)', 'Full Audit + Code Fix ($899–$1,499)'].map((tier) => (
                <span
                  key={tier}
                  className="px-2.5 py-1 rounded-lg bg-orange-500/10 border border-orange-500/20 font-sans text-xs text-orange-300 font-medium"
                >
                  {tier}
                </span>
              ))}
            </div>
          </div>
        </TiltCard>
      </FadeInView>

      {/* Card 4: Backend Infrastructure & Migration */}
      <FadeInView delay={0.35} className="h-full">
        <TiltCard className="p-6 sm:p-8 h-full" spotlightColor="rgba(45, 212, 191, 0.25)">
          <div>
            {/* Top Tag & Number */}
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/5">
              <span className="text-xs font-sans font-medium text-teal-400">
                04 · Cloud Infrastructure
              </span>
              <span className="text-xs font-sans text-slate-500">
                Production Hardening
              </span>
            </div>

            {/* Title & Tagline */}
            <div className="flex items-start gap-3.5 mb-3">
              <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-teal-400 shrink-0 mt-1">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h3 className="heading-display text-xl sm:text-2xl text-white tracking-tight">
                  Backend Infrastructure &amp; Migration
                </h3>
                <p className="text-xs sm:text-sm font-sans text-slate-400 mt-1">
                  Move off AI subdomains and fragile hosting onto solid, owned cloud infrastructure.
                </p>
              </div>
            </div>

            {/* 3 Structured Overview Points */}
            <div className="space-y-3 my-6 pt-4 border-t border-white/5 text-xs font-sans">
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-slate-400 font-medium mb-1">
                  What it is:
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Setting up enterprise cloud servers, reliable automated deployment pipelines, and isolated databases that you 100% own, with zero lock-in to third-party prototyping platforms.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-slate-400 font-medium mb-1">
                  Who it’s for:
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Companies needing high-speed APIs, database migrations, or moving away from temporary developer platforms onto AWS, GCP, or dedicated VPS.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-slate-400 font-medium mb-1">
                  What we deliver:
                </div>
                <p className="text-slate-300 leading-relaxed">
                  DNS/domain configuration, multi-tenant database isolation, containerized microservices (Docker), zero-downtime deployment pipelines, and automated uptime monitoring.
                </p>
              </div>
            </div>
          </div>

          {/* Stack Badges */}
          <div className="pt-4 border-t border-white/5">
            <div className="flex flex-wrap gap-1.5">
              {['Docker', 'PostgreSQL', 'Redis', 'CI/CD Pipelines', 'Uptime SLA'].map((badge) => (
                <span
                  key={badge}
                  className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/5 font-sans text-xs text-slate-400"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </TiltCard>
      </FadeInView>

      </div>
    </section>
  );
};
