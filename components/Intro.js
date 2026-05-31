"use client";

import { useEffect, useState } from "react";

// Cinematic title-card intro: the name animates in, a line draws,
// then the panel lifts like a curtain and signals the page to reveal.
export default function Intro({ name = "" }) {
  const [phase, setPhase] = useState("in"); // "in" | "out" | "gone"

  useEffect(() => {
    const root = document.documentElement;
    const reduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let finished = false;
    let goneTimer;

    const finish = () => {
      if (finished) return;
      finished = true;
      setPhase("out");
      root.classList.remove("intro");
      root.classList.add("intro-done");
      // tell the hero canvas (and anything else) the stage is clear
      window.dispatchEvent(new Event("intro:done"));
      goneTimer = setTimeout(() => setPhase("gone"), reduced ? 650 : 1000);
    };

    // auto-advance after the title card has played
    const holdTimer = setTimeout(finish, reduced ? 1100 : 2400);

    // let the visitor skip it
    const skip = () => finish();
    window.addEventListener("keydown", skip);
    window.addEventListener("touchstart", skip, { passive: true });

    return () => {
      clearTimeout(holdTimer);
      clearTimeout(goneTimer);
      window.removeEventListener("keydown", skip);
      window.removeEventListener("touchstart", skip);
    };
  }, []);

  if (phase === "gone") return null;

  // split name into characters for the staggered reveal
  const chars = Array.from(name);

  return (
    <div
      className={`intro-overlay ${phase === "out" ? "exit" : ""}`}
      role="presentation"
      onClick={() => {
        window.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
      }}
    >
      <div className="intro-inner">
        <div className="intro-kicker">Portfolio — 2026</div>
        <h1 className="intro-name" aria-label={name}>
          {chars.map((c, i) => (
            <span
              key={i}
              className={c === " " ? "intro-space" : "intro-char"}
              style={{ animationDelay: `${i * 55}ms` }}
            >
              {c === " " ? "\u00A0" : c}
            </span>
          ))}
        </h1>
        <div className="intro-line" />
      </div>
    </div>
  );
}
