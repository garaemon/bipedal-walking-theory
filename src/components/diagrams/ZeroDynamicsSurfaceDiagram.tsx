"use client";

import { useState, useEffect } from "react";

function computeTrajectoryPoint(t: number): { x: number; y: number } {
  // Trajectory on the zero dynamics surface (projected to 2D)
  const theta = -0.8 + t * 1.6;
  const thetaDot = 1.2 * Math.sin(theta * 2.5) + 0.5;
  return { x: theta, y: thetaDot };
}

function projectTo2D(
  x3d: number,
  y3d: number,
  z3d: number,
): { x: number; y: number } {
  // Simple isometric-like projection for 3D effect
  const angle = Math.PI / 6;
  const px = 250 + x3d * 120 + z3d * 60 * Math.cos(angle);
  const py = 200 - y3d * 100 - z3d * 40 * Math.sin(angle);
  return { x: px, y: py };
}

function buildSurfaceGridLines(): string[] {
  const lines: string[] = [];
  const steps = 8;

  // Lines along theta direction (constant y_output)
  for (let j = 0; j <= 2; j++) {
    const yOut = (j / 2) * 0.15 - 0.075;
    let path = "";
    for (let i = 0; i <= steps; i++) {
      const s = i / steps;
      const theta = -1 + s * 2;
      const thetaDot = 0.5 + 0.7 * Math.sin(theta * 1.5) + yOut * 2;
      const proj = projectTo2D(theta, thetaDot, yOut);
      path += (i === 0 ? "M" : "L") + ` ${proj.x} ${proj.y}`;
    }
    lines.push(path);
  }

  // Lines along y_output direction (constant theta)
  for (let i = 0; i <= steps; i += 2) {
    const s = i / steps;
    const theta = -1 + s * 2;
    let path = "";
    for (let j = 0; j <= 4; j++) {
      const yOut = (j / 4) * 0.15 - 0.075;
      const thetaDot = 0.5 + 0.7 * Math.sin(theta * 1.5) + yOut * 2;
      const proj = projectTo2D(theta, thetaDot, yOut);
      path += (j === 0 ? "M" : "L") + ` ${proj.x} ${proj.y}`;
    }
    lines.push(path);
  }

  return lines;
}

function buildZeroSurfacePath(): string {
  // The zero dynamics surface: y=0 slice through the state space
  const steps = 40;
  let path = "";
  for (let i = 0; i <= steps; i++) {
    const s = i / steps;
    const theta = -1 + s * 2;
    const thetaDot = 0.5 + 0.7 * Math.sin(theta * 1.5);
    const proj = projectTo2D(theta, thetaDot, 0);
    path += (i === 0 ? "M" : "L") + ` ${proj.x} ${proj.y}`;
  }
  return path;
}

function buildTrajectoryPath(): string {
  const steps = 60;
  let path = "";
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const pt = computeTrajectoryPoint(t);
    const proj = projectTo2D(pt.x, pt.y, 0);
    path += (i === 0 ? "M" : "L") + ` ${proj.x} ${proj.y}`;
  }
  return path;
}

function buildOffSurfaceTrajectoryPath(): string {
  // A trajectory that starts off the surface and converges to it
  const steps = 40;
  let path = "";
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const decay = Math.exp(-4 * t);
    const theta = -0.6 + t * 1.0;
    const thetaDot = 0.5 + 0.7 * Math.sin(theta * 1.5) + 0.8 * decay;
    const yOffset = 0.12 * decay;
    const proj = projectTo2D(theta, thetaDot, yOffset);
    path += (i === 0 ? "M" : "L") + ` ${proj.x} ${proj.y}`;
  }
  return path;
}

