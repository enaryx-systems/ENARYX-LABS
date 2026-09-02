"use client";

export const UnifiedProcessAnimation = () => {
  return (
    <svg
      viewBox="0 0 1200 600"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <style>{`
          /* Stage transitions */
          @keyframes stage-fade-in {
            0% { opacity: 0; transform: translateX(-20px); }
            25% { opacity: 1; transform: translateX(0); }
            75% { opacity: 1; transform: translateX(0); }
            100% { opacity: 0; transform: translateX(20px); }
          }

          /* Flask animations */
          @keyframes flask-float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
          }

          @keyframes bubble-rise {
            0% { 
              opacity: 1;
              transform: translateY(0px);
            }
            100% { 
              opacity: 0;
              transform: translateY(-80px);
            }
          }

          @keyframes sparkle {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 1; }
          }

          /* Screen animations */
          @keyframes screen-glow {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 1; }
          }

          @keyframes code-type {
            0% { strokeDashoffset: 100; }
            100% { strokeDashoffset: 0; }
          }

          @keyframes cursor-blink {
            0%, 49% { opacity: 1; }
            50%, 100% { opacity: 0; }
          }

          /* Rocket animations */
          @keyframes rocket-launch {
            0% {
              transform: translateY(0px);
              opacity: 1;
            }
            100% {
              transform: translateY(-200px);
              opacity: 0.3;
            }
          }

          @keyframes flame-flicker {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 1; }
          }

          /* Connection line */
          @keyframes line-draw {
            0% { strokeDashoffset: 100; }
            100% { strokeDashoffset: 0; }
          }

          /* Arrow animations */
          @keyframes arrow-slide {
            0% { transform: translateX(-10px); opacity: 0; }
            20% { opacity: 1; }
            50% { transform: translateX(40px); }
            80% { opacity: 1; }
            100% { transform: translateX(90px); opacity: 0; }
          }

          .stage-1 { animation: stage-fade-in 12s ease-in-out infinite; }
          .stage-2 { animation: stage-fade-in 12s ease-in-out infinite; animation-delay: 4s; }
          .stage-3 { animation: stage-fade-in 12s ease-in-out infinite; animation-delay: 8s; }

          .flask { animation: flask-float 3s ease-in-out infinite; }
          .bubble { animation: bubble-rise 2s ease-out infinite; }
          .sparkle { animation: sparkle 2s ease-in-out infinite; }

          .screen { animation: screen-glow 2s ease-in-out infinite; }
          .code-line { animation: code-type 3s ease-in-out infinite; stroke-dasharray: 100; }
          .cursor { animation: cursor-blink 1s step-end infinite; }

          .rocket { animation: rocket-launch 3s ease-out infinite; }
          .flame { animation: flame-flicker 0.5s ease-in-out infinite; }
          .star { animation: sparkle 2s ease-in-out infinite; }

          .connection-line { animation: line-draw 12s ease-in-out infinite; stroke-dasharray: 200; }
          .arrow { animation: arrow-slide 3s ease-in-out infinite; }
        `}</style>

        <linearGradient id="flaskGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#9333ea" stopOpacity="0.8" />
        </linearGradient>

        <linearGradient id="screenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1f1f2e" />
          <stop offset="100%" stopColor="#0d0d1a" />
        </linearGradient>

        <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
          <stop offset="50%" stopColor="#a855f7" stopOpacity="1" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Background circles */}
      <circle cx="200" cy="300" r="180" fill="none" stroke="rgba(147, 51, 234, 0.1)" strokeWidth="2" />
      <circle cx="600" cy="300" r="180" fill="none" stroke="rgba(147, 51, 234, 0.1)" strokeWidth="2" />
      <circle cx="1000" cy="300" r="180" fill="none" stroke="rgba(147, 51, 234, 0.1)" strokeWidth="2" />

      {/* Connection lines between stages */}
      <line x1="380" y1="300" x2="420" y2="300" stroke="url(#progressGradient)" strokeWidth="3" className="connection-line" strokeDasharray="40,40" />
      <line x1="780" y1="300" x2="820" y2="300" stroke="url(#progressGradient)" strokeWidth="3" className="connection-line" strokeDasharray="40,40" style={{ animationDelay: "4s" }} />

      {/* Animated arrows */}
      <g className="arrow">
        <polygon points="400,295 420,300 400,305" fill="#a855f7" />
      </g>
      <g className="arrow" style={{ animationDelay: "4s" }}>
        <polygon points="800,295 820,300 800,305" fill="#a855f7" />
      </g>

      {/* ===== STAGE 1: EXPLORE ===== */}
      <g className="stage-1">
        {/* Flask group */}
        <g className="flask">
          {/* Flask outline */}
          <path
            d="M 150 200 L 130 360 Q 130 390 155 395 L 245 395 Q 270 390 270 360 L 250 200"
            fill="none"
            stroke="#9333ea"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Flask cap */}
          <rect x="175" y="185" width="50" height="18" rx="3" fill="#a855f7" />
          <line x1="175" y1="203" x2="225" y2="203" stroke="#9333ea" strokeWidth="2" />

          {/* Liquid inside */}
          <path
            d="M 140 280 Q 140 305 150 360 L 250 360 Q 260 305 260 280"
            fill="url(#flaskGradient)"
          />

          {/* Rising bubbles */}
          <circle cx="170" cy="320" r="4" className="bubble" fill="#c084fc" style={{ animationDelay: "0s" }} />
          <circle cx="200" cy="330" r="3.5" className="bubble" fill="#a855f7" style={{ animationDelay: "0.6s" }} />
          <circle cx="230" cy="315" r="3" className="bubble" fill="#c084fc" style={{ animationDelay: "1.2s" }} />
        </g>

        {/* Sparkles around flask */}
        <circle cx="110" cy="280" r="2.5" className="sparkle" fill="#c084fc" style={{ animationDelay: "0s" }} />
        <circle cx="290" cy="300" r="2.5" className="sparkle" fill="#a855f7" style={{ animationDelay: "0.6s" }} />
        <circle cx="120" cy="380" r="2" className="sparkle" fill="#c084fc" style={{ animationDelay: "1.2s" }} />
        <circle cx="280" cy="370" r="2" className="sparkle" fill="#a855f7" style={{ animationDelay: "0.4s" }} />

        {/* Label */}
        <text x="200" y="450" fontSize="24" fontWeight="bold" textAnchor="middle" fill="#1a1a1a" className="font-display">
          EXPLORE
        </text>
        <text x="200" y="480" fontSize="13" textAnchor="middle" fill="#666">
          Researching possibilities
        </text>
      </g>

      {/* ===== STAGE 2: ENGINEER ===== */}
      <g className="stage-2">
        {/* Computer monitor */}
        <g className="screen">
          {/* Monitor frame */}
          <rect x="510" y="180" width="180" height="140" rx="10" fill="url(#screenGradient)" stroke="#9333ea" strokeWidth="2.5" />

          {/* Screen shine */}
          <rect x="515" y="185" width="170" height="130" rx="8" fill="none" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="1.5" />

          {/* Code lines */}
          <text x="530" y="210" fontSize="11" fill="#00ff00" fontFamily="monospace" opacity="0.9">
            &gt; build app
          </text>
          <line x1="530" y1="218" x2="650" y2="218" stroke="#a855f7" strokeWidth="0.7" opacity="0.6" className="code-line" />

          <text x="530" y="240" fontSize="11" fill="#00ff00" fontFamily="monospace" opacity="0.9">
            &gt; compile
          </text>
          <line x1="530" y1="248" x2="635" y2="248" stroke="#a855f7" strokeWidth="0.7" opacity="0.6" className="code-line" style={{ animationDelay: "0.5s" }} />

          <text x="530" y="270" fontSize="11" fill="#00ff00" fontFamily="monospace" opacity="0.9">
            &gt; optimize
          </text>
          <line x1="530" y1="278" x2="655" y2="278" stroke="#a855f7" strokeWidth="0.7" opacity="0.6" className="code-line" style={{ animationDelay: "1s" }} />

          {/* Cursor */}
          <rect x="660" y="265" width="2.5" height="14" fill="#a855f7" className="cursor" opacity="0.9" />
        </g>

        {/* Keyboard */}
        <g>
          <rect x="535" y="330" width="130" height="40" rx="5" fill="#2a2a3e" stroke="#9333ea" strokeWidth="2" />
          <circle cx="555" cy="343" r="2.5" fill="#a855f7" opacity="0.7" />
          <circle cx="575" cy="343" r="2.5" fill="#a855f7" opacity="0.7" />
          <circle cx="595" cy="343" r="2.5" fill="#a855f7" opacity="0.7" />
          <circle cx="615" cy="343" r="2.5" fill="#a855f7" opacity="0.7" />
          <circle cx="560" cy="360" r="2" fill="#a855f7" opacity="0.5" />
          <circle cx="585" cy="360" r="2" fill="#a855f7" opacity="0.5" />
          <circle cx="610" cy="360" r="2" fill="#a855f7" opacity="0.5" />
        </g>

        {/* Processing indicators */}
        <circle cx="470" cy="280" r="3.5" fill="#a855f7" opacity="0.8" />
        <circle cx="730" cy="280" r="3.5" fill="#a855f7" opacity="0.8" />

        {/* Label */}
        <text x="600" y="450" fontSize="24" fontWeight="bold" textAnchor="middle" fill="#1a1a1a" className="font-display">
          ENGINEER
        </text>
        <text x="600" y="480" fontSize="13" textAnchor="middle" fill="#666">
          Building reliable systems
        </text>
      </g>

      {/* ===== STAGE 3: LAUNCH ===== */}
      <g className="stage-3">
        {/* Rocket body */}
        <g className="rocket">
          {/* Main rocket body */}
          <path
            d="M 970 240 L 1030 240 L 1040 320 L 960 320 Z"
            fill="#a855f7"
            stroke="#9333ea"
            strokeWidth="2"
          />

          {/* Rocket tip */}
          <path
            d="M 960 235 L 1000 215 L 1040 235"
            fill="#ff6b6b"
            stroke="#ff4444"
            strokeWidth="2"
          />

          {/* Window */}
          <circle cx="1000" cy="260" r="5" fill="#c084fc" opacity="0.9" />

          {/* Rocket fins */}
          <path
            d="M 960 315 L 935 335 L 950 320 Z"
            fill="#9333ea"
            opacity="0.9"
          />
          <path
            d="M 1040 315 L 1065 335 L 1050 320 Z"
            fill="#9333ea"
            opacity="0.9"
          />
        </g>

        {/* Flame effects */}
        <g className="flame">
          <path
            d="M 980 320 L 970 360 L 1000 335 Z"
            fill="#ff6b6b"
            opacity="0.9"
          />
          <path
            d="M 1020 320 L 1030 360 L 1000 335 Z"
            fill="#ffa500"
            opacity="0.8"
          />
          <path
            d="M 1000 330 L 985 375 L 1015 345 Z"
            fill="#ffd700"
            opacity="0.7"
          />
        </g>

        {/* Particle trail */}
        <circle cx="985" cy="355" r="2.5" className="star" fill="#ff6b6b" style={{ animationDelay: "0s" }} />
        <circle cx="1010" cy="365" r="2" className="star" fill="#ffa500" style={{ animationDelay: "0.2s" }} />
        <circle cx="1000" cy="375" r="1.5" className="star" fill="#ffd700" style={{ animationDelay: "0.4s" }} />

        {/* Stars in background */}
        <circle cx="920" cy="150" r="2" className="star" fill="#c084fc" style={{ animationDelay: "0s" }} />
        <circle cx="1080" cy="170" r="1.5" className="star" fill="#a855f7" style={{ animationDelay: "0.5s" }} />
        <circle cx="940" cy="420" r="2" className="star" fill="#c084fc" style={{ animationDelay: "1s" }} />
        <circle cx="1060" cy="410" r="1.5" className="star" fill="#a855f7" style={{ animationDelay: "1.5s" }} />

        {/* Success glow */}
        <circle cx="1000" cy="120" r="30" fill="none" stroke="#a855f7" strokeWidth="1.5" opacity="0.4" />

        {/* Label */}
        <text x="1000" y="450" fontSize="24" fontWeight="bold" textAnchor="middle" fill="#1a1a1a" className="font-display">
          LAUNCH
        </text>
        <text x="1000" y="480" fontSize="13" textAnchor="middle" fill="#666">
          Delivering real-world impact
        </text>
      </g>

      {/* Timeline indicator at bottom */}
      <g opacity="0.4">
        <line x1="100" y1="550" x2="1100" y2="550" stroke="#d1d5db" strokeWidth="1" />
        <circle cx="200" cy="550" r="5" fill="#a855f7" />
        <circle cx="600" cy="550" r="5" fill="#9333ea" />
        <circle cx="1000" cy="550" r="5" fill="#a855f7" />
      </g>
    </svg>
  );
};
