// components/FinisherParticles.jsx

"use client";

import React, { useEffect, useRef, useState } from "react";
import Script from "next/script";

// --- ATENÇÃO: Verifique se 'finisher-header.es5.min.js' está na sua pasta 'public' ---

export default function FinisherParticles() {
  const containerRef = useRef(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  // 1. Lógica de Inicialização
  useEffect(() => {
    // A inicialização SÓ acontece se o script foi marcado como carregado (onReady)
    if (
      scriptLoaded &&
      typeof window.FinisherHeader !== "undefined" &&
      containerRef.current
    ) {
      console.log(
        "Inicializando FinisherHeader com configurações personalizadas..."
      );

      // Chamada CORRETA para inicializar a biblioteca
      new window.FinisherHeader({
        count: 6,
        size: {
          min: 1100,
          max: 1300,
          pulse: 0,
        },
        speed: {
          x: {
            min: 0.1,
            max: 0.8,
          },
          y: {
            min: 0.1,
            max: 0.8,
          },
        },
        colors: {
          "background": "rgba(69, 118, 255, 1)",
          particles: ["#077eedff", "#091061", "#006eb5"],
        },
        blending: "overlay",
        opacity: {
          center: 1,
          edge: 0.1,
        },
        skew: 0,
        shapes: ["c"],
        
      });
    }
  }, [scriptLoaded]);

  return (
    <>
      {/* 2. Carregamento do Script Externo */}
      <Script
        src="/finisher-header.es5.min.js"
        // afterInteractive é um bom balanço entre velocidade e estabilidade
        strategy="afterInteractive"
        // onReady é o gatilho mais confiável: ele define o estado como 'true'
        // assim que o script é carregado e o useEffect é disparado.
        onReady={() => setScriptLoaded(true)}
        onError={(e) =>
          console.error("Falha ao carregar o script FinisherHeader:", e)
        }
      />

      {/* 3. Container da Animação */}
      <div
        ref={containerRef}
        className="finisher-header"
        style={{
          // Estilos essenciais para que o canvas preencha o container pai (a Hero Section)
         borderRadius: '20px', 
    
    
   
          margin:0,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1, // ZIndex baixo para ficar no fundo
          pointerEvents: "none", // Garante que a animação não bloqueie cliques
        }}
      >
        {/* O canvas será injetado dentro desta div pela biblioteca */}
      </div>
    </>
  );
}
