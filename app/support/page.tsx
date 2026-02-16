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
          We&apos;re here to help you get the most out of Closer. Whether
          you&apos;re having technical issues, have questions about the app, or
          want to report a concern, we&apos;ve got you covered.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Contact Us
        </h2>
        <p className="mb-4">
          The fastest way to reach us is through the app — go to Settings and
          tap &quot;Message the Founder.&quot; We typically respond within 24
          hours.
        </p>
        <p>
          You can also email us at{" "}
          <a
            href="mailto:support@closerapp.app"
            className="text-primary hover:underline"
          >
            support@closerapp.app
          </a>
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Common Questions
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-medium text-foreground mb-2">
              How do I go live?
            </h3>
            <p>
              Open the app, tap the &quot;Go Live&quot; button on the map
              screen, and you&apos;ll be visible to other nearby users for up to
              30 minutes.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-2">
              Is my location always visible?
            </h3>
            <p>
              No. Your location is only shared while you have an active live
              session. When the session ends, you disappear from the map.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-2">
              How do I report someone?
            </h3>
            <p>
              You can report a user from their profile or from the chat screen.
              Tap the menu icon and select &quot;Report.&quot; Our team reviews
              every report.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-2">
              How do I delete my account?
            </h3>
            <p>
              Go to Settings, scroll to the bottom, and tap &quot;Delete
              Account.&quot; This will permanently remove your profile and all
              associated data.
            </p>
          </div>
        </div>
      </section>

      <p className="text-sm text-muted/60 italic mt-12">
        This support page is a placeholder. A full help center will be available
        at launch.
      </p>
    </LegalLayout>
  );
}
