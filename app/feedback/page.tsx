export default function Feedback() {
  return (
    <main className="min-h-screen px-6 py-16 max-w-3xl mx-auto">
      <h1 className="text-3xl font-extrabold">Send Feedback</h1>
      <p className="mt-2 text-gray-600">
        Tell us what worked and what didn’t. Screenshots help!
      </p>

      <div className="mt-6 w-full">
        <div className="rounded-2xl border overflow-hidden">
          {/* Replace src with your Tally or Typeform share URL */}
          <iframe
            src="https://tally.so/r/3q9k95"
            width="100%"
            height="620"
            style={{ border: 0 }}
            title="HoopSpark Feedback"
          />
        </div>
      </div>

      <p className="mt-4 text-xs text-gray-500">
        Having issues with the form? Email us at{" "}
        <a className="underline" href="mailto:hello@hoopspark.ai">
          hello@hoopspark.ai
        </a>.
      </p>
    </main>
  );
}
