"use client";

import { useState, useEffect } from "react";

export function HybridAutomatonDiagram() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase((prev) => (prev + 1) % 200);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const isSwing = phase < 150; // phase 0-149: swing, 150-199: impact
  const swingColor = isSwing ? "#2563eb" : "#93c5fd";
  const impactColor = isSwing ? "#fca5a5" : "#dc2626";

  return (
    <figure className="my-6 flex flex-col items-center">
      <svg viewBox="0 0 520 230" className="w-full max-w-lg" role="img">
        <title>Hybrid automaton for bipedal walking: swing and impact cycle</title>
        <defs>
          <marker id="arrow-ha-fwd" markerWidth="8" markerHeight="6"
            refX="8" refY="3" orient="auto">
            <path d="M0,0 L8,3 L0,6 Z" fill="#4b5563" />
          </marker>
          <marker id="arrow-ha-back" markerWidth="8" markerHeight="6"
            refX="0" refY="3" orient="auto">
            <path d="M8,0 L0,3 L8,6 Z" fill="#4b5563" />
          </marker>
        </defs>

        {/* Swing Phase node */}
        <ellipse cx="130" cy="110" rx="95" ry="45"
          fill={isSwing ? "#eff6ff" : "#f9fafb"} stroke={swingColor}
          strokeWidth={isSwing ? 3 : 1.5} />
        <text x="130" y="102" fontSize="13" fill="#1e3a8a"
          textAnchor="middle" fontWeight="bold">Swing Phase</text>
        <text x="130" y="120" fontSize="9" fill="#4b5563" textAnchor="middle">
          M(q)q&#x0308; + h(q,q&#x0307;) = Bu
        </text>

        {/* Impact node */}
        <ellipse cx="390" cy="110" rx="75" ry="45"
          fill={isSwing ? "#fef2f2" : "#fee2e2"} stroke={impactColor}
          strokeWidth={isSwing ? 1.5 : 3} />
        <text x="390" y="105" fontSize="13" fill="#991b1b"
          textAnchor="middle" fontWeight="bold">Impact</text>
        <text x="390" y="122" fontSize="9" fill="#4b5563" textAnchor="middle">
          x&#x207A; = &#x394;(x&#x207B;)
        </text>

        {/* Swing -> Impact arrow (top) */}
        <path d="M 225 80 C 280 30, 340 30, 315 65"
          fill="none" stroke="#4b5563" strokeWidth="1.5"
          markerEnd="url(#arrow-ha-fwd)" />
        <text x="270" y="35" fontSize="9" fill="#4b5563" textAnchor="middle">
          Guard: swing foot
        </text>
        <text x="270" y="47" fontSize="9" fill="#4b5563" textAnchor="middle">
          touches ground
        </text>

        {/* Impact -> Swing arrow (bottom) */}
        <path d="M 315 155 C 340 200, 280 200, 225 140"
          fill="none" stroke="#4b5563" strokeWidth="1.5"
          markerEnd="url(#arrow-ha-back)" />
        <text x="270" y="195" fontSize="9" fill="#4b5563" textAnchor="middle">
          Reset: leg relabeling
        </text>
        <text x="270" y="207" fontSize="9" fill="#4b5563" textAnchor="middle">
          + velocity jump
        </text>

        {/* Animated phase indicator dot */}
        {isSwing ? (
          <circle cx="130" cy="142" r="4" fill="#2563eb">
            <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" />
          </circle>
        ) : (
          <circle cx="390" cy="142" r="4" fill="#dc2626">
            <animate attributeName="opacity" values="1;0.3;1" dur="0.4s" repeatCount="indefinite" />
          </circle>
        )}
      </svg>
      <figcaption className="mt-2 text-center text-sm text-gray-500">
        Hybrid automaton for bipedal walking. The system cycles between continuous
        swing dynamics and discrete impact events. The highlighted node shows the current phase.
      </figcaption>
    </figure>
  );
}
