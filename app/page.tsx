import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fuente Latina + Ennoble · Proposal · July 8, 2026",
};

type Build = {
  id: string;
  number: string;
  name: string;
  spanishTag: string;
  oneLiner: string;
  body: string;
  pullQuote: string;
  quoteAttribution: string;
  color: "blue" | "red" | "gold";
};

const builds: Build[] = [
  {
    id: "central",
    number: "01",
    name: "Fuente Latina Central",
    spanishTag: "La central",
    oneLiner:
      "The AI layer that sits on top of everything you already use.",
    body:
      "ClickUp, Google Drive, Google Sheets, Dropbox. You or Gigi type a question in plain English (\"how many journalists from Colombia placed content in the last 12 months and where?\") and get an answer in 30 seconds. Today that is a fire drill. You do not leave ClickUp. You do not migrate anything. Central sits above it and pulls the answers.",
    pullQuote:
      "One layer that pulls answers out of every tool without moving the data.",
    quoteAttribution: "The thing you asked for on the call",
    color: "blue",
  },
  {
    id: "voice",
    number: "02",
    name: "The Leah Voice Grant Engine",
    spanishTag: "La voz",
    oneLiner:
      "A grant-writing system trained on your actual writing.",
    body:
      "Past grants, JNS panels, El Nuevo Herald column, podcast transcripts, wherever your voice lives. It drafts new grant applications in your voice, not generic nonprofit voice. Renewals get easier because it remembers what each funder cared about last time.",
    pullQuote:
      "Generic AI writes like generic AI. Yours won't. We build your voice fingerprint and feed it into the system.",
    quoteAttribution: "The problem you named, and the fix",
    color: "red",
  },
  {
    id: "experts",
    number: "03",
    name: "Expert Database v2",
    spanishTag: "Los expertos",
    oneLiner:
      "Your 3,000+ expert Excel becomes a real searchable interface.",
    body:
      "Filter by topic, geography, language, TV vs. radio fit, hostage-family status, faith community. Auto-updates as new experts get added anywhere in the org. Includes a \"who should I book for this breaking story?\" agent. This is the fastest one to build. Shipped in the first two weeks so you have something real in your hands almost immediately.",
    pullQuote: "The fast visible win. Shipped in weeks, not months.",
    quoteAttribution: "Why it goes first",
    color: "gold",
  },
];

const timeline = [
  {
    label: "Week 0",
    when: "This week",
    title: "You sign.",
    detail:
      "Discovery, Lessons, office hours, and always-on chat all kick off.",
  },
  {
    label: "Week 1",
    when: "Discovery",
    title: "Discovery Sprint runs.",
    detail:
      "Interviews with 6-7 people. Lesson 1 delivered. Chat goes live.",
  },
  {
    label: "End of Week 1",
    when: "Scope lock",
    title: "You get the scoped Phase 1 build proposal.",
    detail: "Fixed price. Acceptance criteria. Prioritized 6-month roadmap.",
  },
  {
    label: "Week 2",
    when: "SOW",
    title: "You sign the build SOW. Build kicks off.",
    detail: "Expert DB v2 ships first, inside the first two weeks of the build.",
  },
  {
    label: "Weeks 2-8",
    when: "Sprint",
    title: "Build sprint.",
    detail:
      "Target 6 weeks, ceiling 8. Lessons + office hours + chat run in parallel.",
  },
  {
    label: "End of Week 8",
    when: "Delivered",
    title: "Build delivered. Lessons wrapped.",
    detail: "We talk about what's next.",
  },
];

function ColorAccent({ color }: { color: Build["color"] }) {
  const cls =
    color === "blue"
      ? "bg-[color:var(--color-fl-blue)]"
      : color === "red"
      ? "bg-[color:var(--color-fl-red)]"
      : "bg-[color:var(--color-gold)]";
  return <span className={`inline-block h-2 w-2 rounded-full ${cls}`} />;
}

