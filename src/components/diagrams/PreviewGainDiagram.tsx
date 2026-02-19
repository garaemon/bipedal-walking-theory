"use client";

const NUM_BARS = 20;
const PREVIEW_HORIZON = 16;
const BAR_WIDTH = 16;
const GAP = 4;
const CHART_HEIGHT = 140;
const LEFT_MARGIN = 50;
const TOP_MARGIN = 20;
const TOTAL_WIDTH = LEFT_MARGIN + NUM_BARS * (BAR_WIDTH + GAP) + 30;
const TOTAL_HEIGHT = TOP_MARGIN + CHART_HEIGHT + 40;
const HORIZON_X = LEFT_MARGIN + PREVIEW_HORIZON * (BAR_WIDTH + GAP) - GAP / 2;
const TICK_INDICES = [0, 5, 10, 15, 19];

function computeGains(): number[] {
  const gains: number[] = [];
  for (let j = 0; j < NUM_BARS; j++) {
    gains.push(Math.exp(-0.25 * j));
  }
  return gains;
}

function renderBar(gain: number, maxGain: number, index: number) {
  const barHeight = (gain / maxGain) * (CHART_HEIGHT - 10);
  const x = LEFT_MARGIN + index * (BAR_WIDTH + GAP) + GAP;
  const y = TOP_MARGIN + CHART_HEIGHT - barHeight;
  return (
    <rect
      key={index} x={x} y={y}
      width={BAR_WIDTH} height={barHeight}
      fill={index < PREVIEW_HORIZON ? "#3b82f6" : "#d1d5db"} rx="2"
      style={{
        transformOrigin: `${x + BAR_WIDTH / 2}px ${TOP_MARGIN + CHART_HEIGHT}px`,
        animation: `bar-grow 0.4s ease-out ${index * 0.06}s both`,
      }}
    />
  );
}

function renderTickLabel(j: number) {
  return (
    <text
      key={j}
      x={LEFT_MARGIN + j * (BAR_WIDTH + GAP) + GAP + BAR_WIDTH / 2}
      y={TOP_MARGIN + CHART_HEIGHT + 14}
      fontSize="9" fill="#6b7280" textAnchor="middle"
    >
      {j + 1}
    </text>
  );
}

export function PreviewGainDiagram() {
  const gains = computeGains();
  const maxGain = gains[0];
  return (
    <figure className="my-6 flex flex-col items-center">
      <svg
        viewBox={`0 0 ${TOTAL_WIDTH} ${TOTAL_HEIGHT}`}
        className="w-full max-w-lg" role="img"
      >
        <title>Preview gain decay over horizon</title>
        <style>{`
          @keyframes bar-grow {
            from { transform: scaleY(0); }
            to { transform: scaleY(1); }
          }
        `}</style>
        {/* Y-axis */}
        <line
          x1={LEFT_MARGIN} y1={TOP_MARGIN}
          x2={LEFT_MARGIN} y2={TOP_MARGIN + CHART_HEIGHT}
          stroke="#374151" strokeWidth="1.5"
        />
        <text
          x={LEFT_MARGIN - 8} y={TOP_MARGIN + CHART_HEIGHT / 2}
          fontSize="10" fill="#374151" textAnchor="middle"
          transform={`rotate(-90, ${LEFT_MARGIN - 8}, ${TOP_MARGIN + CHART_HEIGHT / 2})`}
        >
          Preview gain Gp(j)
        </text>
        {/* X-axis */}
        <line
          x1={LEFT_MARGIN} y1={TOP_MARGIN + CHART_HEIGHT}
          x2={TOTAL_WIDTH - 10} y2={TOP_MARGIN + CHART_HEIGHT}
          stroke="#374151" strokeWidth="1.5"
        />
        <text
          x={(LEFT_MARGIN + TOTAL_WIDTH - 10) / 2}
          y={TOP_MARGIN + CHART_HEIGHT + 32}
          fontSize="10" fill="#374151" textAnchor="middle"
        >
          Preview step j
        </text>
        {gains.map((g, j) => renderBar(g, maxGain, j))}
        {TICK_INDICES.map(renderTickLabel)}
        {/* Preview horizon dashed line */}
        <line
          x1={HORIZON_X} y1={TOP_MARGIN}
          x2={HORIZON_X} y2={TOP_MARGIN + CHART_HEIGHT + 4}
          stroke="#dc2626" strokeWidth="1.5" strokeDasharray="5,3"
        />
        <text
          x={HORIZON_X} y={TOP_MARGIN - 4}
          fontSize="9" fill="#dc2626" textAnchor="middle" fontWeight="bold"
        >
          N_L (horizon)
        </text>
      </svg>
      <figcaption className="mt-2 text-center text-sm text-gray-500">
        Fig. Preview gains Gp(j) decay exponentially with the preview
        step index j. Gains beyond the preview horizon N_L (dashed red
        line) are effectively zero.
      </figcaption>
    </figure>
  );
}
