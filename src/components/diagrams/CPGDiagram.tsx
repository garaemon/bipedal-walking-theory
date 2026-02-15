"use client";

export function CPGNetworkDiagram() {
  return (
    <figure className="my-6 flex flex-col items-center">
      <svg viewBox="0 0 400 280" className="w-full max-w-md" role="img">
        <title>CPG coupled oscillator network</title>
        <defs>
          <marker
            id="arrow-cpg"
            markerWidth="7"
            markerHeight="5"
            refX="7"
            refY="2.5"
            orient="auto"
          >
            <path d="M0,0 L7,2.5 L0,5 Z" fill="#4f46e5" />
          </marker>
        </defs>

        {/* Central oscillator */}
        <circle
          cx="200"
          cy="80"
          r="30"
          fill="#dbeafe"
          stroke="#2563eb"
          strokeWidth="2"
        />
        <text
          x="200"
          y="76"
          fontSize="10"
          fill="#1e40af"
          textAnchor="middle"
          fontWeight="bold"
        >
          Trunk
        </text>
        <text x="200" y="90" fontSize="10" fill="#1e40af" textAnchor="middle">
          &#x3C6;&#x2080;
        </text>

        {/* Left hip oscillator */}
        <circle
          cx="100"
          cy="160"
          r="25"
          fill="#dcfce7"
          stroke="#16a34a"
          strokeWidth="2"
        />
        <text
          x="100"
          y="156"
          fontSize="9"
          fill="#166534"
          textAnchor="middle"
          fontWeight="bold"
        >
          L Hip
        </text>
        <text x="100" y="168" fontSize="9" fill="#166534" textAnchor="middle">
          &#x3C6;&#x2081;
        </text>

        {/* Right hip oscillator */}
        <circle
          cx="300"
          cy="160"
          r="25"
          fill="#fef9c3"
          stroke="#ca8a04"
          strokeWidth="2"
        />
        <text
          x="300"
          y="156"
          fontSize="9"
          fill="#854d0e"
          textAnchor="middle"
          fontWeight="bold"
        >
          R Hip
        </text>
        <text x="300" y="168" fontSize="9" fill="#854d0e" textAnchor="middle">
          &#x3C6;&#x2082;
        </text>

        {/* Left knee oscillator */}
        <circle
          cx="80"
          cy="240"
          r="22"
          fill="#dcfce7"
          stroke="#16a34a"
          strokeWidth="1.5"
        />
        <text x="80" y="237" fontSize="8" fill="#166534" textAnchor="middle">
          L Knee
        </text>
        <text x="80" y="248" fontSize="8" fill="#166534" textAnchor="middle">
          &#x3C6;&#x2083;
        </text>

        {/* Right knee oscillator */}
        <circle
          cx="320"
          cy="240"
          r="22"
          fill="#fef9c3"
          stroke="#ca8a04"
          strokeWidth="1.5"
        />
        <text x="320" y="237" fontSize="8" fill="#854d0e" textAnchor="middle">
          R Knee
        </text>
        <text x="320" y="248" fontSize="8" fill="#854d0e" textAnchor="middle">
          &#x3C6;&#x2084;
        </text>

        {/* Coupling connections */}
        {/* Trunk to left hip */}
        <line
          x1="175"
          y1="100"
          x2="120"
          y2="142"
          stroke="#4f46e5"
          strokeWidth="2"
          markerEnd="url(#arrow-cpg)"
        />
        {/* Trunk to right hip */}
        <line
          x1="225"
          y1="100"
          x2="280"
          y2="142"
          stroke="#4f46e5"
          strokeWidth="2"
          markerEnd="url(#arrow-cpg)"
        />

        {/* Anti-phase coupling between hips */}
        <path
          d="M 125 160 C 160 130, 240 130, 275 160"
          fill="none"
          stroke="#dc2626"
          strokeWidth="2"
          strokeDasharray="5,3"
        />
        <text
          x="200"
          y="130"
          fontSize="9"
          fill="#dc2626"
          textAnchor="middle"
        >
          anti-phase (&#x3C0;)
        </text>

        {/* Hip to knee connections */}
        <line
          x1="92"
          y1="183"
          x2="84"
          y2="220"
          stroke="#4f46e5"
          strokeWidth="1.5"
          markerEnd="url(#arrow-cpg)"
        />
        <line
          x1="308"
          y1="183"
          x2="316"
          y2="220"
          stroke="#4f46e5"
          strokeWidth="1.5"
          markerEnd="url(#arrow-cpg)"
        />

        {/* Legend */}
        <g transform="translate(20, 15)">
          <line x1="0" y1="0" x2="15" y2="0" stroke="#4f46e5" strokeWidth="2" />
          <text x="19" y="4" fontSize="9" fill="#666">Coupling</text>
          <line
            x1="80"
            y1="0"
            x2="95"
            y2="0"
            stroke="#dc2626"
            strokeWidth="2"
            strokeDasharray="5,3"
          />
          <text x="99" y="4" fontSize="9" fill="#666">Anti-phase</text>
        </g>
      </svg>
      <figcaption className="mt-2 text-center text-sm text-gray-500">
        Fig 1. CPG network for bipedal walking. Oscillators are coupled
        with specific phase relationships. Left and right hips maintain
        anti-phase (&#x3C0;) coupling for alternating leg swing.
      </figcaption>
    </figure>
  );
}
