# Bipedal Walking Theory - Educational Web Application Plan

## Overview

An interactive educational web application that covers bipedal walking robotics research
from foundational theories to state-of-the-art. The app provides rigorous mathematical
explanations with LaTeX-rendered equations, interactive visualizations, and executable
Python code examples.

## Tech Stack

| Component | Technology | Rationale |
|-----------|-----------|-----------|
| Framework | Next.js 14+ (App Router) | SSG support, React ecosystem, easy deployment |
| Language | TypeScript | Type safety, better DX |
| Styling | Tailwind CSS | Rapid UI development, responsive design |
| Content | MDX | Mix markdown with React components |
| Math Rendering | KaTeX | Fast LaTeX rendering in browser |
| Python Execution | Pyodide | In-browser Python (no server needed) |
| 2D Visualization | D3.js / Recharts | Plots, phase portraits, trajectories |
| 3D Visualization | Three.js / React Three Fiber | Robot models, 3D walking animation |
| Animation | Framer Motion | UI transitions, step-by-step explanations |
| Deployment | Vercel | Zero-config Next.js deployment |

## Chapter Structure

### Chapter 1: Rigid Body Dynamics
- Newton-Euler equations of motion
- Inertia tensor and rotational dynamics
- Forward/inverse dynamics
- Contact forces and friction
- **Interactive**: 3D rigid body simulation with adjustable parameters
- **Key equations**: $\mathbf{F} = m\mathbf{a}$, $\boldsymbol{\tau} = \mathbf{I}\boldsymbol{\alpha} + \boldsymbol{\omega} \times \mathbf{I}\boldsymbol{\omega}$
- **Python**: Simple rigid body simulator

### Chapter 2: Inverted Pendulum Model
- Cart-pole and inverted pendulum basics
- Linear Inverted Pendulum Model (LIPM)
- 3D-LIPM (Kajita et al., 2001)
- Equations of motion derivation
- **Interactive**: Adjustable pendulum parameters, real-time simulation
- **Key equations**: $\ddot{x} = \frac{g}{z_c}(x - p_x)$
- **Python**: LIPM simulation and CoM trajectory generation
- **Papers**: Kajita et al. (2001)

### Chapter 3: Zero Moment Point (ZMP)
- Definition and physical meaning
- Relationship to Center of Pressure (CoP)
- ZMP stability criterion
- Support polygon concept
- **Interactive**: ZMP trajectory visualization, stability region display
- **Key equations**: $p_x = \frac{\sum m_i(\ddot{z}_i + g)x_i - \sum m_i \ddot{x}_i z_i}{\sum m_i(\ddot{z}_i + g)}$
- **Python**: ZMP computation from motion data
- **Papers**: Vukobratovic & Juricic (1969)

### Chapter 4: Passive Dynamic Walking
- McGeer's passive walker
- Limit cycles and Poincare maps
- Hybrid dynamical systems
- Energy efficiency of passive gaits
- **Interactive**: Slope-walking simulation, bifurcation diagram
- **Key equations**: Poincare return map $\mathbf{x}_{n+1} = P(\mathbf{x}_n)$
- **Python**: Passive walker simulation with Poincare analysis
- **Papers**: McGeer (1990)

### Chapter 5: Preview Control for Walking
- State-space model of CoM-ZMP dynamics
- Preview control theory (optimal regulator with future reference)
- Walking pattern generation pipeline
- **Interactive**: Step-by-step preview control with adjustable preview window
- **Key equations**: Preview controller $u(k) = -G_i \sum_{i=0}^{k} e(i) - G_x \mathbf{x}(k) - \sum_{j=1}^{N_L} G_p(j) p^{ref}(k+j)$
- **Python**: Full preview control implementation
- **Papers**: Kajita et al. (2003)

### Chapter 6: Capture Point and DCM
- Capture Point definition and intuition
- Divergent Component of Motion (DCM)
- Push recovery strategies
- DCM-based walking control
- **Interactive**: Push recovery simulation, capture point visualization
- **Key equations**: $\boldsymbol{\xi} = \mathbf{x} + \frac{1}{\omega}\dot{\mathbf{x}}$
- **Python**: Capture point computation and push recovery
- **Papers**: Pratt et al. (2006), Englsberger et al. (2015)

### Chapter 7: Central Pattern Generators (CPG)
- Biological CPGs and neuroscience background
- Coupled oscillator models
- Phase coordination for locomotion
- CPG parameter modulation
- **Interactive**: Oscillator network with adjustable coupling
- **Key equations**: $\dot{\phi}_i = \omega_i + \sum_j w_{ij} \sin(\phi_j - \phi_i - \psi_{ij})$
- **Python**: CPG-based gait generation
- **Papers**: Ijspeert (2008)

### Chapter 8: Whole-Body Motion Control
- Forward/inverse kinematics
- Jacobian and operational space control
- Task-priority framework
- Quadratic programming for multi-task control
- **Interactive**: Robot arm IK demo, task priority visualization
- **Key equations**: $\dot{\mathbf{q}} = \mathbf{J}^{\dagger}\dot{\mathbf{x}} + (\mathbf{I} - \mathbf{J}^{\dagger}\mathbf{J})\mathbf{q}_0$
- **Python**: IK solver, task-priority controller
- **Papers**: Khatib et al. (2005), Sentis & Khatib (2006)

