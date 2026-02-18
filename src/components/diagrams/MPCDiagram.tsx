"use client";

export function MPCHorizonDiagram() {
  return (
    <figure className="my-6 flex flex-col items-center">
      <svg viewBox="0 0 480 250" className="w-full max-w-lg" role="img">
        <title>MPC receding horizon concept</title>
        <defs>
          <marker
            id="arrow-mpc"
            markerWidth="7"
            markerHeight="5"
            refX="7"
            refY="2.5"
            orient="auto"
          >
            <path d="M0,0 L7,2.5 L0,5 Z" fill="#374151" />
          </marker>
        </defs>

        {/* Time axis */}
        <line x1="40" y1="190" x2="460" y2="190" stroke="#374151" strokeWidth="1.5" />
        <text x="465" y="194" fontSize="10" fill="#374151">t</text>

        {/* --- Solve at t=0 --- */}
        <line x1="80" y1="25" x2="80" y2="195" stroke="#dc2626" strokeWidth="2" strokeDasharray="4,3" />
        <text x="80" y="215" fontSize="9" fill="#dc2626" textAnchor="middle">t&#x2080;</text>

        {/* Prediction horizon at t=0 */}
        <rect x="80" y="30" width="160" height="28" rx="4" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5" />
        <text x="160" y="48" fontSize="9" fill="#1e40af" textAnchor="middle" fontWeight="bold">
          Prediction horizon N
        </text>

        {/* Planned trajectory at t=0 */}
        <path d="M 80 120 C 110 100, 140 80, 180 90 C 200 95, 220 110, 240 115" fill="none" stroke="#2563eb" strokeWidth="2" />
        {/* Applied portion */}
        <path d="M 80 120 C 95 112, 110 105, 120 107" fill="none" stroke="#2563eb" strokeWidth="3" />

        {/* --- Solve at t=1 --- */}
        <line x1="120" y1="60" x2="120" y2="195" stroke="#16a34a" strokeWidth="2" strokeDasharray="4,3" />
        <text x="120" y="215" fontSize="9" fill="#16a34a" textAnchor="middle">t&#x2081;</text>

        {/* Prediction horizon at t=1 */}
        <rect x="120" y="65" width="160" height="28" rx="4" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5" />
        <text x="200" y="83" fontSize="9" fill="#166534" textAnchor="middle" fontWeight="bold">
          Prediction horizon N
        </text>

        {/* Planned trajectory at t=1 (re-planned) */}
        <path d="M 120 107 C 150 90, 180 85, 220 95 C 240 100, 260 115, 280 118" fill="none" stroke="#16a34a" strokeWidth="2" />
        <path d="M 120 107 C 133 100, 148 94, 160 95" fill="none" stroke="#16a34a" strokeWidth="3" />

        {/* --- Solve at t=2 --- */}
        <line x1="160" y1="95" x2="160" y2="195" stroke="#9333ea" strokeWidth="2" strokeDasharray="4,3" />
        <text x="160" y="215" fontSize="9" fill="#9333ea" textAnchor="middle">t&#x2082;</text>

        <rect x="160" y="100" width="160" height="28" rx="4" fill="#f3e8ff" stroke="#9333ea" strokeWidth="1.5" />
        <text x="240" y="118" fontSize="9" fill="#6b21a8" textAnchor="middle" fontWeight="bold">
          Prediction horizon N
        </text>

        <path d="M 160 95 C 190 82, 220 80, 260 92 C 280 98, 300 110, 320 115" fill="none" stroke="#9333ea" strokeWidth="2" />
        <path d="M 160 95 C 173 88, 188 84, 200 86" fill="none" stroke="#9333ea" strokeWidth="3" />

        {/* Actual executed trajectory */}
        <path d="M 80 120 C 95 112, 110 105, 120 107 C 133 100, 148 94, 160 95 C 173 88, 188 84, 200 86" fill="none" stroke="#374151" strokeWidth="2.5" />

        {/* Legend */}
        <g transform="translate(40, 230)">
          <line x1="0" y1="0" x2="20" y2="0" stroke="#374151" strokeWidth="2.5" />
          <text x="24" y="4" fontSize="9" fill="#666">Executed trajectory</text>
          <line x1="140" y1="0" x2="160" y2="0" stroke="#2563eb" strokeWidth="2" />
          <text x="164" y="4" fontSize="9" fill="#666">Planned (not applied)</text>
          <line x1="290" y1="0" x2="310" y2="0" stroke="#2563eb" strokeWidth="3" />
          <text x="314" y="4" fontSize="9" fill="#666">Applied</text>
        </g>

        {/* Annotation */}
        <rect x="330" y="30" width="130" height="40" rx="4" fill="#fefce8" stroke="#ca8a04" strokeWidth="1" />
        <text x="340" y="46" fontSize="9" fill="#854d0e" fontWeight="bold">Re-solve at each step</text>
        <text x="340" y="60" fontSize="9" fill="#854d0e">Apply only first input</text>
      </svg>
      <figcaption className="mt-2 text-center text-sm text-gray-500">
        Fig 1. MPC receding horizon: at each time step, solve an optimization
        over the full horizon, but only apply the first control input.
        Then re-solve with updated state (feedback).
      </figcaption>
    </figure>
  );
}
