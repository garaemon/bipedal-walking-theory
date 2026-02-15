"use client";

export function PassiveWalkerDiagram() {
  return (
    <figure className="my-6 flex flex-col items-center">
      <svg viewBox="0 0 460 300" className="w-full max-w-lg" role="img">
        <title>Passive dynamic walker on a slope</title>
        <defs>
          <marker
            id="arrow-pw"
            markerWidth="8"
            markerHeight="6"
            refX="8"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L8,3 L0,6 Z" fill="#6b7280" />
          </marker>
          <marker
            id="arrow-pw-red"
            markerWidth="8"
            markerHeight="6"
            refX="8"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L8,3 L0,6 Z" fill="#dc2626" />
          </marker>
        </defs>

        {/* Slope surface */}
        <polygon
          points="30,180 430,260 430,290 30,290"
          fill="#f3f4f6"
          stroke="#9ca3af"
          strokeWidth="1.5"
        />
        {/* Slope line */}
        <line
          x1="30"
          y1="180"
          x2="430"
          y2="260"
          stroke="#6b7280"
          strokeWidth="2"
        />

        {/* Slope angle */}
        <path
          d="M 80 204 A 50 50 0 0 1 80 195"
          fill="none"
          stroke="#6b7280"
          strokeWidth="1.5"
        />
        <line
          x1="30"
          y1="204"
          x2="100"
          y2="204"
          stroke="#6b7280"
          strokeWidth="1"
          strokeDasharray="3,3"
        />
        <text x="87" y="200" fontSize="12" fill="#6b7280">
          &#x3B3;
        </text>

        {/* Walker - stance leg */}
        <line
          x1="220"
          y1="222"
          x2="250"
          y2="90"
          stroke="#4f46e5"
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* Walker - swing leg */}
        <line
          x1="250"
          y1="90"
          x2="300"
          y2="232"
          stroke="#2563eb"
          strokeWidth="5"
          strokeLinecap="round"
          opacity="0.6"
        />

        {/* Swing leg - future positions (ghost) */}
        <line
          x1="250"
          y1="90"
          x2="280"
          y2="200"
          stroke="#93c5fd"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.3"
        />

        {/* Hip mass */}
        <circle
          cx="250"
          cy="90"
          r="10"
          fill="#2563eb"
          stroke="#1e40af"
          strokeWidth="2"
        />
        <text x="264" y="85" fontSize="11" fill="#2563eb" fontWeight="bold">
          M
        </text>

        {/* Stance foot contact */}
        <circle cx="220" cy="222" r="4" fill="#ea580c" />

        {/* Swing foot */}
        <circle cx="300" cy="232" r="4" fill="#ea580c" opacity="0.5" />

        {/* Foot mass labels */}
        <text x="203" y="218" fontSize="10" fill="#ea580c">
          m
        </text>
        <text x="306" y="230" fontSize="10" fill="#ea580c" opacity="0.7">
          m
        </text>

        {/* Gravity arrow */}
        <line
          x1="250"
          y1="90"
          x2="250"
          y2="155"
          stroke="#dc2626"
          strokeWidth="2"
          markerEnd="url(#arrow-pw-red)"
        />
        <text x="255" y="135" fontSize="11" fill="#dc2626" fontWeight="bold">
          g
        </text>

        {/* Angle labels */}
        {/* Stance leg angle */}
        <line
          x1="220"
          y1="222"
          x2="220"
          y2="160"
          stroke="#9ca3af"
          strokeWidth="1"
          strokeDasharray="3,3"
        />
        <path
          d="M 220 180 A 25 25 0 0 1 230 168"
          fill="none"
          stroke="#16a34a"
          strokeWidth="1.5"
        />
        <text x="222" y="170" fontSize="11" fill="#16a34a" fontWeight="bold">
          &#x3B8;&#x209B;&#x209C;
        </text>

        {/* Inter-leg angle */}
        <path
          d="M 240 115 A 30 30 0 0 1 260 115"
          fill="none"
          stroke="#9333ea"
          strokeWidth="1.5"
        />
        <text x="245" y="130" fontSize="11" fill="#9333ea" fontWeight="bold">
          2&#x3B1;
        </text>

        {/* Direction of motion */}
        <line
          x1="340"
          y1="120"
          x2="400"
          y2="120"
          stroke="#6b7280"
          strokeWidth="1.5"
          markerEnd="url(#arrow-pw)"
        />
        <text x="345" y="113" fontSize="10" fill="#6b7280">
          direction of walking
        </text>

        {/* Energy annotation */}
        <g transform="translate(30, 40)">
          <rect
            x="0"
            y="0"
            width="165"
            height="48"
            rx="4"
            fill="#fefce8"
            stroke="#eab308"
            strokeWidth="1"
          />
          <text x="10" y="16" fontSize="10" fill="#854d0e" fontWeight="bold">
            No motors needed!
          </text>
          <text x="10" y="30" fontSize="9" fill="#854d0e">
            Gravity provides energy input.
          </text>
          <text x="10" y="42" fontSize="9" fill="#854d0e">
            Collisions dissipate energy.
          </text>
        </g>
      </svg>
      <figcaption className="mt-2 text-center text-sm text-gray-500">
        Fig 1. A compass-gait passive walker on a shallow slope.
        The hip mass M and foot masses m walk downhill using only gravity.
        The stance leg pivots while the swing leg advances to the next contact.
      </figcaption>
    </figure>
  );
}

