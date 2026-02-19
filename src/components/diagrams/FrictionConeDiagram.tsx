"use client";

import { useState } from "react";

interface ForceState {
  label: string;
  // Tip position of the force vector relative to the contact point
  tipX: number;
  tipY: number;
  isValid: boolean;
}

const FORCE_STATES: ForceState[] = [
  { label: "Inside cone (valid)", tipX: 10, tipY: -80, isValid: true },
  { label: "On boundary (limit)", tipX: 40, tipY: -80, isValid: true },
  { label: "Outside cone (slip)", tipX: 65, tipY: -60, isValid: false },
  { label: "Vertical (ideal)", tipX: 0, tipY: -90, isValid: true },
  { label: "Outside cone (slip)", tipX: -70, tipY: -55, isValid: false },
];

/** Renders SVG arrow markers used by the friction cone diagram. */
function renderMarkerDefs() {
  return (
    <defs>
      <marker
        id="arrow-fc-green"
        markerWidth="8"
        markerHeight="6"
        refX="8"
        refY="3"
        orient="auto"
      >
        <path d="M0,0 L8,3 L0,6 Z" fill="#16a34a" />
      </marker>
      <marker
        id="arrow-fc-red"
        markerWidth="8"
        markerHeight="6"
        refX="8"
        refY="3"
        orient="auto"
      >
        <path d="M0,0 L8,3 L0,6 Z" fill="#dc2626" />
      </marker>
    </defs>
  );
}

/** Renders the ground surface and hatching lines. */
function renderGround() {
  return (
    <g>
      <rect x="40" y="230" width="320" height="4" rx="2" fill="#d1d5db" />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
        <line
          key={i}
          x1={60 + i * 30}
          y1="234"
          x2={48 + i * 30}
          y2="248"
          stroke="#d1d5db"
          strokeWidth="1.5"
        />
      ))}
    </g>
  );
}

/** Renders the friction cone boundary lines and labels. */
function renderCone(contactX: number, contactY: number) {
  return (
    <g>
      {/* Shaded cone interior */}
      <path
        d={`M ${contactX} ${contactY} L ${contactX - 60} ${contactY - 120} L ${contactX + 60} ${contactY - 120} Z`}
        fill="#dbeafe"
        fillOpacity="0.4"
      />
      {/* Left boundary */}
      <line
        x1={contactX}
        y1={contactY}
        x2={contactX - 60}
        y2={contactY - 120}
        stroke="#2563eb"
        strokeWidth="2"
        strokeDasharray="6,3"
      />
      {/* Right boundary */}
      <line
        x1={contactX}
        y1={contactY}
        x2={contactX + 60}
        y2={contactY - 120}
        stroke="#2563eb"
        strokeWidth="2"
        strokeDasharray="6,3"
      />
      {/* Normal direction (vertical dashed) */}
      <line
        x1={contactX}
        y1={contactY}
        x2={contactX}
        y2={contactY - 130}
        stroke="#9ca3af"
        strokeWidth="1"
        strokeDasharray="4,4"
      />
      {/* Mu labels */}
      <text
        x={contactX + 65}
        y={contactY - 100}
        fontSize="13"
        fill="#2563eb"
        fontWeight="bold"
      >
        {"tan"}
        <tspan baselineShift="super" fontSize="9">-1</tspan>
        {"("}&#x3BC;{")"}
      </text>
      <text
        x={contactX - 20}
        y={contactY - 130}
        fontSize="11"
        fill="#9ca3af"
      >
        f<tspan baselineShift="sub" fontSize="9">n</tspan>
      </text>
    </g>
  );
}

/**
 * Animated friction cone diagram showing valid and invalid contact forces.
 * Cycles through several force vector positions to illustrate
 * the Coulomb friction cone constraint.
 */
export function FrictionConeDiagram() {
  const [stateIndex, setStateIndex] = useState(0);
  const currentState = FORCE_STATES[stateIndex];
  const contactX = 200;
  const contactY = 228;

  function handleAdvanceState() {
    setStateIndex((prev) => (prev + 1) % FORCE_STATES.length);
  }

  const arrowColor = currentState.isValid ? "#16a34a" : "#dc2626";
  const markerId = currentState.isValid
    ? "url(#arrow-fc-green)"
    : "url(#arrow-fc-red)";

  return (
    <figure className="my-6 flex flex-col items-center">
      <svg viewBox="0 0 400 310" className="w-full max-w-md" role="img">
        <title>Friction cone diagram with force vector</title>
        {renderMarkerDefs()}
        {renderGround()}
        {renderCone(contactX, contactY)}

        {/* Contact point */}
        <circle cx={contactX} cy={contactY} r="4" fill="#ea580c" />

        {/* Force vector */}
        <line
          x1={contactX}
          y1={contactY}
          x2={contactX + currentState.tipX}
          y2={contactY + currentState.tipY}
          stroke={arrowColor}
          strokeWidth="2.5"
          markerEnd={markerId}
          style={{ transition: "all 0.5s ease-in-out" }}
        />
        <text
          x={contactX + currentState.tipX + 8}
          y={contactY + currentState.tipY}
          fontSize="12"
          fill={arrowColor}
          fontWeight="bold"
          style={{ transition: "all 0.5s ease-in-out" }}
        >
          f<tspan baselineShift="sub" fontSize="9">c</tspan>
        </text>

        {/* Status label */}
        <text
          x={contactX}
          y={contactY - 145}
          fontSize="12"
          fill={arrowColor}
          textAnchor="middle"
          fontWeight="bold"
        >
          {currentState.label}
        </text>

        {/* Friction constraint formula */}
        <text
          x={200}
          y={280}
          fontSize="12"
          fill="#374151"
          textAnchor="middle"
        >
          Friction constraint: |f
          <tspan baselineShift="sub" fontSize="9">t</tspan>| &#x2264; &#x3BC; f
          <tspan baselineShift="sub" fontSize="9">n</tspan>
        </text>

        {/* Legend */}
        <g transform="translate(50, 298)">
          <text fontSize="10" fill="#666">
            <tspan fill="#dbeafe" stroke="#2563eb" strokeWidth="0.5">
              &#x25A0;
            </tspan>
            <tspan dx="2">Friction cone</tspan>
            <tspan dx="10" fill="#16a34a">&#x25CF;</tspan>
            <tspan dx="2">Valid force</tspan>
            <tspan dx="10" fill="#dc2626">&#x25CF;</tspan>
            <tspan dx="2">Slipping force</tspan>
          </text>
        </g>
      </svg>

      {/* Interactive button */}
      <button
        onClick={handleAdvanceState}
        className="mt-2 rounded-md bg-blue-600 px-4 py-1.5 text-sm text-white hover:bg-blue-700 transition-colors"
        type="button"
      >
        Next force direction ({stateIndex + 1}/{FORCE_STATES.length})
      </button>

      <figcaption className="mt-2 text-center text-sm text-gray-500">
        2D cross-section of the friction cone. The contact force must
        remain inside the cone (|f<sub>t</sub>| &#x2264; &#x3BC;f<sub>n</sub>)
        to prevent slipping. Click the button to cycle through examples.
      </figcaption>
    </figure>
  );
}
