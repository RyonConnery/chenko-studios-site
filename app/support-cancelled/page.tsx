import Link from "next/link";

export default function SupportCancelledPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="flex items-center justify-between border-b border-zinc-800 px-8 py-6">
        <Link href="/" className="text-xl font-bold">
          Chenko Studios
        </Link>
        <Link href="/#support" className="text-sm text-zinc-300 hover:text-white">
          Support
        </Link>
      </nav>

      <section className="mx-auto flex min-h-[70vh] max-w-4xl flex-col justify-center px-8 py-20">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
          Checkout Cancelled
        </p>
        <h1 className="text-5xl font-bold leading-tight">
          Checkout cancelled.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          No payment was completed. You can return to Support Development to
          choose a tier again, or go back to the Chenko Studios home page.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/#support"
            className="rounded-xl bg-white px-6 py-3 text-center font-semibold text-black transition hover:bg-zinc-200"
          >
            Back to Support Development
          </Link>
          <Link
            href="/"
            className="rounded-xl border border-zinc-700 px-6 py-3 text-center font-semibold transition hover:bg-zinc-900"
          >
            Back Home
          </Link>
        </div>
      </section>
    </main>
  );
}
