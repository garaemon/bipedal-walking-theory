"use client";

import { useState, useEffect } from "react";

// Simulate LIPM dynamics to compute CoM and DCM positions over time
function computeTrajectory(time: number) {
  const omega = 3.5;
  const copPosition = 0.0;
  // CoM oscillates, DCM leads
  const comX = copPosition + 0.3 * Math.sin(omega * time * 0.4);
  const comVx = 0.3 * omega * 0.4 * Math.cos(omega * time * 0.4);
  const dcmX = comX + comVx / omega;
  return { comX, comVx, dcmX, copPosition };
}

export function DCMPhaseDiagram() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => (prev + 0.03) % (2 * Math.PI / (3.5 * 0.4)));
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const { comX, comVx, dcmX, copPosition } = computeTrajectory(time);
  // Map physical coords to SVG coords
  const centerX = 220;
  const centerY = 130;
  const scaleX = 300;
  const scaleY = 80;
  const comSvgX = centerX + comX * scaleX;
  const comSvgY = centerY - comVx * scaleY;
  const dcmSvgX = centerX + dcmX * scaleX;
  const copSvgX = centerX + copPosition * scaleX;
  const axisY = centerY;

  return (
    <figure className="my-6 flex flex-col items-center">
      <svg viewBox="0 0 440 260" className="w-full max-w-lg" role="img">
        <title>DCM phase diagram showing CoM, DCM, and CoP relationship</title>
        <defs>
          <marker id="arrow-phase" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto">
            <path d="M0,0 L7,2.5 L0,5 Z" fill="#6b7280" />
          </marker>
        </defs>
        {/* Position axis */}
        <line x1="40" y1={axisY} x2="410" y2={axisY} stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#arrow-phase)" />
        <text x="415" y={axisY + 4} fontSize="11" fill="#6b7280">position x</text>
        {/* Velocity axis */}
        <line x1={centerX} y1="240" x2={centerX} y2="20" stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#arrow-phase)" />
        <text x={centerX + 5} y="18" fontSize="11" fill="#6b7280">velocity</text>
        {/* CoP marker on position axis */}
        <rect x={copSvgX - 8} y={axisY - 4} width="16" height="8" rx="2" fill="#16a34a" />
        <text x={copSvgX} y={axisY + 18} fontSize="10" fill="#16a34a" textAnchor="middle" fontWeight="bold">
          CoP
        </text>
        {/* Arrow: CoM toward DCM */}
        <line x1={comSvgX} y1={comSvgY} x2={comSvgX + (dcmSvgX - comSvgX) * 0.7}
          y2={comSvgY + (axisY - comSvgY) * 0.7} stroke="#9333ea" strokeWidth="1.5" strokeDasharray="4,3" />
        {/* CoM dot */}
        <circle cx={comSvgX} cy={comSvgY} r="7" fill="#2563eb" stroke="#1e40af" strokeWidth="2" />
        <text x={comSvgX} y={comSvgY - 12} fontSize="10" fill="#2563eb" textAnchor="middle" fontWeight="bold">
          CoM
        </text>
        {/* DCM dot on position axis */}
        <circle cx={dcmSvgX} cy={axisY} r="7" fill="#dc2626" stroke="#991b1b" strokeWidth="2" />
        <text x={dcmSvgX} y={axisY - 12} fontSize="10" fill="#dc2626" textAnchor="middle" fontWeight="bold">
          DCM
        </text>
        {/* Legend box */}
        <rect x="20" y="210" width="400" height="35" rx="4" fill="#f9fafb" stroke="#e5e7eb" />
        <text x="30" y="232" fontSize="10" fill="#374151">
          <tspan fill="#2563eb" fontWeight="bold">Blue</tspan>: CoM (x, v) in phase space |
          <tspan fill="#dc2626" fontWeight="bold"> Red</tspan>: DCM on x-axis |
          <tspan fill="#16a34a" fontWeight="bold"> Green</tspan>: CoP
        </text>
      </svg>
      <figcaption className="mt-2 text-center text-sm text-gray-500">
        Fig. Phase-space view: The CoM (blue) traces a trajectory in (position, velocity) space.
        The DCM (red) is the projection onto the position axis that the CoM chases.
        The CoP (green) serves as the control input.
      </figcaption>
    </figure>
  );
}
