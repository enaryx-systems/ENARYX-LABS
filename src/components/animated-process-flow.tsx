"use client";

export const ExploreAnimation = () => {
  return (
    <svg
      viewBox="0 0 400 300"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          @keyframes bubble-rise {
            0% { 
              opacity: 1;
              transform: translateY(0px);
            }
            100% { 
              opacity: 0;
              transform: translateY(-60px);
            }
          }
          @keyframes sparkle {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 1; }
          }
          .flask-main { animation: float 3s ease-in-out infinite; }
          .bubble { animation: bubble-rise 2s ease-out infinite; }
          .sparkle { animation: sparkle 2s ease-in-out infinite; }
        `}</style>
        <linearGradient id="flaskGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#9333ea" stopOpacity="0.8" />
        </linearGradient>
      </defs>

      {/* Background circle */}
      <circle cx="200" cy="150" r="140" fill="none" stroke="rgba(147, 51, 234, 0.1)" strokeWidth="2" />

      {/* Flask group */}
      <g className="flask-main">
        {/* Flask outline */}
        <path
          d="M 170 80 L 155 180 Q 155 205 175 210 L 225 210 Q 245 205 245 180 L 230 80"
          fill="none"
          stroke="#9333ea"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Flask cap */}
        <rect x="185" y="70" width="30" height="12" rx="2" fill="#a855f7" />
        <line x1="185" y1="82" x2="215" y2="82" stroke="#9333ea" strokeWidth="1.5" />

        {/* Liquid inside */}
        <path
          d="M 165 130 Q 165 145 172 190 L 228 190 Q 235 145 235 130"
          fill="url(#flaskGradient)"
        />

        {/* Rising bubbles */}
        <circle cx="190" cy="160" r="3" className="bubble" fill="#c084fc" style={{ animationDelay: "0s" }} />
        <circle cx="210" cy="165" r="2.5" className="bubble" fill="#a855f7" style={{ animationDelay: "0.6s" }} />
        <circle cx="200" cy="155" r="2" className="bubble" fill="#c084fc" style={{ animationDelay: "1.2s" }} />
      </g>

      {/* Sparkle effects around flask */}
      <circle cx="140" cy="120" r="2" className="sparkle" fill="#c084fc" style={{ animationDelay: "0s" }} />
      <circle cx="260" cy="140" r="2" className="sparkle" fill="#a855f7" style={{ animationDelay: "0.6s" }} />
      <circle cx="150" cy="200" r="1.5" className="sparkle" fill="#c084fc" style={{ animationDelay: "1.2s" }} />
      <circle cx="250" cy="190" r="1.5" className="sparkle" fill="#a855f7" style={{ animationDelay: "0.4s" }} />

      {/* Connecting orbit lines */}
      <circle cx="200" cy="150" r="80" fill="none" stroke="rgba(147, 51, 234, 0.1)" strokeWidth="1" strokeDasharray="5,5" opacity="0.5" />
    </svg>
  );
};

export const EngineerAnimation = () => {
  return (
    <svg
      viewBox="0 0 400 300"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <style>{`
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
          .screen { animation: screen-glow 2s ease-in-out infinite; }
          .cursor { animation: cursor-blink 1s step-end infinite; }
          .code-line { animation: code-type 3s ease-in-out infinite; stroke-dasharray: 100; }
        `}</style>
        <linearGradient id="screenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1f1f2e" />
          <stop offset="100%" stopColor="#0d0d1a" />
        </linearGradient>
      </defs>

      {/* Background circle */}
      <circle cx="200" cy="150" r="140" fill="none" stroke="rgba(147, 51, 234, 0.1)" strokeWidth="2" />

      {/* Computer monitor */}
      <g className="screen">
        {/* Monitor frame */}
        <rect x="130" y="60" width="140" height="110" rx="8" fill="url(#screenGradient)" stroke="#9333ea" strokeWidth="2" />
        
        {/* Screen shine */}
        <rect x="132" y="62" width="136" height="106" rx="6" fill="none" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="1" />

        {/* Screen content - Code visualization */}
        <text x="145" y="85" fontSize="10" fill="#00ff00" fontFamily="monospace" opacity="0.8">
          &gt; build app
        </text>
        <line x1="145" y1="92" x2="255" y2="92" stroke="#a855f7" strokeWidth="0.5" opacity="0.5" className="code-line" />
        
        <text x="145" y="105" fontSize="10" fill="#00ff00" fontFamily="monospace" opacity="0.8">
          &gt; compile
        </text>
        <line x1="145" y1="112" x2="235" y2="112" stroke="#a855f7" strokeWidth="0.5" opacity="0.5" className="code-line" style={{ animationDelay: "0.5s" }} />

        <text x="145" y="125" fontSize="10" fill="#00ff00" fontFamily="monospace" opacity="0.8">
          &gt; optimize
        </text>
        <line x1="145" y1="132" x2="250" y2="132" stroke="#a855f7" strokeWidth="0.5" opacity="0.5" className="code-line" style={{ animationDelay: "1s" }} />

        {/* Cursor */}
        <rect x="255" y="118" width="2" height="12" fill="#a855f7" className="cursor" opacity="0.8" />
      </g>

      {/* Keyboard */}
      <g>
        <rect x="145" y="175" width="110" height="35" rx="4" fill="#2a2a3e" stroke="#9333ea" strokeWidth="1.5" />
        <circle cx="160" cy="185" r="2" fill="#a855f7" opacity="0.6" />
        <circle cx="175" cy="185" r="2" fill="#a855f7" opacity="0.6" />
        <circle cx="190" cy="185" r="2" fill="#a855f7" opacity="0.6" />
        <circle cx="205" cy="185" r="2" fill="#a855f7" opacity="0.6" />
        <circle cx="165" cy="200" r="1.5" fill="#a855f7" opacity="0.4" />
        <circle cx="180" cy="200" r="1.5" fill="#a855f7" opacity="0.4" />
        <circle cx="195" cy="200" r="1.5" fill="#a855f7" opacity="0.4" />
      </g>

      {/* Processing indicators */}
      <g>
        <circle cx="110" cy="130" r="3" fill="#a855f7" opacity="0.7" />
        <circle cx="290" cy="130" r="3" fill="#a855f7" opacity="0.7" />
      </g>
    </svg>
  );
};

export const LaunchAnimation = () => {
  return (
    <svg
      viewBox="0 0 400 300"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <style>{`
          @keyframes rocket-launch {
            0% {
              transform: translateY(80px);
              opacity: 1;
            }
            100% {
              transform: translateY(-100px);
              opacity: 0.3;
            }
          }
          @keyframes flame-flicker {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 1; }
          }
          @keyframes star-pulse {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 1; }
          }
          .rocket { animation: rocket-launch 3s ease-out infinite; }
          .flame { animation: flame-flicker 0.5s ease-in-out infinite; }
          .star { animation: star-pulse 2s ease-in-out infinite; }
          .trail {
            animation: rocket-launch 3s ease-out infinite;
            opacity: 0;
          }
        `}</style>
      </defs>

      {/* Background circle */}
      <circle cx="200" cy="150" r="140" fill="none" stroke="rgba(147, 51, 234, 0.1)" strokeWidth="2" />

      {/* Rocket body */}
      <g className="rocket">
        {/* Main rocket body */}
        <path
          d="M 190 80 L 210 80 L 215 120 L 185 120 Z"
          fill="#a855f7"
          stroke="#9333ea"
          strokeWidth="1.5"
        />

        {/* Rocket tip */}
        <path
          d="M 185 75 L 200 65 L 215 75"
          fill="#ff6b6b"
          stroke="#ff4444"
          strokeWidth="1.5"
        />

        {/* Window */}
        <circle cx="200" cy="90" r="4" fill="#c084fc" opacity="0.8" />

        {/* Rocket fins */}
        <path
          d="M 185 115 L 175 125 L 180 120 Z"
          fill="#9333ea"
          opacity="0.8"
        />
        <path
          d="M 215 115 L 225 125 L 220 120 Z"
          fill="#9333ea"
          opacity="0.8"
        />
      </g>

      {/* Flame effects */}
      <g className="flame">
        <path
          d="M 195 120 L 190 145 L 200 130 Z"
          fill="#ff6b6b"
          opacity="0.8"
        />
        <path
          d="M 205 120 L 210 145 L 200 130 Z"
          fill="#ffa500"
          opacity="0.7"
        />
        <path
          d="M 200 125 L 195 150 L 205 135 Z"
          fill="#ffd700"
          opacity="0.6"
        />
      </g>

      {/* Particle trail */}
      <circle cx="195" cy="140" r="2" className="star" fill="#ff6b6b" style={{ animationDelay: "0s" }} />
      <circle cx="205" cy="145" r="1.5" className="star" fill="#ffa500" style={{ animationDelay: "0.2s" }} />
      <circle cx="200" cy="150" r="1" className="star" fill="#ffd700" style={{ animationDelay: "0.4s" }} />

      {/* Stars in background */}
      <circle cx="120" cy="60" r="1.5" className="star" fill="#c084fc" style={{ animationDelay: "0s" }} />
      <circle cx="280" cy="80" r="1" className="star" fill="#a855f7" style={{ animationDelay: "0.5s" }} />
      <circle cx="140" cy="240" r="1.5" className="star" fill="#c084fc" style={{ animationDelay: "1s" }} />
      <circle cx="260" cy="220" r="1" className="star" fill="#a855f7" style={{ animationDelay: "1.5s" }} />

      {/* Success glow */}
      <circle cx="200" cy="50" r="25" fill="none" stroke="#a855f7" strokeWidth="1" opacity="0.3" />
    </svg>
  );
};

export const ProcessFlowAnimation = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
        {/* Explore */}
        <div className="flex flex-col items-center text-center">
          <div className="w-full max-w-xs mb-4">
            <ExploreAnimation />
          </div>
          <h3 className="font-display text-lg uppercase tracking-tight text-text">
            Explore
          </h3>
          <p className="mt-2 text-sm text-muted max-w-xs">
            Researching possibilities and experimenting with ideas
          </p>
        </div>

        {/* Engineer */}
        <div className="flex flex-col items-center text-center">
          <div className="w-full max-w-xs mb-4">
            <EngineerAnimation />
          </div>
          <h3 className="font-display text-lg uppercase tracking-tight text-text">
            Engineer
          </h3>
          <p className="mt-2 text-sm text-muted max-w-xs">
            Building reliable systems and solving complex problems
          </p>
        </div>

        {/* Launch */}
        <div className="flex flex-col items-center text-center">
          <div className="w-full max-w-xs mb-4">
            <LaunchAnimation />
          </div>
          <h3 className="font-display text-lg uppercase tracking-tight text-text">
            Launch
          </h3>
          <p className="mt-2 text-sm text-muted max-w-xs">
            Delivering software that makes real-world impact
          </p>
        </div>
      </div>
    </div>
  );
};
