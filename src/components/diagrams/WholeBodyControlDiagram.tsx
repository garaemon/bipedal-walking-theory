"use client";

export function TaskPriorityDiagram() {
  return (
    <figure className="my-6 flex flex-col items-center">
      <svg viewBox="0 0 420 260" className="w-full max-w-md" role="img">
        <title>Task priority framework</title>
        <defs>
          <marker
            id="arrow-tp"
            markerWidth="8"
            markerHeight="6"
            refX="8"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L8,3 L0,6 Z" fill="#374151" />
          </marker>
        </defs>

        {/* Priority stack */}
        {/* Priority 1 (highest) */}
        <rect
          x="120"
          y="20"
          width="180"
          height="45"
          rx="6"
          fill="#fecaca"
          stroke="#dc2626"
          strokeWidth="2"
        />
        <text
          x="210"
          y="38"
          fontSize="10"
          fill="#991b1b"
          textAnchor="middle"
          fontWeight="bold"
        >
          Priority 1: Balance
        </text>
        <text
          x="210"
          y="52"
          fontSize="9"
          fill="#991b1b"
          textAnchor="middle"
        >
          CoM position, ZMP constraint
        </text>

        {/* Priority 2 */}
        <rect
          x="120"
          y="75"
          width="180"
          height="45"
          rx="6"
          fill="#fed7aa"
          stroke="#ea580c"
          strokeWidth="2"
        />
        <text
          x="210"
          y="93"
          fontSize="10"
          fill="#9a3412"
          textAnchor="middle"
          fontWeight="bold"
        >
          Priority 2: Foot Placement
        </text>
        <text
          x="210"
          y="107"
          fontSize="9"
          fill="#9a3412"
          textAnchor="middle"
        >
          Swing foot trajectory
        </text>

        {/* Priority 3 */}
        <rect
          x="120"
          y="130"
          width="180"
          height="45"
          rx="6"
          fill="#dbeafe"
          stroke="#2563eb"
          strokeWidth="2"
        />
        <text
          x="210"
          y="148"
          fontSize="10"
          fill="#1e40af"
          textAnchor="middle"
          fontWeight="bold"
        >
          Priority 3: Posture
        </text>
        <text
          x="210"
          y="162"
          fontSize="9"
          fill="#1e40af"
          textAnchor="middle"
        >
          Torso orientation, arm positions
        </text>

        {/* Priority 4 (lowest) */}
        <rect
          x="120"
          y="185"
          width="180"
          height="45"
          rx="6"
          fill="#e0e7ff"
          stroke="#6366f1"
          strokeWidth="1.5"
        />
        <text
          x="210"
          y="203"
          fontSize="10"
          fill="#4338ca"
          textAnchor="middle"
          fontWeight="bold"
        >
          Priority 4: Comfort
        </text>
        <text
          x="210"
          y="217"
          fontSize="9"
          fill="#4338ca"
          textAnchor="middle"
        >
          Joint limit avoidance, singularity
        </text>

        {/* Priority labels on left */}
        <text
          x="110"
          y="45"
          fontSize="10"
          fill="#dc2626"
          textAnchor="end"
          fontWeight="bold"
        >
          High
        </text>
        <text x="110" y="210" fontSize="10" fill="#6366f1" textAnchor="end">
          Low
        </text>

        {/* Arrow showing priority direction */}
        <line
          x1="60"
          y1="30"
          x2="60"
          y2="225"
          stroke="#6b7280"
          strokeWidth="1.5"
          markerEnd="url(#arrow-tp)"
        />
        <text
          x="50"
          y="130"
          fontSize="10"
          fill="#6b7280"
          textAnchor="middle"
          transform="rotate(-90, 50, 130)"
        >
          Decreasing priority
        </text>

        {/* Null space annotation */}
        <text
          x="320"
          y="68"
          fontSize="9"
          fill="#6b7280"
          textAnchor="start"
        >
          null space
        </text>
        <path
          d="M 300 60 C 315 60, 316 68, 305 75"
          fill="none"
          stroke="#6b7280"
          strokeWidth="1"
        />
        <text
          x="320"
          y="123"
          fontSize="9"
          fill="#6b7280"
          textAnchor="start"
        >
          null space
        </text>
        <path
          d="M 300 115 C 315 115, 316 123, 305 130"
          fill="none"
          stroke="#6b7280"
          strokeWidth="1"
        />
        <text
          x="320"
          y="178"
          fontSize="9"
          fill="#6b7280"
          textAnchor="start"
        >
          null space
        </text>
        <path
          d="M 300 170 C 315 170, 316 178, 305 185"
          fill="none"
          stroke="#6b7280"
          strokeWidth="1"
        />
      </svg>
      <figcaption className="mt-2 text-center text-sm text-gray-500">
        Fig 1. Task priority framework. Higher priority tasks are
        fulfilled first; lower priority tasks use the remaining
        null space degrees of freedom.
      </figcaption>
    </figure>
  );
}
