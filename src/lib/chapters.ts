export interface Chapter {
  slug: string;
  title: string;
  description: string;
}

export const chapters: Chapter[] = [
  {
    slug: "01-rigid-body-dynamics",
    title: "Rigid Body Dynamics",
    description: "Fundamentals of rigid body dynamics for bipedal walking",
  },
  {
    slug: "02-inverted-pendulum",
    title: "Inverted Pendulum Model",
    description:
      "Linear Inverted Pendulum Model (LIPM) and its applications to walking",
  },
  {
    slug: "03-zero-moment-point",
    title: "Zero Moment Point (ZMP)",
    description: "ZMP stability criterion and support polygon concept",
  },
  {
    slug: "04-passive-dynamic-walking",
    title: "Passive Dynamic Walking",
    description:
      "McGeer's passive walker, limit cycles, and energy-efficient gaits",
  },
  {
    slug: "05-preview-control",
    title: "Preview Control for Walking",
    description:
      "Preview control theory and walking pattern generation pipeline",
  },
  {
    slug: "06-capture-point-dcm",
    title: "Capture Point and DCM",
    description:
      "Divergent Component of Motion and push recovery strategies",
  },
  {
    slug: "07-cpg",
    title: "Central Pattern Generators (CPG)",
    description:
      "Coupled oscillator models and phase coordination for locomotion",
  },
  {
    slug: "08-whole-body-control",
    title: "Whole-Body Motion Control",
    description:
      "Inverse kinematics, Jacobian, and task-priority framework",
  },
  {
    slug: "09-hybrid-zero-dynamics",
    title: "Hybrid Zero Dynamics",
    description:
      "Virtual constraints and zero dynamics stability for walking",
  },
  {
    slug: "10-mpc",
    title: "Model Predictive Control (MPC)",
    description: "Linear and nonlinear MPC formulations for walking",
  },
  {
    slug: "11-reinforcement-learning",
    title: "Reinforcement Learning for Walking",
    description:
      "Policy gradient methods and reward function design for locomotion",
  },
  {
    slug: "12-sim-to-real",
    title: "Sim-to-Real Transfer",
    description:
      "Domain randomization, system identification, and sim-to-real gap",
  },
  {
    slug: "13-frontiers",
    title: "Frontiers of Bipedal Locomotion",
    description:
      "Transformer-based controllers, agile skills, and open problems",
  },
];
