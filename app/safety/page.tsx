import LegalLayout from "@/components/LegalLayout";

export const metadata = {
  title: "Safety Guidelines — Closer",
};

export default function SafetyGuidelines() {
  return (
    <LegalLayout title="Safety Guidelines" lastUpdated="February 2026">
      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Our Commitment to Safety
        </h2>
        <p>
          Closer is built to help you make genuine friendships in person. We
          take your safety seriously and have built multiple layers of
          protection into the app. Here are our guidelines and the measures we
          have in place.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Meeting In Person
        </h2>
        <ul className="list-disc list-inside space-y-3">
          <li>
            Always meet in public, well-lit areas on campus during daytime hours
            when possible.
          </li>
          <li>
            Tell a friend where you&apos;re going and who you&apos;re meeting.
          </li>
          <li>
            Trust your instincts — if something doesn&apos;t feel right, you can
            always end the session and walk away.
          </li>
          <li>
            You are never obligated to meet someone just because you were
            paired.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Built-In Safety Features
        </h2>
        <ul className="list-disc list-inside space-y-3">
          <li>
            <strong className="text-foreground">Timed Sessions:</strong> Live
            sessions last up to 30 minutes, keeping your visibility controlled
            and intentional.
          </li>
          <li>
            <strong className="text-foreground">Emoji Anonymity:</strong> You
            appear as an emoji on the map — no photos are shown until you decide
            to meet.
          </li>
          <li>
            <strong className="text-foreground">One-Tap Block & Report:</strong>{" "}
            Block or report any user instantly from their profile or chat.
          </li>
          <li>
            <strong className="text-foreground">Decline Without Guilt:</strong>{" "}
            You can always decline a pairing request. A 5-minute cooldown
            prevents re-requests.
          </li>
          <li>
            <strong className="text-foreground">Message Rate Limiting:</strong>{" "}
            Automated limits prevent message spam and harassment.
          </li>
          <li>
            <strong className="text-foreground">Multi-Device Detection:</strong>{" "}
            Security checks prevent account misuse across multiple devices.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Community Standards
        </h2>
        <p className="mb-4">
          Closer is a space for genuine connection. We have zero tolerance for:
        </p>
        <ul className="list-disc list-inside space-y-3">
          <li>Harassment, bullying, or threatening behavior</li>
          <li>Hate speech or discrimination of any kind</li>
          <li>Impersonation or fake profiles</li>
          <li>Sharing inappropriate or explicit content</li>
          <li>Stalking or following users after sessions end</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Reporting Concerns
        </h2>
        <p>
          If you experience or witness behavior that violates these guidelines,
          please report it immediately through the app or contact us at{" "}
          <a
            href="mailto:safety@getcloser.app"
            className="text-primary hover:underline"
          >
            safety@getcloser.app
          </a>
          . Every report is reviewed by our team.
        </p>
      </section>

      <p className="text-sm text-muted/60 italic mt-12">
        This is a placeholder safety guidelines page. A comprehensive version
        will be published before the app&apos;s public launch.
      </p>
    </LegalLayout>
  );
}
