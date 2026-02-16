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
        <p>
          When you use Closer, we collect information you provide directly, such
          as your name, university, date of birth, profile photos, and
          interests. We also collect location data when you choose to go live on
          the campus map.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">
          2. How We Use Your Information
        </h2>
        <p>
          We use your information to provide and improve Closer&apos;s services,
          including matching you with nearby users, facilitating conversations,
          and ensuring the safety of our community. Your location data is only
          shared while you have an active live session.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">
          3. Location Data
        </h2>
        <p>
          Closer uses your location only during active live sessions. When you
          end a session or go offline, your location is no longer visible to
          other users. We do not track or store your location history beyond
          what is needed for active sessions.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">
          4. Data Sharing
        </h2>
        <p>
          We do not sell your personal information. We may share limited data
          with service providers who help us operate Closer (such as cloud
          hosting and analytics), and we may disclose information when required
          by law.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">
          5. Your Rights
        </h2>
        <p>
          You can request to view, update, or delete your personal data at any
          time through the app settings. You may also contact us directly to
          exercise your privacy rights.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">
          6. Contact
        </h2>
        <p>
          If you have questions about this privacy policy, please contact us
          through the Support page or email us at privacy@getcloser.app.
        </p>
      </section>

      <p className="text-sm text-muted/60 italic mt-12">
        This is a placeholder privacy policy. A complete legal document will be
        published before the app&apos;s public launch.
      </p>
    </LegalLayout>
  );
}
