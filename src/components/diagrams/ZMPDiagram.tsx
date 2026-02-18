"use client";

export function ZMPSupportPolygonDiagram() {
  return (
    <figure className="my-6 flex flex-col items-center">
      <svg viewBox="0 0 500 280" className="w-full max-w-lg" role="img">
        <title>ZMP and support polygon</title>
        <defs>
          <marker
            id="arrow-zmp"
            markerWidth="8"
            markerHeight="6"
            refX="8"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L8,3 L0,6 Z" fill="#dc2626" />
          </marker>
        </defs>

        {/* --- Single support (left) --- */}
        <text
          x="120"
          y="20"
          fontSize="13"
          fill="#374151"
          textAnchor="middle"
          fontWeight="bold"
        >
          Single Support
        </text>

        {/* Foot outline */}
        <path
          d="M 85 120 Q 85 90, 105 80 Q 115 78, 125 80 Q 145 85, 155 95 Q 160 105, 160 130 Q 158 180, 150 200 Q 140 210, 120 215 Q 100 215, 90 200 Q 82 180, 85 120 Z"
          fill="#dbeafe"
          stroke="#2563eb"
          strokeWidth="2"
        />

        {/* Support polygon label */}
        <text
          x="120"
          y="260"
          fontSize="10"
          fill="#2563eb"
          textAnchor="middle"
        >
          Support polygon = foot
        </text>

        {/* ZMP point (stable - inside) */}
        <circle cx="118" cy="140" r="5" fill="#16a34a" />
        <text x="128" y="138" fontSize="11" fill="#16a34a" fontWeight="bold">
          ZMP
        </text>
        <text x="128" y="150" fontSize="9" fill="#16a34a">
          (stable)
        </text>

        {/* GRF arrow */}
        <line
          x1="118"
          y1="140"
          x2="118"
          y2="65"
          stroke="#dc2626"
          strokeWidth="2"
          markerEnd="url(#arrow-zmp)"
        />
        <text x="125" y="70" fontSize="10" fill="#dc2626">
          GRF
        </text>

        {/* --- Double support (right) --- */}
        <text
          x="370"
          y="20"
          fontSize="13"
          fill="#374151"
          textAnchor="middle"
          fontWeight="bold"
        >
          Double Support
        </text>

        {/* Left foot */}
        <path
          d="M 295 120 Q 295 95, 310 88 Q 318 86, 325 88 Q 340 92, 348 100 Q 352 108, 352 128 Q 350 170, 344 185 Q 336 193, 320 195 Q 305 195, 298 185 Q 292 170, 295 120 Z"
          fill="#dbeafe"
          stroke="#2563eb"
          strokeWidth="2"
        />

        {/* Right foot */}
        <path
          d="M 385 120 Q 385 95, 400 88 Q 408 86, 415 88 Q 430 92, 438 100 Q 442 108, 442 128 Q 440 170, 434 185 Q 426 193, 410 195 Q 395 195, 388 185 Q 382 170, 385 120 Z"
          fill="#dcfce7"
          stroke="#16a34a"
          strokeWidth="2"
        />

        {/* Support polygon (convex hull of both feet) */}
        <path
          d="M 295 120 Q 295 95, 310 88 Q 318 86, 325 88 Q 340 92, 348 100 L 438 100 Q 442 108, 442 128 Q 440 170, 434 185 Q 426 193, 410 195 L 320 195 Q 305 195, 298 185 Q 292 170, 295 120 Z"
          fill="none"
          stroke="#ea580c"
          strokeWidth="2"
          strokeDasharray="5,3"
        />

        {/* ZMP point */}
        <circle cx="370" cy="145" r="5" fill="#16a34a" />
        <text x="378" y="142" fontSize="11" fill="#16a34a" fontWeight="bold">
          ZMP
        </text>

        {/* ZMP trajectory */}
        <path
          d="M 320 140 Q 345 130, 370 145 Q 395 155, 420 140"
          fill="none"
          stroke="#16a34a"
          strokeWidth="1.5"
          strokeDasharray="3,3"
        />

        <text
          x="370"
          y="260"
          fontSize="10"
          fill="#ea580c"
          textAnchor="middle"
        >
          Support polygon = convex hull
        </text>

        {/* Divider */}
        <line
          x1="245"
          y1="30"
          x2="245"
          y2="250"
          stroke="#e5e7eb"
          strokeWidth="1"
        />
      </svg>
      <figcaption className="mt-2 text-center text-sm text-gray-500">
        Fig 1. The ZMP must lie within the support polygon for dynamic balance.
        In single support (left), the polygon is one footprint.
        In double support (right), it spans both feet.
      </figcaption>
    </figure>
  );
}

