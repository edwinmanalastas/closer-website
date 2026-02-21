import PhoneMockup from "./PhoneMockup";
import ScrollReveal from "./ScrollReveal";
import AppStoreBadge from "./AppStoreBadge";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Purple gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center mt-4 lg:mt-0">
          {/* Mobile: Small phone mockup above text */}
          <div className="lg:hidden flex justify-center h-0 overflow-visible">
            <div className="scale-[0.32] origin-center -mt-[210px]">
              <PhoneMockup>
                <video
                  src="/videos/hero-map.mp4"
                  poster="/images/poster-hero-map.jpg"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </PhoneMockup>
            </div>
          </div>

          {/* Left: Copy */}
          <ScrollReveal>
            <div className="max-w-xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-3 lg:mb-6">
                Real connection
                <br />
                <span className="text-primary">starts in person.</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted leading-relaxed mb-6 lg:mb-10 max-w-md">
                Like Pokemon GO for making friends on campus. Go live, get
                paired with someone nearby, and meet in minutes — not days.
              </p>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <AppStoreBadge />
                <a
                  href="#how-it-works"
                  className="inline-flex items-center gap-2 px-5 py-3 sm:px-7 sm:py-3.5 border border-border text-foreground hover:bg-black/5 font-medium rounded-full transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Phone mockup */}
          <ScrollReveal className="hidden lg:flex justify-center">
            <PhoneMockup>
              <video
                src="/videos/hero-map.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </PhoneMockup>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
