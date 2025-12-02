"use client";
import React, { useEffect, useRef } from "react";

export default function FinisherParticles() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Só carrega o script quando o elemento já existe
    if (!containerRef.current) return;

    const script = document.createElement("script");
    script.src = "/finisher-header.es5.min.js";

    script.onload = () => {
  if (window.FinisherHeader) {
    // garante que a hero já existe no DOM
    requestAnimationFrame(() => {
      new window.FinisherHeader({
        className: "finisher-header",
        count: 6,
        size: { min: 1100, max: 1300, pulse: 0 },
        speed: { 
          x: { min: 0.1, max: 0.8 }, 
          y: { min: 0.1, max: 0.8 }
        },
        colors: {
          background: "rgba(69, 118, 255, 1)",
          particles: ["#077eedff", "#091061", "#006eb5"],
        },
        blending: "overlay",
        opacity: { center: 1, edge: 0.1 },
        skew: 0,
        shapes: ["c"],
      });
    });
  }
};


    script.onerror = () => {
      console.error("Erro ao carregar Finisher Header");
    };

    document.body.appendChild(script);
  }, []);
  return (
    <div
      ref={containerRef}
      className="finisher-container"
    />
  );
}
