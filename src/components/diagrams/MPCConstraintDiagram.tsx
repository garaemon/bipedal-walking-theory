"use client";

import { useEffect, useState } from "react";

// Animate the sliding prediction horizon window over a ZMP trajectory
export function MPCConstraintDiagram() {
  const [windowOffset, setWindowOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWindowOffset((prev) => (prev + 0.5) % 320);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Support polygon boundaries shift with each footstep
  const steps = [
    { xStart: 40, xEnd: 140, yMin: 90, yMax: 170 },
    { xStart: 140, xEnd: 240, yMin: 80, yMax: 160 },
    { xStart: 240, xEnd: 340, yMin: 70, yMax: 150 },
    { xStart: 340, xEnd: 440, yMin: 60, yMax: 140 },
  ];

  // ZMP trajectory points (stays within constraint boundaries)
  const zmpPoints = "40,130 80,140 120,125 160,120 200,110 240,105 280,95 320,90 360,85 400,80 440,75";

  const horizonWidth = 100;
  const horizonX = 40 + (windowOffset % 320);

  return (
    <figure className="my-6 flex flex-col items-center">
      <svg viewBox="0 0 500 240" className="w-full max-w-lg" role="img">
        <title>MPC constraint visualization with sliding horizon</title>

        {/* Constraint boundaries (support polygon regions) */}
        {steps.map((step, i) => (
          <g key={i}>
            <rect
              x={step.xStart} y={step.yMin}
              width={step.xEnd - step.xStart} height={step.yMax - step.yMin}
              fill="#dcfce7" opacity="0.5" stroke="#86efac" strokeWidth="1"
            />
            <line x1={step.xStart} y1={step.yMin} x2={step.xEnd} y2={step.yMin} stroke="#f87171" strokeWidth="1.5" strokeDasharray="4,2" />
            <line x1={step.xStart} y1={step.yMax} x2={step.xEnd} y2={step.yMax} stroke="#f87171" strokeWidth="1.5" strokeDasharray="4,2" />
            <text x={(step.xStart + step.xEnd) / 2} y={210} fontSize="9" fill="#6b7280" textAnchor="middle">
              step {i + 1}
            </text>
          </g>
        ))}

        {/* ZMP trajectory (green = feasible) */}
        <polyline points={zmpPoints} fill="none" stroke="#16a34a" strokeWidth="2.5" />

        {/* Sliding prediction horizon window */}
        <rect
          x={Math.min(horizonX, 440 - horizonWidth)} y="45"
          width={horizonWidth} height="175"
          fill="#3b82f6" opacity="0.12" stroke="#3b82f6" strokeWidth="2" rx="4"
        />
        <text
          x={Math.min(horizonX, 440 - horizonWidth) + horizonWidth / 2} y="38"
          fontSize="9" fill="#2563eb" textAnchor="middle" fontWeight="bold"
        >
          Prediction horizon
        </text>

        {/* Time axis */}
        <line x1="40" y1="195" x2="460" y2="195" stroke="#374151" strokeWidth="1.5" />
        <text x="465" y="199" fontSize="10" fill="#374151">t</text>
        <text x="15" y="130" fontSize="10" fill="#374151" textAnchor="middle">ZMP</text>

        {/* Legend */}
        <g transform="translate(40, 228)">
          <line x1="0" y1="0" x2="15" y2="0" stroke="#16a34a" strokeWidth="2.5" />
          <text x="20" y="4" fontSize="9" fill="#666">ZMP trajectory</text>
          <line x1="120" y1="0" x2="135" y2="0" stroke="#f87171" strokeWidth="1.5" strokeDasharray="4,2" />
          <text x="140" y="4" fontSize="9" fill="#666">Constraint boundary</text>
          <rect x="270" y="-5" width="12" height="10" fill="#dcfce7" stroke="#86efac" strokeWidth="1" />
          <text x="287" y="4" fontSize="9" fill="#666">Support polygon</text>
        </g>
      </svg>
      <figcaption className="mt-2 text-center text-sm text-gray-500">
        Fig 2. MPC constraint visualization. The ZMP trajectory (green) must stay
        within the support polygon bounds (shaded). The sliding blue window shows
        the prediction horizon that moves forward in time.
      </figcaption>
    </figure>
  );
}
