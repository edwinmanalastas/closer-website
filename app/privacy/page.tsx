import LegalLayout from "@/components/LegalLayout";

export const metadata = {
  title: "Privacy Policy — Closer",
};

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="February 2026">
      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">
          1. Information We Collect
        </h2>

        <h3 className="font-medium text-foreground mt-6 mb-3">
          Profile Information
        </h3>
        <p className="mb-3">
          When you create an account, we collect information you provide
          directly:
        </p>
        <ul className="list-disc list-inside space-y-1.5">
          <li>
            First name (kept private until you confirm it in person with another
            user)
          </li>
          <li>Username (your public @handle)</li>
          <li>Date of birth</li>
          <li>Gender and gender preferences</li>
          <li>University (optional)</li>
          <li>
            &ldquo;Looking for&rdquo; tags (e.g., make new friends, networking,
            study buddy)
          </li>
          <li>Interests (selected from 15 categories)</li>
          <li>Profile photo and gallery photos (up to 2 additional)</li>
          <li>Bio (optional)</li>
          <li>Custom map emoji</li>
          <li>Phone number (used for authentication)</li>
          <li>Email (optional)</li>
        </ul>

        <h3 className="font-medium text-foreground mt-6 mb-3">
          Account Metadata
        </h3>
        <ul className="list-disc list-inside space-y-1.5">
          <li>Account creation date and last login timestamp</li>
          <li>Active session ID (for multi-device detection)</li>
          <li>Push notification token</li>
          <li>Onboarding progress</li>
          <li>House rules acceptance timestamp</li>
          <li>Permission statuses (notification, location)</li>
        </ul>

        <h3 className="font-medium text-foreground mt-6 mb-3">Location Data</h3>
        <p className="mb-3">
          We collect your real-time location{" "}
          <strong className="text-foreground">
            only while you are actively in a live session
          </strong>
          . This includes latitude, longitude, GPS accuracy, and geohash. Your
          location is updated approximately every 10 seconds while live.
        </p>
        <p className="mb-3">
          When you end your live session or go offline, your location data is
          automatically deleted.
        </p>
        <p className="mb-3">
          <strong className="text-foreground">
            Background location (&ldquo;Always Allow&rdquo;):
          </strong>{" "}
          This permission is requested so that location tracking continues when
          the app is backgrounded during a live or pairing session. The app does{" "}
          <strong className="text-foreground">not</strong> passively track your
          location when you are not live. When you end your session, location
          tracking stops completely.
        </p>
        <p>
          <strong className="text-foreground">Proximity notifications:</strong>{" "}
          When you go live, your location is saved as your &ldquo;last known
          location.&rdquo; This is used to notify nearby offline users that
          someone has gone live within 1km. This saved location expires after 1
          hour. Notifications are based on where you last went live, not your
          current location.
        </p>

        <h3 className="font-medium text-foreground mt-6 mb-3">
          Chat &amp; Messaging Data
        </h3>
        <ul className="list-disc list-inside space-y-1.5">
          <li>Message text content</li>
          <li>Sender ID and timestamp</li>
          <li>Message reactions</li>
          <li>Conversation participation records</li>
          <li>Unread message counts</li>
          <li>Muted friends list</li>
        </ul>

        <h3 className="font-medium text-foreground mt-6 mb-3">
          Analytics &amp; Telemetry
        </h3>
        <p className="mb-3">
          We collect anonymous usage data through Firebase Analytics, including
          event names and timestamps (e.g., &ldquo;live_start&rdquo;,
          &ldquo;message_sent&rdquo;), platform information, permission states,
          and error codes.
        </p>
        <p>
          <strong className="text-foreground">
            No personally identifiable information is included in telemetry
          </strong>{" "}
          — no email addresses, phone numbers, exact GPS coordinates, or raw
          user input. Only hashed user IDs are used.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">
          2. Permissions We Request
        </h2>

        <h3 className="font-medium text-foreground mt-4 mb-3">iOS</h3>
        <ul className="list-disc list-inside space-y-1.5">
          <li>
            <strong className="text-foreground">Location (foreground)</strong> —
            for map and live session positioning
          </li>
          <li>
            <strong className="text-foreground">
              Location (background/&ldquo;Always Allow&rdquo;)
            </strong>{" "}
            — to keep location active during live/pairing sessions when the app
            is backgrounded (not used for passive tracking)
          </li>
          <li>
            <strong className="text-foreground">Camera</strong> — for taking
            profile photos
          </li>
          <li>
            <strong className="text-foreground">Photo Library</strong> — for
            uploading profile and gallery photos
          </li>
          <li>
            <strong className="text-foreground">Push Notifications</strong> —
            for messages, proximity alerts, and pairing updates
          </li>
        </ul>

        <h3 className="font-medium text-foreground mt-6 mb-3">Android</h3>
        <ul className="list-disc list-inside space-y-1.5">
          <li>
            <strong className="text-foreground">
              Location (fine + background)
            </strong>{" "}
            — same as iOS
          </li>
          <li>
            <strong className="text-foreground">Camera</strong> — same as iOS
          </li>
          <li>
            <strong className="text-foreground">Media Library</strong> — for
            gallery access
          </li>
          <li>
            <strong className="text-foreground">Notifications</strong> — runtime
            permission for push notifications
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">
          3. Third-Party Services
        </h2>
        <p className="mb-4">
          We use the following third-party services to operate Closer:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="pb-3 pr-4 text-foreground font-medium">
                  Service
                </th>
                <th className="pb-3 pr-4 text-foreground font-medium">
                  Purpose
                </th>
                <th className="pb-3 text-foreground font-medium">
                  Data Shared
                </th>
              </tr>
            </thead>
            <tbody className="space-y-2">
              <tr className="border-b border-border/50">
                <td className="py-3 pr-4">Firebase Authentication</td>
                <td className="py-3 pr-4">Phone number sign-in</td>
                <td className="py-3">Phone number</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 pr-4">Firebase Firestore</td>
                <td className="py-3 pr-4">User profiles, reports</td>
                <td className="py-3">Profile data</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 pr-4">Firebase Realtime Database</td>
                <td className="py-3 pr-4">Location, messages, presence</td>
                <td className="py-3">Location while live, messages</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 pr-4">Firebase Storage</td>
                <td className="py-3 pr-4">Photo hosting</td>
                <td className="py-3">Profile and gallery photos</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 pr-4">Firebase Cloud Functions</td>
                <td className="py-3 pr-4">Backend logic, notifications</td>
                <td className="py-3">Processed server-side</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 pr-4">Firebase Cloud Messaging</td>
                <td className="py-3 pr-4">Push notifications</td>
                <td className="py-3">Device token</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 pr-4">Firebase Analytics</td>
                <td className="py-3 pr-4">Usage analytics</td>
                <td className="py-3">Non-PII event data</td>
              </tr>
              <tr>
                <td className="py-3 pr-4">Expo Location API</td>
                <td className="py-3 pr-4">GPS tracking</td>
                <td className="py-3">Location coordinates</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">
          4. Data Sharing
        </h2>
        <p>
          We do not sell your personal information. We share data only with the
          third-party service providers listed above, as necessary to operate
          Closer. We may also disclose information when required by law.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">
          5. Data Retention &amp; Deletion
        </h2>
        <ul className="list-disc list-inside space-y-1.5">
          <li>
            <strong className="text-foreground">Live location:</strong>{" "}
            Auto-deleted when you go offline (5-second grace period for
            reconnection)
          </li>
          <li>
            <strong className="text-foreground">Last known location:</strong>{" "}
            Expires after 90 seconds of staleness
          </li>
          <li>
            <strong className="text-foreground">Messages:</strong> Stored while
            friendship exists, archived when friendship ends
          </li>
          <li>
            <strong className="text-foreground">Profile photos:</strong> Deleted
            when you remove them or delete your account
          </li>
          <li>
            <strong className="text-foreground">Push tokens:</strong> Removed on
            logout
          </li>
          <li>
            <strong className="text-foreground">Analytics:</strong> Retained per
            Firebase Analytics default policies
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">
          6. Account Deletion
        </h2>
        <p className="mb-3">
          You can delete your account at any time through Settings. When you
          delete your account, we:
        </p>
        <ol className="list-decimal list-inside space-y-1.5">
          <li>Delete all photos from cloud storage</li>
          <li>Remove your push notification token</li>
          <li>Clear your presence and location data</li>
          <li>Archive conversations and delete friendship records</li>
          <li>Delete your user profile</li>
          <li>Clear all local storage on your device</li>
          <li>Sign you out</li>
        </ol>
        <p className="mt-3">
          Your authentication record is retained to allow re-registration with
          the same phone number if you choose to return.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">
          7. Security Measures
        </h2>
        <ul className="list-disc list-inside space-y-1.5">
          <li>
            <strong className="text-foreground">
              Multi-device detection:
            </strong>{" "}
            A session ID is generated on login. Signing in on a new device
            automatically logs out the previous device.
          </li>
          <li>
            <strong className="text-foreground">
              GPS accuracy filtering:
            </strong>{" "}
            We reject location data with accuracy greater than 500 meters to
            prevent spoofing.
          </li>
          <li>
            <strong className="text-foreground">Message rate limiting:</strong>{" "}
            Server-side rate limits prevent spam.
          </li>
          <li>
            <strong className="text-foreground">
              Database security rules:
            </strong>{" "}
            Users can only read and write their own data. Conversations are
            restricted to participants.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">
          8. Contact
        </h2>
        <p>
          If you have questions about this privacy policy, please contact us at{" "}
          <a
            href="mailto:support@closerapp.app"
            className="text-primary hover:underline"
          >
            support@closerapp.app
          </a>
          .
        </p>
      </section>

      <p className="text-sm text-muted/60 italic mt-12">
        This privacy policy will be reviewed and updated by legal counsel before
        the app&apos;s public launch.
      </p>
    </LegalLayout>
  );
}
