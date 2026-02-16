"use client";

export function SimToRealPipelineDiagram() {
  return (
    <figure className="my-6 flex flex-col items-center">
      <svg viewBox="0 0 460 230" className="w-full max-w-lg" role="img">
        <title>Sim-to-real transfer pipeline</title>
        <defs>
          <marker
            id="arrow-s2r"
            markerWidth="8"
            markerHeight="6"
            refX="8"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L8,3 L0,6 Z" fill="#374151" />
          </marker>
        </defs>

        {/* Simulation box */}
        <rect
          x="20"
          y="30"
          width="130"
          height="100"
          rx="8"
          fill="#dbeafe"
          stroke="#2563eb"
          strokeWidth="2"
        />
        <text x="85" y="55" fontSize="12" fill="#1e40af" textAnchor="middle" fontWeight="bold">
          Simulation
        </text>
        <text x="85" y="72" fontSize="9" fill="#1e40af" textAnchor="middle">
          Physics engine
        </text>
        <text x="85" y="85" fontSize="9" fill="#1e40af" textAnchor="middle">
          Domain randomization
        </text>
        <text x="85" y="98" fontSize="9" fill="#1e40af" textAnchor="middle">
          Massively parallel
        </text>
        <text x="85" y="118" fontSize="9" fill="#6b7280" textAnchor="middle">
          10&#xB3;-10&#x2076; environments
        </text>

        {/* Arrow sim -> policy */}
        <line
          x1="150"
          y1="80"
          x2="172"
          y2="80"
          stroke="#374151"
          strokeWidth="2"
          markerEnd="url(#arrow-s2r)"
        />

        {/* Policy box */}
        <rect
          x="180"
          y="45"
          width="100"
          height="70"
          rx="8"
          fill="#fef9c3"
          stroke="#ca8a04"
          strokeWidth="2"
        />
        <text x="230" y="72" fontSize="12" fill="#854d0e" textAnchor="middle" fontWeight="bold">
          Trained
        </text>
        <text x="230" y="88" fontSize="12" fill="#854d0e" textAnchor="middle" fontWeight="bold">
          Policy
        </text>
        <text x="230" y="105" fontSize="9" fill="#854d0e" textAnchor="middle">
          &#x3C0;&#x3B8;(a|s)
        </text>

        {/* Arrow policy -> real */}
        <line
          x1="280"
          y1="80"
          x2="302"
          y2="80"
          stroke="#374151"
          strokeWidth="2"
          markerEnd="url(#arrow-s2r)"
        />
        <text x="291" y="72" fontSize="9" fill="#dc2626" fontWeight="bold">
          transfer
        </text>

        {/* Real robot box */}
        <rect
          x="310"
          y="30"
          width="130"
          height="100"
          rx="8"
          fill="#dcfce7"
          stroke="#16a34a"
          strokeWidth="2"
        />
        <text x="375" y="55" fontSize="12" fill="#166534" textAnchor="middle" fontWeight="bold">
          Real Robot
        </text>
        <text x="375" y="72" fontSize="9" fill="#166534" textAnchor="middle">
          Real physics
        </text>
        <text x="375" y="85" fontSize="9" fill="#166534" textAnchor="middle">
          Sensor noise
        </text>
        <text x="375" y="98" fontSize="9" fill="#166534" textAnchor="middle">
          Actuator delays
        </text>
        <text x="375" y="118" fontSize="9" fill="#6b7280" textAnchor="middle">
          1 environment
        </text>

        {/* Gap visualization */}
        <rect
          x="130"
          y="150"
          width="200"
          height="35"
          rx="6"
          fill="#fef2f2"
          stroke="#dc2626"
          strokeWidth="1.5"
          strokeDasharray="5,3"
        />
        <text x="230" y="165" fontSize="10" fill="#dc2626" textAnchor="middle" fontWeight="bold">
          Sim-to-Real Gap
        </text>
        <text x="230" y="178" fontSize="8" fill="#dc2626" textAnchor="middle">
          Dynamics mismatch, sensor differences, actuator modeling errors
        </text>

        {/* Bridge strategies */}
        <text x="230" y="205" fontSize="9" fill="#374151" textAnchor="middle" fontWeight="bold">
          Bridging strategies: Domain Randomization | System ID | Adaptation
        </text>
      </svg>
      <figcaption className="mt-2 text-center text-sm text-gray-500">
        Fig 1. The sim-to-real pipeline. Policies trained in simulation
        must bridge the reality gap through domain randomization,
        system identification, or online adaptation.
      </figcaption>
    </figure>
  );
}
