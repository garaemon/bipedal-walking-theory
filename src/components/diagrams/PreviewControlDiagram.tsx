"use client";

export function PreviewControlDiagram() {
  return (
    <figure className="my-6 flex flex-col items-center">
      <svg viewBox="0 0 500 260" className="w-full max-w-lg" role="img">
        <title>Preview control concept for walking</title>
        <defs>
          <marker
            id="arrow-pv"
            markerWidth="8"
            markerHeight="6"
            refX="8"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L8,3 L0,6 Z" fill="#4f46e5" />
          </marker>
          <marker
            id="arrow-pv-gray"
            markerWidth="7"
            markerHeight="5"
            refX="7"
            refY="2.5"
            orient="auto"
          >
            <path d="M0,0 L7,2.5 L0,5 Z" fill="#6b7280" />
          </marker>
        </defs>

        {/* Time axis */}
        <line
          x1="40"
          y1="200"
          x2="470"
          y2="200"
          stroke="#374151"
          strokeWidth="1.5"
        />
        <text x="475" y="204" fontSize="11" fill="#374151">
          time
        </text>

        {/* Current time marker */}
        <line
          x1="180"
          y1="35"
          x2="180"
          y2="210"
          stroke="#dc2626"
          strokeWidth="2"
          strokeDasharray="5,3"
        />
        <text
          x="180"
          y="228"
          fontSize="11"
          fill="#dc2626"
          textAnchor="middle"
          fontWeight="bold"
        >
          k (now)
        </text>

        {/* Past region */}
        <rect
          x="40"
          y="40"
          width="140"
          height="155"
          fill="#f3f4f6"
          opacity="0.5"
          rx="4"
        />
        <text
          x="110"
          y="55"
          fontSize="10"
          fill="#6b7280"
          textAnchor="middle"
        >
          past
        </text>

        {/* Preview window */}
        <rect
          x="180"
          y="40"
          width="200"
          height="155"
          fill="#eff6ff"
          opacity="0.5"
          rx="4"
        />
        <text
          x="280"
          y="55"
          fontSize="10"
          fill="#2563eb"
          textAnchor="middle"
          fontWeight="bold"
        >
          preview window (N&#x2097; steps)
        </text>

        {/* ZMP reference (step function) */}
        <path
          d="M 60 130 L 120 130 L 120 100 L 180 100 L 180 140 L 250 140 L 250 110 L 320 110 L 320 150 L 380 150 L 380 120 L 440 120"
          fill="none"
          stroke="#ea580c"
          strokeWidth="2"
        />

        {/* CoM trajectory (smooth curve tracking ZMP) */}
        <path
          d="M 60 125 C 80 128, 100 130, 120 118 C 140 106, 160 100, 180 115 C 200 130, 220 140, 250 128 C 270 118, 290 112, 320 132 C 340 145, 355 148, 380 135"
          fill="none"
          stroke="#2563eb"
          strokeWidth="2.5"
        />

        {/* Preview end marker */}
        <line
          x1="380"
          y1="45"
          x2="380"
          y2="200"
          stroke="#2563eb"
          strokeWidth="1"
          strokeDasharray="3,3"
        />
        <text
          x="380"
          y="228"
          fontSize="10"
          fill="#2563eb"
          textAnchor="middle"
        >
          k + N&#x2097;
        </text>

        {/* Preview window bracket */}
        <line
          x1="180"
          y1="215"
          x2="380"
          y2="215"
          stroke="#2563eb"
          strokeWidth="1.5"
          markerEnd="url(#arrow-pv)"
        />
        <line x1="180" y1="212" x2="180" y2="218" stroke="#2563eb" strokeWidth="1.5" />

        {/* Legend */}
        <g transform="translate(50, 240)">
          <line x1="0" y1="0" x2="20" y2="0" stroke="#ea580c" strokeWidth="2" />
          <text x="24" y="4" fontSize="10" fill="#666">
            ZMP reference (p&#x02B3;&#x1D49;&#x1DA0;)
          </text>
          <line
            x1="160"
            y1="0"
            x2="180"
            y2="0"
            stroke="#2563eb"
            strokeWidth="2.5"
          />
          <text x="184" y="4" fontSize="10" fill="#666">
            CoM trajectory (x)
          </text>
        </g>
      </svg>
      <figcaption className="mt-2 text-center text-sm text-gray-500">
        Fig 1. Preview control uses future ZMP reference values
        (within the preview window) to compute the current CoM
        input, producing a smooth trajectory that tracks the
        reference.
      </figcaption>
    </figure>
  );
}

export function CoMZMPSystemDiagram() {
  return (
    <figure className="my-6 flex flex-col items-center">
      <svg viewBox="0 0 460 200" className="w-full max-w-lg" role="img">
        <title>CoM-ZMP state space system</title>
        <defs>
          <marker
            id="arrow-ss"
            markerWidth="8"
            markerHeight="6"
            refX="8"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L8,3 L0,6 Z" fill="#374151" />
          </marker>
        </defs>

        {/* Controller block */}
        <rect
          x="30"
          y="70"
          width="100"
          height="50"
          rx="6"
          fill="#dbeafe"
          stroke="#2563eb"
          strokeWidth="2"
        />
        <text
          x="80"
          y="92"
          fontSize="11"
          fill="#1e40af"
          textAnchor="middle"
          fontWeight="bold"
        >
          Preview
        </text>
        <text
          x="80"
          y="106"
          fontSize="11"
          fill="#1e40af"
          textAnchor="middle"
          fontWeight="bold"
        >
          Controller
        </text>

        {/* Plant (LIPM) block */}
        <rect
          x="200"
          y="70"
          width="100"
          height="50"
          rx="6"
          fill="#dcfce7"
          stroke="#16a34a"
          strokeWidth="2"
        />
        <text
          x="250"
          y="92"
          fontSize="11"
          fill="#166534"
          textAnchor="middle"
          fontWeight="bold"
        >
          LIPM
        </text>
        <text
          x="250"
          y="106"
          fontSize="11"
          fill="#166534"
          textAnchor="middle"
          fontWeight="bold"
        >
          Dynamics
        </text>

        {/* ZMP output block */}
        <rect
          x="360"
          y="70"
          width="70"
          height="50"
          rx="6"
          fill="#fef9c3"
          stroke="#ca8a04"
          strokeWidth="2"
        />
        <text
          x="395"
          y="92"
          fontSize="11"
          fill="#854d0e"
          textAnchor="middle"
          fontWeight="bold"
        >
          ZMP
        </text>
        <text
          x="395"
          y="106"
          fontSize="11"
          fill="#854d0e"
          textAnchor="middle"
          fontWeight="bold"
        >
          Output
        </text>

        {/* Arrows */}
        {/* Controller -> Plant */}
        <line
          x1="130"
          y1="95"
          x2="192"
          y2="95"
          stroke="#374151"
          strokeWidth="1.5"
          markerEnd="url(#arrow-ss)"
        />
        <text x="155" y="88" fontSize="10" fill="#374151" textAnchor="middle">
          u (jerk)
        </text>

        {/* Plant -> ZMP */}
        <line
          x1="300"
          y1="95"
          x2="352"
          y2="95"
          stroke="#374151"
          strokeWidth="1.5"
          markerEnd="url(#arrow-ss)"
        />

        {/* State feedback */}
        <path
          d="M 250 120 L 250 160 L 80 160 L 80 120"
          fill="none"
          stroke="#374151"
          strokeWidth="1.5"
          markerEnd="url(#arrow-ss)"
        />
        <text x="165" y="155" fontSize="10" fill="#374151" textAnchor="middle">
          state x = [x, x&#x307;, x&#x308;]&#x1D40;
        </text>

        {/* ZMP reference input */}
        <line
          x1="80"
          y1="35"
          x2="80"
          y2="62"
          stroke="#ea580c"
          strokeWidth="1.5"
          markerEnd="url(#arrow-ss)"
        />
        <text x="80" y="28" fontSize="10" fill="#ea580c" textAnchor="middle">
          p&#x02B3;&#x1D49;&#x1DA0;(k+1)...p&#x02B3;&#x1D49;&#x1DA0;(k+N&#x2097;)
        </text>

        {/* ZMP output label */}
        <line
          x1="395"
          y1="120"
          x2="395"
          y2="155"
          stroke="#374151"
          strokeWidth="1.5"
          markerEnd="url(#arrow-ss)"
        />
        <text
          x="395"
          y="170"
          fontSize="10"
          fill="#374151"
          textAnchor="middle"
        >
          p(k)
        </text>
      </svg>
      <figcaption className="mt-2 text-center text-sm text-gray-500">
        Fig 2. Block diagram of the preview control system. The controller
        uses current state feedback and future ZMP reference to compute
        the CoM jerk input u.
      </figcaption>
    </figure>
  );
}
