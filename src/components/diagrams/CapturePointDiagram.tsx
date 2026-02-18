"use client";

export function CapturePointDiagram() {
  return (
    <figure className="my-6 flex flex-col items-center">
      <svg viewBox="0 0 440 300" className="w-full max-w-md" role="img">
        <title>Capture Point concept</title>
        <defs>
          <marker
            id="arrow-cp"
            markerWidth="8"
            markerHeight="6"
            refX="8"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L8,3 L0,6 Z" fill="#2563eb" />
          </marker>
          <marker
            id="arrow-cp-red"
            markerWidth="8"
            markerHeight="6"
            refX="8"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L8,3 L0,6 Z" fill="#dc2626" />
          </marker>
          <marker
            id="arrow-cp-green"
            markerWidth="8"
            markerHeight="6"
            refX="8"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L8,3 L0,6 Z" fill="#16a34a" />
          </marker>
        </defs>

        {/* Ground */}
        <rect x="20" y="230" width="400" height="4" rx="2" fill="#d1d5db" />

        {/* Robot (simplified stick figure) */}
        {/* Stance leg */}
        <line
          x1="150"
          y1="228"
          x2="180"
          y2="100"
          stroke="#4f46e5"
          strokeWidth="4"
          strokeLinecap="round"
        />
        {/* Body */}
        <rect
          x="165"
          y="70"
          width="30"
          height="30"
          rx="4"
          fill="#e0e7ff"
          stroke="#4f46e5"
          strokeWidth="2"
        />
        {/* CoM */}
        <circle cx="180" cy="85" r="4" fill="#4f46e5" />

        {/* Velocity arrow */}
        <line
          x1="180"
          y1="85"
          x2="250"
          y2="85"
          stroke="#2563eb"
          strokeWidth="2"
          markerEnd="url(#arrow-cp)"
        />
        <text x="215" y="78" fontSize="11" fill="#2563eb" fontWeight="bold">
          x&#x307;
        </text>

        {/* CoM position label */}
        <text
          x="180"
          y="62"
          fontSize="11"
          fill="#4f46e5"
          textAnchor="middle"
        >
          CoM (x)
        </text>

        {/* Capture point */}
        <circle cx="280" cy="230" r="7" fill="#dc2626" stroke="#991b1b" strokeWidth="2" />
        <text
          x="280"
          y="258"
          fontSize="11"
          fill="#dc2626"
          textAnchor="middle"
          fontWeight="bold"
        >
          Capture Point (&#x3BE;)
        </text>

        {/* Arrow from CoM to capture point projection */}
        <line
          x1="180"
          y1="230"
          x2="272"
          y2="230"
          stroke="#dc2626"
          strokeWidth="2"
          markerEnd="url(#arrow-cp-red)"
          strokeDasharray="5,3"
        />

        {/* CoM ground projection */}
        <line
          x1="180"
          y1="100"
          x2="180"
          y2="230"
          stroke="#6b7280"
          strokeWidth="1"
          strokeDasharray="3,3"
        />
        <circle cx="180" cy="230" r="3" fill="#6b7280" />

        {/* x distance */}
        <text
          x="225"
          y="222"
          fontSize="10"
          fill="#dc2626"
          textAnchor="middle"
        >
          x&#x307;/&#x3C9;
        </text>

        {/* Foot placement for recovery */}
        <rect
          x="265"
          y="226"
          width="30"
          height="8"
          rx="3"
          fill="#16a34a"
          opacity="0.5"
        />
        <text
          x="280"
          y="278"
          fontSize="9"
          fill="#16a34a"
          textAnchor="middle"
        >
          Step here to stop!
        </text>

        {/* Formula box */}
        <rect
          x="300"
          y="50"
          width="130"
          height="50"
          rx="6"
          fill="#fef2f2"
          stroke="#dc2626"
          strokeWidth="1"
        />
        <text
          x="365"
          y="72"
          fontSize="12"
          fill="#dc2626"
          textAnchor="middle"
          fontWeight="bold"
        >
          &#x3BE; = x + x&#x307;/&#x3C9;
        </text>
        <text
          x="365"
          y="90"
          fontSize="10"
          fill="#991b1b"
          textAnchor="middle"
        >
          &#x3C9; = &#x221A;(g/z&#x2082;)
        </text>

        {/* Stance foot */}
        <rect x="135" y="226" width="30" height="8" rx="3" fill="#ea580c" />
      </svg>
      <figcaption className="mt-2 text-center text-sm text-gray-500">
        Fig 1. The Capture Point &#x3BE; is the position where the robot must
        place its foot to come to a complete stop. It is always ahead
        of the CoM in the direction of motion.
      </figcaption>
    </figure>
  );
}

export function DCMWalkingDiagram() {
  return (
    <figure className="my-6 flex flex-col items-center">
      <svg viewBox="0 0 460 250" className="w-full max-w-lg" role="img">
        <title>DCM-based walking control</title>
        <defs>
          <marker
            id="arrow-dcm"
            markerWidth="7"
            markerHeight="5"
            refX="7"
            refY="2.5"
            orient="auto"
          >
            <path d="M0,0 L7,2.5 L0,5 Z" fill="#6b7280" />
          </marker>
        </defs>

        {/* Ground */}
        <rect x="20" y="190" width="420" height="4" rx="2" fill="#d1d5db" />

        {/* Footsteps */}
        {[0, 1, 2, 3].map((i) => (
          <rect
            key={i}
            x={60 + i * 100}
            y={186}
            width={30}
            height={8}
            rx={3}
            fill={i % 2 === 0 ? "#ea580c" : "#16a34a"}
          />
        ))}

        {/* DCM trajectory (connecting end-of-step DCM waypoints) */}
        <path
          d="M 90 120 C 110 105, 150 110, 175 100 C 200 90, 240 95, 275 85 C 310 78, 350 82, 375 75"
          fill="none"
          stroke="#dc2626"
          strokeWidth="2.5"
        />

        {/* DCM waypoints */}
        {[0, 1, 2, 3].map((i) => (
          <circle
            key={i}
            cx={90 + i * 100}
            cy={120 - i * 15}
            r={4}
            fill="#dc2626"
          />
        ))}

        {/* CoM trajectory (lags behind DCM) */}
        <path
          d="M 75 135 C 100 125, 140 128, 165 118 C 195 108, 230 112, 265 105 C 295 97, 335 100, 365 93"
          fill="none"
          stroke="#2563eb"
          strokeWidth="2.5"
        />

        {/* CoP / foot positions */}
        <path
          d="M 75 170 L 75 170 L 140 170 L 140 145 L 240 145 L 240 160 L 340 160 L 340 140"
          fill="none"
          stroke="#ea580c"
          strokeWidth="1.5"
          strokeDasharray="4,3"
        />

        {/* Labels */}
        <text x="395" y="73" fontSize="10" fill="#dc2626" fontWeight="bold">
          DCM (&#x3BE;)
        </text>
        <text x="385" y="92" fontSize="10" fill="#2563eb" fontWeight="bold">
          CoM (x)
        </text>
        <text x="350" y="138" fontSize="10" fill="#ea580c">
          CoP (r)
        </text>

        {/* Key relationship */}
        <rect
          x="20"
          y="10"
          width="200"
          height="50"
          rx="6"
          fill="#f0fdf4"
          stroke="#16a34a"
          strokeWidth="1"
        />
        <text x="30" y="28" fontSize="10" fill="#166534" fontWeight="bold">
          DCM dynamics:
        </text>
        <text x="30" y="48" fontSize="11" fill="#166534">
          &#x3BE;&#x307; = &#x3C9;(&#x3BE; - r)
        </text>

        {/* Legend */}
        <g transform="translate(250, 18)">
          <text fontSize="9" fill="#666">
            <tspan fill="#dc2626">&#x25CF;</tspan>
            <tspan dx="3">DCM waypoints</tspan>
            <tspan dx="10" fill="#2563eb">&#x2014;</tspan>
            <tspan dx="3">CoM</tspan>
            <tspan dx="10" fill="#dc2626">&#x2014;</tspan>
            <tspan dx="3">DCM</tspan>
          </text>
        </g>

        {/* Step labels */}
        {[0, 1, 2, 3].map((i) => (
          <text
            key={i}
            x={75 + i * 100}
            y={210}
            fontSize="9"
            fill="#6b7280"
            textAnchor="middle"
          >
            step {i + 1}
          </text>
        ))}
      </svg>
      <figcaption className="mt-2 text-center text-sm text-gray-500">
        Fig 2. DCM-based walking. The DCM trajectory (red) is planned
        backward from the final waypoint. The CoM (blue) naturally
        converges toward the DCM. The CoP (orange) is placed to guide
        the DCM to its next waypoint.
      </figcaption>
    </figure>
  );
}
