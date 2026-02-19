"use client";

function PhysicalConstraintPanel() {
  return (
    <g transform="translate(10, 30)">
      {/* Panel title */}
      <text
        x="110"
        y="0"
        fontSize="11"
        fill="#1e3a8a"
        textAnchor="middle"
        fontWeight="bold"
      >
        (a) Physical Constraint
      </text>

      {/* Rail / track */}
      <path
        d="M 20 120 C 60 60, 100 50, 140 70 C 180 90, 200 100, 220 80"
        fill="none"
        stroke="#6b7280"
        strokeWidth="3"
      />
      {/* Rail shadow / depth */}
      <path
        d="M 20 124 C 60 64, 100 54, 140 74 C 180 94, 200 104, 220 84"
        fill="none"
        stroke="#d1d5db"
        strokeWidth="2"
      />

      {/* Ball on rail */}
      <circle cx="130" cy="66" r="10" fill="#3b82f6" />
      <circle cx="130" cy="64" r="3" fill="#93c5fd" opacity="0.6" />

      {/* Normal force arrow (perpendicular to rail surface) */}
      <line
        x1="130"
        y1="76"
        x2="130"
        y2="105"
        stroke="#dc2626"
        strokeWidth="1.5"
      />
      <polygon
        points="130,76 127,83 133,83"
        fill="#dc2626"
      />
      <text x="136" y="95" fontSize="8" fill="#dc2626">
        F&#x2099; (contact)
      </text>

      {/* Gravity arrow */}
      <line
        x1="130"
        y1="56"
        x2="130"
        y2="35"
        stroke="#374151"
        strokeWidth="1"
        strokeDasharray="3,2"
      />
      <line
        x1="130"
        y1="76"
        x2="130"
        y2="97"
        stroke="#374151"
        strokeWidth="1"
      />
      <polygon
        points="130,97 127,92 133,92"
        fill="#374151"
      />
      <text x="136" y="38" fontSize="8" fill="#374151">
        mg
      </text>

      {/* Motion direction arrow along rail */}
      <path
        d="M 85 75 L 60 88"
        fill="none"
        stroke="#2563eb"
        strokeWidth="1.5"
      />
      <polygon
        points="60,88 67,84 65,91"
        fill="#2563eb"
      />
      <text x="45" y="80" fontSize="8" fill="#2563eb">
        v
      </text>

      {/* Labels */}
      <text x="35" y="135" fontSize="8" fill="#6b7280">
        Rail surface
      </text>

      {/* Dimension annotation */}
      <rect
        x="15"
        y="147"
        width="205"
        height="28"
        rx="4"
        fill="#eff6ff"
        stroke="#bfdbfe"
        strokeWidth="0.5"
      />
      <text x="117" y="159" fontSize="8" fill="#1e40af" textAnchor="middle">
        Constraint: physical contact force
      </text>
      <text x="117" y="170" fontSize="8" fill="#1e40af" textAnchor="middle">
        2D motion &#x2192; 1D (along rail)
      </text>
    </g>
  );
}

