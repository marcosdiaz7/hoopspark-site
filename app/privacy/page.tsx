export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <div className="mb-8 rounded-lg border border-zinc-800 bg-zinc-900/50 p-4 text-sm text-zinc-400">
        This is a beta-stage privacy policy and may change as the product
        evolves. By using HoopSpark you agree to the terms below.
      </div>

      <h1 className="mb-8 text-4xl font-bold">Privacy Policy</h1>
      <p className="mb-8 text-sm text-zinc-500">Last updated: April 25, 2026</p>

      <div className="space-y-2 text-zinc-300">
        <h2 className="mt-8 mb-3 text-xl font-semibold text-white">
          What We Collect
        </h2>
        <p className="leading-relaxed">
          We collect your email address when you create an account, used solely
          for authentication and account management. We also store the video
          files you upload to generate your feedback. No other personal data is
          collected.
        </p>

        <h2 className="mt-8 mb-3 text-xl font-semibold text-white">
          How We Use Your Data
        </h2>
        <p className="leading-relaxed">
          Your email is used only to authenticate you and communicate essential
          account information (password resets, policy changes). Your video
          files are processed to generate the AI-powered feedback you requested.
          We do not sell, share, or license your data to any third party for
          advertising or commercial purposes.
        </p>

        <h2 className="mt-8 mb-3 text-xl font-semibold text-white">
          Data Retention
        </h2>
        <p className="leading-relaxed">
          Your uploaded clips and feedback history are stored in your account
          and remain until you delete them or request account deletion. We do
          not retain video files beyond what is necessary to provide the
          service.
        </p>

        <h2 className="mt-8 mb-3 text-xl font-semibold text-white">
          Requesting Deletion
        </h2>
        <p className="leading-relaxed">
          You can delete individual clips from your dashboard at any time. To
          delete your account and all associated data, email us at{" "}
          <a
            href="mailto:hello@hoopspark.ai"
            className="text-[#FF6B2C] hover:underline"
          >
            hello@hoopspark.ai
          </a>{" "}
          and we will process your request within 30 days.
        </p>

        <h2 className="mt-8 mb-3 text-xl font-semibold text-white">
          Security
        </h2>
        <p className="leading-relaxed">
          We use industry-standard security practices including encrypted
          connections (HTTPS/TLS) and secure, access-controlled cloud storage.
          During beta, we may update our security infrastructure as the product
          scales.
        </p>

        <h2 className="mt-8 mb-3 text-xl font-semibold text-white">
          Children&apos;s Privacy
        </h2>
        <p className="leading-relaxed">
          HoopSpark is intended for users aged 13 and older. Users under 18
          should have parental consent before creating an account. We do not
          knowingly collect data from children under 13.
        </p>

        <h2 className="mt-8 mb-3 text-xl font-semibold text-white">
          Changes to This Policy
        </h2>
        <p className="leading-relaxed">
          We may update this policy as the product evolves. We will notify you
          by email or in-app notice if material changes are made.
        </p>

        <h2 className="mt-8 mb-3 text-xl font-semibold text-white">
          Contact
        </h2>
        <p className="leading-relaxed">
          Questions? Email{" "}
          <a
            href="mailto:hello@hoopspark.ai"
            className="text-[#FF6B2C] hover:underline"
          >
            hello@hoopspark.ai
          </a>
          .
        </p>
      </div>
    </div>
  );
}
