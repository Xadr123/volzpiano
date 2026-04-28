import StubPage from "@/app/components/StubPage";

export default function TermsConditionsPage() {
  return (
    <StubPage
      badge="Legal"
      title="Terms &"
      highlight="Conditions"
      description="The terms governing your use of Volz Method Piano Lessons services and communications."
      primaryCta={{ href: "/schedule-call", label: "Schedule a Call" }}
      body={
        <div className="space-y-6 text-zinc-600 leading-relaxed">
          <h2 className="text-xl font-bold text-zinc-900">SMS Communications</h2>
          <p>
            By providing your phone number and opting in to SMS communications
            from Volz Method Piano Lessons, you agree to receive text messages
            related to scheduling, lesson reminders, and other lesson-related
            communication.
          </p>
          <p>
            You can opt out of SMS messages at any time by replying{" "}
            <strong>STOP</strong>. For help, reply{" "}
            <strong>HELP</strong> or contact us at{" "}
            <strong>[YOUR PHONE NUMBER]</strong>. Message and data rates may
            apply. Message frequency will vary.
          </p>

          <h2 className="text-xl font-bold text-zinc-900">Lesson Services</h2>
          <p>
            Volz Method Piano Lessons provides in-home piano lessons across
            Utah and Idaho. Lessons are billed month-to-month with a 30-day
            notice period to discontinue. Pricing varies by location and
            number of students; see our{" "}
            <a
              href="/pricing"
              className="font-semibold text-accent hover:underline"
            >
              pricing page
            </a>{" "}
            for details.
          </p>

          <h2 className="text-xl font-bold text-zinc-900">Privacy</h2>
          <p>
            For information about how we collect, use, and protect your
            personal data, please review our{" "}
            <a
              href="/privacy-policy-2"
              className="font-semibold text-accent hover:underline"
            >
              privacy policy
            </a>
            .
          </p>

          <p className="text-sm italic text-zinc-400">
            This is a placeholder Terms &amp; Conditions page. Please replace
            with your full legal terms as drafted by your attorney.
          </p>
        </div>
      }
    />
  );
}
