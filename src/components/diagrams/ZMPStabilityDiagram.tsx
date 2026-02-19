"use client";

import { useState, useEffect } from "react";

// Foot polygon points for SVG rendering
const LEFT_FOOT = [
  [120, 80], [140, 70], [160, 75], [165, 100],
  [160, 150], [145, 165], [125, 165], [110, 150], [110, 100],
];

const RIGHT_FOOT = [
  [260, 80], [280, 70], [300, 75], [305, 100],
  [300, 150], [285, 165], [265, 165], [250, 150], [250, 100],
];

function buildPolygonString(points: number[][]): string {
  return points.map(([x, y]) => `${x},${y}`).join(" ");
}

function buildDoublePolygonString(): string {
  // Convex hull approximation of both feet combined
  const hull = [
    [110, 100], [120, 80], [140, 70], [160, 75],
    [260, 80], [280, 70], [300, 75], [305, 100],
    [300, 150], [285, 165], [265, 165], [250, 150],
    [160, 150], [145, 165], [125, 165], [110, 150],
  ];
  return hull.map(([x, y]) => `${x},${y}`).join(" ");
}

function computeZmpColor(
  zmpX: number, zmpY: number,
  phase: "left" | "double" | "right"
): string {
  const margin = computeMargin(zmpX, zmpY, phase);
  if (margin < 0) return "#ef4444"; // red: outside
  if (margin < 8) return "#eab308"; // yellow: near edge
  return "#22c55e"; // green: safe
}

function computeMargin(
  zmpX: number, zmpY: number,
  phase: "left" | "double" | "right"
): number {
  // Approximate distance to polygon edge using center-based heuristic
  if (phase === "left") {
    return computeDistanceToCentroid(zmpX, zmpY, 137, 118, 28);
  }
  if (phase === "right") {
    return computeDistanceToCentroid(zmpX, zmpY, 277, 118, 28);
  }
  // Double support: distance to a wider region
  return computeDistanceToCentroid(zmpX, zmpY, 207, 118, 95);
}

function computeDistanceToCentroid(
  px: number, py: number,
  cx: number, cy: number,
  radius: number
): number {
  const dist = Math.sqrt((px - cx) ** 2 + (py - cy) ** 2);
  return radius - dist;
}

// Walking cycle keyframes: [time_fraction, zmpX, zmpY, phase]
type WalkKeyframe = [number, number, number, "left" | "double" | "right"];

const WALK_KEYFRAMES: WalkKeyframe[] = [
  [0.0, 137, 118, "double"],
  [0.10, 137, 118, "left"],
  [0.25, 137, 118, "left"],
  [0.35, 200, 118, "double"],
  [0.50, 277, 118, "double"],
  [0.60, 277, 118, "right"],
  [0.75, 277, 118, "right"],
  [0.85, 220, 118, "double"],
  [1.0, 137, 118, "double"],
];

function interpolateKeyframes(
  t: number
): { zmpX: number; zmpY: number; phase: "left" | "double" | "right" } {
  const normalizedT = t % 1.0;
  for (let i = 0; i < WALK_KEYFRAMES.length - 1; i++) {
    const [t0, x0, y0] = WALK_KEYFRAMES[i];
    const [t1, x1, y1, phase1] = WALK_KEYFRAMES[i + 1];
    if (normalizedT >= t0 && normalizedT <= t1) {
      const frac = (normalizedT - t0) / (t1 - t0);
      return {
        zmpX: x0 + frac * (x1 - x0),
        zmpY: y0 + frac * (y1 - y0),
        phase: frac > 0.5 ? phase1 : WALK_KEYFRAMES[i][3],
      };
    }
  }
  return { zmpX: 137, zmpY: 118, phase: "double" };
}