function VirtualConstraintPanel() {
  return (
    <g transform="translate(260, 30)">
      {/* Panel title */}
      <text
        x="110"
        y="0"
        fontSize="11"
        fill="#166534"
        textAnchor="middle"
        fontWeight="bold"
      >
        (b) Virtual Constraint
      </text>

      {/* Robot leg schematic */}
      {/* Hip joint */}
      <circle cx="120" cy="40" r="5" fill="#374151" />
      <text x="130" y="38" fontSize="8" fill="#374151">
        hip
      </text>

      {/* Upper leg */}
      <line
        x1="120"
        y1="45"
        x2="100"
        y2="90"
        stroke="#374151"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Knee joint */}
      <circle cx="100" cy="90" r="4" fill="#6b7280" />
      <text x="82" y="88" fontSize="8" fill="#6b7280">
        knee
      </text>

      {/* Lower leg */}
      <line
        x1="100"
        y1="94"
        x2="110"
        y2="140"
        stroke="#374151"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Ground */}
      <line
        x1="30"
        y1="140"
        x2="210"
        y2="140"
        stroke="#9ca3af"
        strokeWidth="1"
      />
      {/* Ground hatch marks */}
      {[50, 70, 90, 110, 130, 150, 170, 190].map((gx) => (
        <line
          key={gx}
          x1={gx}
          y1="140"
          x2={gx - 8}
          y2="148"
          stroke="#d1d5db"
          strokeWidth="0.8"
        />
      ))}

      {/* Desired trajectory (Bezier curve in joint space) */}
      <path
        d="M 50 105 C 65 80, 85 55, 120 40 C 155 25, 175 50, 190 75"
        fill="none"
        stroke="#16a34a"
        strokeWidth="2"
        strokeDasharray="5,3"
      />
      <text x="175" y="60" fontSize="8" fill="#16a34a">
        h&#x2092;(&#x3B8;)
      </text>

      {/* Feedback torque arrow at knee */}
      <path
        d="M 88 82 A 15 15 0 0 1 88 98"
        fill="none"
        stroke="#dc2626"
        strokeWidth="1.5"
      />
      <polygon
        points="88,98 85,93 91,94"
        fill="#dc2626"
      />
      <text x="65" y="105" fontSize="8" fill="#dc2626">
        &#x3C4; (feedback)
      </text>

      {/* Feedback torque arrow at hip */}
      <path
        d="M 132 35 A 12 12 0 0 1 130 50"
        fill="none"
        stroke="#dc2626"
        strokeWidth="1.5"
      />
      <polygon
        points="130,50 127,45 133,46"
        fill="#dc2626"
      />
      <text x="138" y="50" fontSize="8" fill="#dc2626">
        &#x3C4;
      </text>

      {/* Phase variable annotation */}
      <path
        d="M 115 140 A 30 30 0 0 1 120 110"
        fill="none"
        stroke="#7c3aed"
        strokeWidth="1"
        strokeDasharray="2,2"
      />
      <text x="130" y="130" fontSize="8" fill="#7c3aed">
        &#x3B8;(q)
      </text>

      {/* Dimension annotation */}
      <rect
        x="15"
        y="147"
        width="205"
        height="28"
        rx="4"
        fill="#f0fdf4"
        stroke="#bbf7d0"
        strokeWidth="0.5"
      />
      <text x="117" y="159" fontSize="8" fill="#166534" textAnchor="middle">
        Constraint: feedback control torques
      </text>
      <text x="117" y="170" fontSize="8" fill="#166534" textAnchor="middle">
        n-DOF motion &#x2192; 1-DOF (zero dynamics)
      </text>
    </g>
  );
}

export function VirtualVsPhysicalConstraintDiagram() {
  return (
    <figure className="my-6 flex flex-col items-center">
      <svg viewBox="0 0 490 220" className="w-full max-w-xl" role="img">
        <title>
          Comparison of physical constraints and virtual constraints
        </title>

        {/* Divider */}
        <line
          x1="248"
          y1="25"
          x2="248"
          y2="200"
          stroke="#e5e7eb"
          strokeWidth="1"
          strokeDasharray="4,4"
        />

        <PhysicalConstraintPanel />
        <VirtualConstraintPanel />

        {/* Equivalence annotation at bottom */}
        <text
          x="248"
          y="215"
          fontSize="10"
          fill="#4b5563"
          textAnchor="middle"
          fontStyle="italic"
        >
          Both achieve dimensionality reduction through constraints
        </text>
      </svg>
      <figcaption className="mt-2 text-center text-sm text-gray-500">
        Physical constraints (left) restrict motion through contact forces.
        Virtual constraints (right) achieve the same dimensionality reduction
        through feedback control torques, parameterizing joint motion as a
        function of the phase variable &#x3B8;(q).
      </figcaption>
    </figure>
  );
}
