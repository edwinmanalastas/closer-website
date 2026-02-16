import LegalLayout from "@/components/LegalLayout";

export const metadata = {
  title: "Support — Closer",
};

export default function Support() {
  return (
    <LegalLayout title="Support">
      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Need Help?
        </h2>
        <p>
          Whether you have a question about how Closer works, need help with
          your account, or want to report a concern — you&apos;re in the right
          place. Browse the questions below, or reach out to us directly.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Contact Us
        </h2>
        <ul className="list-disc list-inside space-y-3">
          <li>
            <strong className="text-foreground">In the app</strong> — go to
            Settings and tap &ldquo;Message the Founder.&rdquo; This is the
            fastest way to reach us. We typically respond within 24 hours.
          </li>
          <li>
            <strong className="text-foreground">Email</strong> — reach us at{" "}
            <a
              href="mailto:support@closerapp.app"
              className="text-primary hover:underline"
            >
              support@closerapp.app
            </a>
          </li>
          <li>
            <strong className="text-foreground">Report a bug</strong> — go to
            Settings and tap &ldquo;Report an Issue.&rdquo; This opens an email
            pre-filled with your device info so we can help faster.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Getting Started
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-medium text-foreground mb-2">
              What is Closer?
            </h3>
            <p>
              Closer helps university students meet friends in person, right now.
              You go &ldquo;live&rdquo; on a map when you&apos;re down to hang
              out, match with someone nearby who&apos;s also live, and meet up
              within minutes. No swiping, no endless messaging — just real
              people ready to connect face-to-face.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-2">
              How do I sign up?
            </h3>
            <p>
              Download Closer, verify your phone number, and build your profile.
              You&apos;ll add your first name (kept private until you meet
              someone), a username, date of birth, gender, profile photo,
              interests, and what you&apos;re looking for.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-2">
              What permissions does Closer need?
            </h3>
            <p>
              <strong className="text-foreground">Notifications</strong> — so
              you know when someone wants to meet you.{" "}
              <strong className="text-foreground">Location</strong> — so the app
              can show who&apos;s nearby. The &ldquo;Always Allow&rdquo;
              location permission is only used during active pairings so the
              session continues when you switch apps briefly. Closer never tracks
              your location in the background outside of a pairing.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-2">
              Do I need to be a university student?
            </h3>
            <p>
              Closer is designed for university students, but anyone 18 or older
              can use it.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-2">
              How do I complete my profile?
            </h3>
            <p>
              Add a profile photo, up to 2 gallery photos, your interests (3–5
              from 15 categories), what you&apos;re looking for, and your
              university. A completion ring around your profile photo shows your
              progress — you need at least 90% completion to go live, so
              everyone on the map has a real, complete profile.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Going Live
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-medium text-foreground mb-2">
              How do I go live?
            </h3>
            <p>
              Tap &ldquo;Ready&rdquo; on the map screen to preview how your
              profile looks to others, then tap &ldquo;Go Live.&rdquo; A
              3-second countdown confirms your intent — going live is always a
              deliberate choice.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-2">
              Who can see me when I&apos;m live?
            </h3>
            <p>
              Other live users within roughly 1 km whose gender preferences
              match yours (and vice versa — it&apos;s mutual). You never see
              existing friends or blocked users on the map.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-2">
              Is my location always visible?
            </h3>
            <p>
              No. Your location is only shared while you have an active live
              session. When you end it, you disappear from the map completely.
              Closer does not track your location in the background.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-2">
              How long can I stay live?
            </h3>
            <p>
              As long as you want. End your session anytime with one tap.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-2">
              What&apos;s the emoji on the map?
            </h3>
            <p>
              You choose an emoji to represent yourself on the map — there are
              over 750 options. Other live users see your emoji before they tap
              to view your profile. You can change it anytime from the map
              screen.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Pairing & Meeting
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-medium text-foreground mb-2">
              How do I send a request?
            </h3>
            <p>
              Tap someone&apos;s emoji on the map to view their profile, then
              tap &ldquo;Get Closer.&rdquo; They&apos;ll receive a notification
              and can accept or decline.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-2">
              What happens when I get a request?
            </h3>
            <p>
              A notification slides in showing their photo and username. You have
              60 seconds to view their profile and accept or decline.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-2">
              What if someone declines my request?
            </h3>
            <p>
              You&apos;ll see a brief notification. There&apos;s a 5-minute
              cooldown before you can send them another request — this prevents
              repeated unwanted requests.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-2">
              What happens when we&apos;re paired?
            </h3>
            <p>
              All other users disappear from the map — it&apos;s just you and
              your match. You can see each other&apos;s live locations and have
              up to 30 minutes to find each other. A timer at the top counts
              down, shifting from purple to orange to red.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-2">
              What is &ldquo;Help Them Spot You&rdquo;?
            </h3>
            <p>
              A one-way description card where you write what you&apos;re
              wearing or where you&apos;re sitting (e.g., &ldquo;Red sweater by
              the windows&rdquo;). Your match sees this in real time to help
              find you. You can update it up to 3 times.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-2">
              What are conversation starters?
            </h3>
            <p>
              Three suggested ice-breakers based on your shared interests, shown
              during a pairing. They give you something to talk about when you
              meet. You can refresh them individually or all at once until you
              find one that feels natural.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-2">
              What is the wave?
            </h3>
            <p>
              When you spot your match (or think you do), send a wave.
              They&apos;ll see a full-screen animation with your username —
              it&apos;s a playful, low-pressure way to signal &ldquo;I see
              you!&rdquo; without shouting across the room. There&apos;s a
              10-second cooldown between waves.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-2">
              Can I end a pairing early?
            </h3>
            <p>
              Yes. Tap the end button, confirm, and optionally share a reason.
              No explanation needed — you can always leave. Your match sees a
              brief message: &ldquo;They ended the connection.&rdquo;
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Becoming Friends
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-medium text-foreground mb-2">
              How do I add someone as a friend?
            </h3>
            <p>
              After meeting in person, tap &ldquo;Add Friend&rdquo; and enter
              their first name. Both users must correctly confirm each
              other&apos;s name. This is how Closer verifies you actually met
              face-to-face.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-2">
              Why do I need to enter their name?
            </h3>
            <p>
              Name confirmation is Closer&apos;s anti-catfishing system. It
              proves you physically met the person and introduced yourselves —
              you can&apos;t guess a stranger&apos;s name without asking them.
              If the name someone gives you doesn&apos;t match what you expect,
              don&apos;t confirm it.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-2">
              Can I message someone before meeting them?
            </h3>
            <p>
              No. Messaging only unlocks after both users confirm each
              other&apos;s names in person. This is by design — it eliminates
              unsolicited messages and ensures every conversation starts from a
              real connection.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Friends & Messaging
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-medium text-foreground mb-2">
              Where do I find my messages?
            </h3>
            <p>
              Tap the chat icon on the map screen. Your friends list shows all
              your connections with their latest messages.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-2">
              How do I mute a friend?
            </h3>
            <p>
              Open their chat, tap the info icon at the top, and toggle
              &ldquo;Mute Notifications.&rdquo; They won&apos;t know you muted
              them. You&apos;ll still see their messages — you just won&apos;t
              get notifications for them.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-2">
              How do I remove a friend?
            </h3>
            <p>
              Open their chat, tap the info icon, and tap &ldquo;Remove
              Friend.&rdquo; You can optionally share a reason. Their messages
              are archived — they won&apos;t be visible to you anymore.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-2">
              What are weekly nudges?
            </h3>
            <p>
              Conversation prompts sent to you and your friends to encourage
              chatting. They&apos;re fun suggestions to keep the connection
              going — think of them as ice-breakers for existing friends.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">Safety</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-medium text-foreground mb-2">
              How do I block someone?
            </h3>
            <p>
              From their profile on the map, during a pairing, or from a chat
              conversation. Blocking instantly removes them from your map and
              messages. They cannot see you, send you requests, or contact you.
              They are not notified. You can view and manage your blocked users
              in Settings.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-2">
              How do I report someone?
            </h3>
            <p>
              From their profile or chat, tap &ldquo;Report.&rdquo; Describe
              what happened in your own words. Reporting automatically blocks
              the user. Every report is reviewed by our team.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-2">
              Does blocking someone automatically report them?
            </h3>
            <p>
              No. Blocking and reporting are separate actions. If someone
              violated our{" "}
              <a
                href="/community-guidelines"
                className="text-primary hover:underline"
              >
                Community Guidelines
              </a>
              , please report them separately so we can review and take
              appropriate action.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-2">
              What should I do if I feel unsafe?
            </h3>
            <p>
              End the session immediately — one tap to end your live session, two
              taps to end a pairing. If you are in immediate danger, call 911.
              You can also contact Crisis Services Canada at{" "}
              <a
                href="tel:1-833-456-4566"
                className="text-primary hover:underline"
              >
                1-833-456-4566
              </a>{" "}
              or Kids Help Phone (for young adults up to 25) at{" "}
              <a
                href="tel:1-800-668-6868"
                className="text-primary hover:underline"
              >
                1-800-668-6868
              </a>
              . Report the user through the app afterward.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-2">
              Where can I find safety tips?
            </h3>
            <p>
              Read our{" "}
              <a href="/safety" className="text-primary hover:underline">
                Safety Tips
              </a>{" "}
              page for detailed guidance on staying safe before, during, and
              after meeting someone. You can also tap &ldquo;How Closer
              Works&rdquo; in Settings for an in-app walkthrough.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Account & Privacy
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-medium text-foreground mb-2">
              How do I edit my profile?
            </h3>
            <p>
              Tap your profile photo in the top corner of the map screen. Switch
              to the Edit tab to update any field — photos, interests, bio, what
              you&apos;re looking for, and more.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-2">
              How do I change who I see on the map?
            </h3>
            <p>
              Tap the filter icon on the map screen to change your &ldquo;Show
              Me&rdquo; preference (Men, Women, or Everyone). This filter is
              mutual — you only see someone if your preference includes their
              gender and theirs includes yours.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-2">
              How do I delete my account?
            </h3>
            <p>
              Go to Settings, scroll to the bottom, and tap &ldquo;Delete
              Account.&rdquo; This permanently removes your profile, photos,
              messages, and all associated data. Your phone number is retained in
              our authentication system so you can re-register in the future if
              you choose.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-2">
              What data does Closer collect?
            </h3>
            <p>
              Only what&apos;s needed: profile information you provide, location
              while live, messages to friends, and anonymous analytics (no
              personally identifiable information). Read our{" "}
              <a href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </a>{" "}
              for full details.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-2">
              Can I use Closer on multiple devices?
            </h3>
            <p>
              Closer supports one active session per account. Signing in on a
              new device will sign you out of the previous one.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">Legal</h2>
        <p>
          For the full details on how Closer works, your rights, and our
          commitments to you:
        </p>
        <ul className="list-disc list-inside space-y-1.5 mt-3">
          <li>
            <a href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/terms" className="text-primary hover:underline">
              Terms and Conditions
            </a>
          </li>
          <li>
            <a
              href="/community-guidelines"
              className="text-primary hover:underline"
            >
              Community Guidelines
            </a>
          </li>
          <li>
            <a href="/safety" className="text-primary hover:underline">
              Safety Tips
            </a>
          </li>
        </ul>
      </section>
    </LegalLayout>
  );
}
