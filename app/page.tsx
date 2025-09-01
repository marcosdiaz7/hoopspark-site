import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">HoopSpark</h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600">
            Upload game clips, get clear skill feedback, and track progress over time.
          </p>
          <div className="mt-8 flex gap-3">
            <a
              href="https://app.hoopspark.ai"
              className="px-6 py-3 rounded-xl bg-black text-white font-semibold"
            >
              Open the App
            </a>
            <a
              href="#pricing"
              className="px-6 py-3 rounded-xl border font-semibold"
            >
              See Pricing
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-16 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {[
          { title: 'Upload in 30s', desc: 'Short clips, fast analysis. Designed for mobile.' },
          { title: 'Skill Scores', desc: 'Defense, shooting, decision-making tracked over time.' },
          { title: 'Coach Spark', desc: 'Supportive, direct coaching guidance. (Coming soon)' }
        ].map((f) => (
          <div key={f.title} className="p-6 rounded-2xl border">
            <h3 className="text-xl font-bold">{f.title}</h3>
            <p className="mt-2 text-gray-600">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold">Pricing</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl border">
            <h3 className="text-2xl font-bold">Pro</h3>
            <p className="mt-2 text-gray-600">Core analysis & progress tracking.</p>
            <div className="mt-4 text-4xl font-extrabold">
              $9.99<span className="text-lg font-medium">/mo</span>
            </div>
            <a
              href="https://app.hoopspark.ai"
              className="mt-6 inline-block px-6 py-3 rounded-xl bg-black text-white font-semibold"
            >
              Start Free Trial
            </a>
          </div>
          <div className="p-6 rounded-2xl border relative">
            <span className="absolute -top-3 right-4 text-xs bg-gray-900 text-white px-3 py-1 rounded-full">
              Coming soon
            </span>
            <h3 className="text-2xl font-bold">Elite</h3>
            <p className="mt-2 text-gray-600">
              Includes Coach Spark chat & advanced insights.
            </p>
            <div className="mt-4 text-4xl font-extrabold opacity-60">
              $19.99<span className="text-lg font-medium">/mo</span>
            </div>
            <button className="mt-6 px-6 py-3 rounded-xl border font-semibold">Notify Me</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10 border-t text-sm text-gray-600">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span>© {new Date().getFullYear()} HoopSpark</span>
          <div className="flex gap-4">
            <a href="/feedback" className="underline">Send Feedback</a>
            <a href="mailto:hello@hoopspark.ai" className="underline">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}


