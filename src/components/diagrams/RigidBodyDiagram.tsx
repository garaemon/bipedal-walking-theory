"use client";

export function RigidBodyDiagram() {
  return (
    <figure className="my-6 flex flex-col items-center">
      <svg viewBox="0 0 400 300" className="w-full max-w-md" role="img">
        <title>Rigid body with forces and torques</title>
        <defs>
          <marker
            id="arrow-rb"
            markerWidth="8"
            markerHeight="6"
            refX="8"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L8,3 L0,6 Z" fill="#2563eb" />
          </marker>
          <marker
            id="arrow-red"
            markerWidth="8"
            markerHeight="6"
            refX="8"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L8,3 L0,6 Z" fill="#dc2626" />
          </marker>
          <marker
            id="arrow-green"
            markerWidth="8"
            markerHeight="6"
            refX="8"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L8,3 L0,6 Z" fill="#16a34a" />
          </marker>
        </defs>

        {/* Rigid body (rotated rectangle) */}
        <g transform="translate(200, 140) rotate(-15)">
          <rect
            x="-60"
            y="-35"
            width="120"
            height="70"
            rx="6"
            fill="#e0e7ff"
            stroke="#4f46e5"
            strokeWidth="2"
          />
          {/* CoM marker */}
          <circle cx="0" cy="0" r="4" fill="#4f46e5" />
          <text
            x="8"
            y="-5"
            fontSize="12"
            fill="#4f46e5"
            fontWeight="bold"
          >
            CoM
          </text>
        </g>

        {/* Force F (blue arrow) */}
        <line
          x1="200"
          y1="140"
          x2="310"
          y2="90"
          stroke="#2563eb"
          strokeWidth="2.5"
          markerEnd="url(#arrow-rb)"
        />
        <text x="315" y="88" fontSize="14" fill="#2563eb" fontWeight="bold">
          F
        </text>

        {/* Gravity mg (red arrow, downward) */}
        <line
          x1="200"
          y1="140"
          x2="200"
          y2="230"
          stroke="#dc2626"
          strokeWidth="2.5"
          markerEnd="url(#arrow-red)"
        />
        <text x="208" y="228" fontSize="14" fill="#dc2626" fontWeight="bold">
          mg
        </text>

        {/* Velocity v (green arrow) */}
        <line
          x1="200"
          y1="140"
          x2="280"
          y2="140"
          stroke="#16a34a"
          strokeWidth="2.5"
          markerEnd="url(#arrow-green)"
        />
        <text x="285" y="138" fontSize="14" fill="#16a34a" fontWeight="bold">
          v
        </text>

        {/* Torque arc (purple) */}
        <path
          d="M 225 115 A 35 35 0 0 1 175 115"
          fill="none"
          stroke="#9333ea"
          strokeWidth="2.5"
        />
        <polygon points="173,110 175,120 168,114" fill="#9333ea" />
        <text x="180" y="105" fontSize="14" fill="#9333ea" fontWeight="bold">
          &#x3C4;
        </text>

        {/* Angular velocity omega */}
        <path
          d="M 225 165 A 30 30 0 0 0 180 170"
          fill="none"
          stroke="#ea580c"
          strokeWidth="2"
          strokeDasharray="4,3"
        />
        <polygon points="178,166 180,175 174,170" fill="#ea580c" />
        <text x="168" y="186" fontSize="14" fill="#ea580c" fontWeight="bold">
          &#x3C9;
        </text>

        {/* Legend */}
        <g transform="translate(20, 260)">
          <text fontSize="11" fill="#666">
            <tspan x="0" fill="#2563eb">&#x25CF;</tspan>
            <tspan dx="4">Force</tspan>
            <tspan dx="12" fill="#dc2626">&#x25CF;</tspan>
            <tspan dx="4">Gravity</tspan>
            <tspan dx="12" fill="#9333ea">&#x25CF;</tspan>
            <tspan dx="4">Torque</tspan>
            <tspan dx="12" fill="#16a34a">&#x25CF;</tspan>
            <tspan dx="4">Velocity</tspan>
            <tspan dx="12" fill="#ea580c">&#x25CF;</tspan>
            <tspan dx="4">Angular vel.</tspan>
          </text>
        </g>
      </svg>
      <figcaption className="mt-2 text-center text-sm text-gray-500">
        Fig 1. Forces and torques acting on a rigid body.
        The translational motion follows F = ma, while rotation
        follows &#x3C4; = I&#x3B1; + &#x3C9; &#xD7; I&#x3C9;.
      </figcaption>
    </figure>
  );
}

