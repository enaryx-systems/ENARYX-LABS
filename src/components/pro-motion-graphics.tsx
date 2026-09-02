"use client";

export const ProMotionGraphicsVideo = () => {
  return (
    <svg
      viewBox="0 0 1920 1080"
      className="w-full h-auto bg-black"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <style>{`
          /* Global animations */
          @keyframes fade-in {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }

          @keyframes fade-out {
            0% { opacity: 1; }
            100% { opacity: 0; }
          }

          @keyframes glow-pulse {
            0%, 100% { 
              opacity: 0.5;
              filter: drop-shadow(0 0 8px rgba(168, 85, 247, 0.6));
            }
            50% { 
              opacity: 1;
              filter: drop-shadow(0 0 20px rgba(168, 85, 247, 1));
            }
          }

          @keyframes text-appear {
            0% { 
              opacity: 0;
              transform: translateY(20px);
            }
            100% { 
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes line-draw {
            0% { 
              stroke-dasharray: 2000;
              stroke-dashoffset: 2000;
            }
            100% { 
              stroke-dasharray: 2000;
              stroke-dashoffset: 0;
            }
          }

          @keyframes rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          @keyframes float-up {
            0% { 
              transform: translateY(0);
              opacity: 1;
            }
            100% { 
              transform: translateY(-300px);
              opacity: 0;
            }
          }

          @keyframes scale-in {
            0% { 
              transform: scale(0);
              opacity: 0;
            }
            100% { 
              transform: scale(1);
              opacity: 1;
            }
          }

          @keyframes pulse-scale {
            0%, 100% { 
              transform: scale(1);
            }
            50% { 
              transform: scale(1.1);
            }
          }

          /* Scene 1: Introduction (0-10s) */
          .scene-1 { animation: fade-in 1s ease-out 0s forwards; }
          .scene-1-fade-out { animation: fade-out 1s ease-out 8s forwards; }

          .nodes-line { animation: line-draw 3s ease-in-out 1s forwards; }
          .title-text { animation: text-appear 1s ease-out 2s forwards; opacity: 0; }
          .subtitle-text { animation: text-appear 1s ease-out 2.5s forwards; opacity: 0; }
          .glow-effect { animation: glow-pulse 2s ease-in-out 1s infinite; }

          /* Scene 2: Explore (10-20s) */
          .scene-2 { animation: fade-in 1s ease-out 9s forwards, fade-out 1s ease-out 18s forwards; opacity: 0; }
          .compass-rotate { animation: rotate 8s linear 10s forwards; }
          .radar-pulse { animation: pulse-scale 2s ease-in-out 10s infinite; }
          .explore-label { animation: text-appear 0.8s ease-out 11s forwards; opacity: 0; }

          /* Scene 3: Engineer (20-30s) */
          .scene-3 { animation: fade-in 1s ease-out 19s forwards, fade-out 1s ease-out 28s forwards; opacity: 0; }
          .blueprint-appear { animation: fade-in 0.8s ease-out 20s forwards; opacity: 0; }
          .code-lines { animation: line-draw 2s ease-out 21s forwards; }
          .engineer-label { animation: text-appear 0.8s ease-out 21.5s forwards; opacity: 0; }

          /* Scene 4: Launch (30-40s) */
          .scene-4 { animation: fade-in 1s ease-out 29s forwards, fade-out 1s ease-out 39s forwards; opacity: 0; }
          .rocket-core { animation: scale-in 1s ease-out 30s forwards; opacity: 0; }
          .launch-burst { animation: scale-in 0.5s ease-out 31s forwards; opacity: 0; }
          .interface-popup { animation: float-up 2s ease-out 32s forwards; opacity: 0; }
          .launch-label { animation: text-appear 0.8s ease-out 32.5s forwards; opacity: 0; }

          /* Scene 5: CTA (40-45s) */
          .scene-5 { animation: fade-in 1s ease-out 39s forwards; opacity: 0; }
          .logo-final { animation: scale-in 0.8s ease-out 40s forwards; opacity: 0; }
          .cta-text { animation: text-appear 1s ease-out 41s forwards; opacity: 0; }
          .cta-button { animation: text-appear 1s ease-out 42s forwards; opacity: 0; }
        `}</style>

        <linearGradient id="purpleGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>

        <linearGradient id="blueGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1e40af" />
        </linearGradient>

        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="blur">
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>

      {/* ===== SCENE 1: INTRODUCTION (0-10s) ===== */}
      <g className="scene-1 scene-1-fade-out">
        {/* Glowing node network */}
        <g className="glow-effect">
          {/* Central node */}
          <circle cx="960" cy="540" r="15" fill="#a855f7" filter="url(#glow)" />

          {/* Connecting nodes */}
          <circle cx="700" cy="300" r="8" fill="#7c3aed" filter="url(#glow)" />
          <circle cx="1220" cy="280" r="8" fill="#3b82f6" filter="url(#glow)" />
          <circle cx="600" cy="700" r="8" fill="#3b82f6" filter="url(#glow)" />
          <circle cx="1300" cy="720" r="8" fill="#7c3aed" filter="url(#glow)" />

          {/* Connecting lines */}
          <line x1="960" y1="540" x2="700" y2="300" stroke="#a855f7" strokeWidth="2" opacity="0.6" className="nodes-line" />
          <line x1="960" y1="540" x2="1220" y2="280" stroke="#3b82f6" strokeWidth="2" opacity="0.6" className="nodes-line" />
          <line x1="960" y1="540" x2="600" y2="700" stroke="#3b82f6" strokeWidth="2" opacity="0.6" className="nodes-line" />
          <line x1="960" y1="540" x2="1300" y2="720" stroke="#a855f7" strokeWidth="2" opacity="0.6" className="nodes-line" />
        </g>

        {/* Title text */}
        <text
          x="960"
          y="500"
          fontSize="72"
          fontWeight="bold"
          textAnchor="middle"
          fill="#a855f7"
          className="title-text"
          fontFamily="Arial, sans-serif"
        >
          01 — THE LAB
        </text>

        <text
          x="960"
          y="620"
          fontSize="48"
          fontWeight="300"
          textAnchor="middle"
          fill="#e0d5ff"
          className="subtitle-text"
          fontFamily="Arial, sans-serif"
        >
          WE BUILD TECHNOLOGY FOR IDEAS THAT MATTER
        </text>
      </g>

      {/* ===== SCENE 2: EXPLORE (10-20s) ===== */}
      <g className="scene-2">
        {/* Rotating compass/radar */}
        <g transform="translate(960, 420)" className="compass-rotate">
          {/* Outer circle */}
          <circle cx="0" cy="0" r="200" fill="none" stroke="#a855f7" strokeWidth="2" opacity="0.8" />
          <circle cx="0" cy="0" r="150" fill="none" stroke="#7c3aed" strokeWidth="1" opacity="0.5" />
          <circle cx="0" cy="0" r="100" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.5" />

          {/* Cardinal points */}
          <text x="0" y="-210" fontSize="20" fill="#a855f7" textAnchor="middle" fontWeight="bold">
            N
          </text>
          <text x="210" y="10" fontSize="20" fill="#3b82f6" textAnchor="middle" fontWeight="bold">
            E
          </text>
          <text x="0" y="230" fontSize="20" fill="#a855f7" textAnchor="middle" fontWeight="bold">
            S
          </text>
          <text x="-210" y="10" fontSize="20" fill="#3b82f6" textAnchor="middle" fontWeight="bold">
            W
          </text>

          {/* Scanning beam */}
          <line x1="0" y1="0" x2="0" y2="-180" stroke="#a855f7" strokeWidth="2" opacity="0.8" filter="url(#glow)" />

          {/* Center dot */}
          <circle cx="0" cy="0" r="8" fill="#a855f7" filter="url(#glow)" />
        </g>

        {/* Floating data particles */}
        <g opacity="0.6">
          <circle cx="600" cy="300" r="4" fill="#a855f7" />
          <circle cx="1300" cy="350" r="3" fill="#3b82f6" />
          <circle cx="750" cy="600" r="3" fill="#7c3aed" />
          <circle cx="1150" cy="650" r="4" fill="#3b82f6" />
        </g>

        {/* Labels */}
        <text
          x="960"
          y="680"
          fontSize="56"
          fontWeight="bold"
          textAnchor="middle"
          fill="#a855f7"
          className="explore-label"
          fontFamily="Arial, sans-serif"
        >
          01 | EXPLORE
        </text>
        <text
          x="960"
          y="740"
          fontSize="32"
          textAnchor="middle"
          fill="#c084fc"
          className="explore-label"
          fontFamily="Arial, sans-serif"
        >
          Find new possibilities
        </text>
      </g>

      {/* ===== SCENE 3: ENGINEER (20-30s) ===== */}
      <g className="scene-3">
        {/* Blueprint grid background */}
        <g className="blueprint-appear" opacity="0.1">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3b82f6" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect x="600" y="250" width="720" height="500" fill="url(#grid)" stroke="#3b82f6" strokeWidth="2" />
        </g>

        {/* Code block lines */}
        <g className="blueprint-appear" opacity="0.8">
          <text x="650" y="320" fontSize="24" fill="#00ff00" fontFamily="monospace">
            &gt; explore(possibilities)
          </text>
          <line x1="650" y1="335" x2="900" y2="335" stroke="#a855f7" strokeWidth="2" className="code-lines" />

          <text x="650" y="400" fontSize="24" fill="#00ff00" fontFamily="monospace">
            &gt; analyze(data)
          </text>
          <line x1="650" y1="415" x2="850" y2="415" stroke="#3b82f6" strokeWidth="2" className="code-lines" style={{ animationDelay: "21.5s" }} />

          <text x="650" y="480" fontSize="24" fill="#00ff00" fontFamily="monospace">
            &gt; ideate(solutions)
          </text>
          <line x1="650" y1="495" x2="920" y2="495" stroke="#a855f7" strokeWidth="2" className="code-lines" style={{ animationDelay: "22s" }} />

          <text x="650" y="560" fontSize="24" fill="#00ff00" fontFamily="monospace">
            &gt; design(blueprint)
          </text>
          <line x1="650" y1="575" x2="880" y2="575" stroke="#3b82f6" strokeWidth="2" className="code-lines" style={{ animationDelay: "22.5s" }} />
        </g>

        {/* 3D Core representation */}
        <g className="blueprint-appear">
          <polygon points="1200,300 1280,340 1200,380 1120,340" fill="none" stroke="#a855f7" strokeWidth="3" filter="url(#glow)" />
          <polygon points="1200,300 1250,250 1280,340 1230,280" fill="none" stroke="#3b82f6" strokeWidth="3" filter="url(#glow)" />
          <polygon points="1200,380 1250,330 1280,420 1230,380" fill="none" stroke="#7c3aed" strokeWidth="3" filter="url(#glow)" />
          <circle cx="1200" cy="340" r="30" fill="none" stroke="#a855f7" strokeWidth="2" opacity="0.5" />
        </g>

        {/* Labels */}
        <text
          x="960"
          y="710"
          fontSize="56"
          fontWeight="bold"
          textAnchor="middle"
          fill="#3b82f6"
          className="engineer-label"
          fontFamily="Arial, sans-serif"
        >
          02 | ENGINEER
        </text>
        <text
          x="960"
          y="770"
          fontSize="32"
          textAnchor="middle"
          fill="#60a5fa"
          className="engineer-label"
          fontFamily="Arial, sans-serif"
        >
          Turn possibilities into reliable systems
        </text>
      </g>

      {/* ===== SCENE 4: LAUNCH (30-40s) ===== */}
      <g className="scene-4">
        {/* Core assembly */}
        <g transform="translate(960, 400)" className="rocket-core">
          {/* Main core */}
          <rect x="-60" y="-60" width="120" height="120" fill="none" stroke="#a855f7" strokeWidth="3" rx="10" filter="url(#glow)" />
          <circle cx="0" cy="0" r="40" fill="none" stroke="#3b82f6" strokeWidth="2" />
          <rect x="-30" y="-30" width="60" height="60" fill="#a855f7" opacity="0.2" rx="5" />
        </g>

        {/* Launch burst effect */}
        <g transform="translate(960, 400)" className="launch-burst">
          <circle cx="0" cy="0" r="80" fill="none" stroke="#ffd700" strokeWidth="2" opacity="0.8" />
          <circle cx="0" cy="0" r="120" fill="none" stroke="#a855f7" strokeWidth="1" opacity="0.4" />
          <circle cx="0" cy="0" r="160" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.2" />
        </g>

        {/* Product interface launching upward */}
        <g className="interface-popup">
          <rect x="750" y="200" width="420" height="280" fill="#1a1a2e" stroke="#a855f7" strokeWidth="2" rx="12" filter="url(#glow)" />
          <rect x="760" y="215" width="400" height="30" fill="#a855f7" opacity="0.2" rx="8" />

          {/* Dashboard elements */}
          <circle cx="800" cy="270" r="8" fill="#00ff00" />
          <rect x="820" y="265" width="100" height="10" fill="#a855f7" opacity="0.5" />

          <circle cx="800" cy="310" r="6" fill="#3b82f6" />
          <rect x="820" y="305" width="80" height="10" fill="#3b82f6" opacity="0.5" />

          <circle cx="800" cy="350" r="7" fill="#ffd700" />
          <rect x="820" y="345" width="120" height="10" fill="#7c3aed" opacity="0.5" />

          {/* Stats display */}
          <text x="1050" y="280" fontSize="20" fill="#00ff00" fontFamily="monospace">
            100% Live
          </text>
          <text x="1050" y="320" fontSize="20" fill="#3b82f6" fontFamily="monospace">
            Optimized
          </text>
          <text x="1050" y="360" fontSize="20" fill="#ffd700" fontFamily="monospace">
            Ready
          </text>
        </g>

        {/* Labels */}
        <text
          x="960"
          y="700"
          fontSize="56"
          fontWeight="bold"
          textAnchor="middle"
          fill="#ffd700"
          className="launch-label"
          fontFamily="Arial, sans-serif"
        >
          03 | LAUNCH
        </text>
        <text
          x="960"
          y="760"
          fontSize="32"
          textAnchor="middle"
          fill="#ffed4e"
          className="launch-label"
          fontFamily="Arial, sans-serif"
        >
          Put useful technology into the real world
        </text>
      </g>

      {/* ===== SCENE 5: CTA (40-45s) ===== */}
      <g className="scene-5">
        {/* Logo */}
        <g transform="translate(960, 350)" className="logo-final">
          <circle cx="0" cy="0" r="80" fill="none" stroke="#a855f7" strokeWidth="3" filter="url(#glow)" />
          <circle cx="0" cy="0" r="70" fill="none" stroke="#3b82f6" strokeWidth="2" opacity="0.6" />
          <path
            d="M -30,-20 L 30,-20 L 30,30 L -30,30 Z"
            fill="none"
            stroke="#a855f7"
            strokeWidth="2"
          />
          <text x="0" y="10" fontSize="32" fontWeight="bold" textAnchor="middle" fill="#a855f7">
            ∞
          </text>
        </g>

        {/* CTA Text */}
        <text
          x="960"
          y="550"
          fontSize="64"
          fontWeight="bold"
          textAnchor="middle"
          fill="#a855f7"
          className="cta-text"
          fontFamily="Arial, sans-serif"
        >
          ENARYX LABS
        </text>

        <text
          x="960"
          y="620"
          fontSize="40"
          textAnchor="middle"
          fill="#c084fc"
          className="cta-text"
          fontFamily="Arial, sans-serif"
        >
          Build What Comes Next
        </text>

        {/* CTA Button */}
        <g className="cta-button">
          <rect x="780" y="680" width="360" height="70" fill="none" stroke="#a855f7" strokeWidth="3" rx="10" filter="url(#glow)" />
          <text
            x="960"
            y="730"
            fontSize="32"
            fontWeight="bold"
            textAnchor="middle"
            fill="#a855f7"
            fontFamily="Arial, sans-serif"
          >
            START YOUR PROJECT
          </text>
        </g>
      </g>
    </svg>
  );
};
