import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="px-4 py-16 text-center sm:px-6 md:py-24">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Get Better From Your Game Film
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400 md:text-xl">
            Upload a clip. Get clear feedback in seconds. Built for players
            12–18.
          </p>
          <a
            href="https://app.hoopspark.ai"
            target="_blank"
            rel="noopener"
            className="mt-10 inline-block rounded-xl bg-[#FF6B2C] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-[#FF7E47]"
          >
            Try It Free
          </a>
          <p className="mt-4 text-sm text-zinc-500">
            Free during beta. No credit card.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 py-12 sm:px-6 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            How It Works
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                n: 1,
                title: "Upload Your Clip",
                body: "Drop in any video file from your phone or laptop. Practice, scrimmage, or game footage.",
              },
              {
                n: 2,
                title: "Coach Spark Analyzes",
                body: "Our AI breaks down your movement, decisions, and habits in seconds — no waiting on a coach.",
              },
              {
                n: 3,
                title: "Get a Real Breakdown",
                body: "Three things you did well. Three to fix. One focus area. One drill. That's it.",
              },
            ].map(({ n, title, body }) => (
              <div key={n} className="rounded-2xl bg-zinc-900/50 p-8">
                <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#FF6B2C] text-sm font-bold text-white">
                  {n}
                </div>
                <h3 className="mb-3 text-lg font-semibold">{title}</h3>
                <p className="leading-relaxed text-zinc-400">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Feedback You Get */}
      <section className="px-4 py-12 sm:px-6 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold md:text-4xl">
            This Is What You Get
          </h2>
          <p className="mx-auto mb-12 mt-4 max-w-2xl text-center text-lg text-zinc-400">
            No fluff. No 50-page reports. Just what you need to know.
          </p>
          <Image
            src="/screenshot-feedback.png"
            alt="HoopSpark feedback screen showing strengths, improvements, and a focus drill"
            width={400}
            height={800}
            className="mx-auto rounded-2xl ring-1 ring-zinc-800 drop-shadow-[0_0_60px_rgba(255,107,44,0.15)]"
          />
        </div>
      </section>

      {/* Three More Screenshots */}
      <section className="px-4 py-12 sm:px-6 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Built for How Players Actually Train
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                src: "/screenshot-hero.png",
                alt: "HoopSpark home screen",
                caption: "Open the app, hit upload",
              },
              {
                src: "/screenshot-upload.png",
                alt: "HoopSpark upload screen",
                caption: "Pick what you want feedback on",
              },
              {
                src: "/screenshot-progress.png",
                alt: "HoopSpark progress screen",
                caption: "Track every clip over time",
              },
            ].map(({ src, alt, caption }) => (
              <div key={src}>
                <Image
                  src={src}
                  alt={alt}
                  width={400}
                  height={800}
                  className="w-full rounded-xl ring-1 ring-zinc-800"
                />
                <p className="mt-3 text-center text-sm text-zinc-400">
                  {caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why HoopSpark */}
      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-2xl">
          <p className="mb-4 text-sm font-semibold tracking-widest text-[#FF6B2C]">
            WHY HOOPSPARK
          </p>
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">
            Built at the gym, not in a boardroom.
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-zinc-300">
            <p>HoopSpark wasn&apos;t built in a boardroom. It started at the gym.</p>
            <p>
              As a father of young athletes chasing their dreams, I watched how
              hard it is for players to actually get better — not just play
              more. There&apos;s no shortage of trainers, camps, or highlights.
              What&apos;s missing is honest, specific feedback. Most players are
              guessing. Most parents are investing time and money without
              clarity.
            </p>
            <p>
              So I built what we needed. Upload a clip, get a real breakdown of
              what you did well, what to fix, and what to work on next.
            </p>
            <p className="font-semibold text-white">
              Not every player goes pro. But every player can get better.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20 text-center sm:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold md:text-5xl">
            Ready to See Your Game Differently?
          </h2>
          <a
            href="https://app.hoopspark.ai"
            target="_blank"
            rel="noopener"
            className="mt-8 inline-block rounded-xl bg-[#FF6B2C] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-[#FF7E47]"
          >
            Try HoopSpark Free
          </a>
          <p className="mt-4 text-sm text-zinc-500">
            Free during beta. Takes 30 seconds to get started.
          </p>
        </div>
      </section>
    </>
  );
}
