import PhoneMockup from "./PhoneMockup";
import ScrollReveal from "./ScrollReveal";
import AppStoreBadge from "./AppStoreBadge";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Purple gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <ScrollReveal>
            <div className="max-w-xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
                Real connection
                <br />
                <span className="text-primary">starts in person.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted leading-relaxed mb-10 max-w-md">
                Like Pokemon GO for making friends on campus. Go live, get
                paired with someone nearby, and meet in minutes — not days.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <AppStoreBadge />
                <a
                  href="#how-it-works"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-border text-foreground hover:bg-white/5 font-medium rounded-full transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Phone mockup */}
          <ScrollReveal className="hidden lg:flex justify-center">
            <PhoneMockup>
              {/* Stylized map screen placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-[#1a1a2e] to-[#0A0A0F] relative">
                {/* Grid pattern */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(123,91,253,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(123,91,253,0.3) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
                {/* Map dots */}
                <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-primary rounded-full animate-pulse" />
                <div className="absolute top-1/2 right-1/3 w-2.5 h-2.5 bg-primary/70 rounded-full animate-pulse [animation-delay:0.5s]" />
                <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-primary/50 rounded-full animate-pulse [animation-delay:1s]" />
                <div className="absolute top-2/3 left-1/3 w-3.5 h-3.5 bg-primary rounded-full animate-pulse [animation-delay:0.3s]" />
                {/* Center user */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-lg shadow-[0_0_20px_rgba(123,91,253,0.5)]">
                    👋
                  </div>
                </div>
              </div>
            </PhoneMockup>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
