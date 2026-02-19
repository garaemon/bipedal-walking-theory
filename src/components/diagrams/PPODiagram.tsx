"use client";

import { useState, useEffect } from "react";

export function PPODiagram() {
  const [pulse, setPulse] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setPulse((p) => (p + 1) % 120), 50);
    return () => clearInterval(id);
  }, []);

  const dotX = 30 + (pulse / 120) * 420;
  const splitP = Math.max(0, (dotX - 280) / 170);

  return (
    <figure className="my-6 flex flex-col items-center">
      <svg viewBox="0 0 500 250" className="w-full max-w-lg" role="img">
        <title>PPO actor-critic neural network architecture</title>
        <defs>
          <marker id="arrow-ppo" markerWidth="7" markerHeight="5"
            refX="7" refY="2.5" orient="auto">
            <path d="M0,0 L7,2.5 L0,5 Z" fill="#374151" />
          </marker>
        </defs>
        {/* Input layer */}
        <rect x="10" y="60" width="80" height="80" rx="6" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
        <text x="50" y="85" fontSize="11" fill="#1e40af" textAnchor="middle" fontWeight="bold">State</text>
        <text x="50" y="100" fontSize="8" fill="#1e40af" textAnchor="middle">joint angles,</text>
        <text x="50" y="112" fontSize="8" fill="#1e40af" textAnchor="middle">velocities, IMU</text>
        <text x="50" y="124" fontSize="8" fill="#1e40af" textAnchor="middle">(~40-60 dim)</text>
        {/* Arrow to hidden */}
        <line x1="90" y1="100" x2="130" y2="100" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow-ppo)" />
        {/* Shared hidden layers */}
        <rect x="138" y="50" width="90" height="100" rx="6" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
        <text x="183" y="78" fontSize="10" fill="#92400e" textAnchor="middle" fontWeight="bold">Shared</text>
        <text x="183" y="93" fontSize="10" fill="#92400e" textAnchor="middle" fontWeight="bold">Hidden</text>
        <text x="183" y="108" fontSize="9" fill="#92400e" textAnchor="middle">256 x 2 layers</text>
        <text x="183" y="122" fontSize="8" fill="#92400e" textAnchor="middle">(ReLU / ELU)</text>
        {/* Arrows to actor and critic */}
        <line x1="228" y1="80" x2="298" y2="50" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow-ppo)" />
        <line x1="228" y1="120" x2="298" y2="155" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow-ppo)" />
        {/* Actor head */}
        <rect x="305" y="20" width="90" height="60" rx="6" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
        <text x="350" y="40" fontSize="10" fill="#166534" textAnchor="middle" fontWeight="bold">Actor</text>
        <text x="350" y="55" fontSize="9" fill="#166534" textAnchor="middle">mean + std</text>
        <text x="350" y="68" fontSize="8" fill="#166534" textAnchor="middle">(~10-20 dim)</text>
        {/* Critic head */}
        <rect x="305" y="130" width="90" height="50" rx="6" fill="#fce7f3" stroke="#db2777" strokeWidth="2" />
        <text x="350" y="152" fontSize="10" fill="#9d174d" textAnchor="middle" fontWeight="bold">Critic</text>
        <text x="350" y="167" fontSize="9" fill="#9d174d" textAnchor="middle">V(s) scalar</text>
        {/* Output arrows and labels */}
        <line x1="395" y1="50" x2="435" y2="50" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow-ppo)" />
        <text x="470" y="46" fontSize="9" fill="#166534" textAnchor="middle">Joint</text>
        <text x="470" y="58" fontSize="9" fill="#166534" textAnchor="middle">torques</text>
        <line x1="395" y1="155" x2="435" y2="155" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow-ppo)" />
        <text x="470" y="151" fontSize="9" fill="#9d174d" textAnchor="middle">Value</text>
        <text x="470" y="163" fontSize="9" fill="#9d174d" textAnchor="middle">estimate</text>
        {/* Animated data flow dot along shared backbone */}
        {dotX <= 280 && <circle cx={dotX} cy={100} r="5" fill="#f97316" opacity="0.85" />}
        {/* After shared layers, split into actor (green) and critic (pink) */}
        {splitP > 0 && (<>
          <circle cx={280 + splitP * 120} cy={100 - splitP * 50} r="4" fill="#16a34a" opacity="0.8" />
          <circle cx={280 + splitP * 120} cy={100 + splitP * 57} r="4" fill="#db2777" opacity="0.8" />
        </>)}
        <text x="250" y="230" fontSize="10" fill="#374151" textAnchor="middle">
          PPO Actor-Critic Architecture with Shared Backbone
        </text>
      </svg>
      <figcaption className="mt-2 text-center text-sm text-gray-500">
        Fig 2. PPO actor-critic architecture. Shared hidden layers extract features
        from state observations. The actor head outputs action distributions
        (mean and std), while the critic head estimates state value V(s).
      </figcaption>
    </figure>
  );
}
