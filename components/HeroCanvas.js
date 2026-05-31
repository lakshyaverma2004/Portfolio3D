"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

// Particle field that scatters in space and assembles into a slowly
// rotating sphere on load. Monochrome, ambient, behind the hero text.
export default function HeroCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = mount.clientWidth || window.innerWidth;
    let height = mount.clientHeight || window.innerHeight;

    // ── renderer ──
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // ── scene + camera ──
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, width / height, 1, 2000);
    camera.position.z = 360;

    // ── particles ──
    const COUNT = 2600;
    const RADIUS = 150;
    const positions = new Float32Array(COUNT * 3); // current (animated)
    const target = new Float32Array(COUNT * 3); // sphere positions
    const start = new Float32Array(COUNT * 3); // scattered start

    for (let i = 0; i < COUNT; i++) {
      // Fibonacci sphere for an even distribution
      const k = i + 0.5;
      const phi = Math.acos(1 - (2 * k) / COUNT);
      const theta = Math.PI * (1 + Math.sqrt(5)) * k;
      const r = RADIUS * (0.85 + Math.random() * 0.15);
      const tx = r * Math.sin(phi) * Math.cos(theta);
      const ty = r * Math.sin(phi) * Math.sin(theta);
      const tz = r * Math.cos(phi);

      target[i * 3] = tx;
      target[i * 3 + 1] = ty;
      target[i * 3 + 2] = tz;

      // scattered start position (wide cloud)
      const sr = 420 + Math.random() * 380;
      const su = Math.random() * 2 - 1;
      const sa = Math.random() * Math.PI * 2;
      const sp = Math.sqrt(1 - su * su);
      start[i * 3] = sr * sp * Math.cos(sa);
      start[i * 3 + 1] = sr * sp * Math.sin(sa);
      start[i * 3 + 2] = sr * su;

      if (reduced) {
        positions[i * 3] = tx;
        positions[i * 3 + 1] = ty;
        positions[i * 3 + 2] = tz;
      } else {
        positions[i * 3] = start[i * 3];
        positions[i * 3 + 1] = start[i * 3 + 1];
        positions[i * 3 + 2] = start[i * 3 + 2];
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0xf2f0ec,
      size: 2.1,
      sizeAttenuation: true,
      transparent: true,
      opacity: reduced ? 0.5 : 0,
      depthWrite: false,
    });

    const points = new THREE.Points(geometry, material);
    const group = new THREE.Group();
    group.add(points);
    scene.add(group);

    // ── interaction (gentle parallax) ──
    let mouseX = 0;
    let mouseY = 0;
    const onMouse = (e) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("mousemove", onMouse, { passive: true });

    // ── animation ──
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
    const ASSEMBLE_MS = 1900;
    let raf;
    let started = false;
    let startTime = 0;
    const posAttr = geometry.attributes.position;

    // Wait for the cinematic intro to lift before assembling. If there's
    // no intro on the page, start right away.
    const begin = () => {
      if (started) return;
      started = true;
      startTime = performance.now();
    };
    let fallbackTimer;
    if (
      typeof document !== "undefined" &&
      document.documentElement.classList.contains("intro")
    ) {
      window.addEventListener("intro:done", begin, { once: true });
      fallbackTimer = setTimeout(begin, 5000); // safety net
    } else {
      begin();
    }

    const tick = (now) => {
      if (!started) {
        renderer.render(scene, camera);
        raf = requestAnimationFrame(tick);
        return;
      }
      const elapsed = now - startTime;

      if (!reduced) {
        const t = Math.min(elapsed / ASSEMBLE_MS, 1);
        const e = easeOutCubic(t);

        if (t < 1) {
          const arr = posAttr.array;
          for (let i = 0; i < COUNT * 3; i++) {
            arr[i] = start[i] + (target[i] - start[i]) * e;
          }
          posAttr.needsUpdate = true;
        }
        // fade in over the first ~900ms
        material.opacity = Math.min(elapsed / 900, 1) * 0.62;
      }

      // continuous slow spin + mouse parallax
      group.rotation.y += 0.0009;
      group.rotation.x += (mouseY * 0.18 - group.rotation.x) * 0.03;
      const targetY = group.rotation.y + mouseX * 0.0;
      group.rotation.z += (mouseX * 0.06 - group.rotation.z) * 0.03;

      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    // ── resize ──
    const onResize = () => {
      width = mount.clientWidth || window.innerWidth;
      height = mount.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", onResize);

    // ── cleanup ──
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(fallbackTimer);
      window.removeEventListener("intro:done", begin);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div className="hero-canvas" ref={mountRef} aria-hidden="true" />;
}
