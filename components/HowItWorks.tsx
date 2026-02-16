import PhoneMockup from "./PhoneMockup";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Go Live",
    description:
      "Open the map and go live. See who's around you on campus right now.",
    screen: "go-live",
  },
  {
    number: "02",
    title: "Get Paired",
    description:
      "Match with someone nearby and meet up in person.",
    screen: "get-paired",
  },
  {
    number: "03",
    title: "Make a Friend",
    description:
      "Exchange names and add each other as friends.",
    screen: "make-friend",
  },
];

function GoLiveScreen() {
  return (
    <div className="w-full h-full bg-[#1a1a2e] relative overflow-hidden">
      {/* Map grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: "linear-gradient(rgba(123,91,253,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(123,91,253,0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />
      </div>
      {/* Map road lines */}
      <div className="absolute top-1/3 left-0 right-0 h-[2px] bg-white/10" />
      <div className="absolute top-0 bottom-0 left-1/3 w-[2px] bg-white/10" />
      <div className="absolute top-0 bottom-0 right-1/4 w-[2px] bg-white/10" />
      <div className="absolute top-2/3 left-0 right-0 h-[2px] bg-white/10" />
      {/* Emoji markers */}
      <div className="absolute top-[25%] left-[20%] text-2xl animate-bounce" style={{ animationDuration: "3s" }}>🎧</div>
      <div className="absolute top-[45%] right-[25%] text-2xl animate-bounce" style={{ animationDuration: "2.5s" }}>🏀</div>
      <div className="absolute top-[60%] left-[40%] text-2xl animate-bounce" style={{ animationDuration: "3.5s" }}>🎨</div>
      {/* Center user marker */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <div className="absolute -inset-3 rounded-full bg-primary/20 animate-ping" style={{ animationDuration: "2s" }} />
          <div className="w-10 h-10 rounded-full bg-primary/30 border-2 border-primary flex items-center justify-center text-lg">
            😊
          </div>
        </div>
      </div>
      {/* Ready button */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="px-8 py-2.5 bg-primary rounded-full text-white text-xs font-semibold shadow-lg shadow-primary/30">
          Ready
        </div>
      </div>
      {/* Live indicator */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
          <span className="text-[10px] text-white/70 font-medium">3 nearby</span>
        </div>
      </div>
    </div>
  );
}

function GetPairedScreen() {
  return (
    <div className="w-full h-full bg-[#1a1a2e] relative overflow-hidden">
      {/* Map background */}
      <div className="absolute inset-0 opacity-15">
        <div className="w-full h-full" style={{
          backgroundImage: "linear-gradient(rgba(123,91,253,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(123,91,253,0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />
      </div>
      {/* Timer */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30">
          <span className="text-[11px] text-primary font-semibold">14:32</span>
        </div>
      </div>
      {/* Your marker */}
      <div className="absolute top-[55%] left-[30%]">
        <div className="w-10 h-10 rounded-full bg-primary/30 border-2 border-primary flex items-center justify-center text-lg">
          😊
        </div>
      </div>
      {/* Match marker */}
      <div className="absolute top-[35%] right-[25%]">
        <div className="w-10 h-10 rounded-full bg-orange-500/30 border-2 border-orange-400 flex items-center justify-center text-lg">
          🎵
        </div>
      </div>
      {/* Dashed line between markers */}
      <div className="absolute top-[38%] left-[38%] w-[20%] h-[15%]">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <line x1="0" y1="100" x2="100" y2="0" stroke="rgba(123,91,253,0.4)" strokeWidth="2" strokeDasharray="6 4" />
        </svg>
      </div>
      {/* Distance indicator */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2">
        <div className="text-center">
          <div className="text-2xl font-bold text-white">120m</div>
          <div className="text-[10px] text-white/50 mt-0.5">away</div>
        </div>
      </div>
      {/* SpotYou card */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10">
          <div className="text-[10px] text-white/50 mb-1">Help them spot you</div>
          <div className="text-[11px] text-white/80">Red sweater by the windows ✌️</div>
        </div>
      </div>
    </div>
  );
}

function MakeFriendScreen() {
  return (
    <div className="w-full h-full bg-gradient-to-b from-[#1a1a2e] to-[#2a1a4e] relative overflow-hidden flex flex-col items-center justify-center gap-4">
      {/* Confetti dots */}
      <div className="absolute top-[10%] left-[15%] w-2 h-2 rounded-full bg-primary/60" />
      <div className="absolute top-[8%] right-[20%] w-1.5 h-1.5 rounded-full bg-orange-400/60" />
      <div className="absolute top-[15%] left-[45%] w-2.5 h-2.5 rounded-full bg-pink-400/50" />
      <div className="absolute top-[12%] right-[35%] w-1.5 h-1.5 rounded-full bg-yellow-400/50" />
      <div className="absolute top-[20%] left-[25%] w-2 h-2 rounded-full bg-primary/40" />
      <div className="absolute top-[5%] left-[60%] w-2 h-2 rounded-full bg-green-400/50" />
      <div className="absolute top-[18%] right-[15%] w-1.5 h-1.5 rounded-full bg-primary/50" />
      {/* Coin */}
      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/40 to-primary/20 border-2 border-primary/40 flex items-center justify-center shadow-lg shadow-primary/20">
        <div className="text-4xl">🤝</div>
      </div>
      {/* Text */}
      <div className="text-center px-6">
        <div className="text-white text-sm font-semibold mb-1">
          You&apos;re now closer!
        </div>
        <div className="text-white/40 text-[11px]">
          Hope it went well in person!
        </div>
      </div>
      {/* Done button */}
      <div className="mt-2">
        <div className="px-10 py-2 bg-primary rounded-full text-white text-xs font-semibold">
          Done
        </div>
      </div>
    </div>
  );
}

const screens: Record<string, React.FC> = {
  "go-live": GoLiveScreen,
  "get-paired": GetPairedScreen,
  "make-friend": MakeFriendScreen,
};

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
          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step) => {
              const Screen = screens[step.screen];
              return (
                <div key={step.number} className="reveal flex flex-col items-center">
                  <PhoneMockup>
                    <Screen />
                  </PhoneMockup>
                  <div className="mt-8 text-center">
                    <span className="text-xs font-mono text-primary/50 mb-2 block">
                      {step.number}
                    </span>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted leading-relaxed text-sm max-w-xs">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
