type SearchParams = { [key: string]: string | string[] | undefined };

export default async function GatePage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;
  const from = typeof params.from === "string" ? params.from : "/";
  const error = params.error === "1";

  return (
    <main className="min-h-dvh bg-black flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-8">
            <span className="logo-box">
              <span className="text-2xl">FUENTE</span>
              <span className="text-2xl">LATINA</span>
            </span>
          </div>
          <div className="rule-thick-white mx-auto mb-6" />
          <h1 className="font-display text-4xl sm:text-5xl text-white mb-3">
            Fuente Latina <span className="text-[color:var(--color-fl-blue)]">+</span> Ennoble
          </h1>
          <p className="small-caps text-white/70">Private Proposal</p>
        </div>

        <form
          method="POST"
          action="/api/auth"
          className="bg-white/5 border border-white/15 rounded-lg p-6"
        >
          <input type="hidden" name="from" value={from} />
          <label
            htmlFor="password"
            className="block small-caps text-white/80 mb-3"
          >
            Access Code
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoFocus
            autoComplete="off"
            className="w-full rounded-md border border-white/20 bg-black px-4 py-3 text-base text-white placeholder-white/40 focus:border-[color:var(--color-fl-blue)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-fl-blue)]/40"
            placeholder="Enter code"
          />
          {error && (
            <p className="mt-3 text-sm text-[color:var(--color-fl-red)] font-semibold">
              That code did not match. Try again.
            </p>
          )}
          <button
            type="submit"
            className="pill pill-white mt-5 w-full"
          >
            Enter
          </button>
        </form>

        <p className="text-center text-xs text-white/50 mt-8 small-caps">
          For Leah, Gigi, and the Fuente Latina team.
        </p>
      </div>
    </main>
  );
}
