import ScrollReveal from "./ScrollReveal";

export default function CTA() {
  return (
    <section id="download" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="relative rounded-3xl overflow-hidden px-8 py-20 md:px-16 md:py-24 text-center">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent" />
            <div className="absolute inset-0 border border-primary/20 rounded-3xl" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to meet
                <br />
                someone new?
              </h2>
              <p className="text-muted text-lg mb-10 max-w-md mx-auto">
                Download Closer and start making real friends on campus.
              </p>
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-hover text-white font-medium rounded-full transition-colors text-lg"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M14.94 5.19A4.38 4.38 0 0 0 11.5 3.5a4.15 4.15 0 0 0-1 .13A3.07 3.07 0 0 0 9.5 2a3.07 3.07 0 0 0-1 1.63 4.15 4.15 0 0 0-1-.13A4.38 4.38 0 0 0 4.06 5.19 4.47 4.47 0 0 0 3 8.5c0 2.79 1.94 5.72 3.5 7.5.78.89 1.58 1.5 2 1.5s1.22-.61 2-1.5C12.06 14.22 14 11.29 14 8.5a4.47 4.47 0 0 0-1.06-3.31z" />
                </svg>
                Download for iOS
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
