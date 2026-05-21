export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="flex items-center justify-between border-b border-zinc-800 px-8 py-6">
        <a href="/" className="text-xl font-bold">
          Chenko Studios
        </a>

        <div className="flex gap-6 text-sm text-zinc-300">
          <a href="#ghostnet" className="hover:text-white">
            GhostNet 3020
          </a>
          <a href="#world" className="hover:text-white">
            World
          </a>
          <a href="#support" className="hover:text-white">
            Support
          </a>
          <a href="https://www.chenkosoftworks.com" className="hover:text-white">
            Chenko Softworks
          </a>
        </div>
      </nav>

      <section className="flex min-h-[70vh] flex-col items-center justify-center px-8 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
          Chenko Studios Presents
        </p>

        <h1 className="mb-6 max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
          GhostNet 3020
        </h1>

        <p className="mb-10 max-w-3xl text-lg leading-8 text-zinc-400 md:text-xl">
          A cyberpunk survival MMO set in a fractured future of walled cities,
          autonomous machines, corporate collapse, dangerous technology, and
          forgotten regions shaped by the GhostNet.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="#support"
            className="rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:bg-zinc-200"
          >
            Support Development
          </a>

          <a
            href="#world"
            className="rounded-xl border border-zinc-700 px-6 py-3 font-semibold transition hover:bg-zinc-900"
          >
            Explore the World
          </a>
        </div>
      </section>

      <section id="ghostnet" className="border-t border-zinc-800 px-8 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-4xl font-bold">GhostNet 3020</h2>

          <p className="text-lg leading-8 text-zinc-400">
            GhostNet 3020 is the flagship Chenko Studios game project. It is
            being built as a cyberpunk survival MMO focused on walled cities,
            dangerous regions, AI-controlled threats, player progression,
            exploration, PvP, PvE, and the mystery of the GhostNet itself.
          </p>
        </div>
      </section>

      <section id="world" className="border-t border-zinc-800 px-8 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-4xl font-bold">
            World Regions
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800 p-6">
              <h3 className="mb-3 text-2xl font-bold">Seattle</h3>
              <p className="text-zinc-400">
                The largest walled cyber city and primary player launch hub.
                Seattle is planned as the central ecosystem for factions,
                upgrades, vendors, storylines, and player progression.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 p-6">
              <h3 className="mb-3 text-2xl font-bold">Redmond</h3>
              <p className="text-zinc-400">
                A dangerous swamp region filled with hidden history, abandoned
                technology, story-driven locations, unstable terrain, and
                secrets tied to the GhostNet.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 p-6">
              <h3 className="mb-3 text-2xl font-bold">Spokane</h3>
              <p className="text-zinc-400">
                An open, hostile region built around PvP, dangerous PvE,
                AI-controlled machines, cyber-enhanced humans, cybernetic
                wildlife, scarce resources, and survival beyond the city walls.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="support" className="border-t border-zinc-800 px-8 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-6 text-4xl font-bold">Support Development</h2>

          <p className="mb-8 text-lg leading-8 text-zinc-400">
            Supporter funding helps Chenko Studios build GhostNet 3020 through
            world design, environment assets, gameplay systems, testing,
            community tools, server planning, and future early access releases.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800 p-6">
              <h3 className="mb-3 text-xl font-bold">Supporter</h3>
              <p className="text-zinc-400">
                Follow development and help support the early foundation of
                GhostNet 3020.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 p-6">
              <h3 className="mb-3 text-xl font-bold">Founder</h3>
              <p className="text-zinc-400">
                Help fund assets, systems, worldbuilding, testing, and early
                development milestones.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 p-6">
              <h3 className="mb-3 text-xl font-bold">Early Access</h3>
              <p className="text-zinc-400">
                Future testing access for players who want to provide feedback
                on early systems, gameplay loops, and world direction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-800 px-8 py-10 text-center text-sm text-zinc-500">
        <p>Chenko Studios is part of the Chenko Softworks ecosystem.</p>

        <div className="mt-4 flex justify-center gap-6">
          <a href="https://www.chenkosoftworks.com" className="hover:text-white">
            Main Site
          </a>
          <a href="https://finance.chenkosoftworks.com" className="hover:text-white">
            Chenko Finance
          </a>
          <a href="https://ai.chenkosoftworks.com" className="hover:text-white">
            ChenkoAI
          </a>
        </div>
      </footer>
    </main>
  );
}
