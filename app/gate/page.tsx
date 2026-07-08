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
    <main className="min-h-dvh flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <div className="mx-auto gold-bar mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl text-[color:var(--color-ink)] mb-3">
            Fuente Latina + Ennoble
          </h1>
          <p className="small-caps text-[color:var(--color-muted)]">Private Proposal</p>
        </div>

        <form
          method="POST"
          action="/api/auth"
          className="bg-white/70 border border-[color:var(--color-rule)] rounded-lg p-6 shadow-sm"
        >
          <input type="hidden" name="from" value={from} />
          <label
            htmlFor="password"
            className="block text-sm font-semibold text-[color:var(--color-ink)] mb-2"
          >
            Enter access code
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoFocus
            autoComplete="off"
            className="w-full rounded-md border border-[color:var(--color-rule)] bg-white px-4 py-3 text-base text-[color:var(--color-ink)] focus:border-[color:var(--color-fl-blue)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-fl-blue)]/20"
            placeholder="Access code"
          />
          {error && (
            <p className="mt-3 text-sm text-[color:var(--color-fl-red)]">
              That code did not match. Try again.
            </p>
          )}
          <button
            type="submit"
            className="mt-5 w-full rounded-md bg-[color:var(--color-ink)] px-4 py-3 text-white font-semibold text-sm tracking-wide hover:bg-[color:var(--color-fl-blue-deep)] transition-colors"
          >
            Enter
          </button>
        </form>

        <p className="text-center text-xs text-[color:var(--color-muted-2)] mt-8">
          For Leah, Gigi, and the Fuente Latina team.
        </p>
      </div>
    </main>
  );
}
