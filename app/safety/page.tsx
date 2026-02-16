import LegalLayout from "@/components/LegalLayout";

export const metadata = {
  title: "Safety — Closer",
};

export default function SafetyGuidelines() {
  return (
    <LegalLayout title="Safety" lastUpdated="February 2026">
      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Our Commitment to Safety
        </h2>
        <p>
          Closer is built to help you make genuine friendships in person. Your
          safety is central to every feature we design. Here are the measures we
          have in place and the guidelines we recommend.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Safety by Design
        </h2>
        <ul className="list-disc list-inside space-y-3">
          <li>
            <strong className="text-foreground">
              Voluntary live sessions
            </strong>{" "}
            — you choose when to be visible on the map. You are never passively
            tracked.
          </li>
          <li>
            <strong className="text-foreground">
              Real name hidden until you meet
            </strong>{" "}
            — on the map you&apos;re represented by an emoji. Others can see
            your photos and username if they tap your profile, but your real
            first name stays private until you introduce yourself face-to-face.
          </li>
          <li>
            <strong className="text-foreground">
              Name confirmation prevents catfishing
            </strong>{" "}
            — both users must correctly enter each other&apos;s first name to
            become friends. This can only happen if you&apos;ve actually met.
          </li>
          <li>
            <strong className="text-foreground">Exclusive pairing</strong> —
            when paired, all other users disappear from your view. It&apos;s
            just you and your match.
          </li>
          <li>
            <strong className="text-foreground">Leave anytime</strong> — end
            your live session with one tap, leave a pairing with two taps. No
            reason needed.
          </li>
          <li>
            <strong className="text-foreground">Decline cooldown</strong> —
            after declining a pairing request, there&apos;s a 5-minute cooldown
            before the same user can send another. This prevents harassment.
          </li>
          <li>
            <strong className="text-foreground">
              No pre-meeting messaging
            </strong>{" "}
            — you can&apos;t message someone you haven&apos;t met in person.
            This eliminates harassment through messaging.
          </li>
          <li>
            <strong className="text-foreground">
              Mutual gender filtering
            </strong>{" "}
            — gender preferences are mutual. Both users must match each
            other&apos;s preferences.
          </li>
          <li>
            <strong className="text-foreground">Blocking</strong> — instant and
            mutual. Blocked users are removed from the map, messages, and all
            contact. No notification is sent to the blocked user.
          </li>
          <li>
            <strong className="text-foreground">Reporting</strong> — report any
            user with a free-form text description. Reporting auto-blocks the
            reported user. Every report is reviewed by our moderation team.
          </li>
          <li>
            <strong className="text-foreground">
              Automatic offline detection
            </strong>{" "}
            — if your connection is lost during a pairing, the session ends
            after a timeout.
          </li>
          <li>
            <strong className="text-foreground">Pairing time limit</strong> —
            pairings last a maximum of 30 minutes. This prevents indefinite
            location sharing.
          </li>
          <li>
            <strong className="text-foreground">
              Designed for public spaces
            </strong>{" "}
            — Closer is built around campus environments like dining halls,
            libraries, and quads.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Tips for Meeting In Person
        </h2>
        <ul className="list-disc list-inside space-y-3">
          <li>Stay in public, well-lit areas on campus.</li>
          <li>
            Tell a friend where you&apos;re going and who you&apos;re meeting.
          </li>
          <li>
            Trust your instincts — if something doesn&apos;t feel right, leave.
            No reason needed.
          </li>
          <li>
            You are never obligated to meet someone just because you were
            paired.
          </li>
          <li>
            Block and report if anyone makes you uncomfortable.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Reporting Concerns
        </h2>
        <p>
          If you experience or witness behavior that makes you uncomfortable,
          please report it immediately through the app or contact us at{" "}
          <a
            href="mailto:support@closerapp.app"
            className="text-primary hover:underline"
          >
            support@closerapp.app
          </a>
          . Every report is reviewed by our team.
        </p>
      </section>

      <p className="text-sm text-muted/60 italic mt-12">
        This safety page will be reviewed and updated before the app&apos;s
        public launch.
      </p>
    </LegalLayout>
  );
}
