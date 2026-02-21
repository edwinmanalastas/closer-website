import LegalLayout from "@/components/LegalLayout";

export const metadata = {
  title: "Privacy Policy — Closer",
  description: "Learn how Closer collects, uses, and protects your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="February 2026">
      <section>
        <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-4">
          1. Introduction
        </h2>
        <p className="mb-3">
          Closer (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
          operates the Closer mobile application and the website located at{" "}
          <a
            href="https://closerapp.app"
            className="text-primary hover:underline"
          >
            closerapp.app
          </a>{" "}
          (collectively, the &ldquo;Service&rdquo;). This Privacy Policy
          explains how we collect, use, share, and protect your personal
          information when you use our Service.
        </p>
        <p className="mb-3">
          By creating an account or using the Service, you agree to the
          collection and use of information in accordance with this Privacy
          Policy. If you do not agree with any part of this policy, please do
          not use the Service.
        </p>
        <p>
          This Privacy Policy applies to all users of the Closer mobile
          application on iOS and Android, as well as visitors to our website.
        </p>
      </section>

      <section>
        <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-4">
          2. Information We Collect
        </h2>

        <h3 className="font-medium text-foreground mt-6 mb-3">
          2.1 Profile Information
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
          <li>Interests (selected from predefined categories)</li>
          <li>Profile photo and gallery photos (up to 2 additional)</li>
          <li>Bio (optional)</li>
          <li>Custom map emoji</li>
          <li>Phone number (used for authentication)</li>
          <li>Email address (optional)</li>
        </ul>

        <h3 className="font-medium text-foreground mt-6 mb-3">
          2.2 Account Metadata
        </h3>
        <p className="mb-3">
          We automatically collect certain information related to your account:
        </p>
        <ul className="list-disc list-inside space-y-1.5">
          <li>Account creation date and last login timestamp</li>
          <li>Active session ID (for multi-device detection)</li>
          <li>Push notification token</li>
          <li>Onboarding progress</li>
          <li>House rules acceptance timestamp</li>
          <li>Permission statuses (notification, location)</li>
        </ul>

        <h3 className="font-medium text-foreground mt-6 mb-3">
          2.3 Location Data
        </h3>
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
          automatically deleted from our real-time database.
        </p>
        <p className="mb-3">
          <strong className="text-foreground">
            Background location (&ldquo;Always Allow&rdquo;):
          </strong>{" "}
          This permission is requested so that location tracking continues when
          the app is backgrounded during a pairing session. The app does{" "}
          <strong className="text-foreground">not</strong> passively track your
          location when you are not live. When you end your session, location
          tracking stops completely.
        </p>
        <p>
          <strong className="text-foreground">Proximity notifications:</strong>{" "}
          When you go live, your location is saved as your &ldquo;last known
          location.&rdquo; This is used to notify nearby offline users that
          someone has gone live within 1km of where they last went live. This
          saved location expires after 1 hour. Notifications are based on where
          you last went live, not your current location.
        </p>

        <h3 className="font-medium text-foreground mt-6 mb-3">
          2.4 Chat &amp; Messaging Data
        </h3>
        <p className="mb-3">
          When you use our messaging features, we collect:
        </p>
        <ul className="list-disc list-inside space-y-1.5">
          <li>Message text content</li>
          <li>Sender ID and timestamp</li>
          <li>Message reactions</li>
          <li>Conversation participation records</li>
          <li>Unread message counts</li>
          <li>Muted friends list</li>
        </ul>

        <h3 className="font-medium text-foreground mt-6 mb-3">
          2.5 Analytics &amp; Telemetry
        </h3>
        <p className="mb-3">
          We collect anonymous usage data through Firebase Analytics, including
          event names and timestamps (e.g., &ldquo;live_start,&rdquo;
          &ldquo;message_sent&rdquo;), platform information, permission states,
          and error codes.
        </p>
        <p>
          <strong className="text-foreground">
            No personally identifiable information is included in telemetry
          </strong>{" "}
          — no email addresses, phone numbers, exact GPS coordinates, or raw
          user input. Only hashed user IDs are used for analytics purposes.
        </p>
      </section>

      <section>
        <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-4">
          3. How We Use Your Information
        </h2>
        <p className="mb-3">
          We use the information we collect for the following purposes:
        </p>
        <ul className="list-disc list-inside space-y-1.5">
          <li>
            <strong className="text-foreground">
              Provide and operate the Service
            </strong>{" "}
            — create and maintain your account, display your profile to other
            users, and enable core app features
          </li>
          <li>
            <strong className="text-foreground">Enable live sessions</strong> —
            show your location on the map to nearby users when you choose to go
            live, and facilitate in-person meetups through our pairing system
          </li>
          <li>
            <strong className="text-foreground">Send notifications</strong> —
            deliver push notifications for messages, proximity alerts when
            someone nearby goes live, and pairing updates
          </li>
          <li>
            <strong className="text-foreground">
              Facilitate messaging
            </strong>{" "}
            — enable 1:1 messaging between users who have met in person and
            added each other as friends
          </li>
          <li>
            <strong className="text-foreground">
              Improve and optimize the Service
            </strong>{" "}
            — analyze anonymous usage patterns to identify issues, improve
            features, and enhance the user experience
          </li>
          <li>
            <strong className="text-foreground">Safety and moderation</strong> —
            investigate reports, enforce our Community Guidelines and Terms
            and Conditions, and protect users from harmful behavior
          </li>
          <li>
            <strong className="text-foreground">
              Authenticate your identity
            </strong>{" "}
            — verify your phone number to prevent fake accounts and enable
            secure sign-in
          </li>
          <li>
            <strong className="text-foreground">Comply with legal obligations</strong>{" "}
            — respond to lawful requests from authorities where required by
            applicable law
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-4">
          4. How We Share Your Information
        </h2>
        <p className="mb-3">
          <strong className="text-foreground">
            We do not sell, rent, or trade your personal information.
          </strong>{" "}
          We share your data only in the following limited circumstances:
        </p>
        <ul className="list-disc list-inside space-y-1.5">
          <li>
            <strong className="text-foreground">
              With other Closer users
            </strong>{" "}
            — when you go live, nearby users can see your username, photos, and
            approximate location on the map. Your first name is only revealed
            when you introduce yourself in person.
          </li>
          <li>
            <strong className="text-foreground">
              With service providers
            </strong>{" "}
            — we use Firebase (operated by Google) as our infrastructure
            provider to host data, send notifications, and process backend
            logic. See Section 5 for a complete list.
          </li>
          <li>
            <strong className="text-foreground">For legal compliance</strong> —
            we may disclose your information if required to do so by law or in
            response to valid legal requests by public authorities (e.g., a
            court order or government agency).
          </li>
          <li>
            <strong className="text-foreground">To protect safety</strong> — we
            may share information if we believe in good faith that disclosure is
            necessary to protect the safety of our users, investigate fraud, or
            respond to a safety emergency.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-4">
          5. Third-Party Services
        </h2>
        <p className="mb-4">
          We use the following third-party services to operate the Service. These
          providers process data on our behalf and are subject to their own
          privacy policies:
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
        <p className="mt-4">
          All Firebase services are operated by Google and are subject to{" "}
          <a
            href="https://firebase.google.com/support/privacy"
            className="text-primary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google&apos;s Privacy Policy
          </a>
          . We do not use any advertising networks, social media tracking
          pixels, or other third-party analytics beyond Firebase Analytics.
        </p>
      </section>

      <section>
        <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-4">
          6. Permissions We Request
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
            — to keep location active during pairing sessions when the app is
            backgrounded (not used for passive tracking)
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

        <p className="mt-4">
          All permissions are requested at the point of use with a clear
          explanation of why the permission is needed. You can revoke any
          permission at any time through your device settings, though this may
          limit certain features of the Service.
        </p>
      </section>

      <section>
        <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-4">
          7. Data Retention
        </h2>
        <p className="mb-3">
          We retain your information only for as long as necessary to provide
          the Service and fulfill the purposes described in this policy:
        </p>
        <ul className="list-disc list-inside space-y-1.5">
          <li>
            <strong className="text-foreground">Live location:</strong>{" "}
            Automatically deleted when you go offline (5-second grace period for
            reconnection)
          </li>
          <li>
            <strong className="text-foreground">Last known location:</strong>{" "}
            Expires after 1 hour and is no longer used for proximity
            notifications
          </li>
          <li>
            <strong className="text-foreground">Messages:</strong> Stored while
            friendship exists, archived when a friendship ends
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
            <strong className="text-foreground">Profile data:</strong> Retained
            until you delete your account
          </li>
          <li>
            <strong className="text-foreground">Analytics data:</strong>{" "}
            Retained per Firebase Analytics default retention policies (up to 14
            months)
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-4">
          8. Account Deletion
        </h2>
        <p className="mb-3">
          You can delete your account at any time through Settings in the app.
          When you delete your account, we perform the following steps:
        </p>
        <ol className="list-decimal list-inside space-y-1.5">
          <li>Delete all photos from cloud storage</li>
          <li>Remove your push notification token</li>
          <li>Clear your presence and location data</li>
          <li>Archive conversations and delete friendship records</li>
          <li>Delete your user profile from the database</li>
          <li>Clear all local storage on your device</li>
          <li>Sign you out of the Service</li>
        </ol>
        <p className="mt-3">
          Your Firebase Authentication record (phone number) is retained solely
          to allow re-registration with the same phone number if you choose to
          return. If you wish to have your authentication record fully removed,
          please contact us at{" "}
          <a
            href="mailto:support@closerapp.app"
            className="text-primary hover:underline"
          >
            support@closerapp.app
          </a>
          .
        </p>
        <p className="mt-3">
          Account deletion is permanent and cannot be undone. We aim to complete
          all data deletion within 30 days of your request, though most data is
          deleted immediately.
        </p>
      </section>

      <section>
        <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-4">
          9. Your Privacy Rights
        </h2>
        <p className="mb-3">
          Depending on your jurisdiction, you may have the following rights
          regarding your personal information:
        </p>
        <ul className="list-disc list-inside space-y-1.5">
          <li>
            <strong className="text-foreground">Access</strong> — request a copy
            of the personal data we hold about you
          </li>
          <li>
            <strong className="text-foreground">Correction</strong> — request
            that we correct inaccurate or incomplete personal data (you can also
            update most information directly in the app)
          </li>
          <li>
            <strong className="text-foreground">Deletion</strong> — request
            deletion of your personal data (available directly through the app
            via Settings, or by contacting us)
          </li>
          <li>
            <strong className="text-foreground">Data Portability</strong> —
            request a copy of your data in a structured, machine-readable format
          </li>
          <li>
            <strong className="text-foreground">
              Opt-out of notifications
            </strong>{" "}
            — you can disable proximity notifications and other notification
            types through the app&apos;s settings or your device settings
          </li>
          <li>
            <strong className="text-foreground">Withdraw consent</strong> — you
            can revoke device permissions (location, camera, photos,
            notifications) at any time through your device settings
          </li>
        </ul>
        <p className="mt-3">
          To exercise any of these rights, please contact us at{" "}
          <a
            href="mailto:support@closerapp.app"
            className="text-primary hover:underline"
          >
            support@closerapp.app
          </a>
          . We will respond to your request within 30 days.
        </p>
      </section>

      <section>
        <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-4">
          10. Children&apos;s Privacy
        </h2>
        <p className="mb-3">
          The Service is intended for users who are 18 years of age or older. We
          do not knowingly collect personal information from anyone under the
          age of 18. During account creation, users are required to provide
          their date of birth, and accounts are restricted to individuals who
          are at least 18 years old.
        </p>
        <p>
          If we learn that we have collected personal information from a user
          under 18, we will take steps to delete that information as promptly as
          possible. If you believe that a user under 18 has provided us with
          personal information, please contact us at{" "}
          <a
            href="mailto:support@closerapp.app"
            className="text-primary hover:underline"
          >
            support@closerapp.app
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-4">
          11. Security Measures
        </h2>
        <p className="mb-3">
          We implement appropriate technical and organizational measures to
          protect your personal information:
        </p>
        <ul className="list-disc list-inside space-y-1.5">
          <li>
            <strong className="text-foreground">
              Multi-device detection:
            </strong>{" "}
            A unique session ID is generated on login. Signing in on a new
            device automatically logs out the previous device, preventing
            unauthorized concurrent access.
          </li>
          <li>
            <strong className="text-foreground">
              GPS accuracy filtering:
            </strong>{" "}
            We reject location data with accuracy greater than 500 meters to
            prevent location spoofing.
          </li>
          <li>
            <strong className="text-foreground">Message rate limiting:</strong>{" "}
            Server-side rate limits prevent spam and abuse in messaging.
          </li>
          <li>
            <strong className="text-foreground">
              Database security rules:
            </strong>{" "}
            Users can only read and write their own data. Conversations and
            messages are restricted to participants only.
          </li>
          <li>
            <strong className="text-foreground">
              Encrypted transmission:
            </strong>{" "}
            All data transmitted between the app and our servers is encrypted
            using TLS/SSL.
          </li>
        </ul>
        <p className="mt-3">
          While we take reasonable precautions to protect your information, no
          method of electronic transmission or storage is 100% secure. We
          cannot guarantee absolute security of your data.
        </p>
      </section>

      <section>
        <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-4">
          12. Changes to This Privacy Policy
        </h2>
        <p className="mb-3">
          We may update this Privacy Policy from time to time to reflect changes
          in our practices, technology, legal requirements, or other factors. We
          will notify you of any material changes by:
        </p>
        <ul className="list-disc list-inside space-y-1.5">
          <li>Posting the updated policy on this page with a new &ldquo;Last updated&rdquo; date</li>
          <li>Sending a notification through the app for significant changes</li>
        </ul>
        <p className="mt-3">
          We encourage you to review this Privacy Policy periodically. Your
          continued use of the Service after any changes constitutes your
          acceptance of the updated policy.
        </p>
      </section>

      <section>
        <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-4">
          13. Contact Us
        </h2>
        <p className="mb-3">
          If you have any questions, concerns, or requests regarding this
          Privacy Policy or our data practices, please contact us at:
        </p>
        <p>
          <a
            href="mailto:support@closerapp.app"
            className="text-primary hover:underline"
          >
            support@closerapp.app
          </a>
        </p>
      </section>
    </LegalLayout>
  );
}
