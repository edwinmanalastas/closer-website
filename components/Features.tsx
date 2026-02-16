import ScrollReveal from "./ScrollReveal";

const features = [
  {
    icon: "🗺️",
    title: "Live Campus Map",
    description:
      "See who's around you in real-time with an interactive 3D map. Go live and show up for others nearby.",
  },
  {
    icon: "⚡",
    title: "Smart Pairing",
    description:
      "Matched with nearby people based on proximity and shared interests. No endless swiping.",
  },
  {
    icon: "🎯",
    title: "Conversation Starters",
    description:
      "Three levels of prompts — from light to deep — to help you break the ice naturally.",
  },
  {
    icon: "🤝",
    title: "Real Meetups",
    description:
      "Compass-guided navigation to find your match in person. Meet in minutes, not days.",
  },
  {
    icon: "💬",
    title: "Messaging",
    description:
      "Stay connected after meeting with in-app chat. Keep building the friendships you start.",
  },
  {
    icon: "🛡️",
    title: "Built for Safety",
    description:
      "Timed sessions, blocking, reporting, and no photos on the map. Your safety comes first.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-4">
              Features
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Everything you need to connect.
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal stagger>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="reveal p-8 rounded-2xl border border-border bg-card/50 hover:bg-card transition-colors group"
              >
                <div className="text-3xl mb-5 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
