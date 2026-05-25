import Link from "next/link";

const nextSteps = [
  "Your payment or subscription was received through Stripe.",
  "Chenko Studios will use support funding to help continue GhostNet 3020 development planning, systems work, asset preparation, testing preparation, and production needs.",
  "Supporter, Founder, and Early Access tiers help identify the support path you selected for future communication and development updates.",
  "Future updates may include development notes, testing information, GhostNet 3020 progress, or supporter benefit details as the project matures.",
];

const tierBenefits = [
  {
    title: "Supporter",
    text: "Helps fund early development and keeps you connected to GhostNet 3020 development progress.",
  },
  {
    title: "Founder",
    text: "Higher-level development backing intended for supporters who want to help push larger GhostNet 3020 milestones.",
  },
  {
    title: "Early Access",
    text: "Marks interest in future testing opportunities when playable builds and testing waves are ready.",
  },
];

export default function SupportSuccessPage() {
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

      <section className="mx-auto max-w-5xl px-8 py-20">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
          Support Received
        </p>
        <h1 className="max-w-4xl text-5xl font-bold leading-tight">
          Thank you for supporting Chenko Studios.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
          Payment/subscription received. Your support helps fund continued
          development of GhostNet 3020.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_340px]">
          <section className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <h2 className="text-2xl font-bold">What happens next</h2>
            <div className="mt-6 space-y-3">
              {nextSteps.map((step, index) => (
                <div
                  key={step}
                  className="rounded-xl border border-zinc-800 bg-black p-4"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-cyan-300">
                    Step {index + 1}
                  </p>
                  <p className="mt-2 leading-7 text-zinc-300">{step}</p>
                </div>
              ))}
            </div>
          </section>

          <aside className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <h2 className="text-2xl font-bold">Support contact</h2>
            <p className="mt-4 leading-7 text-zinc-400">
              For support questions, billing concerns, or tier questions,
              contact Chenko Studios through Chenko Softworks.
            </p>
            <a
              href="mailto:contact@chenkosoftworks.com?subject=GhostNet 3020 supporter question"
              className="mt-6 block rounded-xl bg-white px-5 py-3 text-center font-semibold text-black transition hover:bg-zinc-200"
            >
              Contact Support
            </a>
            <Link
              href="/"
              className="mt-3 block rounded-xl border border-zinc-700 px-5 py-3 text-center font-semibold transition hover:bg-zinc-900"
            >
              Return Home
            </Link>
          </aside>
        </div>

        <section className="mt-10 grid gap-6 md:grid-cols-3">
          {tierBenefits.map((benefit) => (
            <article
              key={benefit.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6"
            >
              <h2 className="text-xl font-bold">{benefit.title}</h2>
              <p className="mt-3 leading-7 text-zinc-400">{benefit.text}</p>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}
