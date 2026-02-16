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
  },
  {
    number: "02",
    title: "Get Paired",
    description: "Match with someone nearby and meet in person.",
    video: "/videos/get-paired.mp4",
  },
  {
    number: "03",
    title: "Make a Friend",
    description: "Exchange names and add each other as friends.",
    video: "/videos/friends.mp4",
  },
];

const LAST_STEP = steps.length - 1;
const FADE_DURATION = 400;

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [hasEnteredViewport, setHasEnteredViewport] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Track section visibility (stays active, doesn't unobserve)
  useEffect(() => {
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
  }, [hasEnteredViewport]);

  // Pause/resume active video based on scroll visibility
  useEffect(() => {
    if (!hasEnteredViewport || isResetting) return;

    const activeVideo = videoRefs.current[activeStep];
    if (!activeVideo) return;

    if (isVisible) {
      activeVideo.play().catch(() => {});
    } else {
      activeVideo.pause();
    }
  }, [isVisible, hasEnteredViewport, activeStep, isResetting]);

  // When a video ends, advance to the next one
  const handleVideoEnded = useCallback((endedIndex: number) => {
    if (endedIndex === LAST_STEP) {
      // Loop transition: fade everything out, reset all videos, fade back in
      setIsResetting(true);

      setTimeout(() => {
        // Reset all videos while hidden
        videoRefs.current.forEach((video) => {
          if (video) {
            video.pause();
            video.currentTime = 0;
          }
        });

        setActiveStep(0);
        setIsResetting(false);

        // The isVisible effect will handle playing — no need to play here
      }, FADE_DURATION);
    } else {
      // Normal transition: just advance, don't reset the finished video
      const nextIndex = endedIndex + 1;
      setActiveStep(nextIndex);

      // The isVisible effect will handle playing when activeStep updates
    }
  }, []);

  // Click a step to skip to it
  const handleStepClick = useCallback((clickedIndex: number) => {
    if (!hasEnteredViewport || clickedIndex === activeStep || isResetting) return;

    // Pause current video (don't reset — leave on current frame)
    const currentVideo = videoRefs.current[activeStep];
    if (currentVideo) {
      currentVideo.pause();
    }

    // Reset target video — the isVisible effect will handle playing
    const nextVideo = videoRefs.current[clickedIndex];
    if (nextVideo) {
      nextVideo.currentTime = 0;
    }

    setActiveStep(clickedIndex);
  }, [activeStep, hasEnteredViewport, isResetting]);

  // Resolve opacity class for each step
  const getOpacityClass = (index: number) => {
    if (isResetting) return "opacity-0";
    if (!hasEnteredViewport) return "opacity-100";
    return index === activeStep ? "opacity-100" : "opacity-40";
  };

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
          <div ref={sectionRef} className="grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
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
                      muted
                      playsInline
                      preload="auto"
                      onEnded={() => handleVideoEnded(index)}
                      className="w-full h-full object-cover scale-100"
                    />
                  </PhoneMockup>
                  <div className="mt-8 text-center">
                    <span
                      className={`text-xs font-mono mb-2 block transition-colors duration-500 ${
                        index === activeStep ? "text-primary" : "text-primary/30"
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
