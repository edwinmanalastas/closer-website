import PhoneMockup from "./PhoneMockup";
import ScrollReveal from "./ScrollReveal";

const safetyPoints = [
  {
    title: "Timed Sessions",
    description:
      "Live sessions have a 30-minute window. You control when you're visible.",
  },
  {
    title: "No Photos on the Map",
    description:
      "You show up as an emoji, not a photo. Your identity stays private until you meet.",
  },
  {
    title: "Blocking & Reporting",
    description:
      "One-tap blocking and reporting keeps the community safe and respectful.",
  },
  {
    title: "Campus-Focused",
    description:
      "Built specifically for university students in campus environments.",
  },
];

export default function Safety() {
  return (
    <section id="safety" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div>
              <p className="text-primary text-sm font-medium tracking-wider uppercase mb-4">
                Safety
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Safety is not an
                <br />
                afterthought.
              </h2>
              <p className="text-muted text-lg mb-10 max-w-md">
                Every feature in Closer is designed with your safety and comfort
                in mind.
              </p>

              <div className="space-y-6">
                {safetyPoints.map((point) => (
                  <div key={point.title} className="flex gap-4">
                    <div className="mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{point.title}</h3>
                      <p className="text-muted text-sm leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="hidden lg:flex justify-center">
            <PhoneMockup>
              {/* Stylized safety screen */}
              <div className="w-full h-full bg-gradient-to-br from-[#1a1a2e] to-[#0A0A0F] flex flex-col items-center justify-center gap-6 px-6">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-3xl">🛡️</span>
                </div>
                <div className="text-center">
                  <div className="text-white text-sm font-medium mb-1">
                    You&apos;re Protected
                  </div>
                  <div className="text-white/40 text-xs">
                    Session active · 24:30 remaining
                  </div>
                </div>
                <div className="w-full space-y-2">
                  <div className="h-8 bg-white/5 rounded-lg" />
                  <div className="h-8 bg-white/5 rounded-lg" />
                  <div className="h-8 bg-primary/10 rounded-lg border border-primary/20" />
                </div>
              </div>
            </PhoneMockup>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
