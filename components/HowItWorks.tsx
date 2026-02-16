import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    number: "01",
    icon: "📍",
    title: "Go Live",
    description:
      "Open the map and go live. See who's around you on campus right now.",
  },
  {
    number: "02",
    icon: "🤝",
    title: "Get Paired",
    description:
      "Match with someone nearby and meet up in person.",
  },
  {
    number: "03",
    icon: "💬",
    title: "Make a Friend",
    description:
      "Exchange names and add each other as friends.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-4">
              How It Works
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Three steps to a new friend.
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal stagger>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className="reveal relative p-8 rounded-2xl border border-border bg-card/50 hover:bg-card transition-colors"
              >
                <span className="text-xs font-mono text-primary/50 mb-4 block">
                  {step.number}
                </span>
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
