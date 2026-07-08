import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fuente Latina + Ennoble · Proposal · July 8, 2026",
};

type Thesis = {
  id: string;
  number: string;
  name: string;
  oneLiner: string;
  body: string;
  tag: string;
};

const theses: Thesis[] = [
  {
    id: "central",
    number: "01",
    name: "Central Hub",
    oneLiner:
      "One place to see what is being pitched, produced, and placed.",
    body:
      "Right now ClickUp, Sheets, and Drive each do a piece of the job and nothing talks to anything. This build sits on top of the tools you already use and gives you, Gigi, and the team a single view of the pipeline. Type a question in plain English, get an answer in seconds. No migration. Your data stays where it lives.",
    tag: "The scatter killer",
  },
  {
    id: "voice",
    number: "02",
    name: "Voice-Cloned Grant Assistant",
    oneLiner:
      "Your grant-writing voice, trained on your actual work.",
    body:
      "Past grants, published pieces, panel notes. Whatever the archive has, the system learns from. It drafts new grant applications and reports in your tone, not generic nonprofit tone. Renewals get faster because it remembers what each funder cared about last cycle. Grants are the lifeline. The build is aimed straight at that lifeline.",
    tag: "The lifeline play",
  },
  {
    id: "experts",
    number: "03",
    name: "Expert Database",
    oneLiner:
      "Every expert Fuente Latina has ever booked, in one searchable place.",
    body:
      "Filter by topic, geography, language, medium, and availability. Staff and journalists query it directly. When a story breaks, \"who do I know who talks about this?\" is a search box, not a scramble through Excel and old email threads. Auto-populates as new experts get added anywhere in the org.",
    tag: "The fastest visible win",
  },
];

const timeline = [
  {
    label: "Week 0",
    when: "This week",
    title: "You sign.",
    detail:
      "Assessment and Lessons both kick off. Chat channel goes live the same day.",
  },
  {
    label: "Weeks 1 to 2",
    when: "Assessment",
    title: "AI Assessment runs.",
    detail:
      "Embedded review of your tools, workflows, and data. 5 to 7 one-on-one conversations across the team. First lesson lands in Week 1.",
  },
  {
    label: "End of Week 2",
    when: "Roadmap",
    title: "Build Roadmap delivered.",
    detail:
      "Scoped Phase 1 with fixed price, timeline, and success metrics. Phase 2 and Phase 3 backlog prioritized.",
  },
  {
    label: "Weeks 2 to 10",
    when: "Parallel tracks",
    title: "Lessons continue. Build begins.",
    detail:
      "Green-light the roadmap and the build kicks off. Lessons, office hours, and always-on chat run alongside it for the full 8 weeks.",
  },
];

function ThesisCard({ thesis }: { thesis: Thesis }) {
  return (
    <article className="bg-white border border-black rounded-none p-6 sm:p-8 flex flex-col gap-4">
      <header className="flex items-baseline justify-between gap-4">
        <span className="small-caps text-[color:var(--color-fl-blue-deep)]">
          Working thesis
        </span>
        <span className="font-display text-3xl text-black leading-none">
          {thesis.number}
        </span>
      </header>

      <div>
        <h3 className="font-display text-3xl sm:text-4xl text-black leading-tight mb-2">
          {thesis.name}
        </h3>
        <p className="text-black text-base sm:text-lg leading-snug font-semibold">
          {thesis.oneLiner}
        </p>
      </div>

      <div className="h-[3px] w-14 bg-[color:var(--color-fl-blue)]" />

      <p className="text-[color:var(--color-body)] text-[0.98rem] leading-relaxed">
        {thesis.body}
      </p>

      <div className="mt-1">
        <span className="badge-red">{thesis.tag}</span>
      </div>
    </article>
  );
}

