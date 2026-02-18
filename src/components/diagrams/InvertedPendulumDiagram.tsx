"use client";

export function LIPMDiagram() {
  return (
    <figure className="my-6 flex flex-col items-center">
      <svg viewBox="0 0 420 320" className="w-full max-w-md" role="img">
        <title>Linear Inverted Pendulum Model</title>
        <defs>
          <marker
            id="arrow-lipm"
            markerWidth="8"
            markerHeight="6"
            refX="8"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L8,3 L0,6 Z" fill="#2563eb" />
          </marker>
          <marker
            id="arrow-lipm-red"
            markerWidth="8"
            markerHeight="6"
            refX="8"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L8,3 L0,6 Z" fill="#dc2626" />
          </marker>
          <marker
            id="arrow-lipm-gray"
            markerWidth="8"
            markerHeight="6"
            refX="8"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L8,3 L0,6 Z" fill="#6b7280" />
          </marker>
        </defs>

        {/* Ground */}
        <rect x="30" y="270" width="360" height="6" rx="2" fill="#d1d5db" />

        {/* Height constraint dashed line */}
        <line
          x1="50"
          y1="80"
          x2="380"
          y2="80"
          stroke="#9333ea"
          strokeWidth="1.5"
          strokeDasharray="6,4"
        />
        <text x="382" y="84" fontSize="11" fill="#9333ea">
          z = z&#x2082;
        </text>

        {/* Massless leg */}
        <line
          x1="170"
          y1="270"
          x2="240"
          y2="80"
          stroke="#4f46e5"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Support point */}
        <circle cx="170" cy="270" r="5" fill="#ea580c" />
        <text
          x="170"
          y="295"
          fontSize="12"
          fill="#ea580c"
          textAnchor="middle"
          fontWeight="bold"
        >
          p&#x2093;
        </text>

        {/* Point mass (CoM) */}
        <circle cx="240" cy="80" r="12" fill="#2563eb" stroke="#1e40af" strokeWidth="2" />
        <text x="256" y="75" fontSize="12" fill="#2563eb" fontWeight="bold">
          m
        </text>

        {/* CoM position label */}
        <text
          x="240"
          y="60"
          fontSize="12"
          fill="#2563eb"
          textAnchor="middle"
        >
          (x, z&#x2082;)
        </text>

        {/* Gravity arrow */}
        <line
          x1="240"
          y1="92"
          x2="240"
          y2="150"
          stroke="#dc2626"
          strokeWidth="2"
          markerEnd="url(#arrow-lipm-red)"
        />
        <text x="248" y="135" fontSize="12" fill="#dc2626" fontWeight="bold">
          mg
        </text>

        {/* Leg force arrow (along the leg) */}
        <line
          x1="200"
          y1="190"
          x2="230"
          y2="105"
          stroke="#16a34a"
          strokeWidth="2"
          markerEnd="url(#arrow-lipm)"
        />
        <text x="195" y="145" fontSize="12" fill="#16a34a" fontWeight="bold">
          F
        </text>

        {/* x dimension arrow */}
        <line
          x1="170"
          y1="250"
          x2="240"
          y2="250"
          stroke="#6b7280"
          strokeWidth="1.5"
          markerEnd="url(#arrow-lipm-gray)"
        />
        <text
          x="205"
          y="245"
          fontSize="11"
          fill="#6b7280"
          textAnchor="middle"
        >
          x - p&#x2093;
        </text>

        {/* z_c dimension arrow */}
        <line
          x1="120"
          y1="270"
          x2="120"
          y2="80"
          stroke="#6b7280"
          strokeWidth="1.5"
        />
        <line x1="116" y1="270" x2="124" y2="270" stroke="#6b7280" strokeWidth="1.5" />
        <line x1="116" y1="80" x2="124" y2="80" stroke="#6b7280" strokeWidth="1.5" />
        <text
          x="110"
          y="180"
          fontSize="11"
          fill="#6b7280"
          textAnchor="middle"
          transform="rotate(-90, 110, 180)"
        >
          z&#x2082;
        </text>
      </svg>
      <figcaption className="mt-2 text-center text-sm text-gray-500">
        Fig 1. The Linear Inverted Pendulum Model (LIPM). A point mass m
        is constrained to move at constant height z&#x2082;, connected
        to the support point p&#x2093; by a massless leg.
      </figcaption>
    </figure>
  );
}