export function PoincareDiagram() {
  return (
    <figure className="my-6 flex flex-col items-center">
      <svg viewBox="0 0 420 320" className="w-full max-w-md" role="img">
        <title>Poincare map and limit cycle</title>
        <defs>
          <marker
            id="arrow-pc"
            markerWidth="7"
            markerHeight="5"
            refX="7"
            refY="2.5"
            orient="auto"
          >
            <path d="M0,0 L7,2.5 L0,5 Z" fill="#4f46e5" />
          </marker>
          <marker
            id="arrow-pc-green"
            markerWidth="7"
            markerHeight="5"
            refX="7"
            refY="2.5"
            orient="auto"
          >
            <path d="M0,0 L7,2.5 L0,5 Z" fill="#16a34a" />
          </marker>
        </defs>

        {/* Title */}
        <text
          x="210"
          y="22"
          fontSize="13"
          fill="#374151"
          textAnchor="middle"
          fontWeight="bold"
        >
          Phase Portrait &amp; Poincare Map
        </text>

        {/* Axes */}
        <line
          x1="60"
          y1="280"
          x2="390"
          y2="280"
          stroke="#374151"
          strokeWidth="1.5"
        />
        <line
          x1="60"
          y1="280"
          x2="60"
          y2="40"
          stroke="#374151"
          strokeWidth="1.5"
        />
        {/* Axis labels */}
        <text x="220" y="305" fontSize="12" fill="#374151" textAnchor="middle">
          &#x3B8; (angle)
        </text>
        <text
          x="30"
          y="160"
          fontSize="12"
          fill="#374151"
          textAnchor="middle"
          transform="rotate(-90, 30, 160)"
        >
          &#x3B8;&#x307; (angular velocity)
        </text>

        {/* Limit cycle (ellipse-like closed orbit) */}
        <ellipse
          cx="210"
          cy="155"
          rx="100"
          ry="70"
          fill="none"
          stroke="#4f46e5"
          strokeWidth="2.5"
          transform="rotate(-5, 210, 155)"
        />

        {/* Direction arrows on limit cycle */}
        <polygon
          points="308,140 312,148 305,148"
          fill="#4f46e5"
          transform="rotate(-10, 310, 145)"
        />
        <polygon
          points="112,170 108,162 115,162"
          fill="#4f46e5"
          transform="rotate(-10, 112, 166)"
        />

        {/* Fixed point on limit cycle */}
        <circle cx="310" cy="155" r="5" fill="#dc2626" />
        <text x="318" y="150" fontSize="10" fill="#dc2626" fontWeight="bold">
          x*
        </text>
        <text x="318" y="162" fontSize="9" fill="#dc2626">
          (fixed point)
        </text>

        {/* Converging trajectory (spiral in) */}
        <path
          d="M 330 100 C 350 130, 340 210, 280 230 C 240 240, 140 220, 120 175 C 100 130, 130 85, 190 80 C 240 76, 310 90, 315 130 C 318 145, 316 155, 310 158"
          fill="none"
          stroke="#16a34a"
          strokeWidth="1.5"
          strokeDasharray="4,3"
        />
        <circle cx="330" cy="100" r="3" fill="#16a34a" />
        <text x="335" y="98" fontSize="9" fill="#16a34a">
          start
        </text>

        {/* Poincare section line */}
        <line
          x1="300"
          y1="55"
          x2="300"
          y2="260"
          stroke="#ea580c"
          strokeWidth="1.5"
          strokeDasharray="5,3"
        />
        <text x="302" y="50" fontSize="10" fill="#ea580c">
          Poincare section
        </text>
        <text x="302" y="62" fontSize="9" fill="#ea580c">
          (heel strike)
        </text>

        {/* Intersection points on Poincare section */}
        <circle cx="300" cy="115" r="3" fill="#ea580c" />
        <text x="275" y="112" fontSize="9" fill="#ea580c">
          x&#x2081;
        </text>
        <circle cx="300" cy="140" r="3" fill="#ea580c" />
        <text x="275" y="138" fontSize="9" fill="#ea580c">
          x&#x2082;
        </text>

        {/* Map annotation */}
        <path
          d="M 300 118 C 310 125, 310 132, 300 140"
          fill="none"
          stroke="#ea580c"
          strokeWidth="1.5"
          markerEnd="url(#arrow-pc-green)"
        />
        <text x="312" y="132" fontSize="9" fill="#ea580c">
          P(x)
        </text>

        {/* Legend */}
        <g transform="translate(70, 290)">
          <line x1="0" y1="0" x2="20" y2="0" stroke="#4f46e5" strokeWidth="2.5" />
          <text x="24" y="4" fontSize="9" fill="#666">Limit cycle (stable gait)</text>
          <line
            x1="150"
            y1="0"
            x2="170"
            y2="0"
            stroke="#16a34a"
            strokeWidth="1.5"
            strokeDasharray="4,3"
          />
          <text x="174" y="4" fontSize="9" fill="#666">Converging trajectory</text>
        </g>
      </svg>
      <figcaption className="mt-2 text-center text-sm text-gray-500">
        Fig 2. Phase portrait showing a stable limit cycle.
        The Poincare map P samples the state at each heel strike.
        Nearby trajectories (green) converge to the fixed point x*
        on the limit cycle.
      </figcaption>
    </figure>
  );
}
