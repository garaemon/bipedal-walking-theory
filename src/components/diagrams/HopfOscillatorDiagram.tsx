"use client";

import { useState, useEffect } from "react";

// Compute trajectory point on the Hopf oscillator spiral
function computeHopfState(t: number, mu: number, alpha: number, x0: number, y0: number) {
  const r0 = Math.sqrt(x0 * x0 + y0 * y0);
  const theta0 = Math.atan2(y0, x0);
  const rEq = Math.sqrt(mu);
  // Analytical radial solution: r(t) = rEq / sqrt(1 + ((rEq/r0)^2 - 1) * exp(-2*alpha*mu*t))
  const ratio = (rEq * rEq) / (r0 * r0);
  const r = rEq / Math.sqrt(1 + (ratio - 1) * Math.exp(-2 * alpha * mu * t));
  const theta = theta0 + t;
  return { x: r * Math.cos(theta), y: r * Math.sin(theta) };
}

export function HopfOscillatorDiagram() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => (prev + 0.06) % 12);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const mu = 1.0;
  const alpha = 1.5;
  const rEq = Math.sqrt(mu);
  const scale = 80;
  const cx = 200;
  const cy = 160;

  // Starting point (inside the limit cycle)
  const x0 = 0.2;
  const y0 = 0.1;

  // Build trail path
  const trailSteps = 120;
  const maxT = time;
  const trailPath = Array.from({ length: trailSteps + 1 }, (_, i) => {
    const t = (maxT * i) / trailSteps;
    const p = computeHopfState(t, mu, alpha, x0, y0);
    return `${cx + p.x * scale},${cy - p.y * scale}`;
  });

  const current = computeHopfState(time, mu, alpha, x0, y0);
  const currentX = cx + current.x * scale;
  const currentY = cy - current.y * scale;

  return (
    <figure className="my-6 flex flex-col items-center">
      <svg viewBox="0 0 400 320" className="w-full max-w-md" role="img">
        <title>Hopf oscillator phase plane with limit cycle convergence</title>
        {/* Axes */}
        <line x1="40" y1={cy} x2="360" y2={cy} stroke="#9ca3af" strokeWidth="1" />
        <line x1={cx} y1="20" x2={cx} y2="300" stroke="#9ca3af" strokeWidth="1" />
        <text x="355" y={cy - 8} fontSize="12" fill="#6b7280">x1</text>
        <text x={cx + 8} y="30" fontSize="12" fill="#6b7280">x2</text>
        {/* Limit cycle circle */}
        <circle cx={cx} cy={cy} r={rEq * scale} fill="none"
          stroke="#2563eb" strokeWidth="2" strokeDasharray="6,4" opacity="0.6" />
        <text x={cx + rEq * scale + 5} y={cy - 5} fontSize="10" fill="#2563eb">
          r = {"\u221A\u03BC"}
        </text>
        {/* Trajectory trail */}
        <polyline points={trailPath.join(" ")} fill="none"
          stroke="#f97316" strokeWidth="1.5" opacity="0.7" />
        {/* Starting point */}
        <circle cx={cx + x0 * scale} cy={cy - y0 * scale} r="4" fill="#dc2626" />
        <text x={cx + x0 * scale + 8} y={cy - y0 * scale - 5} fontSize="9" fill="#dc2626">
          start
        </text>
        {/* Current animated point */}
        <circle cx={currentX} cy={currentY} r="5" fill="#f97316" stroke="#c2410c" strokeWidth="1.5" />
        {/* Origin */}
        <circle cx={cx} cy={cy} r="3" fill="#6b7280" />
        <text x={cx + 5} y={cy + 15} fontSize="9" fill="#6b7280">unstable</text>
      </svg>
      <figcaption className="mt-2 text-center text-sm text-gray-500">
        Hopf oscillator phase plane. The dashed circle is the limit cycle at
        r = {"\u221A\u03BC"}. The trajectory (orange) spirals outward from a
        small initial condition and converges to the stable limit cycle.
      </figcaption>
    </figure>
  );
}