function BuildCard({ build }: { build: Build }) {
  const accentBorder =
    build.color === "blue"
      ? "border-t-[color:var(--color-fl-blue)]"
      : build.color === "red"
      ? "border-t-[color:var(--color-fl-red)]"
      : "border-t-[color:var(--color-gold)]";
  return (
    <article
      className={`bg-white/70 border border-[color:var(--color-rule)] border-t-4 ${accentBorder} rounded-md p-6 sm:p-8 flex flex-col gap-5 shadow-sm`}
    >
      <header className="flex items-baseline justify-between gap-4">
        <span className="small-caps text-[color:var(--color-muted-2)]">
          {build.spanishTag}
        </span>
        <span className="font-display text-2xl text-[color:var(--color-muted-2)] leading-none">
          {build.number}
        </span>
      </header>

      <div>
        <h3 className="font-display text-2xl sm:text-3xl text-[color:var(--color-ink)] leading-tight mb-2">
          {build.name}
        </h3>
        <p className="text-[color:var(--color-ink)] text-base sm:text-lg leading-snug font-medium">
          {build.oneLiner}
        </p>
      </div>

      <div className="h-px w-full bg-[color:var(--color-rule)]" />

      <p className="text-[color:var(--color-ink-2)] text-[0.98rem] leading-relaxed">
        {build.body}
      </p>

      <blockquote className="border-l-2 border-[color:var(--color-gold)] pl-4 py-1">
        <p className="font-display italic text-[color:var(--color-ink)] text-base leading-snug">
          &ldquo;{build.pullQuote}&rdquo;
        </p>
        <footer className="small-caps text-[color:var(--color-muted-2)] mt-2">
          {build.quoteAttribution}
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
      {/* ===== Hero / Cover ===== */}
      <header className="border-b border-[color:var(--color-rule)]">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
          <div className="text-center">
            <p className="small-caps text-[color:var(--color-fl-blue-deep)] mb-6">
              Fuente Latina &nbsp;·&nbsp; Ennoble
            </p>
            <div className="mx-auto gold-bar mb-8" />
            <h1 className="font-display text-4xl sm:text-6xl text-[color:var(--color-ink)] leading-[1.05] mb-6">
              A proposal for the next chapter of Fuente Latina.
            </h1>
            <p className="text-[color:var(--color-muted)] text-base sm:text-lg italic font-display">
              Una propuesta. Tres construcciones. Un compromiso de 8 semanas.
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

        {/* Section 1: What I've been doing */}
        <Section eyebrow="Section 01" title="What I've been doing since our call">
          <p>
            Since we talked on July 2, I've gone deep on Fuente Latina. Reread my notes from our conversation, mapped every pain point you and Gigi named, and worked through what would actually move the needle for the org.
          </p>
          <p>
            I came out with three specific builds I think would deliver the most value in the shortest window. Here's what they are, why I picked them, and how I want to lock the scope before we start.
          </p>
        </Section>

        {/* Section 2: The three builds */}
        <Section eyebrow="Section 02" title="The three builds I want to lead with">
          <p>
            Each one traces back to something you or Gigi said unprompted on the call. Each one stacks on top of the others.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6">
            {builds.map((b) => (
              <BuildCard key={b.id} build={b} />
            ))}
          </div>
        </Section>

        {/* Section 3: Why these three */}
        <Section eyebrow="Section 03" title="Why these three, and not others">
          <p>
            You and Gigi named at least a dozen pain points. I mapped every one and scored them on four dimensions: likelihood you'd actually use it, impact if you did, dependencies, and technical difficulty.
          </p>
          <p>These three won because:</p>
          <ul className="list-none space-y-3 mt-2">
            <li className="flex gap-3">
              <ColorAccent color="blue" />
              <span className="text-[color:var(--color-ink-2)]">All three were things one of you brought up unprompted.</span>
            </li>
            <li className="flex gap-3">
              <ColorAccent color="red" />
              <span className="text-[color:var(--color-ink-2)]">They stack. Central is the foundation. Voice plugs into it. Expert DB is the fast visible win.</span>
            </li>
            <li className="flex gap-3">
              <ColorAccent color="gold" />
              <span className="text-[color:var(--color-ink-2)]">Together they cover your three loudest pains: data scattered everywhere, grants eating Leah's time, experts stuck in Excel.</span>
            </li>
          </ul>

          <div className="mt-8 border border-[color:var(--color-rule)] rounded-md p-5 sm:p-6 bg-[color:var(--color-cream-2)]/60">
            <p className="small-caps text-[color:var(--color-muted)] mb-3">Noted for later, not now</p>
            <p className="text-[color:var(--color-ink-2)] mb-2">
              Other ideas I considered and am not proposing yet:
            </p>
            <ul className="space-y-2 text-[color:var(--color-ink-2)]">
              <li>
                <strong>Rafa's workflow extraction.</strong> Big unlock, but I need to meet Rafa first before scoping.
              </li>
              <li>
                <strong>Board report generator.</strong> Trivial to build once Central + Voice exist. Fits naturally in Phase 2.
              </li>
              <li>
                <strong>Fellow and journalist tracker.</strong> Waiting until Central is live.
              </li>
            </ul>
          </div>
        </Section>

        {/* Section 4: Discovery Sprint */}
        <Section eyebrow="Section 04" title="Before we lock the build: a Discovery Sprint">
          <p>
            Here's the honest part. I've had one call with you and Gigi. I haven't met Rafa. I haven't looked inside your ClickUp, your Drive, or your grant portal accounts. I have a strong thesis on the three builds, but I'd be guessing on scope if I priced them today. Instead of guessing, I want to spend a week embedded with your team first.
          </p>

          <div className="mt-8 border-2 border-[color:var(--color-ink)] rounded-md overflow-hidden bg-white/70">
            <div className="px-6 sm:px-8 py-5 border-b border-[color:var(--color-rule)] flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
              <div>
                <p className="small-caps text-[color:var(--color-fl-blue-deep)] mb-1">Offer 01</p>
                <h3 className="font-display text-2xl sm:text-3xl text-[color:var(--color-ink)] leading-tight">
                  Discovery Sprint
                </h3>
                <p className="text-[color:var(--color-muted)] text-sm mt-1">One week, remote.</p>
              </div>
              <div className="text-left sm:text-right">
                <p className="font-display text-3xl sm:text-4xl text-[color:var(--color-gold)]">$5,000</p>
                <p className="small-caps text-[color:var(--color-muted-2)]">Flat</p>
              </div>
            </div>
            <div className="px-6 sm:px-8 py-6">
              <p className="text-[color:var(--color-ink-2)] mb-4">
                Interviews with 6-7 people across the org: Leah, Gigi, Rafa, whoever runs grants day-to-day, digital production lead, ops. I look at the actual data. I leave with:
              </p>
              <ul className="space-y-2 text-[color:var(--color-ink-2)]">
                <li className="flex gap-3">
                  <span className="text-[color:var(--color-fl-blue)] font-bold">→</span>
                  <span>A scoped Phase 1 with fixed price and acceptance criteria.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[color:var(--color-fl-blue)] font-bold">→</span>
                  <span>A prioritized roadmap for the next 6 months.</span>
                </li>
              </ul>
              <p className="mt-5 text-sm text-[color:var(--color-muted)] italic">
                At the end of the week you get a written proposal for the build. If you like it, we sign and start. If you don't, you keep the roadmap and we part clean.
              </p>
            </div>
          </div>
        </Section>

        {/* Section 5: Lessons + Office Hours */}
        <Section
          eyebrow="Section 05"
          title="An 8-week Lessons + Office Hours + Always-On Chat"
        >
          <p>
            Independent of the build, I want to run an 8-week AI training program for the whole company. Same shape I ran for Sixpoint Media, the pro-Israel advocacy organization Yaakov referred me from. At Sixpoint, this has been the highest-ROI thing I've done for their employees. It's what people ask for more of.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white/70 border border-[color:var(--color-rule)] rounded-md p-5">
              <p className="small-caps text-[color:var(--color-fl-blue-deep)] mb-2">Weekly</p>
              <h4 className="font-display text-xl mb-2">Live sessions</h4>
              <p className="text-sm text-[color:var(--color-ink-2)] leading-relaxed">
                One-hour sessions, open to everyone at FL. Recorded and transcribed so your distributed team can catch up async.
              </p>
            </div>
            <div className="bg-white/70 border border-[color:var(--color-rule)] rounded-md p-5">
              <p className="small-caps text-[color:var(--color-fl-blue-deep)] mb-2">1-on-1</p>
              <h4 className="font-display text-xl mb-2">Office hours</h4>
              <p className="text-sm text-[color:var(--color-ink-2)] leading-relaxed">
                Bookable time between sessions for people who want to go deeper on a specific workflow.
              </p>
            </div>
            <div className="bg-white/70 border border-[color:var(--color-rule)] rounded-md p-5">
              <p className="small-caps text-[color:var(--color-fl-blue-deep)] mb-2">Always-on</p>
              <h4 className="font-display text-xl mb-2">Chat channel</h4>
              <p className="text-sm text-[color:var(--color-ink-2)] leading-relaxed">
                A dedicated channel where anyone at FL can drop a question anytime and I answer. No waiting for the next session.
              </p>
            </div>
          </div>

          <p className="mt-6">
            Assignments between sessions are real FL work done through the AI lens, not toy examples.
          </p>

          <div className="mt-8 border-2 border-[color:var(--color-ink)] rounded-md overflow-hidden bg-white/70">
            <div className="px-6 sm:px-8 py-5 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
              <div>
                <p className="small-caps text-[color:var(--color-fl-blue-deep)] mb-1">Offer 02</p>
                <h3 className="font-display text-2xl sm:text-3xl text-[color:var(--color-ink)] leading-tight">
                  Lessons + Office Hours + Chat
                </h3>
                <p className="text-[color:var(--color-muted)] text-sm mt-1">8 weeks. Starts as soon as we sign.</p>
              </div>
              <div className="text-left sm:text-right">
                <p className="font-display text-3xl sm:text-4xl text-[color:var(--color-gold)]">$8,000</p>
                <p className="small-caps text-[color:var(--color-muted-2)]">Flat</p>
              </div>
            </div>
          </div>
        </Section>

        {/* Section 6: What signing looks like */}
        <Section eyebrow="Section 06" title="What signing looks like, right now">
          <p>You commit today to:</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/70 border border-[color:var(--color-rule)] rounded-md p-5">
              <p className="small-caps text-[color:var(--color-muted-2)] mb-2">Discovery Sprint</p>
              <p className="font-display text-3xl text-[color:var(--color-ink)]">$5,000</p>
              <p className="text-sm text-[color:var(--color-muted)] mt-1">One week starting as soon as we sign.</p>
            </div>
            <div className="bg-white/70 border border-[color:var(--color-rule)] rounded-md p-5">
              <p className="small-caps text-[color:var(--color-muted-2)] mb-2">Lessons + Chat</p>
              <p className="font-display text-3xl text-[color:var(--color-ink)]">$8,000</p>
              <p className="text-sm text-[color:var(--color-muted)] mt-1">8 weeks, running in parallel.</p>
            </div>
          </div>

          <div className="mt-6 flex items-baseline justify-between border-t-2 border-[color:var(--color-gold)] pt-4">
            <p className="small-caps text-[color:var(--color-ink)]">Total to sign now</p>
            <p className="font-display text-4xl text-[color:var(--color-gold)]">$13,000</p>
          </div>

          <div className="mt-8 border-l-4 border-[color:var(--color-gold)] pl-5 py-2">
            <p className="text-[color:var(--color-ink-2)]">
              The Phase 1 build (Central, Voice Grant, Expert DB, plus anything Discovery surfaces) gets scoped and priced at the end of Discovery week. Rough range based on comparable engagements: <strong>$25K to $50K flat</strong>, depending on final scope.
            </p>
          </div>
        </Section>

        {/* Section 7: Timeline */}
        <Section eyebrow="Section 07" title="Timeline">
          <ol className="mt-4 relative border-l-2 border-[color:var(--color-rule)] pl-6 sm:pl-8 space-y-8">
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

        {/* Section 8: Next step */}
        <Section eyebrow="Section 08" title="Next step">
          <p>
            Let me know if the shape works and I'll send a short agreement (2 pages, plain English) within 24 hours.
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