export function WalkingTransitionDiagram() {
  return (
    <figure className="my-6 flex flex-col items-center">
      <svg viewBox="0 0 500 240" className="w-full max-w-lg" role="img">
        <title>LIPM walking step transitions</title>
        <defs>
          <marker
            id="arrow-wt"
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
        <rect x="20" y="190" width="460" height="4" rx="2" fill="#d1d5db" />

        {/* Step 1 */}
        <g>
          {/* Foot 1 */}
          <rect x="60" y="185" width="30" height="8" rx="3" fill="#ea580c" />
          {/* Leg */}
          <line
            x1="75"
            y1="185"
            x2="110"
            y2="70"
            stroke="#4f46e5"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* CoM */}
          <circle cx="110" cy="70" r="8" fill="#2563eb" opacity="0.6" />
          {/* CoM trajectory arc */}
          <path
            d="M 90 70 Q 110 40 140 70"
            fill="none"
            stroke="#2563eb"
            strokeWidth="2"
            strokeDasharray="4,3"
          />
          <text
            x="75"
            y="210"
            fontSize="10"
            fill="#ea580c"
            textAnchor="middle"
          >
            p&#x2081;
          </text>
        </g>

        {/* Step 2 */}
        <g>
          {/* Foot 2 */}
          <rect x="155" y="185" width="30" height="8" rx="3" fill="#16a34a" />
          {/* Leg */}
          <line
            x1="170"
            y1="185"
            x2="200"
            y2="70"
            stroke="#4f46e5"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* CoM */}
          <circle cx="200" cy="70" r="8" fill="#2563eb" opacity="0.6" />
          {/* CoM trajectory arc */}
          <path
            d="M 170 70 Q 200 40 235 70"
            fill="none"
            stroke="#2563eb"
            strokeWidth="2"
            strokeDasharray="4,3"
          />
          <text
            x="170"
            y="210"
            fontSize="10"
            fill="#16a34a"
            textAnchor="middle"
          >
            p&#x2082;
          </text>
        </g>

        {/* Step 3 */}
        <g>
          {/* Foot 3 */}
          <rect x="250" y="185" width="30" height="8" rx="3" fill="#ea580c" />
          {/* Leg */}
          <line
            x1="265"
            y1="185"
            x2="295"
            y2="70"
            stroke="#4f46e5"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* CoM */}
          <circle cx="295" cy="70" r="8" fill="#2563eb" opacity="0.6" />
          {/* CoM trajectory arc */}
          <path
            d="M 265 70 Q 295 40 330 70"
            fill="none"
            stroke="#2563eb"
            strokeWidth="2"
            strokeDasharray="4,3"
          />
          <text
            x="265"
            y="210"
            fontSize="10"
            fill="#ea580c"
            textAnchor="middle"
          >
            p&#x2083;
          </text>
        </g>

        {/* Step 4 */}
        <g>
          <rect x="345" y="185" width="30" height="8" rx="3" fill="#16a34a" />
          <line
            x1="360"
            y1="185"
            x2="385"
            y2="70"
            stroke="#4f46e5"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="385" cy="70" r="8" fill="#2563eb" opacity="0.6" />
          <text
            x="360"
            y="210"
            fontSize="10"
            fill="#16a34a"
            textAnchor="middle"
          >
            p&#x2084;
          </text>
        </g>

        {/* CoM continuous trajectory */}
        <path
          d="M 90 70 C 115 35, 145 35, 170 70 S 230 35, 265 70 S 325 35, 360 70 C 375 50, 385 55, 395 70"
          fill="none"
          stroke="#2563eb"
          strokeWidth="2"
        />

        {/* Height line */}
        <line
          x1="30"
          y1="70"
          x2="480"
          y2="70"
          stroke="#9333ea"
          strokeWidth="1"
          strokeDasharray="3,4"
        />
        <text x="483" y="74" fontSize="10" fill="#9333ea">
          z&#x2082;
        </text>

        {/* Step length arrow */}
        <line
          x1="75"
          y1="225"
          x2="170"
          y2="225"
          stroke="#6b7280"
          strokeWidth="1.5"
          markerEnd="url(#arrow-wt)"
        />
        <line x1="75" y1="220" x2="75" y2="230" stroke="#6b7280" strokeWidth="1" />
        <text
          x="122"
          y="238"
          fontSize="10"
          fill="#6b7280"
          textAnchor="middle"
        >
          step length
        </text>

        {/* Legend */}
        <g transform="translate(30, 15)">
          <rect x="0" y="0" width="10" height="10" rx="2" fill="#ea580c" />
          <text x="14" y="9" fontSize="10" fill="#666">Left foot</text>
          <rect x="80" y="0" width="10" height="10" rx="2" fill="#16a34a" />
          <text x="94" y="9" fontSize="10" fill="#666">Right foot</text>
          <circle cx="175" cy="5" r="4" fill="#2563eb" />
          <text x="182" y="9" fontSize="10" fill="#666">CoM trajectory</text>
        </g>
      </svg>
      <figcaption className="mt-2 text-center text-sm text-gray-500">
        Fig 2. Walking as a sequence of LIPM single-support phases.
        At each step transition, the support point shifts to the new foot
        while the CoM follows a continuous trajectory at constant height.
      </figcaption>
    </figure>
  );
}
