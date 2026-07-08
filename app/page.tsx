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
  pullQuote: string;
  quoteAttribution: string;
  color: "blue" | "red" | "gold";
};

const theses: Thesis[] = [
  {
    id: "central",
    number: "01",
    name: "Central Hub, the Story Command Center",
    oneLiner:
      "One place for the team to see what is being pitched, produced, and placed.",
    body:
      "ClickUp, Sheets, and Drive are all doing pieces of the job today, and nothing talks to anything. This build sits above the tools you already use and gives Leah, Gigi, and anyone on the team a single view of the pipeline. You type a question in plain English, you get an answer in seconds instead of a fire drill. No migration. Your data stays where it lives.",
    pullQuote:
      "One layer that pulls answers out of every tool without moving the data.",
    quoteAttribution: "Kills the ClickUp + Sheets + Drive scatter",
    color: "blue",
  },
  {
    id: "voice",
    number: "02",
    name: "Voice-Cloned Grant Assistant",
    oneLiner:
      "Leah's grant-writing voice, trained on her actual work.",
    body:
      "Past grants, published pieces, panel transcripts, wherever Leah's voice lives on the page. The assistant drafts new grant applications and reports in her tone, not a generic nonprofit tone. Renewals get faster because the system remembers what each funder cared about last cycle. Grants are the org's lifeline, and this build is aimed squarely at that lifeline.",
    pullQuote:
      "Generic AI writes like generic AI. This one writes like Leah, on Leah's ninth draft.",
    quoteAttribution: "Hits the loudest personal pain from our conversation",
    color: "red",
  },
  {
    id: "experts",
    number: "03",
    name: "Expert Database",
    oneLiner:
      "Every expert Fuente Latina has ever booked, in one searchable place.",
    body:
      "Filter by topic, geography, language, medium (TV, radio, print), and availability. Journalists and staff can query it directly. When a story breaks, the answer to \"who do I know who talks about this?\" is a search box, not a scramble through Excel and old email threads. Auto-populates as new experts get added anywhere in the org.",
    pullQuote:
      "Kills the \"who do I know who talks about X\" problem for good.",
    quoteAttribution: "The fastest visible win",
    color: "gold",
  },
];

const timeline = [
  {
    label: "Week 0",
    when: "This week",
    title: "You sign.",
    detail:
      "Assessment and Lessons both kick off. Chat channel goes live.",
  },
  {
    label: "Weeks 1 to 2",
    when: "Assessment",
    title: "AI Assessment runs.",
    detail:
      "Embedded review of your tools, workflows, and data. 5 to 7 one-on-one interviews across the team. First lesson delivered in Week 1.",
  },
  {
    label: "End of Week 2",
    when: "Roadmap",
    title: "Build Roadmap delivered.",
    detail:
      "Scoped Phase 1 with fixed price, timeline, and success metrics. Prioritized Phase 2 and Phase 3 backlog.",
  },
  {
    label: "Weeks 2 to 10",
    when: "Parallel tracks",
    title: "Lessons continue. Build begins.",
    detail:
      "If you green-light the roadmap, the build kicks off. Lessons, office hours, and always-on chat run alongside it for the full 8 weeks.",
  },
];

function ColorAccent({ color }: { color: Thesis["color"] }) {
  const cls =
    color === "blue"
      ? "bg-[color:var(--color-fl-blue)]"
      : color === "red"
      ? "bg-[color:var(--color-fl-red)]"
      : "bg-[color:var(--color-gold)]";
  return <span className={`inline-block h-2 w-2 rounded-full ${cls}`} />;
}

function ThesisCard({ thesis }: { thesis: Thesis }) {
  const accentBorder =
    thesis.color === "blue"
      ? "border-t-[color:var(--color-fl-blue)]"
      : thesis.color === "red"
      ? "border-t-[color:var(--color-fl-red)]"
      : "border-t-[color:var(--color-gold)]";
  return (
    <article
      className={`bg-white/70 border border-[color:var(--color-rule)] border-t-4 ${accentBorder} rounded-md p-6 sm:p-8 flex flex-col gap-5 shadow-sm`}
    >
      <header className="flex items-baseline justify-between gap-4">
        <span className="small-caps text-[color:var(--color-muted-2)]">
          Working thesis
        </span>
        <span className="font-display text-2xl text-[color:var(--color-muted-2)] leading-none">
          {thesis.number}
        </span>
      </header>

      <div>
        <h3 className="font-display text-2xl sm:text-3xl text-[color:var(--color-ink)] leading-tight mb-2">
          {thesis.name}
        </h3>
        <p className="text-[color:var(--color-ink)] text-base sm:text-lg leading-snug font-medium">
          {thesis.oneLiner}
        </p>
      </div>

      <div className="h-px w-full bg-[color:var(--color-rule)]" />

      <p className="text-[color:var(--color-ink-2)] text-[0.98rem] leading-relaxed">
        {thesis.body}
      </p>

      <blockquote className="border-l-2 border-[color:var(--color-gold)] pl-4 py-1">
        <p className="font-display italic text-[color:var(--color-ink)] text-base leading-snug">
          &ldquo;{thesis.pullQuote}&rdquo;
        </p>
        <footer className="small-caps text-[color:var(--color-muted-2)] mt-2">
          {thesis.quoteAttribution}
        </footer>
      </blockquote>
    </article>
  );
}

