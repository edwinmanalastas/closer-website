import ScrollReveal from "./ScrollReveal";
import AppStoreBadge from "./AppStoreBadge";

export default function CTA() {
  return (
    <section id="download" className="py-20 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="relative rounded-3xl overflow-hidden px-6 py-16 sm:px-8 sm:py-20 md:px-16 md:py-24 text-center">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent" />
            <div className="absolute inset-0 border border-primary/20 rounded-3xl" />

            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6">
                Ready to meet
                <br />
                someone new?
              </h2>
              <p className="text-muted text-base sm:text-lg mb-10 max-w-lg mx-auto">
                Download Closer and start making real friends on campus.
              </p>
              <AppStoreBadge className="justify-center" />
              <p className="text-muted/50 text-sm mt-10">
                Built by a student, for students.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
