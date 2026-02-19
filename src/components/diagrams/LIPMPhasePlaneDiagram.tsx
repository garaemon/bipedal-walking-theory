"use client";

import { useEffect, useRef } from "react";

const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 400;
const MARGIN = 50;
const PLOT_WIDTH = CANVAS_WIDTH - 2 * MARGIN;
const PLOT_HEIGHT = CANVAS_HEIGHT - 2 * MARGIN;

// Phase plane display range
const X_RANGE = 0.4;
const XDOT_RANGE = 1.5;

interface PlotPoint {
  x: number;
  y: number;
}

function convertToCanvas(xPhys: number, xdotPhys: number): PlotPoint {
  const canvasX = MARGIN + ((xPhys + X_RANGE) / (2 * X_RANGE)) * PLOT_WIDTH;
  const canvasY = MARGIN + ((XDOT_RANGE - xdotPhys) / (2 * XDOT_RANGE)) * PLOT_HEIGHT;
  return { x: canvasX, y: canvasY };
}

function computeOrbitalEnergy(x: number, xdot: number, omega: number): number {
  return 0.5 * xdot * xdot - 0.5 * omega * omega * x * x;
}

function drawAxes(ctx: CanvasRenderingContext2D): void {
  ctx.strokeStyle = "#374151";
  ctx.lineWidth = 1.5;

  // x-axis
  const xAxisLeft = convertToCanvas(-X_RANGE, 0);
  const xAxisRight = convertToCanvas(X_RANGE, 0);
  ctx.beginPath();
  ctx.moveTo(xAxisLeft.x, xAxisLeft.y);
  ctx.lineTo(xAxisRight.x, xAxisRight.y);
  ctx.stroke();

  // y-axis
  const yAxisBottom = convertToCanvas(0, -XDOT_RANGE);
  const yAxisTop = convertToCanvas(0, XDOT_RANGE);
  ctx.beginPath();
  ctx.moveTo(yAxisBottom.x, yAxisBottom.y);
  ctx.lineTo(yAxisTop.x, yAxisTop.y);
  ctx.stroke();

  // Axis labels
  ctx.fillStyle = "#374151";
  ctx.font = "14px serif";
  ctx.textAlign = "center";
  ctx.fillText("x (m)", MARGIN + PLOT_WIDTH / 2, CANVAS_HEIGHT - 8);

  ctx.save();
  ctx.translate(14, MARGIN + PLOT_HEIGHT / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText("x\u0307 (m/s)", 0, 0);
  ctx.restore();
}

function drawOrbitalEnergyCurves(
  ctx: CanvasRenderingContext2D,
  omega: number
): void {
  const energyLevels = [-0.5, -0.3, -0.1, 0, 0.1, 0.3, 0.5, 0.8];

  for (const targetEnergy of energyLevels) {
    drawSingleEnergyCurve(ctx, omega, targetEnergy);
  }
}

function drawSingleEnergyCurve(
  ctx: CanvasRenderingContext2D,
  omega: number,
  targetEnergy: number
): void {
  // For a given E, xdot^2 = 2E + omega^2 * x^2
  // xdot = +/- sqrt(2E + omega^2 * x^2)
  const isZeroEnergy = Math.abs(targetEnergy) < 0.01;
  const isNegative = targetEnergy < -0.01;

  if (isZeroEnergy) {
    ctx.strokeStyle = "#dc2626";
    ctx.lineWidth = 2;
  } else if (isNegative) {
    ctx.strokeStyle = "rgba(59, 130, 246, 0.4)";
    ctx.lineWidth = 1;
  } else {
    ctx.strokeStyle = "rgba(22, 163, 74, 0.4)";
    ctx.lineWidth = 1;
  }

  const resolution = 300;
  // Draw upper branch (positive xdot)
  drawEnergyBranch(ctx, omega, targetEnergy, 1, resolution);
  // Draw lower branch (negative xdot)
  drawEnergyBranch(ctx, omega, targetEnergy, -1, resolution);
}

function drawEnergyBranch(
  ctx: CanvasRenderingContext2D,
  omega: number,
  targetEnergy: number,
  sign: number,
  resolution: number
): void {
  ctx.beginPath();
  let started = false;

  for (let i = 0; i <= resolution; i++) {
    const xPhys = -X_RANGE + (2 * X_RANGE * i) / resolution;
    const discriminant = 2 * targetEnergy + omega * omega * xPhys * xPhys;
    if (discriminant < 0) {
      started = false;
      continue;
    }
    const xdotPhys = sign * Math.sqrt(discriminant);
    if (Math.abs(xdotPhys) > XDOT_RANGE) {
      started = false;
      continue;
    }
    const point = convertToCanvas(xPhys, xdotPhys);
    if (!started) {
      ctx.moveTo(point.x, point.y);
      started = true;
    } else {
      ctx.lineTo(point.x, point.y);
    }
  }
  ctx.stroke();
}

function drawRegionLabels(ctx: CanvasRenderingContext2D): void {
  ctx.font = "bold 13px sans-serif";
  ctx.textAlign = "center";

  // E > 0 label (upper right region, outside separatrix)
  ctx.fillStyle = "#16a34a";
  const labelEPos = convertToCanvas(0.28, 1.2);
  ctx.fillText("E > 0", labelEPos.x, labelEPos.y);

  // E = 0 label (on the separatrix)
  ctx.fillStyle = "#dc2626";
  const labelEZero = convertToCanvas(0.32, 0.7);
  ctx.fillText("E = 0", labelEZero.x, labelEZero.y);

  // E < 0 label (inside separatrix, near origin)
  ctx.fillStyle = "#3b82f6";
  const labelENeg = convertToCanvas(0.05, 0.15);
  ctx.fillText("E < 0", labelENeg.x, labelENeg.y);
}

function computeTrajectoryPoint(
  t: number,
  x0: number,
  xdot0: number,
  omega: number
): PlotPoint {
  const xPhys = x0 * Math.cosh(omega * t) + (xdot0 / omega) * Math.sinh(omega * t);
  const xdotPhys = x0 * omega * Math.sinh(omega * t) + xdot0 * Math.cosh(omega * t);
  return { x: xPhys, y: xdotPhys };
}

function drawWalkingTrajectory(
  ctx: CanvasRenderingContext2D,
  omega: number
): void {
  // Draw a walking trajectory that passes over the support point (E > 0)
  const x0 = -0.15;
  const xdot0 = 0.7;
  const tMax = 0.55;
  const steps = 200;

  ctx.strokeStyle = "#7c3aed";
  ctx.lineWidth = 2.5;
  ctx.setLineDash([]);
  ctx.beginPath();

  for (let i = 0; i <= steps; i++) {
    const t = (tMax * i) / steps;
    const state = computeTrajectoryPoint(t, x0, xdot0, omega);
    const point = convertToCanvas(state.x, state.y);
    if (i === 0) {
      ctx.moveTo(point.x, point.y);
    } else {
      ctx.lineTo(point.x, point.y);
    }
  }
  ctx.stroke();
}

function drawAnimatedDot(
  ctx: CanvasRenderingContext2D,
  omega: number,
  animationProgress: number
): void {
  const x0 = -0.15;
  const xdot0 = 0.7;
  const tMax = 0.55;

  const t = tMax * animationProgress;
  const state = computeTrajectoryPoint(t, x0, xdot0, omega);
  const point = convertToCanvas(state.x, state.y);

  // Draw glow effect
  ctx.beginPath();
  ctx.arc(point.x, point.y, 10, 0, 2 * Math.PI);
  ctx.fillStyle = "rgba(124, 58, 237, 0.2)";
  ctx.fill();

  // Draw the dot
  ctx.beginPath();
  ctx.arc(point.x, point.y, 5, 0, 2 * Math.PI);
  ctx.fillStyle = "#7c3aed";
  ctx.fill();
  ctx.strokeStyle = "#5b21b6";
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // Show current energy value
  const energy = computeOrbitalEnergy(state.x, state.y, omega);
  ctx.fillStyle = "#7c3aed";
  ctx.font = "12px monospace";
  ctx.textAlign = "left";
  ctx.fillText(
    `E = ${energy.toFixed(3)}`,
    MARGIN + 5,
    MARGIN + 15
  );
}

function drawFrame(
  ctx: CanvasRenderingContext2D,
  omega: number,
  animationProgress: number
): void {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  // Background
  ctx.fillStyle = "#fafafa";
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  drawOrbitalEnergyCurves(ctx, omega);
  drawAxes(ctx);
  drawRegionLabels(ctx);
  drawWalkingTrajectory(ctx, omega);
  drawAnimatedDot(ctx, omega, animationProgress);
}

export function LIPMPhasePlaneDiagram() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const startTimeRef = useRef<number | null>(null);

  const CYCLE_DURATION_MS = 3000;
  const omega = Math.sqrt(9.81 / 0.8);

  useEffect(() => {
    const runAnimation = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }
      const elapsed = timestamp - startTimeRef.current;
      const progress = (elapsed % CYCLE_DURATION_MS) / CYCLE_DURATION_MS;

      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      drawFrame(ctx, omega, progress);
      animationRef.current = requestAnimationFrame(runAnimation);
    };

    animationRef.current = requestAnimationFrame(runAnimation);
    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [omega]);

  return (
    <figure className="my-6 flex flex-col items-center">
      <canvas
        ref={canvasRef}
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
        className="w-full max-w-lg rounded border border-gray-200"
        role="img"
        aria-label="LIPM phase plane diagram showing orbital energy curves and animated walking trajectory"
      />
      <figcaption className="mt-2 text-center text-sm text-gray-500">
        Phase plane of the LIPM. Curves represent constant orbital energy levels.
        The red lines (E = 0) are separatrices dividing divergent (E &gt; 0, green)
        and bounded (E &lt; 0, blue) regions. The animated purple dot traces
        a walking trajectory (E &gt; 0).
      </figcaption>
    </figure>
  );
}
