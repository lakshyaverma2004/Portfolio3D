"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="wrap nav-inner">
        <a href="#top" className="nav-mark">
          {initials}
          <b>.</b>
        </a>
        <div className="nav-right">
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#about" className="nav-keep">About</a>
          </div>
          <a className="cta" href={`mailto:${profile.email}`}>
            Start a project <span className="arrow">↗</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
