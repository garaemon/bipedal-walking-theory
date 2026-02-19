"use client";

export function TeacherStudentDiagram() {
  return (
    <figure className="my-6 flex flex-col items-center">
      <svg viewBox="0 0 520 310" className="w-full max-w-xl" role="img">
        <title>Teacher-student training for sim-to-real transfer</title>
        <defs>
          <marker id="arrow-ts" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <path d="M0,0 L8,3 L0,6 Z" fill="#374151" />
          </marker>
        </defs>

        <text x="135" y="18" fontSize="12" fill="#1e40af" textAnchor="middle" fontWeight="bold">
          Phase 1: Train Teacher (Simulation)
        </text>
        <rect x="20" y="35" width="110" height="90" rx="6" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.5" />
        <text x="75" y="52" fontSize="9" fill="#5b21b6" textAnchor="middle" fontWeight="bold">
          Privileged Info
        </text>
        <text x="75" y="66" fontSize="8" fill="#5b21b6" textAnchor="middle">friction, mass</text>
        <text x="75" y="78" fontSize="8" fill="#5b21b6" textAnchor="middle">terrain type</text>
        <text x="75" y="90" fontSize="8" fill="#5b21b6" textAnchor="middle">contact forces</text>
        <text x="75" y="105" fontSize="8" fill="#5b21b6" textAnchor="middle">+ full state s</text>

        <line x1="130" y1="80" x2="152" y2="80" stroke="#374151" strokeWidth="1.5" markerEnd="url(#arrow-ts)" />
        <rect x="160" y="45" width="100" height="70" rx="8" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
        <text x="210" y="68" fontSize="11" fill="#1e40af" textAnchor="middle" fontWeight="bold">Teacher</text>
        <text x="210" y="82" fontSize="9" fill="#1e40af" textAnchor="middle">Network</text>
        <text x="210" y="102" fontSize="8" fill="#6b7280" textAnchor="middle">
          {"a = \u03C0_T(s, priv)"}
        </text>

        <line x1="210" y1="115" x2="210" y2="137" stroke="#374151" strokeWidth="1.5" markerEnd="url(#arrow-ts)" />
        <text x="228" y="130" fontSize="8" fill="#374151">action a</text>

        <rect x="160" y="145" width="100" height="30" rx="6" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5" />
        <text x="210" y="164" fontSize="9" fill="#166534" textAnchor="middle">Simulator</text>

        {/* Phase transition arrow */}
        <path d="M 270 80 Q 290 80 290 160 Q 290 240 310 240" fill="none" stroke="#dc2626"
          strokeWidth="2" strokeDasharray="6,3" markerEnd="url(#arrow-ts)">
          <animate attributeName="stroke-dashoffset" from="18" to="0" dur="1.5s" repeatCount="indefinite" />
        </path>
        <text x="290" y="155" fontSize="9" fill="#dc2626" fontWeight="bold" textAnchor="middle"
          transform="rotate(-90, 290, 155)">Phase 1 then 2</text>

        {/* Phase 2 label */}
        <text x="410" y="198" fontSize="12" fill="#166534" textAnchor="middle" fontWeight="bold">
          Phase 2: Train Student
        </text>

        {/* Student observable input */}
        <rect x="310" y="215" width="90" height="70" rx="6" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1.5" />
        <text x="355" y="232" fontSize="9" fill="#854d0e" textAnchor="middle" fontWeight="bold">
          Observable Only
        </text>
        <text x="355" y="246" fontSize="8" fill="#854d0e" textAnchor="middle">joint angles</text>
        <text x="355" y="258" fontSize="8" fill="#854d0e" textAnchor="middle">IMU, velocities</text>
        <text x="355" y="270" fontSize="8" fill="#854d0e" textAnchor="middle">no privileged info</text>

        {/* Arrow to student */}
        <line x1="400" y1="250" x2="422" y2="250" stroke="#374151" strokeWidth="1.5" markerEnd="url(#arrow-ts)" />

        {/* Student network */}
        <rect x="430" y="220" width="80" height="60" rx="8" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
        <text x="470" y="243" fontSize="11" fill="#166534" textAnchor="middle" fontWeight="bold">Student</text>
        <text x="470" y="257" fontSize="9" fill="#166534" textAnchor="middle">Network</text>
        <text x="470" y="272" fontSize="8" fill="#6b7280" textAnchor="middle">
          {"a = \u03C0_S(s)"}
        </text>

        {/* Distillation loss label */}
        <rect x="350" y="290" width="160" height="18" rx="4" fill="#fef2f2" stroke="#dc2626" strokeWidth="1" />
        <text x="430" y="303" fontSize="8" fill="#dc2626" textAnchor="middle" fontWeight="bold">
          {"Loss: ||\u03C0_S(s) - \u03C0_T(s, priv)||"}
        </text>
      </svg>
      <figcaption className="mt-2 text-center text-sm text-gray-500">
        Fig 2. Teacher-student training. The teacher learns with privileged simulation data,
        then the student learns to mimic the teacher using only observable sensor data.
      </figcaption>
    </figure>
  );
}