function SupportPolygonOverlay(
  { phase }: { phase: "left" | "double" | "right" }
) {
  if (phase === "double") {
    return (
      <polygon
        points={buildDoublePolygonString()}
        fill="#3b82f6"
        fillOpacity={0.1}
        stroke="#3b82f6"
        strokeWidth="2"
        strokeDasharray="6,3"
      />
    );
  }
  if (phase === "left") {
    return (
      <polygon
        points={buildPolygonString(LEFT_FOOT)}
        fill="#3b82f6"
        fillOpacity={0.15}
        stroke="#3b82f6"
        strokeWidth="2"
        strokeDasharray="6,3"
      />
    );
  }
  return (
    <polygon
      points={buildPolygonString(RIGHT_FOOT)}
      fill="#3b82f6"
      fillOpacity={0.15}
      stroke="#3b82f6"
      strokeWidth="2"
      strokeDasharray="6,3"
    />
  );
}

function FootShape(
  { points, label, labelX, labelY }:
  { points: number[][]; label: string; labelX: number; labelY: number }
) {
  return (
    <>
      <polygon
        points={buildPolygonString(points)}
        fill="#e0e7ff"
        stroke="#4f46e5"
        strokeWidth="2"
      />
      <text
        x={labelX} y={labelY}
        fontSize="11" fill="#4f46e5"
        textAnchor="middle" fontWeight="bold"
      >
        {label}
      </text>
    </>
  );
}

function PhaseIndicator({ phase }: { phase: string }) {
  const labels: Record<string, string> = {
    left: "Single Support (Left)",
    right: "Single Support (Right)",
    double: "Double Support",
  };
  return (
    <text
      x="207" y="25"
      fontSize="13" fill="#374151"
      textAnchor="middle" fontWeight="bold"
    >
      {labels[phase]}
    </text>
  );
}

function ZmpPoint(
  { x, y, color }: { x: number; y: number; color: string }
) {
  return (
    <>
      <circle cx={x} cy={y} r="7" fill={color} opacity={0.3} />
      <circle cx={x} cy={y} r="4" fill={color} />
      <text
        x={x + 12} y={y + 4}
        fontSize="11" fill={color} fontWeight="bold"
      >
        ZMP
      </text>
    </>
  );
}

function ColorLegend() {
  const items = [
    { color: "#22c55e", label: "Safe" },
    { color: "#eab308", label: "Near edge" },
    { color: "#ef4444", label: "Outside" },
  ];
  return (
    <g transform="translate(30, 185)">
      {items.map((item, i) => (
        <g key={item.label} transform={`translate(${i * 120}, 0)`}>
          <circle cx="0" cy="0" r="5" fill={item.color} />
          <text x="10" y="4" fontSize="10" fill="#6b7280">
            {item.label}
          </text>
        </g>
      ))}
    </g>
  );
}

export function ZMPStabilityDiagram() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => (prev + 0.005) % 1.0);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const { zmpX, zmpY, phase } = interpolateKeyframes(time);
  const zmpColor = computeZmpColor(zmpX, zmpY, phase);

  return (
    <figure className="my-6 flex flex-col items-center">
      <svg viewBox="0 0 414 210" className="w-full max-w-lg" role="img">
        <title>Animated ZMP stability during walking</title>

        {/* Background */}
        <rect x="0" y="0" width="414" height="210" fill="#fafafa" rx="8" />

        <PhaseIndicator phase={phase} />

        {/* Feet */}
        <FootShape
          points={LEFT_FOOT}
          label="L" labelX={137} labelY={175}
        />
        <FootShape
          points={RIGHT_FOOT}
          label="R" labelX={277} labelY={175}
        />

        {/* Active support polygon overlay */}
        <SupportPolygonOverlay phase={phase} />

        {/* ZMP point */}
        <ZmpPoint x={zmpX} y={zmpY} color={zmpColor} />

        <ColorLegend />
      </svg>
      <figcaption className="mt-2 text-center text-sm text-gray-500">
        Animated ZMP trajectory during walking. The support polygon
        (dashed blue) changes between single and double support phases.
        The ZMP color indicates stability margin.
      </figcaption>
    </figure>
  );
}
