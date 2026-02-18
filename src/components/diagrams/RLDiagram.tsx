"use client";

export function RLLoopDiagram() {
  return (
    <figure className="my-6 flex flex-col items-center">
      <svg viewBox="0 0 420 240" className="w-full max-w-md" role="img">
        <title>RL agent-environment loop for locomotion</title>
        <defs>
          <marker
            id="arrow-rl"
            markerWidth="8"
            markerHeight="6"
            refX="8"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L8,3 L0,6 Z" fill="#374151" />
          </marker>
        </defs>

        {/* Agent box */}
        <rect
          x="40"
          y="30"
          width="140"
          height="70"
          rx="8"
          fill="#dbeafe"
          stroke="#2563eb"
          strokeWidth="2"
        />
        <text x="110" y="58" fontSize="13" fill="#1e40af" textAnchor="middle" fontWeight="bold">
          Policy
        </text>
        <text x="110" y="78" fontSize="11" fill="#1e40af" textAnchor="middle">
          &#x3C0;&#x3B8;(a|s)
        </text>

        {/* Environment box */}
        <rect
          x="240"
          y="30"
          width="140"
          height="70"
          rx="8"
          fill="#dcfce7"
          stroke="#16a34a"
          strokeWidth="2"
        />
        <text x="310" y="55" fontSize="13" fill="#166534" textAnchor="middle" fontWeight="bold">
          Simulator
        </text>
        <text x="310" y="75" fontSize="10" fill="#166534" textAnchor="middle">
          (Physics Engine)
        </text>

        {/* Action arrow (top) */}
        <line
          x1="180"
          y1="50"
          x2="232"
          y2="50"
          stroke="#374151"
          strokeWidth="2"
          markerEnd="url(#arrow-rl)"
        />
        <text x="206" y="42" fontSize="10" fill="#374151" textAnchor="middle">
          action a
        </text>
        <text x="206" y="54" fontSize="8" fill="#6b7280" textAnchor="middle">
          (joint torques)
        </text>

        {/* State arrow (bottom, going back) */}
        <path
          d="M 310 100 L 310 160 L 110 160 L 110 100"
          fill="none"
          stroke="#374151"
          strokeWidth="2"
          markerEnd="url(#arrow-rl)"
        />
        <text x="210" y="152" fontSize="10" fill="#374151" textAnchor="middle">
          state s, reward r
        </text>

        {/* State details */}
        <rect
          x="100"
          y="175"
          width="220"
          height="55"
          rx="6"
          fill="#f9fafb"
          stroke="#d1d5db"
          strokeWidth="1"
        />
        <text x="210" y="192" fontSize="9" fill="#374151" textAnchor="middle" fontWeight="bold">
          State: joint angles, velocities, body orientation
        </text>
        <text x="210" y="206" fontSize="9" fill="#374151" textAnchor="middle">
          Reward: forward vel - energy - fall penalty
        </text>
        <text x="210" y="220" fontSize="9" fill="#374151" textAnchor="middle">
          Action: target joint positions or torques
        </text>
      </svg>
      <figcaption className="mt-2 text-center text-sm text-gray-500">
        Fig 1. The RL loop for locomotion. The policy observes robot state
        from the simulator and outputs joint-level actions. The reward
        signal shapes the learned walking behavior.
      </figcaption>
    </figure>
  );
}
