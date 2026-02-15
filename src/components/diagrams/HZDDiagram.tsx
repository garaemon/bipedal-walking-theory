"use client";

export function VirtualConstraintDiagram() {
  return (
    <figure className="my-6 flex flex-col items-center">
      <svg viewBox="0 0 440 280" className="w-full max-w-md" role="img">
        <title>Virtual constraints and hybrid zero dynamics</title>
        <defs>
          <marker
            id="arrow-hzd"
            markerWidth="7"
            markerHeight="5"
            refX="7"
            refY="2.5"
            orient="auto"
          >
            <path d="M0,0 L7,2.5 L0,5 Z" fill="#4f46e5" />
          </marker>
        </defs>

        {/* Axes */}
        <line
          x1="60"
          y1="240"
          x2="400"
          y2="240"
          stroke="#374151"
          strokeWidth="1.5"
        />
        <line
          x1="60"
          y1="240"
          x2="60"
          y2="30"
          stroke="#374151"
          strokeWidth="1.5"
        />
        <text x="230" y="268" fontSize="11" fill="#374151" textAnchor="middle">
          &#x3B8; (phase variable)
        </text>
        <text
          x="30"
          y="135"
          fontSize="11"
          fill="#374151"
          textAnchor="middle"
          transform="rotate(-90, 30, 135)"
        >
          joint angle
        </text>

        {/* Desired trajectory (Bezier curve) */}
        <path
          d="M 80 180 C 120 180, 140 80, 200 60 C 260 40, 300 100, 360 160"
          fill="none"
          stroke="#2563eb"
          strokeWidth="3"
        />

        {/* Actual trajectory (close to desired) */}
        <path
          d="M 80 185 C 118 183, 138 85, 198 65 C 258 44, 298 105, 358 164"
          fill="none"
          stroke="#16a34a"
          strokeWidth="2"
          strokeDasharray="5,3"
        />

        {/* Error visualization */}
        <line
          x1="200"
          y1="60"
          x2="198"
          y2="65"
          stroke="#dc2626"
          strokeWidth="1.5"
        />
        <line
          x1="300"
          y1="100"
          x2="298"
          y2="105"
          stroke="#dc2626"
          strokeWidth="1.5"
        />

        {/* Bezier control points */}
        {[
          [80, 180],
          [140, 80],
          [200, 60],
          [300, 100],
          [360, 160],
        ].map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={3}
            fill="#2563eb"
          />
        ))}

        {/* Labels */}
        <text x="365" y="155" fontSize="10" fill="#2563eb" fontWeight="bold">
          h&#x2092;(&#x3B8;)
        </text>
        <text x="363" y="173" fontSize="9" fill="#16a34a">
          h(q)
        </text>

        {/* Error label */}
        <text x="310" y="85" fontSize="10" fill="#dc2626">
          y = h(q) - h&#x2092;(&#x3B8;)
        </text>

        {/* Phase variable annotation */}
        <rect
          x="80"
          y="10"
          width="170"
          height="32"
          rx="4"
          fill="#f0fdf4"
          stroke="#16a34a"
          strokeWidth="1"
        />
        <text x="90" y="30" fontSize="9" fill="#166534">
          &#x3B8;(q) monotonically increases
        </text>
        <text x="90" y="18" fontSize="9" fill="#166534" fontWeight="bold">
          Phase variable:
        </text>

        {/* Bezier points label */}
        <circle cx="90" cy="220" r={3} fill="#2563eb" />
        <text x="97" y="224" fontSize="9" fill="#666">
          Bezier polynomial control points
        </text>

        {/* Legend */}
        <g transform="translate(250, 215)">
          <line
            x1="0"
            y1="0"
            x2="15"
            y2="0"
            stroke="#2563eb"
            strokeWidth="3"
          />
          <text x="19" y="4" fontSize="9" fill="#666">Desired h&#x2092;(&#x3B8;)</text>
          <line
            x1="100"
            y1="0"
            x2="115"
            y2="0"
            stroke="#16a34a"
            strokeWidth="2"
            strokeDasharray="5,3"
          />
          <text x="119" y="4" fontSize="9" fill="#666">Actual h(q)</text>
        </g>
      </svg>
      <figcaption className="mt-2 text-center text-sm text-gray-500">
        Fig 1. Virtual constraints parameterize desired joint trajectories
        as functions of a phase variable &#x3B8;. Bezier polynomials
        define the desired output h&#x2092;(&#x3B8;), and the controller
        drives the output error y to zero.
      </figcaption>
    </figure>
  );
}