export function ZMPConceptDiagram() {
  return (
    <figure className="my-6 flex flex-col items-center">
      <svg viewBox="0 0 400 300" className="w-full max-w-md" role="img">
        <title>ZMP concept: forces on a walking robot</title>
        <defs>
          <marker
            id="arrow-zc"
            markerWidth="8"
            markerHeight="6"
            refX="8"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L8,3 L0,6 Z" fill="#2563eb" />
          </marker>
          <marker
            id="arrow-zc-red"
            markerWidth="8"
            markerHeight="6"
            refX="8"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L8,3 L0,6 Z" fill="#dc2626" />
          </marker>
          <marker
            id="arrow-zc-green"
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
        <rect x="30" y="250" width="340" height="4" rx="2" fill="#d1d5db" />

        {/* Robot body (simplified) */}
        <rect
          x="170"
          y="60"
          width="50"
          height="40"
          rx="4"
          fill="#e0e7ff"
          stroke="#4f46e5"
          strokeWidth="2"
        />
        {/* CoM */}
        <circle cx="195" cy="80" r="4" fill="#4f46e5" />
        <text x="205" y="75" fontSize="11" fill="#4f46e5" fontWeight="bold">
          CoM
        </text>

        {/* Legs */}
        <line
          x1="180"
          y1="100"
          x2="155"
          y2="248"
          stroke="#4f46e5"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <line
          x1="210"
          y1="100"
          x2="240"
          y2="248"
          stroke="#4f46e5"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Feet */}
        <rect x="135" y="244" width="35" height="8" rx="3" fill="#93c5fd" />
        <rect x="225" y="244" width="35" height="8" rx="3" fill="#93c5fd" />

        {/* Gravity (mg) */}
        <line
          x1="195"
          y1="80"
          x2="195"
          y2="150"
          stroke="#dc2626"
          strokeWidth="2"
          markerEnd="url(#arrow-zc-red)"
        />
        <text x="200" y="130" fontSize="11" fill="#dc2626" fontWeight="bold">
          mg
        </text>

        {/* Inertia force (m*a) */}
        <line
          x1="195"
          y1="80"
          x2="280"
          y2="80"
          stroke="#2563eb"
          strokeWidth="2"
          markerEnd="url(#arrow-zc)"
        />
        <text x="240" y="73" fontSize="11" fill="#2563eb" fontWeight="bold">
          ma
        </text>

        {/* GRF at ZMP */}
        <line
          x1="200"
          y1="250"
          x2="200"
          y2="180"
          stroke="#16a34a"
          strokeWidth="2.5"
          markerEnd="url(#arrow-zc-green)"
        />
        <text x="208" y="195" fontSize="11" fill="#16a34a" fontWeight="bold">
          GRF
        </text>

        {/* ZMP point */}
        <circle cx="200" cy="250" r="5" fill="#ea580c" />
        <text
          x="200"
          y="272"
          fontSize="11"
          fill="#ea580c"
          textAnchor="middle"
          fontWeight="bold"
        >
          ZMP
        </text>

        {/* Moment = 0 annotation */}
        <path
          d="M 200 250 A 20 20 0 0 1 220 250"
          fill="none"
          stroke="#ea580c"
          strokeWidth="1.5"
        />
        <text x="225" y="255" fontSize="9" fill="#ea580c">
          M = 0
        </text>

        {/* x-axis reference */}
        <text
          x="195"
          y="290"
          fontSize="10"
          fill="#6b7280"
          textAnchor="middle"
        >
          Zero horizontal moment at this point
        </text>
      </svg>
      <figcaption className="mt-2 text-center text-sm text-gray-500">
        Fig 2. The ZMP is where the horizontal component of the moment
        due to gravity and inertial forces equals zero. The ground
        reaction force (GRF) acts at this point.
      </figcaption>
    </figure>
  );
}