export function DoublePendulumDiagram() {
  return (
    <figure className="my-6 flex flex-col items-center">
      <svg viewBox="0 0 360 340" className="w-full max-w-sm" role="img">
        <title>Double pendulum (two-link leg model)</title>
        <defs>
          <marker
            id="arrow-dp"
            markerWidth="7"
            markerHeight="5"
            refX="7"
            refY="2.5"
            orient="auto"
          >
            <path d="M0,0 L7,2.5 L0,5 Z" fill="#6b7280" />
          </marker>
        </defs>

        {/* Pivot (hip) */}
        <line
          x1="140"
          y1="30"
          x2="220"
          y2="30"
          stroke="#9ca3af"
          strokeWidth="2"
        />
        {/* Hatch marks */}
        {[0, 1, 2, 3, 4].map((i) => (
          <line
            key={i}
            x1={150 + i * 16}
            y1="30"
            x2={142 + i * 16}
            y2="20"
            stroke="#9ca3af"
            strokeWidth="1.5"
          />
        ))}

        {/* Link 1 (thigh) */}
        <line
          x1="180"
          y1="40"
          x2="220"
          y2="170"
          stroke="#4f46e5"
          strokeWidth="8"
          strokeLinecap="round"
        />

        {/* Joint 1 (hip) */}
        <circle
          cx="180"
          cy="40"
          r="6"
          fill="white"
          stroke="#1e40af"
          strokeWidth="2"
        />

        {/* Link 1 CoM */}
        <circle cx="200" cy="105" r="3" fill="#dc2626" />
        <text x="208" y="108" fontSize="11" fill="#dc2626">
          m&#x2081;
        </text>

        {/* Link 2 (shank) */}
        <line
          x1="220"
          y1="170"
          x2="195"
          y2="295"
          stroke="#2563eb"
          strokeWidth="8"
          strokeLinecap="round"
        />

        {/* Joint 2 (knee) */}
        <circle
          cx="220"
          cy="170"
          r="6"
          fill="white"
          stroke="#1e40af"
          strokeWidth="2"
        />

        {/* Link 2 CoM */}
        <circle cx="208" cy="232" r="3" fill="#dc2626" />
        <text x="215" y="236" fontSize="11" fill="#dc2626">
          m&#x2082;
        </text>

        {/* Angle q1 arc */}
        <line
          x1="180"
          y1="40"
          x2="180"
          y2="100"
          stroke="#9ca3af"
          strokeWidth="1"
          strokeDasharray="4,3"
        />
        <path
          d="M 180 70 A 30 30 0 0 1 193 67"
          fill="none"
          stroke="#16a34a"
          strokeWidth="1.5"
        />
        <text x="186" y="82" fontSize="12" fill="#16a34a" fontWeight="bold">
          q&#x2081;
        </text>

        {/* Angle q2 arc */}
        <line
          x1="220"
          y1="170"
          x2="246"
          y2="268"
          stroke="#9ca3af"
          strokeWidth="1"
          strokeDasharray="4,3"
        />
        <path
          d="M 238 226 A 30 30 0 0 0 213 230"
          fill="none"
          stroke="#ea580c"
          strokeWidth="1.5"
        />
        <text x="228" y="243" fontSize="12" fill="#ea580c" fontWeight="bold">
          q&#x2082;
        </text>

        {/* Length labels */}
        <text x="140" y="110" fontSize="11" fill="#4f46e5" fontWeight="bold">
          l&#x2081;
        </text>
        <text x="167" y="242" fontSize="11" fill="#2563eb" fontWeight="bold">
          l&#x2082;
        </text>

        {/* Gravity arrow */}
        <line
          x1="310"
          y1="60"
          x2="310"
          y2="110"
          stroke="#6b7280"
          strokeWidth="1.5"
          markerEnd="url(#arrow-dp)"
        />
        <text x="318" y="90" fontSize="12" fill="#6b7280">
          g
        </text>
      </svg>
      <figcaption className="mt-2 text-center text-sm text-gray-500">
        Fig 2. Double pendulum as a minimal two-link leg model.
        Joint angles q&#x2081; (hip) and q&#x2082; (knee) define the configuration.
      </figcaption>
    </figure>
  );
}