### Chapter 9: Hybrid Zero Dynamics
- Virtual constraints
- Hybrid dynamical systems for walking
- Zero dynamics and stability
- Bezier polynomial parameterization
- **Interactive**: Virtual constraint design, gait optimization
- **Key equations**: $y = h(\mathbf{q}) - h_d(\theta(\mathbf{q}))$
- **Python**: HZD gait design for planar biped
- **Papers**: Westervelt et al. (2003), Ames et al. (2014)

### Chapter 10: Model Predictive Control (MPC)
- MPC formulation for walking
- Linear MPC with LIPM
- Nonlinear MPC with full dynamics
- Real-time optimization
- **Interactive**: MPC horizon visualization, constraint adjustment
- **Key equations**: $\min \sum_{k=0}^{N} \|\mathbf{x}_k - \mathbf{x}^{ref}_k\|^2_Q + \|\mathbf{u}_k\|^2_R$
- **Python**: Linear MPC for walking pattern generation
- **Papers**: Wieber (2023), Galliker et al. (2022)

### Chapter 11: Reinforcement Learning for Walking
- MDP formulation for locomotion
- Policy gradient methods
- Reward function design
- Motion imitation (DeepMimic)
- **Interactive**: RL training visualization, reward shaping demo
- **Key equations**: $\nabla_\theta J(\theta) = \mathbb{E}[\nabla_\theta \log \pi_\theta(a|s) A^{\pi}(s,a)]$
- **Python**: Simple RL walking agent (CartPole to bipedal)
- **Papers**: Peng et al. (2018), Xie et al. (2018, 2020)

### Chapter 12: Sim-to-Real Transfer
- Domain randomization
- System identification
- Sim-to-real gap analysis
- Rapid Motor Adaptation
- **Interactive**: Domain randomization parameter visualization
- **Python**: Domain randomization training example
- **Papers**: Tobin et al. (2017), Radosavovic et al. (2024)

### Chapter 13: Frontiers of Bipedal Locomotion
- Transformer-based locomotion controllers
- Agile humanoid skills (soccer, parkour)
- Vision-based locomotion
- Open problems and future directions
- **Papers**: Haarnoja et al. (2024), Radosavovic et al. (2024)

## Project Structure

```
bipedal-walking-theory/
├── docs/                     # Research documents
│   ├── paper_list.md
│   ├── paper_summaries.md
│   └── plan.md
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── layout.tsx
│   │   ├── page.tsx          # Landing page
│   │   └── chapters/
│   │       ├── [slug]/
│   │       │   └── page.tsx
│   │       └── ...
│   ├── components/
│   │   ├── layout/           # Header, Footer, Sidebar, Navigation
│   │   ├── math/             # KaTeX rendering components
│   │   ├── code/             # Code editor + Pyodide execution
│   │   ├── visualization/    # D3/Three.js interactive demos
│   │   └── ui/               # Shared UI components
│   ├── content/              # MDX chapter files
│   │   ├── 01-rigid-body-dynamics.mdx
│   │   ├── 02-inverted-pendulum.mdx
│   │   ├── ...
│   │   └── 13-frontiers.mdx
│   ├── lib/                  # Utilities
│   │   ├── pyodide.ts        # Pyodide integration
│   │   ├── mdx.ts            # MDX processing
│   │   └── math.ts           # Math utilities
│   └── python/               # Python examples per chapter
│       ├── ch01_rigid_body.py
│       ├── ch02_inverted_pendulum.py
│       └── ...
├── public/
│   ├── models/               # 3D robot models (GLTF/GLB)
│   └── images/
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.mjs
└── README.md
```

## Development Phases

### Phase 1: Project Setup (Week 1)
- Initialize Next.js + TypeScript project
- Configure Tailwind CSS, ESLint, Prettier
- Set up MDX pipeline with KaTeX support
- Create basic layout (header, sidebar, navigation)
- Integrate Pyodide for in-browser Python execution
- Create reusable components: MathBlock, CodeEditor, InteractiveDemo
- Deploy initial skeleton to Vercel

### Phase 2: Core Content - Foundations (Weeks 2-4)
- Chapter 1: Rigid Body Dynamics
- Chapter 2: Inverted Pendulum Model
- Chapter 3: Zero Moment Point
- Chapter 4: Passive Dynamic Walking
- Python examples for each chapter
- Interactive visualizations for each chapter

### Phase 3: Classical Methods (Weeks 5-7)
- Chapter 5: Preview Control
- Chapter 6: Capture Point and DCM
- Chapter 7: CPG
- Chapter 8: Whole-Body Control
- Chapter 9: Hybrid Zero Dynamics

### Phase 4: Modern Methods (Weeks 8-10)
- Chapter 10: MPC
- Chapter 11: Reinforcement Learning
- Chapter 12: Sim-to-Real
- Chapter 13: Frontiers

### Phase 5: Polish (Week 11-12)
- Responsive design optimization
- Performance optimization (code splitting, lazy loading)
- Cross-browser testing
- SEO and accessibility
- Final deployment

## Key Interactive Components

### CodePlayground
- Monaco-based code editor with syntax highlighting
- Pyodide-powered Python execution in browser
- Output panel showing text output and matplotlib plots
- Pre-loaded example code per chapter
- Users can modify and re-run code

### SimulationCanvas
- Real-time 2D/3D physics simulations
- Adjustable parameters via sliders
- Play/pause/step controls
- Phase portrait and trajectory visualization

### MathExplanation
- Step-by-step equation derivation
- Animated equation transitions
- Tooltip definitions for variables
- Collapsible proof sections

### QuizSection
- Self-check questions per chapter
- Multiple choice and parameter estimation
- Immediate feedback with explanations
