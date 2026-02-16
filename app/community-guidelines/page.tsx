import LegalLayout from "@/components/LegalLayout";

export const metadata = {
  title: "Community Guidelines — Closer",
};

export default function CommunityGuidelines() {
  return (
    <LegalLayout title="Community Guidelines" lastUpdated="February 2026">
      <section>
        <p>
          Closer is a space for genuine, respectful connection. These guidelines
          exist to keep our community safe and welcoming for everyone. By using
          Closer, you agree to follow these rules.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Be Respectful and Genuine
        </h2>
        <p>
          Treat every person you meet on Closer with kindness and respect.
          Everyone on the app is looking to make real connections — approach
          every interaction in good faith.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">
          No Harassment, Hate Speech, or Discrimination
        </h2>
        <p>
          Harassment, bullying, threats, hate speech, and discrimination of any
          kind are strictly prohibited. This includes behavior both within the
          app and during in-person meetups facilitated by Closer.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">
          No Impersonation or Fake Profiles
        </h2>
        <p>
          Be yourself. Do not create fake profiles, impersonate others, or
          misrepresent your identity. Your profile photos should be of you.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Meet in Public Spaces
        </h2>
        <p>
          Closer is designed for meeting in public campus environments — dining
          halls, libraries, quads, and other shared spaces. Always meet in
          public, well-lit areas.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">
          No Commercial Activity or Solicitation
        </h2>
        <p>
          Closer is not a platform for advertising, selling, recruiting, or any
          form of commercial solicitation. Use it to make friends, not to
          promote products or services.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Report Concerning Behavior
        </h2>
        <p>
          If someone makes you uncomfortable or violates these guidelines,
          report them immediately through the app. You can also block any user
          at any time. Every report is reviewed by our team.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Age Requirement
        </h2>
        <p>
          You must be at least 18 years old to use Closer. By creating an
          account, you confirm that you meet this requirement.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">
          One Account Per Person
        </h2>
        <p>
          Each person may have only one Closer account. Creating multiple
          accounts is not allowed and may result in all accounts being
          suspended.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Respect Others&apos; Privacy
        </h2>
        <p>
          Do not share other users&apos; personal information, photos, or
          conversations outside of Closer without their explicit consent.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Consequences
        </h2>
        <p>
          Violations of these guidelines may result in warnings, temporary
          suspension, or permanent removal from Closer, depending on the
          severity of the offense. We reserve the right to take action at our
          discretion to protect the community.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Questions?
        </h2>
        <p>
          If you have questions about these guidelines, contact us at{" "}
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
        These community guidelines will be reviewed and updated before the
        app&apos;s public launch.
      </p>
    </LegalLayout>
  );
}
