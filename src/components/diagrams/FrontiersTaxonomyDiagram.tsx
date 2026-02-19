"use client";

import { useEffect, useState } from "react";

const BRANCHES = [
  { x: 120, y: 50, label: "Transformer Policies", color: "#2563eb", bg: "#dbeafe",
    subs: ["History-based", "Next-token prediction"] },
  { x: 380, y: 50, label: "Vision-Guided", color: "#7c3aed", bg: "#ede9fe",
    subs: ["Height maps", "End-to-end"] },
  { x: 60, y: 170, label: "Multi-Agent", color: "#059669", bg: "#d1fae5",
    subs: ["Robot soccer", "Cooperative tasks"] },
  { x: 250, y: 195, label: "Agile Locomotion", color: "#dc2626", bg: "#fee2e2",
    subs: ["Parkour", "Running"] },
  { x: 440, y: 170, label: "Loco-Manipulation", color: "#ca8a04", bg: "#fef9c3",
    subs: ["Carrying objects", "Opening doors"] },
];

export function FrontiersTaxonomyDiagram() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount < BRANCHES.length) {
      const timer = setTimeout(() => setVisibleCount((c) => c + 1), 350);
      return () => clearTimeout(timer);
    }
  }, [visibleCount]);

  const cx = 250, cy = 125;

  return (
    <figure className="my-6 flex flex-col items-center">
      <svg viewBox="0 0 500 260" className="w-full max-w-xl" role="img">
        <title>Taxonomy of frontier approaches in bipedal locomotion</title>
        {BRANCHES.slice(0, visibleCount).map((b, i) => (
          <g key={i}>
            {/* Line from center to branch */}
            <line x1={cx} y1={cy} x2={b.x} y2={b.y + 12}
              stroke={b.color} strokeWidth="2" opacity="0.5" />
            {/* Branch box */}
            <rect x={b.x - 68} y={b.y - 10} width="136" height="24" rx="6"
              fill={b.bg} stroke={b.color} strokeWidth="1.5" />
            <text x={b.x} y={b.y + 6} fontSize="10" fill={b.color}
              textAnchor="middle" fontWeight="bold">{b.label}</text>
            {/* Sub-items */}
            {b.subs.map((s, j) => (
              <text key={j} x={b.x} y={b.y + 26 + j * 14} fontSize="9"
                fill="#4b5563" textAnchor="middle">{s}</text>
            ))}
          </g>
        ))}
        {/* Central node (drawn last so it overlaps lines) */}
        <ellipse cx={cx} cy={cy} rx="60" ry="22"
          fill="#f0fdf4" stroke="#166534" strokeWidth="2" />
        <text x={cx} y={cy - 4} fontSize="10" fill="#166534"
          textAnchor="middle" fontWeight="bold">Frontier</text>
        <text x={cx} y={cy + 10} fontSize="10" fill="#166534"
          textAnchor="middle" fontWeight="bold">Approaches</text>
      </svg>
      <figcaption className="mt-2 text-center text-sm text-gray-500">
        Fig 1. Taxonomy of frontier research areas in bipedal locomotion.
        Each branch represents an active area with distinct technical challenges.
      </figcaption>
    </figure>
  );
}
