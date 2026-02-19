"use client";

import { useState, useEffect } from "react";

// Compute walker leg endpoints from phase angle
function computeLegPositions(phase: number, hipX: number, hipY: number, legLen: number) {
  // Stance leg angle swings from +alpha to -alpha, swing leg does the opposite
  const alpha = 0.35;
  const stanceAngle = alpha * Math.cos(phase);
  const swingAngle = -alpha * Math.cos(phase);
  return {
    stanceFoot: { x: hipX - legLen * Math.sin(stanceAngle), y: hipY + legLen * Math.cos(stanceAngle) },
    swingFoot: { x: hipX - legLen * Math.sin(swingAngle), y: hipY + legLen * Math.cos(swingAngle) },
  };
}

export function PassiveWalkerAnimationDiagram() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase((prev) => (prev + 0.05) % (2 * Math.PI));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const hipX = 220;
  const hipY = 110;
  const legLen = 100;
  const legs = computeLegPositions(phase, hipX, hipY, legLen);

  // CoM trail: a few past positions showing the arc-like path
  const trailCount = 8;
  const trailPoints = Array.from({ length: trailCount }, (_, i) => {
    const pastPhase = phase - (trailCount - i) * 0.15;
    const dx = (trailCount - i) * -3;
    const dy = 4 * Math.sin(pastPhase - (trailCount - i) * 0.15);
    return `${hipX + dx},${hipY + dy}`;
  }).join(" ");

  return (
    <figure className="my-6 flex flex-col items-center">
      <svg viewBox="0 0 440 280" className="w-full max-w-lg" role="img">
        <title>Animated compass-gait passive walker on a slope</title>
        {/* Slope */}
        <line x1="20" y1="200" x2="420" y2="232" stroke="#6b7280" strokeWidth="2" />
        <polygon points="20,200 420,232 420,270 20,270" fill="#f3f4f6" stroke="none" />
        {/* Slope angle label */}
        <line x1="20" y1="222" x2="90" y2="222" stroke="#6b7280" strokeWidth="1" strokeDasharray="3,3" />
        <path d="M 60 222 A 40 40 0 0 0 60 215" fill="none" stroke="#6b7280" strokeWidth="1.5" />
        <text x="70" y="218" fontSize="12" fill="#6b7280">{"\u03B3"}</text>
        {/* CoM trail */}
        <polyline points={trailPoints} fill="none" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.5" />
        {/* Stance leg */}
        <line
          x1={legs.stanceFoot.x} y1={legs.stanceFoot.y}
          x2={hipX} y2={hipY}
          stroke="#4f46e5" strokeWidth="5" strokeLinecap="round"
        />
        {/* Swing leg */}
        <line
          x1={hipX} y1={hipY}
          x2={legs.swingFoot.x} y2={legs.swingFoot.y}
          stroke="#2563eb" strokeWidth="4" strokeLinecap="round" opacity="0.7"
        />
        {/* Hip mass */}
        <circle cx={hipX} cy={hipY} r="8" fill="#2563eb" stroke="#1e40af" strokeWidth="2" />
        {/* Foot contact points */}
        <circle cx={legs.stanceFoot.x} cy={legs.stanceFoot.y} r="3" fill="#ea580c" />
        <circle cx={legs.swingFoot.x} cy={legs.swingFoot.y} r="3" fill="#ea580c" opacity="0.5" />
        {/* Walking direction arrow */}
        <line x1="340" y1="100" x2="400" y2="100" stroke="#6b7280" strokeWidth="1.5" />
        <polygon points="400,97 410,100 400,103" fill="#6b7280" />
        <text x="345" y="93" fontSize="10" fill="#6b7280">walking direction</text>
        {/* Gravity arrow */}
        <line x1={hipX} y1={hipY + 10} x2={hipX} y2={hipY + 50} stroke="#dc2626" strokeWidth="1.5" />
        <polygon points={`${hipX - 3},${hipY + 50} ${hipX},${hipY + 56} ${hipX + 3},${hipY + 50}`} fill="#dc2626" />
        <text x={hipX + 5} y={hipY + 42} fontSize="11" fill="#dc2626" fontWeight="bold">g</text>
      </svg>
      <figcaption className="mt-2 text-center text-sm text-gray-500">
        Animated compass-gait walker on a gentle slope. The stance leg pivots
        while the swing leg advances. The dotted trail shows the CoM trajectory.
      </figcaption>
    </figure>
  );
}