export function ZeroDynamicsSurfaceDiagram() {
  const [animPhase, setAnimPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimPhase((prev) => (prev + 1) % 120);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const surfaceGridLines = buildSurfaceGridLines();
  const zeroSurfacePath = buildZeroSurfacePath();
  const trajectoryPath = buildTrajectoryPath();
  const offSurfacePath = buildOffSurfaceTrajectoryPath();

  // Animated point on the trajectory
  const animT = animPhase / 120;
  const animPt = computeTrajectoryPoint(animT);
  const animProj = projectTo2D(animPt.x, animPt.y, 0);

  // Axis endpoints
  const originProj = projectTo2D(0, 0, 0);
  const xAxisEnd = projectTo2D(1.3, 0, 0);
  const yAxisEnd = projectTo2D(0, 1.8, 0);
  const zAxisEnd = projectTo2D(0, 0, 0.25);

  return (
    <figure className="my-6 flex flex-col items-center">
      <svg viewBox="0 0 520 320" className="w-full max-w-lg" role="img">
        <title>
          Zero dynamics surface Z in state space
        </title>
        <defs>
          <marker
            id="arrow-zds"
            markerWidth="7"
            markerHeight="5"
            refX="7"
            refY="2.5"
            orient="auto"
          >
            <path d="M0,0 L7,2.5 L0,5 Z" fill="#374151" />
          </marker>
          <marker
            id="arrow-zds-traj"
            markerWidth="6"
            markerHeight="4"
            refX="6"
            refY="2"
            orient="auto"
          >
            <path d="M0,0 L6,2 L0,4 Z" fill="#2563eb" />
          </marker>
          <marker
            id="arrow-zds-conv"
            markerWidth="6"
            markerHeight="4"
            refX="6"
            refY="2"
            orient="auto"
          >
            <path d="M0,0 L6,2 L0,4 Z" fill="#16a34a" />
          </marker>
        </defs>

        {/* Background: full state space (light gray region) */}
        <rect
          x="40"
          y="20"
          width="440"
          height="260"
          rx="8"
          fill="#f9fafb"
          stroke="#e5e7eb"
          strokeWidth="1"
        />
        <text
          x="460"
          y="40"
          fontSize="9"
          fill="#9ca3af"
          textAnchor="end"
        >
          Full state space (q, q&#x0307;)
        </text>

        {/* Grid lines representing the wider state space around Z */}
        {surfaceGridLines.map((d, i) => (
          <path
            key={i}
            d={d}
            fill="none"
            stroke="#e0e7ff"
            strokeWidth="0.8"
            opacity="0.6"
          />
        ))}

        {/* Zero dynamics surface Z (highlighted) */}
        <path
          d={zeroSurfacePath}
          fill="none"
          stroke="#4f46e5"
          strokeWidth="3"
        />

        {/* Surface label */}
        {(() => {
          const labelPt = projectTo2D(0.7, 0.5 + 0.7 * Math.sin(0.7 * 1.5), 0);
          return (
            <text
              x={labelPt.x + 15}
              y={labelPt.y + 20}
              fontSize="12"
              fill="#4f46e5"
              fontWeight="bold"
            >
              Z = &#123;y=0, y&#x0307;=0&#125;
            </text>
          );
        })()}

        {/* Trajectory on the zero dynamics surface */}
        <path
          d={trajectoryPath}
          fill="none"
          stroke="#2563eb"
          strokeWidth="2"
          markerEnd="url(#arrow-zds-traj)"
        />

        {/* Off-surface trajectory converging to Z */}
        <path
          d={offSurfacePath}
          fill="none"
          stroke="#16a34a"
          strokeWidth="1.5"
          strokeDasharray="4,3"
          markerEnd="url(#arrow-zds-conv)"
        />

        {/* Animated point */}
        <circle
          cx={animProj.x}
          cy={animProj.y}
          r="4"
          fill="#2563eb"
        >
          <animate
            attributeName="opacity"
            values="1;0.5;1"
            dur="1s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Axes */}
        <line
          x1={originProj.x}
          y1={originProj.y}
          x2={xAxisEnd.x}
          y2={xAxisEnd.y}
          stroke="#374151"
          strokeWidth="1.5"
          markerEnd="url(#arrow-zds)"
        />
        <line
          x1={originProj.x}
          y1={originProj.y}
          x2={yAxisEnd.x}
          y2={yAxisEnd.y}
          stroke="#374151"
          strokeWidth="1.5"
          markerEnd="url(#arrow-zds)"
        />
        <line
          x1={originProj.x}
          y1={originProj.y}
          x2={zAxisEnd.x}
          y2={zAxisEnd.y}
          stroke="#374151"
          strokeWidth="1.2"
          markerEnd="url(#arrow-zds)"
        />

        {/* Axis labels */}
        <text
          x={xAxisEnd.x + 5}
          y={xAxisEnd.y + 4}
          fontSize="11"
          fill="#374151"
        >
          &#x3B8;
        </text>
        <text
          x={yAxisEnd.x - 5}
          y={yAxisEnd.y - 5}
          fontSize="11"
          fill="#374151"
        >
          &#x3B8;&#x0307;
        </text>
        <text
          x={zAxisEnd.x + 5}
          y={zAxisEnd.y - 2}
          fontSize="11"
          fill="#374151"
        >
          y
        </text>

        {/* Off-surface start annotation */}
        {(() => {
          const startPt = projectTo2D(-0.6, 0.5 + 0.7 * Math.sin(-0.6 * 1.5) + 0.8, 0.12);
          return (
            <>
              <circle
                cx={startPt.x}
                cy={startPt.y}
                r="3"
                fill="#16a34a"
              />
              <text
                x={startPt.x + 8}
                y={startPt.y - 5}
                fontSize="9"
                fill="#16a34a"
              >
                y &#x2260; 0: converges to Z
              </text>
            </>
          );
        })()}

        {/* Legend */}
        <g transform="translate(40, 290)">
          <line
            x1="0"
            y1="0"
            x2="20"
            y2="0"
            stroke="#4f46e5"
            strokeWidth="3"
          />
          <text x="25" y="4" fontSize="9" fill="#666">
            Zero dynamics surface Z
          </text>
          <line
            x1="170"
            y1="0"
            x2="190"
            y2="0"
            stroke="#2563eb"
            strokeWidth="2"
          />
          <text x="195" y="4" fontSize="9" fill="#666">
            Trajectory on Z
          </text>
          <line
            x1="310"
            y1="0"
            x2="330"
            y2="0"
            stroke="#16a34a"
            strokeWidth="1.5"
            strokeDasharray="4,3"
          />
          <text x="335" y="4" fontSize="9" fill="#666">
            Converging to Z
          </text>
        </g>
      </svg>
      <figcaption className="mt-2 text-center text-sm text-gray-500">
        The zero dynamics surface Z in state space. When virtual constraints
        are perfectly satisfied (y=0, y&#x0307;=0), the system evolves on the
        lower-dimensional surface Z. Trajectories starting off Z (dashed green)
        converge to it under the feedback controller.
      </figcaption>
    </figure>
  );
}
