import ScrollReveal from "./ScrollReveal";

const timeline = [
  {
    time: "11:50 AM",
    title: "Class just ended",
    description: "You're hungry but no one's free.",
  },
  {
    time: "11:52 AM",
    title: "You go live",
    description: "You open Closer and go live near the dining hall.",
  },
  {
    time: "11:53 AM",
    title: "You match",
    description:
      "Someone nearby is also live — you match and head toward each other.",
  },
  {
    time: "12:00 PM",
    title: "New friend",
    description: "You meet, exchange names, and grab lunch together.",
  },
  {
    time: "That evening",
    title: "Staying connected",
    description: "You message your new friend to study together tomorrow.",
  },
];

export default function Scenario() {
  return (
    <section id="scenario" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-4">
              Your Day
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Here&apos;s what your day could look like.
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal stagger>
          <div className="max-w-xl mx-auto">
            {timeline.map((step, index) => (
              <div key={step.time} className="reveal flex gap-6">
                {/* Timeline line + dot */}
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-primary shrink-0 mt-1.5" />
                  {index < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-border" />
                  )}
                </div>

                {/* Content */}
                <div className={index < timeline.length - 1 ? "pb-10" : ""}>
                  <span className="text-xs font-mono text-primary block mb-1">
                    {step.time}
                  </span>
                  <h3 className="font-semibold mb-1">{step.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
