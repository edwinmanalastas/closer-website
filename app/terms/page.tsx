import LegalLayout from "@/components/LegalLayout";

export const metadata = {
  title: "Terms of Service — Closer",
};

export default function TermsOfService() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="February 2026">
      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">
          1. Acceptance of Terms
        </h2>
        <p>
          By downloading, accessing, or using Closer, you agree to be bound by
          these Terms of Service. If you do not agree, please do not use the
          app.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">
          2. Eligibility
        </h2>
        <p>
          Closer is designed for university students and young adults aged 18
          and older. By using Closer, you confirm that you are at least 18
          years old and are currently enrolled at or affiliated with a
          university.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">
          3. User Conduct
        </h2>
        <p>
          You agree to use Closer respectfully and in good faith. Harassment,
          hate speech, impersonation, spam, and any behavior that threatens the
          safety or comfort of other users is strictly prohibited and may result
          in account suspension or termination.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">
          4. Account Responsibility
        </h2>
        <p>
          You are responsible for maintaining the security of your account. Do
          not share your login credentials. You are responsible for all
          activity that occurs under your account.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">
          5. Content
        </h2>
        <p>
          You retain ownership of content you post on Closer (photos, messages,
          etc.). By posting content, you grant Closer a limited license to
          display it within the app as necessary to provide our services.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">
          6. Termination
        </h2>
        <p>
          We reserve the right to suspend or terminate accounts that violate
          these terms. You may delete your account at any time through the app
          settings.
        </p>
      </section>

      <p className="text-sm text-muted/60 italic mt-12">
        This is a placeholder terms of service. A complete legal document will
        be published before the app&apos;s public launch.
      </p>
    </LegalLayout>
  );
}
