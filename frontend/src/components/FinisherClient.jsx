"use client";

import { useEffect } from "react";

export default function FinisherClient() {
  useEffect(() => {
    const header = document.querySelector(".finisher-header");

    // Não tem header? então não carrega o script
    if (!header) return;

    const script = document.createElement("script");
    script.src = "/finisher-header.js";
    script.onload = () => {
      if (window.FinisherHeader) {
        new window.FinisherHeader({
          count: 30,
          size: { min: 20, max: 80, pulse: 0 },
          speed: {
            x: { min: 0.1, max: 0.3 },
            y: { min: 0.1, max: 0.3 },
          },
          colors: {
            background: "#ffffff",
            particles: ["#000000"],
          },
          shapes: ["c"],
          opacity: {
            center: 0.3,
            edge: 0,
          },
          className: "finisher-header",
        });
      }
    };

    document.body.appendChild(script);
  }, []);

  return null;
}
