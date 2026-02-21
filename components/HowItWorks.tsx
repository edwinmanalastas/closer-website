"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import PhoneMockup from "./PhoneMockup";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Go Live",
    description: "Go live and see who's around you on campus.",
    video: "/videos/go-live.mp4",
    poster: "/images/poster-go-live.jpg",
  },
  {
    number: "02",
    title: "Get Paired",
    description: "Match with someone nearby and meet in person.",
    video: "/videos/get-paired.mp4",
    poster: "/images/poster-get-paired.jpg",
  },
  {
    number: "03",
    title: "Make a Friend",
    description: "Exchange names and add each other as friends.",
    video: "/videos/friends.mp4",
    poster: "/images/poster-friends.jpg",
  },
];

const LAST_STEP = steps.length - 1;
const FADE_DURATION = 400;
const MD_BREAKPOINT = 768;

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [hasEnteredViewport, setHasEnteredViewport] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileActiveStep, setMobileActiveStep] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Detect mobile vs desktop
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < MD_BREAKPOINT);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  // Force mobile browsers to load first frame
  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.load();
        video.currentTime = 0.001;
      }
    });
  }, []);

  // --- MOBILE: observe each card individually, play when in view ---
  useEffect(() => {
    if (!isMobile) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardRefs.current.indexOf(entry.target as HTMLDivElement);
          if (index === -1) return;
          const video = videoRefs.current[index];
          if (!video) return;

          if (entry.isIntersecting) {
            setMobileActiveStep(index);
            video.currentTime = 0;
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.6 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, [isMobile]);

  // --- DESKTOP: sequential auto-play logic ---

  // Track section visibility
  useEffect(() => {
    if (isMobile) return;
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting && !hasEnteredViewport) {
          setHasEnteredViewport(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [hasEnteredViewport, isMobile]);

  // Pause/resume active video based on scroll visibility
  useEffect(() => {
    if (isMobile || !hasEnteredViewport || isResetting) return;

    const activeVideo = videoRefs.current[activeStep];
    if (!activeVideo) return;

    if (isVisible) {
      activeVideo.play().catch(() => {});
    } else {
      activeVideo.pause();
    }
  }, [isVisible, hasEnteredViewport, activeStep, isResetting, isMobile]);

  // When a video ends, advance to the next one (desktop only)
  const handleVideoEnded = useCallback((endedIndex: number) => {
    if (isMobile) return;

    if (endedIndex === LAST_STEP) {
      setIsResetting(true);

      setTimeout(() => {
        videoRefs.current.forEach((video) => {
          if (video) {
            video.pause();
            video.currentTime = 0;
          }
        });

        setActiveStep(0);
        setIsResetting(false);
      }, FADE_DURATION);
    } else {
      const nextIndex = endedIndex + 1;
      setActiveStep(nextIndex);
    }
  }, [isMobile]);

  // Click a step to skip to it (desktop only)
  const handleStepClick = useCallback((clickedIndex: number) => {
    if (isMobile || !hasEnteredViewport || clickedIndex === activeStep || isResetting) return;

    const currentVideo = videoRefs.current[activeStep];
    if (currentVideo) {
      currentVideo.pause();
    }

    const nextVideo = videoRefs.current[clickedIndex];
    if (nextVideo) {
      nextVideo.currentTime = 0;
    }

    setActiveStep(clickedIndex);
  }, [activeStep, hasEnteredViewport, isResetting, isMobile]);

  // Resolve opacity class for each step (desktop only — mobile always full opacity)
  const getOpacityClass = (index: number) => {
    if (isMobile) return index === mobileActiveStep ? "opacity-100" : "opacity-40";
    if (isResetting) return "opacity-0";
    if (!hasEnteredViewport) return "opacity-100";
    return index === activeStep ? "opacity-100" : "opacity-40";
  };

  return (
    <section id="how-it-works" className="py-20 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-20">
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-4">
              How It Works
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Three steps to a new friend.
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal stagger>
          <div ref={sectionRef} className="grid md:grid-cols-3 gap-8 sm:gap-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                ref={(el) => { cardRefs.current[index] = el; }}
                className="reveal flex flex-col items-center cursor-pointer"
                onClick={() => handleStepClick(index)}
              >
                <div
                  className={`transition-opacity duration-500 ${getOpacityClass(index)}`}
                >
                  <PhoneMockup>
                    <video
                      ref={(el) => { videoRefs.current[index] = el; }}
                      src={step.video}
                      poster={step.poster}
                      muted
                      playsInline
                      preload="auto"
                      loop={isMobile}
                      onEnded={() => handleVideoEnded(index)}
                      className="w-full h-full object-cover scale-100"
                    />
                  </PhoneMockup>
                  <div className="mt-8 text-center">
                    <span
                      className={`text-xs font-mono mb-2 block transition-colors duration-500 ${
                        (isMobile ? index === mobileActiveStep : index === activeStep) ? "text-primary" : "text-primary/30"
                      }`}
                    >
                      {step.number}
                    </span>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted leading-relaxed text-sm max-w-xs">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
