"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="Closer"
            width={36}
            height={20}
            className="h-5 w-auto"
          />
          <span className="text-xl font-bold tracking-tight">Closer</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#how-it-works"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            How It Works
          </a>
          <a
            href="#safety"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            Safety
          </a>
        </div>

        <a
          href="#download"
          className="px-5 py-2 bg-primary hover:bg-primary-hover text-white text-sm font-medium rounded-full transition-colors"
        >
          Get Closer
        </a>
      </nav>
    </header>
  );
}