function Section({
  eyebrow,
  title,
  children,
  id,
}: {
  eyebrow?: string;
  title?: string;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-16">
      {eyebrow && (
        <p className="small-caps text-[color:var(--color-fl-blue-deep)] mb-3">
          {eyebrow}
        </p>
      )}
      {title && (
        <h2 className="font-display text-3xl sm:text-4xl text-[color:var(--color-ink)] mb-6 leading-tight">
          {title}
        </h2>
      )}
      <div className="prose-fl">{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-dvh">
      {/* ===== Hero ===== */}
      <header className="border-b border-[color:var(--color-rule)]">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
          <div className="text-center">
            <p className="small-caps text-[color:var(--color-fl-blue-deep)] mb-6">
              Fuente Latina &nbsp;·&nbsp; Ennoble
            </p>
            <div className="mx-auto gold-bar mb-8" />
            <h1 className="font-display text-4xl sm:text-6xl text-[color:var(--color-ink)] leading-[1.05] mb-6">
              A 2-week AI Assessment and an 8-week team training program for Fuente Latina.
            </h1>
            <p className="text-[color:var(--color-muted)] text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
              Two things you sign for today. A scoped, fixed-price build proposal at the end of week two.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-2 text-sm text-[color:var(--color-muted)]">
              <span>
                From <strong className="text-[color:var(--color-ink)]">Noble</strong> to{" "}
                <strong className="text-[color:var(--color-ink)]">Leah</strong> and{" "}
                <strong className="text-[color:var(--color-ink)]">Gigi</strong>
              </span>
              <span className="hidden sm:inline text-[color:var(--color-muted-2)]">·</span>
              <span>July 8, 2026</span>
            </div>
          </div>
        </div>
      </header>

      {/* ===== Body ===== */}
      <main className="max-w-3xl mx-auto px-6 sm:px-10 py-14 sm:py-20 flex flex-col gap-20">

        {/* Section 1: What we are proposing */}
        <Section eyebrow="Section 01" title="What we are proposing">
          <p>
            Based on our conversation, the shape of the engagement is a two-stage start. Today you commit to a 2-week AI Assessment and an 8-week team training program. Together they run in parallel. Together they cost $13,000. At the end of week two, you get a written Build Roadmap with a scoped Phase 1, a fixed price, a timeline, and clear success metrics. If the roadmap works for you, we start the build. If it does not, you keep the roadmap and we part clean.
          </p>

          {/* Two offer cards */}
          <div className="mt-8 grid grid-cols-1 gap-6">
            {/* Assessment */}
            <div className="border-2 border-[color:var(--color-ink)] rounded-md overflow-hidden bg-white/70">
              <div className="px-6 sm:px-8 py-5 border-b border-[color:var(--color-rule)] flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
                <div>
                  <p className="small-caps text-[color:var(--color-fl-blue-deep)] mb-1">Stage 01</p>
                  <h3 className="font-display text-2xl sm:text-3xl text-[color:var(--color-ink)] leading-tight">
                    AI Assessment
                  </h3>
                  <p className="text-[color:var(--color-muted)] text-sm mt-1">
                    2 weeks, remote. Credited to the build.
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="font-display text-3xl sm:text-4xl text-[color:var(--color-gold)]">$5,000</p>
                  <p className="small-caps text-[color:var(--color-muted-2)]">Flat</p>
                </div>
              </div>
              <div className="px-6 sm:px-8 py-6">
                <p className="small-caps text-[color:var(--color-muted)] mb-3">What we do</p>
                <ul className="space-y-2 text-[color:var(--color-ink-2)] mb-6">
                  <li className="flex gap-3">
                    <span className="text-[color:var(--color-fl-blue)] font-bold">→</span>
                    <span>
                      Embedded review of your Drive, ClickUp, Sheets, grant documents, editorial workflow, and Rafa's team operations.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[color:var(--color-fl-blue)] font-bold">→</span>
                    <span>
                      Five to seven one-on-one conversations with Leah, Gigi, Rafa, the digital production lead, and the grants lead.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[color:var(--color-fl-blue)] font-bold">→</span>
                    <span>
                      AI-readiness audit. Where data lives today, what is usable, what needs cleanup before it is worth building on.
                    </span>
                  </li>
                </ul>

                <p className="small-caps text-[color:var(--color-muted)] mb-3">What you get</p>
                <ul className="space-y-2 text-[color:var(--color-ink-2)]">
                  <li className="flex gap-3">
                    <span className="text-[color:var(--color-gold)] font-bold">◆</span>
                    <span>
                      A written Build Roadmap: scoped Phase 1 project with fixed price, timeline, and success metrics.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[color:var(--color-gold)] font-bold">◆</span>
                    <span>
                      A prioritized Phase 2 and Phase 3 backlog so the org has a 6-month view, not just a next step.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 border-l-4 border-[color:var(--color-gold)] pl-4 py-1">
                  <p className="text-sm text-[color:var(--color-ink-2)]">
                    The $5,000 credits toward the build if you proceed.
                  </p>
                </div>
              </div>
            </div>

            {/* Lessons */}
            <div className="border-2 border-[color:var(--color-ink)] rounded-md overflow-hidden bg-white/70">
              <div className="px-6 sm:px-8 py-5 border-b border-[color:var(--color-rule)] flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
                <div>
                  <p className="small-caps text-[color:var(--color-fl-blue-deep)] mb-1">Stage 02</p>
                  <h3 className="font-display text-2xl sm:text-3xl text-[color:var(--color-ink)] leading-tight">
                    AI Lessons for the team
                  </h3>
                  <p className="text-[color:var(--color-muted)] text-sm mt-1">
                    8 weeks. Starts in parallel with the Assessment.
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="font-display text-3xl sm:text-4xl text-[color:var(--color-gold)]">$8,000</p>
                  <p className="small-caps text-[color:var(--color-muted-2)]">Flat</p>
                </div>
              </div>
              <div className="px-6 sm:px-8 py-6">
                <p className="text-[color:var(--color-ink-2)] mb-5">
                  Same curriculum I ran for my last client, Sixpoint, where the team reported this was the highest-ROI thing they got out of the engagement. Adapted for Fuente Latina's context: media, journalism, grants, and Latino coverage.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="border border-[color:var(--color-rule)] rounded-md p-4">
                    <p className="small-caps text-[color:var(--color-fl-blue-deep)] mb-1">Weekly</p>
                    <p className="font-display text-lg mb-1">Live sessions</p>
                    <p className="text-sm text-[color:var(--color-ink-2)] leading-relaxed">
                      One-hour sessions, whole company. Recorded and transcribed so distributed staff can catch up async.
                    </p>
                  </div>
                  <div className="border border-[color:var(--color-rule)] rounded-md p-4">
                    <p className="small-caps text-[color:var(--color-fl-blue-deep)] mb-1">1-on-1</p>
                    <p className="font-display text-lg mb-1">Office hours</p>
                    <p className="text-sm text-[color:var(--color-ink-2)] leading-relaxed">
                      Bookable time between sessions for anyone who wants to go deeper on a specific workflow.
                    </p>
                  </div>
                  <div className="border border-[color:var(--color-rule)] rounded-md p-4">
                    <p className="small-caps text-[color:var(--color-fl-blue-deep)] mb-1">Always-on</p>
                    <p className="font-display text-lg mb-1">Chat channel</p>
                    <p className="text-sm text-[color:var(--color-ink-2)] leading-relaxed">
                      A dedicated Slack or WhatsApp channel where any team member can drop an AI question anytime.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Section 2: Working thesis */}
        <Section eyebrow="Section 02" title="Working thesis: three projects worth starting with">
          <p>
            Based on our conversation and the shape of the org today, these are the three builds I would start with. Consider this a working thesis, not a commitment. The Assessment is where we confirm which of these lands first, in what order, and at what scope. Final Phase 1 scope is locked in the Build Roadmap.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6">
            {theses.map((t) => (
              <ThesisCard key={t.id} thesis={t} />
            ))}
          </div>

          <div className="mt-8 border border-[color:var(--color-rule)] rounded-md p-5 sm:p-6 bg-[color:var(--color-cream-2)]/60">
            <p className="small-caps text-[color:var(--color-muted)] mb-3">Also on the list, not yet scoped</p>
            <p className="text-[color:var(--color-ink-2)] mb-2">
              Other ideas from our conversation that I would flag for Phase 2 or Phase 3:
            </p>
            <ul className="space-y-2 text-[color:var(--color-ink-2)]">
              <li className="flex gap-3">
                <ColorAccent color="blue" />
                <span>
                  <strong>Rafa's workflow extraction.</strong> Large potential unlock, but this needs a direct conversation with Rafa during the Assessment before it gets scoped.
                </span>
              </li>
              <li className="flex gap-3">
                <ColorAccent color="red" />
                <span>
                  <strong>Board and funder report generator.</strong> Natural extension once Central Hub and the Voice-Cloned Assistant exist.
                </span>
              </li>
              <li className="flex gap-3">
                <ColorAccent color="gold" />
                <span>
                  <strong>Journalist and fellow tracker.</strong> High-leverage, but wants Central Hub live first so the data has a home.
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
          <ol className="mt-6 relative border-l-2 border-[color:var(--color-rule)] pl-6 sm:pl-8 space-y-8">
            {timeline.map((t, i) => (
              <li key={i} className="relative">
                <span
                  className={`absolute -left-[35px] sm:-left-[43px] top-1 h-4 w-4 rounded-full border-4 ${
                    i === 0
                      ? "bg-[color:var(--color-fl-blue)] border-[color:var(--color-cream)]"
                      : i === timeline.length - 1
                      ? "bg-[color:var(--color-fl-red)] border-[color:var(--color-cream)]"
                      : "bg-[color:var(--color-gold)] border-[color:var(--color-cream)]"
                  }`}
                />
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                  <p className="small-caps text-[color:var(--color-fl-blue-deep)]">{t.label}</p>
                  <p className="text-xs text-[color:var(--color-muted-2)] italic">{t.when}</p>
                </div>
                <p className="font-display text-lg text-[color:var(--color-ink)] leading-snug mb-1">
                  {t.title}
                </p>
                <p className="text-sm text-[color:var(--color-ink-2)] leading-relaxed">{t.detail}</p>
              </li>
            ))}
          </ol>
        </Section>

        {/* Section 4: Pricing */}
        <Section eyebrow="Section 04" title="Pricing">
          <p>
            Two commitments today. The build is priced separately after the Assessment produces a scoped roadmap.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/70 border border-[color:var(--color-rule)] rounded-md p-5">
              <p className="small-caps text-[color:var(--color-muted-2)] mb-2">Stage 01</p>
              <p className="font-display text-lg text-[color:var(--color-ink)] mb-1">AI Assessment</p>
              <p className="font-display text-3xl text-[color:var(--color-ink)]">$5,000</p>
              <p className="text-sm text-[color:var(--color-muted)] mt-1">
                2 weeks. Credited toward the build if you proceed.
              </p>
            </div>
            <div className="bg-white/70 border border-[color:var(--color-rule)] rounded-md p-5">
              <p className="small-caps text-[color:var(--color-muted-2)] mb-2">Stage 02</p>
              <p className="font-display text-lg text-[color:var(--color-ink)] mb-1">AI Lessons</p>
              <p className="font-display text-3xl text-[color:var(--color-ink)]">$8,000</p>
              <p className="text-sm text-[color:var(--color-muted)] mt-1">
                8 weeks. Runs in parallel with Assessment and build.
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-baseline justify-between border-t-2 border-[color:var(--color-gold)] pt-4">
            <p className="small-caps text-[color:var(--color-ink)]">Total to sign now</p>
            <p className="font-display text-4xl text-[color:var(--color-gold)]">$13,000</p>
          </div>

          <div className="mt-8 border-l-4 border-[color:var(--color-gold)] pl-5 py-2">
            <p className="text-[color:var(--color-ink-2)]">
              <strong>Stage 03, the build.</strong> Scope and price are set by the Build Roadmap, delivered at the end of week two. The $5,000 Assessment fee is credited against the build.
            </p>
          </div>
        </Section>

        {/* Section 5: Next step */}
        <Section eyebrow="Next step" title="Reply yes, and we start Monday.">
          <p>
            If the shape works, send a yes and I will have a short agreement (two pages, plain English) in your inbox within 24 hours. Week zero starts Monday. Assessment and Lessons kick off the same week.
          </p>

          <div className="mt-10 border-t border-[color:var(--color-rule)] pt-8">
            <p className="font-display text-2xl text-[color:var(--color-ink)] mb-1">Noble</p>
            <p className="small-caps text-[color:var(--color-gold)] mb-4">Founder, Ennoble</p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-x-6 gap-y-1 text-[color:var(--color-ink-2)]">
              <a
                href="mailto:zachary.noble1@gmail.com"
                className="link-underline text-sm"
              >
                zachary.noble1@gmail.com
              </a>
              <span className="hidden sm:inline text-[color:var(--color-muted-2)]">·</span>
              <a href="tel:+19143290467" className="link-underline text-sm">
                (914) 329-0467
              </a>
            </div>
          </div>
        </Section>

      </main>

      {/* Footer */}
      <footer className="border-t border-[color:var(--color-rule)]">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 py-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[color:var(--color-muted-2)]">
          <p className="small-caps">Prepared for Fuente Latina</p>
          <p className="italic font-display">Confidential. For Leah and Gigi.</p>
        </div>
      </footer>
    </div>
  );
}
