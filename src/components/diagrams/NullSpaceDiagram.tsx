"use client";

export function NullSpaceDiagram() {
  const baseX = 60;
  const baseY = 200;

  return (
    <figure className="my-6 flex flex-col items-center">
      <svg viewBox="0 0 500 260" className="w-full max-w-lg" role="img">
        <title>Null space motion of a 3-link planar arm</title>
        <defs>
          <marker id="arrow-ns" markerWidth="8" markerHeight="6"
            refX="8" refY="3" orient="auto">
            <path d="M0,0 L8,3 L0,6 Z" fill="#16a34a" />
          </marker>
        </defs>

        {/* Configuration A (left) */}
        <g>
          <circle cx={baseX} cy={baseY} r="5" fill="#374151" />
          <line x1={baseX} y1={baseY} x2={baseX + 55} y2={baseY - 60}
            stroke="#2563eb" strokeWidth="4" strokeLinecap="round" />
          <line x1={baseX + 55} y1={baseY - 60} x2={baseX + 110} y2={baseY - 30}
            stroke="#2563eb" strokeWidth="4" strokeLinecap="round" />
          <line x1={baseX + 110} y1={baseY - 30} x2={baseX + 140} y2={baseY - 90}
            stroke="#2563eb" strokeWidth="4" strokeLinecap="round" />
          <circle cx={baseX + 55} cy={baseY - 60} r="4" fill="#60a5fa" />
          <circle cx={baseX + 110} cy={baseY - 30} r="4" fill="#60a5fa" />
          <circle cx={baseX + 140} cy={baseY - 90} r="6" fill="#dc2626" />
          <text x={baseX + 70} y={baseY + 30} fontSize="11"
            fill="#374151" textAnchor="middle">Config A</text>
        </g>

        {/* Configuration B (right) */}
        <g>
          <circle cx={baseX + 230} cy={baseY} r="5" fill="#374151" />
          <line x1={baseX + 230} y1={baseY} x2={baseX + 310} y2={baseY - 40}
            stroke="#9333ea" strokeWidth="4" strokeLinecap="round" />
          <line x1={baseX + 310} y1={baseY - 40} x2={baseX + 330} y2={baseY - 120}
            stroke="#9333ea" strokeWidth="4" strokeLinecap="round" />
          <line x1={baseX + 330} y1={baseY - 120} x2={baseX + 370} y2={baseY - 90}
            stroke="#9333ea" strokeWidth="4" strokeLinecap="round" />
          <circle cx={baseX + 310} cy={baseY - 40} r="4" fill="#c084fc" />
          <circle cx={baseX + 330} cy={baseY - 120} r="4" fill="#c084fc" />
          <circle cx={baseX + 370} cy={baseY - 90} r="6" fill="#dc2626" />
          <text x={baseX + 300} y={baseY + 30} fontSize="11"
            fill="#374151" textAnchor="middle">Config B</text>
        </g>

        {/* End-effector label */}
        <text x={baseX + 150} y={baseY - 96} fontSize="10" fill="#dc2626">
          end-effector
        </text>
        <text x={baseX + 380} y={baseY - 96} fontSize="10" fill="#dc2626">
          end-effector
        </text>

        {/* Null space motion arrow between configs */}
        <path d="M 220 130 C 240 100, 270 100, 290 130"
          fill="none" stroke="#16a34a" strokeWidth="2"
          markerEnd="url(#arrow-ns)" />
        <text x="255" y="95" fontSize="11" fill="#16a34a"
          textAnchor="middle" fontWeight="bold">
          Null space
        </text>
        <text x="255" y="108" fontSize="11" fill="#16a34a"
          textAnchor="middle">motion</text>

        {/* Same position indicator */}
        <text x="250" y="20" fontSize="12" fill="#374151"
          textAnchor="middle" fontWeight="bold">
          Same end-effector position, different joint configuration
        </text>
      </svg>
      <figcaption className="mt-2 text-center text-sm text-gray-500">
        Fig. A 3-link planar arm (3 DOF) reaching a 2D target (2 DOF).
        The extra 1 DOF allows &quot;self-motion&quot; in the null space:
        the internal configuration changes while the end-effector stays fixed.
      </figcaption>
    </figure>
  );
}