function Section({
  eyebrow,
  title,
  children,
  id,
  dark = false,
}: {
  eyebrow?: string;
  title?: string;
  id?: string;
  dark?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-16">
      {eyebrow && (
        <p className={`small-caps mb-4 ${dark ? "text-[color:var(--color-fl-blue)]" : "text-[color:var(--color-fl-blue-deep)]"}`}>
          {eyebrow}
        </p>
      )}
      {title && (
        <>
          <h2 className={`font-display text-4xl sm:text-5xl mb-3 leading-tight ${dark ? "text-white" : "text-black"}`}>
            {title}
          </h2>
          <div className={`rule-thick mb-8 ${dark ? "bg-white" : ""}`} />
        </>
      )}
      <div className="prose-fl">{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-dvh bg-white">
      {/* ===== Top nav bar (black, FL style) ===== */}
      <nav className="bg-black border-b border-black">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 py-4 flex items-center justify-between">
          <span className="logo-box">
            <span className="text-lg">FUENTE</span>
            <span className="text-lg">LATINA</span>
          </span>
          <div className="flex items-center gap-3">
            <span className="badge-red hidden sm:inline-flex">Private</span>
            <span className="small-caps text-white/60 hidden md:inline">For Leah &amp; Gigi</span>
          </div>
        </div>
      </nav>

      {/* ===== Hero (black band, Bebas caps) ===== */}
      <header className="bg-black">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 py-20 sm:py-28">
          <p className="small-caps text-[color:var(--color-fl-blue)] mb-6">
            Fuente Latina &nbsp;+&nbsp; Ennoble &nbsp;·&nbsp; Proposal
          </p>
          <h1 className="font-display text-white text-5xl sm:text-7xl md:text-8xl leading-[0.95] mb-8 max-w-4xl">
            A 2-week AI Assessment and an 8-week team training program.
          </h1>
          <p className="text-white/80 text-lg sm:text-xl leading-relaxed max-w-2xl font-light">
            Two things you sign for today. A scoped, fixed-price build proposal at the end of week two. That is the whole deal.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a href="#pricing" className="pill pill-white">
              See Pricing
            </a>
            <a href="#next" className="pill pill-black border border-white/30">
              Reply Yes
            </a>
          </div>
          <div className="mt-12 flex flex-col sm:flex-row gap-x-6 gap-y-1 text-sm text-white/60">
            <span>From <strong className="text-white">Noble</strong> to <strong className="text-white">Leah</strong> and <strong className="text-white">Gigi</strong></span>
            <span className="hidden sm:inline text-white/30">·</span>
            <span>July 8, 2026</span>
          </div>
        </div>
      </header>

      {/* ===== Blue band: what you are buying, in one line ===== */}
      <section className="bg-[color:var(--color-fl-blue)]">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 py-16 sm:py-20">
          <p className="small-caps text-white/80 mb-4">The offer, in one paragraph</p>
          <p className="font-display text-white text-3xl sm:text-5xl leading-[1.05]">
            $13,000 today. 2 weeks of assessment, 8 weeks of team lessons, and a scoped build roadmap in your inbox by end of week two.
          </p>
        </div>
      </section>

      {/* ===== Body ===== */}
      <main className="max-w-3xl mx-auto px-6 sm:px-10 py-20 sm:py-24 flex flex-col gap-24">

        {/* Section 1: What you are buying */}
        <Section eyebrow="Section 01" title="What you are buying">
          <p>
            Based on our conversation, the shape of the engagement is a two-stage start. You commit to a 2-week AI Assessment and an 8-week team training program. They run in parallel. Combined, $13,000. At the end of week two, you get a written Build Roadmap: scoped Phase 1, fixed price, timeline, success metrics. Roadmap works for you, we start the build. It does not, you keep the roadmap and we part clean.
          </p>

          {/* Two offer cards */}
          <div className="mt-10 grid grid-cols-1 gap-6">
            {/* Assessment */}
            <div className="border-2 border-black rounded-none overflow-hidden bg-white">
              <div className="px-6 sm:px-8 py-6 bg-black flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
                <div>
                  <p className="small-caps text-[color:var(--color-fl-blue)] mb-1">Stage 01</p>
                  <h3 className="font-display text-white text-3xl sm:text-4xl leading-tight">
                    AI Assessment
                  </h3>
                  <p className="text-white/70 text-sm mt-1">
                    2 weeks, remote. Credited to the build.
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="font-display text-4xl sm:text-5xl text-[color:var(--color-fl-blue)]">$5,000</p>
                  <p className="small-caps text-white/60">Flat</p>
                </div>
              </div>
              <div className="px-6 sm:px-8 py-6">
                <p className="small-caps text-[color:var(--color-fl-blue-deep)] mb-3">What we do</p>
                <ul className="space-y-3 text-[color:var(--color-body)] mb-8">
                  <li className="flex gap-3">
                    <span className="text-[color:var(--color-fl-blue)] font-bold shrink-0">→</span>
                    <span>
                      Embedded review of your Drive, ClickUp, Sheets, grant docs, editorial workflow, and Rafa&apos;s team operations.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[color:var(--color-fl-blue)] font-bold shrink-0">→</span>
                    <span>
                      5 to 7 one-on-one conversations with you, Gigi, Rafa, the digital production lead, and the grants lead.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[color:var(--color-fl-blue)] font-bold shrink-0">→</span>
                    <span>
                      AI-readiness audit. Where the data lives, what is usable now, what needs cleanup before it is worth building on.
                    </span>
                  </li>
                </ul>

                <p className="small-caps text-[color:var(--color-fl-blue-deep)] mb-3">What you get</p>
                <ul className="space-y-3 text-[color:var(--color-body)]">
                  <li className="flex gap-3">
                    <span className="text-[color:var(--color-fl-red)] font-bold shrink-0">◆</span>
                    <span>
                      A written Build Roadmap: scoped Phase 1 with fixed price, timeline, and success metrics.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[color:var(--color-fl-red)] font-bold shrink-0">◆</span>
                    <span>
                      Prioritized Phase 2 and Phase 3 backlog. So you have a 6-month view, not just a next step.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 border-l-4 border-[color:var(--color-fl-blue)] pl-4 py-1">
                  <p className="text-sm text-[color:var(--color-body)]">
                    The $5,000 credits toward the build if you proceed. If you do not, the roadmap is still yours.
                  </p>
                </div>
              </div>
            </div>

            {/* Lessons */}
            <div className="border-2 border-black rounded-none overflow-hidden bg-white">
              <div className="px-6 sm:px-8 py-6 bg-black flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
                <div>
                  <p className="small-caps text-[color:var(--color-fl-blue)] mb-1">Stage 02</p>
                  <h3 className="font-display text-white text-3xl sm:text-4xl leading-tight">
                    AI Lessons for the Team
                  </h3>
                  <p className="text-white/70 text-sm mt-1">
                    8 weeks. Starts in parallel with the Assessment.
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="font-display text-4xl sm:text-5xl text-[color:var(--color-fl-blue)]">$8,000</p>
                  <p className="small-caps text-white/60">Flat</p>
                </div>
              </div>
              <div className="px-6 sm:px-8 py-6">
                <p className="text-[color:var(--color-body)] mb-6">
                  Same curriculum I ran for my last client, where the team said it was the highest-ROI part of the engagement. Adapted for Fuente Latina&apos;s context: media, journalism, grants, Latino coverage.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="border-l-4 border-[color:var(--color-fl-blue)] bg-[color:var(--color-paper-2)] p-4">
                    <p className="small-caps text-[color:var(--color-fl-blue-deep)] mb-2">Weekly</p>
                    <p className="font-display text-2xl mb-1 text-black">Live sessions</p>
                    <p className="text-sm text-[color:var(--color-body)] leading-relaxed">
                      One-hour sessions, whole company. Distributed staff can catch up async.
                    </p>
                  </div>
                  <div className="border-l-4 border-[color:var(--color-fl-blue)] bg-[color:var(--color-paper-2)] p-4">
                    <p className="small-caps text-[color:var(--color-fl-blue-deep)] mb-2">1-on-1</p>
                    <p className="font-display text-2xl mb-1 text-black">Office hours</p>
                    <p className="text-sm text-[color:var(--color-body)] leading-relaxed">
                      Bookable time between sessions for anyone who wants to go deeper on a specific workflow.
                    </p>
                  </div>
                  <div className="border-l-4 border-[color:var(--color-fl-blue)] bg-[color:var(--color-paper-2)] p-4">
                    <p className="small-caps text-[color:var(--color-fl-blue-deep)] mb-2">Always-on</p>
                    <p className="font-display text-2xl mb-1 text-black">Chat channel</p>
                    <p className="text-sm text-[color:var(--color-body)] leading-relaxed">
                      A dedicated Slack or WhatsApp channel. Anyone on the team can drop an AI question anytime.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Section 2: Working thesis */}
        <Section eyebrow="Section 02" title="Three projects worth starting with">
          <p>
            These are the three builds I would start with. Working thesis, not commitment. The Assessment is where we confirm which of these lands first, in what order, at what scope. Final Phase 1 scope is locked in the Build Roadmap.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6">
            {theses.map((t) => (
              <ThesisCard key={t.id} thesis={t} />
            ))}
          </div>

          <div className="mt-8 border-l-4 border-black bg-[color:var(--color-paper-2)] p-5 sm:p-6">
            <p className="small-caps text-[color:var(--color-fl-blue-deep)] mb-3">Also on the list, not yet scoped</p>
            <ul className="space-y-3 text-[color:var(--color-body)]">
              <li className="flex gap-3">
                <span className="w-2 h-2 bg-[color:var(--color-fl-blue)] mt-2 shrink-0" />
                <span>
                  <strong>Rafa&apos;s workflow extraction.</strong> Big potential unlock. Needs a direct conversation with Rafa during the Assessment before it gets scoped.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 bg-[color:var(--color-fl-red)] mt-2 shrink-0" />
                <span>
                  <strong>Board and funder report generator.</strong> Natural extension once Central Hub and the Grant Assistant exist.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 bg-black mt-2 shrink-0" />
                <span>
                  <strong>Journalist and fellow tracker.</strong> High leverage. Wants Central Hub live first so the data has a home.
                </span>
              </li>
            </ul>
          </div>
        </Section>

        {/* Section 3: How it works */}
        <Section eyebrow="Section 03" title="How it works">
          <p>
            Simple, phased, and designed so you always know what comes next.
          </p>
          <ol className="mt-8 relative border-l-2 border-black pl-6 sm:pl-8 space-y-8">
            {timeline.map((t, i) => (
              <li key={i} className="relative">
                <span
                  className={`absolute -left-[35px] sm:-left-[43px] top-1 h-4 w-4 rounded-full border-4 border-white ${
                    i === 0
                      ? "bg-[color:var(--color-fl-blue)]"
                      : i === timeline.length - 1
                      ? "bg-[color:var(--color-fl-red)]"
                      : "bg-black"
                  }`}
                />
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                  <p className="small-caps text-[color:var(--color-fl-blue-deep)]">{t.label}</p>
                  <p className="text-xs text-[color:var(--color-muted-2)]">{t.when}</p>
                </div>
                <p className="font-display text-2xl text-black leading-snug mb-1">
                  {t.title}
                </p>
                <p className="text-sm text-[color:var(--color-body)] leading-relaxed">{t.detail}</p>
              </li>
            ))}
          </ol>
        </Section>

        {/* Section 4: Pricing */}
        <Section id="pricing" eyebrow="Section 04" title="Pricing">
          <p>
            Two commitments today. The build is priced separately after the Assessment produces a scoped roadmap.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white border-2 border-black p-6">
              <p className="small-caps text-[color:var(--color-fl-blue-deep)] mb-2">Stage 01</p>
              <p className="font-display text-2xl text-black mb-2">AI Assessment</p>
              <p className="font-display text-5xl text-black">$5,000</p>
              <p className="text-sm text-[color:var(--color-muted)] mt-2">
                2 weeks. Credited toward the build.
              </p>
            </div>
            <div className="bg-white border-2 border-black p-6">
              <p className="small-caps text-[color:var(--color-fl-blue-deep)] mb-2">Stage 02</p>
              <p className="font-display text-2xl text-black mb-2">AI Lessons</p>
              <p className="font-display text-5xl text-black">$8,000</p>
              <p className="text-sm text-[color:var(--color-muted)] mt-2">
                8 weeks. Runs in parallel.
              </p>
            </div>
          </div>

          <div className="mt-6 bg-black text-white p-6 flex items-baseline justify-between">
            <p className="small-caps text-[color:var(--color-fl-blue)]">Total to sign now</p>
            <p className="font-display text-5xl text-white">$13,000</p>
          </div>

          <div className="mt-6 border-l-4 border-[color:var(--color-fl-blue)] pl-5 py-2">
            <p className="text-[color:var(--color-body)]">
              <strong>Stage 03, the build.</strong> Scope and price come from the Build Roadmap delivered end of week two. The $5,000 Assessment fee is credited against the build. The build is where we make the money back.
            </p>
          </div>
        </Section>

      </main>

      {/* ===== Blue CTA band ===== */}
      <section id="next" className="bg-[color:var(--color-fl-blue)]">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 py-20 sm:py-24">
          <p className="small-caps text-white/80 mb-4">Next step</p>
          <h2 className="font-display text-white text-5xl sm:text-7xl leading-[0.95] mb-6 max-w-3xl">
            Reply yes and we start Monday.
          </h2>
          <p className="text-white text-lg sm:text-xl leading-relaxed max-w-2xl mb-10">
            Send a yes and I will have a short agreement (two pages, plain English) in your inbox within 24 hours. Week zero starts Monday. Assessment and Lessons kick off the same week.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href="mailto:zachary.noble1@gmail.com?subject=Yes,%20let%27s%20start" className="pill pill-white">
              Email Noble: Yes, let&apos;s start
            </a>
            <a href="tel:+19143290467" className="pill pill-black">
              Call (914) 329-0467
            </a>
          </div>

          <div className="border-t border-white/30 pt-8">
            <p className="font-display text-3xl text-white mb-1">Noble</p>
            <p className="small-caps text-white/80 mb-4">Founder, Ennoble</p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-x-6 gap-y-1 text-white/90">
              <a href="mailto:zachary.noble1@gmail.com" className="link-underline text-sm">
                zachary.noble1@gmail.com
              </a>
              <span className="hidden sm:inline text-white/40">·</span>
              <a href="tel:+19143290467" className="link-underline text-sm">
                (914) 329-0467
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p className="small-caps">Prepared for Fuente Latina</p>
          <p className="small-caps">Confidential · For Leah &amp; Gigi</p>
        </div>
      </footer>
    </div>
  );
}
