import LegalLayout from "@/components/LegalLayout";

export const metadata = {
  title: "Safety Tips — Closer",
  description: "Tips and best practices for staying safe while meeting new people on Closer.",
};

export default function SafetyTips() {
  return (
    <LegalLayout title="Safety Tips" lastUpdated="February 2026">
      <section>
        <p className="mb-3">
          Closer is built to help you make genuine friendships in person. Your
          safety is central to every feature we design — it&apos;s not a feature
          bolted on, it&apos;s a constraint that shaped every decision.
        </p>
        <p>
          This page explains the safety measures built into Closer, tips for
          staying safe before, during, and after meeting someone, and how to get
          help if you need it.
        </p>
      </section>

      <section>
        <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-4">
          1. Safety by Design
        </h2>
        <p className="mb-3">
          Every feature in Closer was designed with safety as a core constraint:
        </p>
        <ul className="list-disc list-inside space-y-3">
          <li>
            <strong className="text-foreground">
              Voluntary live sessions
            </strong>{" "}
            — you choose when to be visible on the map. You are never passively
            tracked. When you end your session, you disappear from the map
            completely.
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
            become friends. This can only happen if you&apos;ve actually met in
            person and introduced yourselves.
          </li>
          <li>
            <strong className="text-foreground">Exclusive pairing</strong> —
            when paired, all other users disappear from your view. It&apos;s
            just you and your match. This keeps the experience focused and
            intentional.
          </li>
          <li>
            <strong className="text-foreground">Leave anytime</strong> — end
            your live session with one tap, leave a pairing with two taps. No
            reason needed, no guilt, no pressure.
          </li>
          <li>
            <strong className="text-foreground">Decline cooldown</strong> —
            after declining a pairing request, there&apos;s a 5-minute cooldown
            before the same user can send another. This prevents repeated
            unwanted requests.
          </li>
          <li>
            <strong className="text-foreground">
              No pre-meeting messaging
            </strong>{" "}
            — you can&apos;t message someone you haven&apos;t met in person.
            Messaging only unlocks after both users confirm each other&apos;s
            names face-to-face. This eliminates harassment through unsolicited
            messages.
          </li>
          <li>
            <strong className="text-foreground">
              Mutual gender filtering
            </strong>{" "}
            — gender preferences are mutual. You only see someone if your
            preference includes their gender and their preference includes
            yours. This prevents unwanted attention across preference boundaries.
          </li>
          <li>
            <strong className="text-foreground">Blocking</strong> — block any
            user instantly. Blocking removes them from your map, messages, and
            all contact. They are not notified that you blocked them.
          </li>
          <li>
            <strong className="text-foreground">Reporting</strong> — report any
            user with a description of what happened. Reporting automatically
            blocks the reported user. Every report is reviewed by our moderation
            team.
          </li>
          <li>
            <strong className="text-foreground">
              Automatic offline detection
            </strong>{" "}
            — if your connection is lost during a pairing, the session ends
            after a timeout. This ensures sessions always have a clear end.
          </li>
          <li>
            <strong className="text-foreground">Pairing time limit</strong> —
            pairings last a maximum of 30 minutes. This prevents indefinite
            location sharing between strangers.
          </li>
          <li>
            <strong className="text-foreground">
              Designed for public spaces
            </strong>{" "}
            — Closer is built around campus environments like dining halls,
            libraries, student centers, and quads.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-4">
          2. Before Going Live
        </h2>
        <p className="mb-3">
          These tips are shown in the app before your first live session. We
          encourage you to keep them in mind every time you go live:
        </p>
        <ul className="list-disc list-inside space-y-3">
          <li>
            <strong className="text-foreground">
              Go live in a public, well-populated area
            </strong>{" "}
            — dining halls, libraries, student centers, and campus quads are
            ideal. Avoid going live in isolated or private locations.
          </li>
          <li>
            <strong className="text-foreground">
              Tell someone where you&apos;ll be
            </strong>{" "}
            — let a friend or family member know you&apos;re going live on
            Closer and where you are. A quick text is enough.
          </li>
          <li>
            <strong className="text-foreground">Keep your phone charged</strong>{" "}
            — you&apos;ll need your phone to navigate the pairing, confirm
            names, and contact someone if needed.
          </li>
          <li>
            <strong className="text-foreground">
              Review profiles before sending a request
            </strong>{" "}
            — tap a user&apos;s emoji to see their profile, photos, interests,
            and what they&apos;re looking for before deciding to connect.
          </li>
          <li>
            <strong className="text-foreground">
              Remember: you&apos;re always in control
            </strong>{" "}
            — you can end your live session at any time with one tap. Going live
            doesn&apos;t commit you to meeting anyone.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-4">
          3. During a Pairing
        </h2>
        <p className="mb-3">
          When you&apos;re paired with someone and heading to meet them:
        </p>
        <ul className="list-disc list-inside space-y-3">
          <li>
            <strong className="text-foreground">
              Stay in public spaces
            </strong>{" "}
            — meet your match in a public area where other people are around.
            Never agree to meet somewhere private or isolated.
          </li>
          <li>
            <strong className="text-foreground">
              Stay aware of your surroundings
            </strong>{" "}
            — keep your belongings in sight and be mindful of your environment
            while looking for your match.
          </li>
          <li>
            <strong className="text-foreground">Trust your instincts</strong> —
            if something feels off at any point, leave. No reason needed. Your
            safety always comes first.
          </li>
          <li>
            <strong className="text-foreground">
              Use &ldquo;Help Them Spot You&rdquo;
            </strong>{" "}
            — describe what you&apos;re wearing or where you&apos;re sitting so
            your match can find you safely in a public space. This is better
            than wandering around looking for someone.
          </li>
          <li>
            <strong className="text-foreground">
              You&apos;re never obligated to stay
            </strong>{" "}
            — you can end the pairing at any time with two taps. An optional
            reason is for app improvement only, not to pressure you into
            staying.
          </li>
          <li>
            <strong className="text-foreground">
              Verify their identity during name confirmation
            </strong>{" "}
            — when you meet, introduce yourself and ask their name. Type
            exactly what they tell you — if it doesn&apos;t match their real
            first name on file, Closer will reject it. This is how Closer
            prevents catfishing.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-4">
          4. After Meeting
        </h2>
        <p className="mb-3">
          Once you&apos;ve met someone and confirmed each other&apos;s names,
          messaging unlocks between you. As your friendship develops:
        </p>
        <ul className="list-disc list-inside space-y-3">
          <li>
            <strong className="text-foreground">
              Be thoughtful about sharing personal information
            </strong>{" "}
            — take your time before sharing your phone number, social media,
            home address, or other personal details. Get to know someone before
            giving them ways to contact you outside of Closer.
          </li>
          <li>
            <strong className="text-foreground">
              Mute or remove friends at any time
            </strong>{" "}
            — if you need space, you can mute notifications from a friend
            (they won&apos;t know) or remove them entirely. No explanation
            needed.
          </li>
          <li>
            <strong className="text-foreground">
              Report concerning behavior
            </strong>{" "}
            — if something happened during your meetup that made you
            uncomfortable, you can still report the user after the fact through
            their chat profile.
          </li>
          <li>
            <strong className="text-foreground">
              Respect boundaries
            </strong>{" "}
            — if someone doesn&apos;t respond to your messages or removes you
            as a friend, respect their decision. Do not attempt to contact them
            through other platforms.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-4">
          5. Online Safety
        </h2>
        <ul className="list-disc list-inside space-y-3">
          <li>
            <strong className="text-foreground">
              Never send money to someone you met on Closer
            </strong>{" "}
            — no matter the reason they give. If someone asks you for money,
            donations, or financial help, report them immediately.
          </li>
          <li>
            <strong className="text-foreground">
              Protect your sensitive information
            </strong>{" "}
            — do not share your home address, financial information, daily
            routine, or passwords in messages. If you have concerns about a
            message you received, report it.
          </li>
          <li>
            <strong className="text-foreground">
              Be cautious about moving off-platform
            </strong>{" "}
            — if someone pressures you to move the conversation to another app
            or platform before you&apos;re comfortable, that&apos;s a warning
            sign. Take your time.
          </li>
          <li>
            <strong className="text-foreground">
              Report suspicious behavior
            </strong>{" "}
            — if someone&apos;s profile seems fake, their behavior feels like a
            scam, or anything seems off, report them through the app. It takes
            seconds and helps keep the community safe.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-4">
          6. Blocking &amp; Reporting
        </h2>

        <h3 className="font-medium text-foreground mt-4 mb-3">Blocking</h3>
        <p className="mb-3">
          You can block any user at any time — from their profile on the map,
          from a pairing, or from a chat conversation. When you block someone:
        </p>
        <ul className="list-disc list-inside space-y-1.5 mb-4">
          <li>They are immediately removed from your map and messages</li>
          <li>They cannot see you, send you requests, or contact you</li>
          <li>They are not notified that you blocked them</li>
          <li>
            You can view and manage your blocked users in Settings, and unblock
            at any time
          </li>
        </ul>

        <h3 className="font-medium text-foreground mt-4 mb-3">Reporting</h3>
        <p className="mb-3">
          If someone violates our{" "}
          <a
            href="/community-guidelines"
            className="text-primary hover:underline"
          >
            Community Guidelines
          </a>
          , report them through the app. When you report someone:
        </p>
        <ul className="list-disc list-inside space-y-1.5 mb-4">
          <li>
            You provide a description of what happened (free-form text)
          </li>
          <li>The reported user is automatically blocked from contacting you</li>
          <li>The report is sent to our moderation team for review</li>
        </ul>

        <p className="mb-3">
          <strong className="text-foreground">Important:</strong> Blocking a
          user does not automatically report them. If someone violated our
          guidelines, please report them separately so our team can review and
          take appropriate action.
        </p>
        <p>
          Misuse of the reporting system — including submitting false or
          malicious reports — is a violation of our Community Guidelines and may
          result in action against your account.
        </p>
      </section>

      <section>
        <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-4">
          7. Your Privacy &amp; Control
        </h2>
        <p className="mb-3">You are always in control of your experience:</p>
        <ul className="list-disc list-inside space-y-1.5">
          <li>
            Your location is only shared when you choose to go live — never in
            the background or when you&apos;re offline
          </li>
          <li>
            End your live session at any time with one tap to disappear from the
            map
          </li>
          <li>
            Mute notifications from individual friends without removing them
          </li>
          <li>
            Remove any friend at any time — their messages are archived, not
            visible to you
          </li>
          <li>
            Delete your account at any time through Settings, which removes all
            your data
          </li>
        </ul>
        <p className="mt-3">
          For full details on how we handle your data, read our{" "}
          <a href="/privacy" className="text-primary hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-4">
          8. Emergency &amp; Support Resources
        </h2>
        <p className="mb-4">
          <strong className="text-foreground">
            If you are in immediate danger, call 911.
          </strong>
        </p>

        <h3 className="font-medium text-foreground mt-4 mb-3">
          Crisis Resources (Canada)
        </h3>
        <ul className="list-disc list-inside space-y-1.5 mb-4">
          <li>
            <strong className="text-foreground">
              Crisis Services Canada
            </strong>{" "}
            — call{" "}
            <a href="tel:1-833-456-4566" className="text-primary hover:underline">
              1-833-456-4566
            </a>{" "}
            or text 45645 (available 24/7)
          </li>
          <li>
            <strong className="text-foreground">
              Kids Help Phone
            </strong>{" "}
            (for young adults up to 25) — call{" "}
            <a href="tel:1-800-668-6868" className="text-primary hover:underline">
              1-800-668-6868
            </a>{" "}
            or text CONNECT to 686868
          </li>
          <li>
            <strong className="text-foreground">Campus security</strong> — save
            your university&apos;s campus security number in your phone before
            going live
          </li>
        </ul>

        <h3 className="font-medium text-foreground mt-4 mb-3">
          Report Through Closer
        </h3>
        <p className="mb-3">
          To report a user or concern within the app, use the report feature on
          any user&apos;s profile or in a chat conversation. Reports are
          reviewed by our moderation team.
        </p>
        <p>
          For any other safety concerns or questions, contact us at{" "}
          <a
            href="mailto:support@closerapp.app"
            className="text-primary hover:underline"
          >
            support@closerapp.app
          </a>
          .
        </p>
      </section>
    </LegalLayout>
  );
}
