# Chapter Improvement Proposals

Evaluation from the perspective of a university senior (4th year in mechanical/control engineering).
Each chapter is assessed for mathematical rigor, physical intuition, diagram coverage, and pedagogical clarity.

---

## Chapter 1: Rigid Body Dynamics

### Current Assessment

- Mathematical coverage is adequate but compact.
- Two diagrams exist (RigidBodyDiagram, DoublePendulumDiagram).
- Code example is practical and well-structured.

### Issues

1. **Inertia tensor derivation is abrupt.** The jump from Newton-Euler equations to the inertia tensor matrix lacks the integration-based derivation ($I_{xx} = \int(y^2+z^2)dm$). A student who hasn't seen this before will not understand where the matrix entries come from.
2. **Coriolis matrix Christoffel symbols are presented without motivation.** The formula for $c_{ijk}$ is given but there is no explanation of *why* this particular combination of partial derivatives appears (energy conservation / skew-symmetry of $\dot{M} - 2C$).
3. **Contact Jacobian $J_c$ is undefined.** The term appears in the contact force equation but is never explained or derived.
4. **No diagram for the friction cone.** The text mentions the friction cone constraint but has no visual. This is a critical concept for understanding ground contact.
5. **Forward/inverse dynamics lack a block diagram.** A flow diagram showing the computational pipeline (inputs -> computation -> outputs) would clarify the difference.

### Proposed Diagrams

| Diagram | Description | Priority |
|---------|-------------|----------|
| **Inertia tensor integration diagram** | Show a rigid body with coordinate axes, differential mass element $dm$, and distance vectors to illustrate $I_{xx} = \int(y^2+z^2)dm$ | High |
| **Friction cone 3D visualization** | 3D cone showing normal force $f_n$, tangential force $f_t$, friction coefficient $\mu$, with the constraint $\|f_t\| \leq \mu f_n$ visualized as a cone surface | High |
| **Forward vs inverse dynamics block diagram** | Two parallel flow diagrams: (1) $\tau \to M^{-1}(\tau - C\dot{q} - g) \to \ddot{q}$ and (2) $\ddot{q} \to M\ddot{q} + C\dot{q} + g \to \tau$ | Medium |
| **Parallel axis theorem diagram** | Show a body with CoM, rotation axis offset by distance $d$, and the relationship between $I_{cm}$ and $I_{axis}$ | Medium |

---

## Chapter 2: Inverted Pendulum Model

### Current Assessment

- Strongest chapter in terms of derivation quality. The LIPM derivation is step-by-step and well-motivated.
- Good diagrams (LIPMDiagram, WalkingTransitionDiagram, LIPMPhasePlaneDiagram).
- Orbital energy concept is well-explained with physical analogy.

### Issues

1. **Cart-pole to LIPM transition is unclear.** The chapter starts with a cart-pole system, then jumps to LIPM without explaining the conceptual connection (both are inverted pendulums, but the constraint is different).
2. **3D-LIPM extension is too brief.** The decoupling of $x$ and $y$ dynamics is stated but not derived. A student should see why the cross-terms vanish.
3. **No diagram showing the geometry of the LIPM constraint force decomposition.** The derivation references a triangle formed by the leg, but no figure shows this geometry. This is the most critical step in the derivation.
4. **Walking transition map lacks a visual.** The concept of mapping end-of-step state to start-of-next-step state would benefit from a state-space diagram showing the mapping.
5. **$\tanh$ derivation could use a visual.** The appearance of $\tanh$ in the periodic walking initial velocity formula is explained algebraically but a graph of $\tanh(\omega T/2)$ vs $T$ would make the dependence on step duration more intuitive.

### Proposed Diagrams

| Diagram | Description | Priority |
|---------|-------------|----------|
| **LIPM force decomposition geometry** | Show the CoM at $(x, z_c)$, support point at $(p_x, 0)$, the leg vector, angle $\theta$, and force components $F_x$, $F_z$ along the leg direction. Annotate the similar triangles used to eliminate $F$ and $L$. | High |
| **Cart-pole vs LIPM comparison** | Side-by-side diagrams showing (1) a cart with a pole on top and (2) LIPM with a point mass on a telescoping leg. Highlight similarities (both unstable) and differences (constraint type). | Medium |
| **3D-LIPM with sagittal/lateral decoupling** | 3D view showing CoM motion decomposed into sagittal ($x$-$z$) and lateral ($y$-$z$) planes, with arrows indicating independent dynamics. | Medium |
| **Periodic walking initial velocity vs step period** | Graph of $\dot{x}_0 = \frac{d\omega/2}{\tanh(\omega T/2)}$ showing how required velocity decreases as step duration increases, with asymptotic behavior annotated. | Low |

---

## Chapter 3: Zero Moment Point (ZMP)

### Current Assessment

- Definition and formulas are complete.
- Good comparison table (ZMP vs CoP vs CoG).
- Two diagrams exist (ZMPConceptDiagram, ZMPSupportPolygonDiagram).

### Issues

1. **ZMP derivation from first principles is missing.** The ZMP formula is presented as a definition. Students need to see *why* this particular formula makes horizontal moments vanish. A derivation starting from $\sum \tau_{horizontal} = 0$ at the ZMP would be essential.
2. **No diagram showing when ZMP leaves the support polygon.** The text says "the robot begins to tip" but there is no visualization of the tipping mechanism (edge rotation, loss of contact).
3. **Multi-body ZMP formula includes angular momentum terms ($I_{iy}\ddot{\theta}_{iy}$) without explanation.** How do individual link rotations contribute to ZMP? This is non-obvious.
4. **The walking pipeline (Section "ZMP-based walking pattern generation") is described as a numbered list but has no flow diagram.**
5. **ZMP limitations are listed but not explained in depth.** For example, "conservative" -- why exactly is ignoring angular momentum conservative? A diagram comparing ZMP-based stability with angular-momentum-aware stability would clarify this.

### Proposed Diagrams

| Diagram | Description | Priority |
|---------|-------------|----------|
| **ZMP derivation diagram** | Show a multi-mass system on a ground plane, with gravity and inertial forces acting on each mass. Mark the ZMP point on the ground, show horizontal moment arms, and illustrate why $\sum \tau_h = 0$ at the ZMP. | High |
| **ZMP tipping mechanism** | Two-panel diagram: (1) ZMP inside support polygon -- stable contact, (2) ZMP at polygon edge -- rotation about edge begins, contact forces redistribute. | High |
| **ZMP walking pipeline flowchart** | Block diagram: Footstep plan -> ZMP reference -> Preview control (Ch.5) -> CoM trajectory -> Inverse kinematics -> Joint angles. Show data flow between blocks. | Medium |
| **Angular momentum contribution to ZMP** | Show a rotating link with angular velocity $\dot{\theta}$, and how the gyroscopic effect shifts the ZMP relative to the CoG projection. | Medium |

---

## Chapter 4: Passive Dynamic Walking

### Current Assessment

- Good narrative flow from McGeer's original work to modern implications.
- Bifurcation and chaos section is interesting but uses a logistic map analogy instead of actual passive walker data.
- Energy balance explanation is clear.
- Diagrams exist (PassiveWalkerDiagram, PoincareDiagram, PassiveWalkerAnimationDiagram).

### Issues

1. **Compass gait equations are presented without derivation.** The swing phase dynamics equations for $\ddot{\theta}_{st}$ and $\ddot{\theta}_{sw}$ appear without explanation of how they are obtained from Lagrangian mechanics. For a 4th-year student, at least an outline of the Lagrangian approach should be provided.
2. **Impact transition matrix $H$ derivation is incomplete.** The text explains the physical reasoning (angular momentum conservation) but does not show the actual matrix multiplication that yields $H$.
3. **No diagram of the compass gait walker geometry.** The existing PassiveWalkerDiagram may not show the specific angle conventions ($\theta_{st}$, $\theta_{sw}$, $\alpha$, $\gamma$) used in the equations. A dedicated geometry diagram with all angles labeled is essential.
4. **Bifurcation diagram is missing.** The text discusses period-doubling but only shows a logistic map analogy. An actual bifurcation diagram ($\gamma$ vs $\dot{\theta}$ at heel strike) would be far more valuable.
5. **Poincare section concept needs a state-space diagram.** The text defines the Poincare map abstractly. A diagram showing a periodic orbit in state space, the Poincare section (a plane cutting the orbit), and the return map on that section would make this concrete.

### Proposed Diagrams

| Diagram | Description | Priority |
|---------|-------------|----------|
| **Compass gait geometry** | Detailed diagram showing the slope angle $\gamma$, stance leg angle $\theta_{st}$, swing leg angle $\theta_{sw}$, inter-leg angle $2\alpha$, hip mass $M$, foot mass $m$, and leg length $l$. All angles measured from the slope normal. | High |
| **Bifurcation diagram** | Plot of steady-state $\dot{\theta}$ at heel strike vs slope angle $\gamma$. Show period-1, period-2, period-4, and chaotic regions. Mark the critical $\gamma$ values for each transition. | High |
| **Poincare section visualization** | 3D state-space diagram with a periodic orbit (closed curve), a Poincare section (plane), and the intersection points forming the return map. Show convergence of nearby trajectories to the fixed point. | Medium |
| **Energy balance diagram** | Show one step of the walker on a slope. Annotate: height drop $d_{step}\sin\gamma$ (energy gain), velocity vectors before/after heel strike (energy loss). Show the energy balance equation graphically. | Medium |

---

## Chapter 5: Preview Control

### Current Assessment

- One of the most detailed chapters. The motivation for using jerk as control input is well-explained.
- Augmented system matrices are derived explicitly.
- Good comparison table with MPC.
- Diagrams exist (PreviewControlDiagram, CoMZMPSystemDiagram, PreviewGainDiagram).

### Issues

1. **DARE (Discrete Algebraic Riccati Equation) solution is not explained.** The equation is stated but there is no description of how to solve it (eigenvalue decomposition, iterative methods). A 4th-year student taking a control theory course would have seen continuous-time Riccati but may not know the discrete-time version.
2. **No visualization of preview gain decay.** PreviewGainDiagram may exist but the text should explicitly show and explain why $G_p(j)$ decays exponentially.
3. **The code example uses hard-coded gains.** While the text mentions these come from DARE, students can't verify this without a DARE solver. Adding a simple iterative DARE solver in the code would be more educational.
4. **No diagram showing the effect of preview horizon length.** A comparison of CoM trajectories with $N_L = 0$, $N_L = 50$, $N_L = 160$ would dramatically illustrate the value of preview.
5. **Augmented system motivation is unclear.** Why do we need the augmented system with the error integral? The connection to integral control (zero steady-state error) should be illustrated with a diagram.

### Proposed Diagrams

| Diagram | Description | Priority |
|---------|-------------|----------|
| **Preview horizon effect comparison** | Three overlaid CoM trajectories tracking the same ZMP reference: (1) no preview ($N_L=0$, pure feedback), (2) short preview ($N_L=20$), (3) full preview ($N_L=160$). Show overshoot reduction and anticipatory motion with increasing preview. | High |
| **DARE iterative solution visualization** | Plot showing the convergence of the Riccati matrix $P$ entries over iterations, illustrating how the solution stabilizes. | Medium |
| **Augmented system block diagram** | Show the original plant, the integral error accumulator, and how they combine into the augmented state. Connect to the three controller components (integral, state feedback, preview). | Medium |
| **Walking pattern generation full pipeline** | End-to-end diagram from footstep input to joint angle output, showing each processing stage with sample waveforms (ZMP reference, CoM trajectory, foot trajectory). | Medium |

---

## Chapter 6: Capture Point and DCM

### Current Assessment

- Strong conceptual explanation.
- DCM derivation from LIPM is clear.
- Push recovery strategies are well-categorized.
- Backward planning for DCM waypoints is explained with code.

### Issues

1. **The decomposition into stable/unstable components is presented without rigorous derivation.** The text defines $\xi$ and $\zeta$ but doesn't show the change of coordinates that decouples the system. A student should see how $\ddot{x} = \omega^2(x-r)$ becomes two first-order equations.
2. **No diagram showing the three push recovery strategies.** Ankle strategy, stepping strategy, and hip strategy are listed but not visualized. These are fundamental to understanding balance recovery.
3. **DCM backward planning lacks a visual timeline.** The recursive formula $\xi_n = r_{n+1} + e^{-\omega T_s}(\xi_{n+1} - r_{n+1})$ would be much clearer with a diagram showing footsteps on a timeline with DCM waypoints overlaid.
4. **No phase portrait for DCM dynamics.** Since DCM is a first-order system, a 1D phase portrait ($\xi$ vs $\dot{\xi}$) showing the unstable equilibrium at $r$ and the effect of CoP control would be very illustrative.
5. **Connection between capture point and viability theory is missing.** The concept of "capturable states" is fundamental but not discussed.

### Proposed Diagrams

| Diagram | Description | Priority |
|---------|-------------|----------|
| **Three push recovery strategies** | Three-panel diagram showing a humanoid being pushed: (1) ankle strategy -- CoP shift within foot, (2) stepping strategy -- foot placement at capture point, (3) hip strategy -- angular momentum generation. Show force/moment vectors for each. | High |
| **DCM backward planning timeline** | Horizontal timeline with footstep positions marked. DCM waypoints shown as dots with exponential curves connecting them. Arrows showing backward computation direction. Final DCM at last footstep, propagating backward. | High |
| **Stable/unstable decomposition** | Phase plane showing the original $(x, \dot{x})$ coordinates and the rotated $(\xi, \zeta)$ coordinates. Show how trajectories that are hyperbolic in $(x, \dot{x})$ become straight lines in the $(\xi, \zeta)$ coordinates. | Medium |
| **DCM phase portrait** | 1D plot of $\dot{\xi}$ vs $\xi$ for $\dot{\xi} = \omega(\xi - r)$. Show the unstable equilibrium at $\xi = r$, diverging trajectories, and how shifting $r$ (CoP control) changes the equilibrium. | Medium |

---

## Chapter 7: Central Pattern Generators (CPG)

### Current Assessment

- Good biological motivation.
- Hopf oscillator explanation is thorough with polar coordinate interpretation.
- Phase coordination table is practical.
- Diagrams exist (CPGNetworkDiagram, HopfOscillatorDiagram).

### Issues

1. **No diagram showing the mapping from CPG output to robot joint angles.** The section "CPG output to robot motion" describes two approaches (Cartesian and direct joint mapping) but neither is visualized. Students need to see how oscillator signals become actual leg movements.
2. **Sensory feedback integration lacks a control loop diagram.** The feedback equation $\dot{\phi}_i = \omega_i + \sum w_{ij}\sin(\cdot) + F_{feedback}$ is given but a block diagram showing the closed-loop CPG-robot-sensor system would be essential.
3. **No diagram showing different gait patterns** (walk, trot, gallop). The phase offset table mentions these can be achieved by changing $\psi_{ij}$, but a visualization showing the timing of each leg for each gait pattern would be much more informative.
4. **The coupling convergence proof is linearized but the nonlinear behavior is not discussed.** What happens when the phase error is large (e.g., $e_{ij} = \pi$)? The linearization breaks down, and the system has multiple equilibria. This is important for understanding the basin of attraction.
5. **No comparison between CPG and trajectory-based approaches.** A table or diagram comparing CPG-based control with ZMP-based control (Chapter 3/5) would help students understand when to use which approach.

### Proposed Diagrams

| Diagram | Description | Priority |
|---------|-------------|----------|
| **CPG to joint angle mapping** | Block diagram showing: CPG oscillator outputs ($\sin(\phi_i)$) -> scaling/offset parameters -> joint angle commands (or foot trajectory -> IK -> joint angles). Show sample waveforms at each stage. | High |
| **Gait pattern comparison** | Timing diagram (horizontal axis = time) showing four legs' swing/stance phases for walk ($\psi = \pi$), trot, and gallop patterns. Use colored bars to show swing (white) and stance (filled) phases. | High |
| **Closed-loop CPG block diagram** | Block diagram: CPG -> Joint commands -> Robot dynamics -> Sensors -> Feedback function $F_{feedback}$ -> back to CPG. Show how ground contact triggers phase reset. | Medium |
| **Phase synchronization basin of attraction** | Plot showing the coupling function $w\sin(e)$ vs phase error $e$. Mark stable equilibrium at $e=0$ and unstable at $e=\pm\pi$. Shade the basin of attraction region. | Medium |

---

## Chapter 8: Whole-Body Control

### Current Assessment

- **This is the weakest chapter.** It covers important topics (Jacobian, IK, null space, task priority, QP, operational space) but each section is too brief.
- Only one diagram (TaskPriorityDiagram).

### Issues

1. **Jacobian derivation is incomplete.** The Jacobian is defined as $\partial f / \partial q$ but no example derivation is shown (e.g., for a 2-link planar arm). The code computes it but the mathematical derivation should precede the code.
2. **Pseudo-inverse is used without explanation.** What is the Moore-Penrose pseudo-inverse? When does it differ from the regular inverse? What happens at singularities? None of these are addressed.
3. **Null space projection is stated but not derived.** Why does $(\mathbf{I} - J^\dagger J)$ project into the null space? This needs a geometric explanation.
4. **No null space visualization.** A diagram showing a redundant robot's configuration space, the null space directions, and how secondary tasks use remaining freedom would be essential.
5. **QP formulation jumps to the optimization without showing how physical constraints become linear inequalities.**
6. **Operational space control (Khatib) section is too brief.** It's only 4 lines of equations with no motivation, no derivation, and no example.
7. **No diagram showing the task hierarchy for a humanoid.** A concrete example (balance > foot placement > posture > gaze direction) with task dimensions and remaining DOFs at each level would make the framework concrete.
8. **No discussion of singularity handling.** Damped least squares, singularity-robust inverse, etc. are critical for real implementation.

### Proposed Diagrams

| Diagram | Description | Priority |
|---------|-------------|----------|
| **Humanoid task hierarchy** | Pyramid diagram showing tasks ordered by priority: Level 0: Contact constraints, Level 1: CoM position/balance, Level 2: Foot placement, Level 3: Posture, Level 4: Gaze/hands. Show DOF count at each level (total - used = remaining). | High |
| **Null space visualization** | 2D configuration space ($q_1$, $q_2$) for a 3-DOF robot with a 2D task. Show the task-space manifold (constraint surface) and the null space direction (tangent to the manifold). Show secondary task optimization along the null space. | High |
| **Jacobian singularity diagram** | Show a 2-link arm in a singular configuration (fully extended). Illustrate: (1) the Jacobian becomes rank-deficient, (2) there are directions in task space that become unreachable, (3) the pseudo-inverse produces infinite joint velocities near singularity. | High |
| **QP constraint visualization** | 2D plot of a simple 2-variable QP: objective function contours, inequality constraints as half-planes, feasible region, and optimal solution at a constraint boundary. | Medium |
| **Operational space inertia** | Diagram showing how the effective mass at the end-effector depends on direction (the operational space inertia ellipsoid). Show that the robot feels "heavier" in some directions than others. | Medium |

---

## Chapter 9: Hybrid Zero Dynamics (HZD)

### Current Assessment

- Good motivation (time-based vs phase-based).
- Virtual constraint concept is well-explained.
- Bezier polynomial properties are clearly listed.
- Stability analysis via Poincare map is presented.
- Diagrams exist (VirtualConstraintDiagram, HybridAutomatonDiagram).

### Issues

1. **Input-output linearization step is abstract.** The Lie derivative notation ($L_f^2 y$, $L_g L_f y$) is used without definition. For a 4th-year student who may not have taken nonlinear control, this is a major barrier.
2. **No diagram showing the zero dynamics surface $Z$.** The text defines $Z = \{(q, \dot{q}) | y=0, \dot{y}=0\}$ but a geometric visualization in state space would make this concrete.
3. **The relationship between virtual constraints and physical constraints is not illustrated.** A comparison diagram showing (1) a physical constraint (e.g., a rail) restricting motion and (2) a virtual constraint achieving the same effect through feedback control would build intuition.
4. **Gait optimization section is too high-level.** No details on the optimization algorithm, no discussion of the search landscape, no example of the cost function evaluation.
5. **No diagram showing Bezier polynomial shape control.** How do the control points $\alpha_k$ affect the curve shape? An interactive-style diagram showing control points and the resulting trajectory would be valuable.
6. **Impact map details are good but lack a before/after velocity diagram.** A vector diagram showing $\dot{q}^-$ and $\dot{q}^+$ with the velocity component lost at impact would make the energy loss tangible.

### Proposed Diagrams

| Diagram | Description | Priority |
|---------|-------------|----------|
| **Zero dynamics surface in state space** | 3D visualization showing the full state space $(q_1, q_2, \dot{q}_1, \dot{q}_2)$ (projected to 3D), the zero dynamics surface $Z$ as a 2D manifold within it, and a trajectory constrained to $Z$. | High |
| **Virtual vs physical constraint comparison** | Two panels: (1) ball rolling on a physical rail -- constrained by contact forces, (2) robot joint following a virtual constraint -- constrained by feedback torques. Both achieve the same dimensionality reduction. | High |
| **Bezier control point diagram** | Show Bezier control points $\alpha_0, \ldots, \alpha_M$ in a coordinate system ($s$ vs $h_d$). Draw the resulting Bezier curve. Show how moving one control point changes the curve shape (with dotted curves for comparison). | Medium |
| **Impact velocity diagram** | Before/after velocity vectors at heel strike. Show the velocity component along the new stance leg (preserved) and the component perpendicular to it (lost). Annotate energy loss. | Medium |
| **Lie derivative visual explanation** | For a simple 2D system, show the state trajectory, the output function $y = h(x)$, and how $L_f h$ represents the rate of change of $y$ along the system's flow. | Medium |

---

## Chapter 10: Model Predictive Control (MPC)

### Current Assessment

- Detailed and well-structured.
- QP construction from state-space model is explicitly derived.
- Good comparison with preview control and LQR.
- Receding horizon motivation is clear.
- Diagrams exist (MPCHorizonDiagram, MPCConstraintDiagram).

### Issues

1. **No visualization of the receding horizon concept.** A multi-frame animation or sequence diagram showing the optimization window sliding forward in time would make this concept immediately clear.
2. **Warm-starting explanation lacks a diagram.** Showing how the shifted previous solution provides a good initial guess for the current QP would help.
3. **Nonlinear MPC section is too brief.** Contact complementarity constraints ($\lambda \geq 0$, $\phi \geq 0$, $\lambda\phi = 0$) are stated but not explained. These are critical for understanding multi-contact walking.
4. **No diagram showing the sparsity structure of the QP.** The text mentions "banded structure" but a matrix sparsity pattern diagram would make this concrete and explain why specialized solvers are efficient.
5. **No comparison of constrained vs unconstrained solutions.** A diagram showing two trajectories (one hitting ZMP bounds, one not) would illustrate when constraints matter.

### Proposed Diagrams

| Diagram | Description | Priority |
|---------|-------------|----------|
| **Receding horizon animation** | Three time frames showing: (1) at $t=0$, optimize over $[0, N]$, (2) at $t=1$, optimize over $[1, N+1]$, (3) at $t=2$, optimize over $[2, N+2]$. Show that only $u_0$ is applied at each step. Highlight the "sliding window." | High |
| **Constrained vs unconstrained MPC** | Two-panel plot: (1) ZMP trajectory without constraints -- exceeds support polygon, (2) ZMP trajectory with constraints -- stays within support polygon. Show the constraint boundaries as dashed lines. | High |
| **QP sparsity pattern** | Visual representation of the $H$ matrix and the $A_{ineq}$ matrix showing the banded/block-diagonal structure. Annotate which blocks correspond to which time steps. | Medium |
| **Complementarity constraint visualization** | Diagram showing a foot above the ground ($\phi > 0$, $\lambda = 0$: no contact force), on the ground ($\phi = 0$, $\lambda > 0$: contact force active), and the product $\lambda\phi = 0$ always satisfied. | Medium |

---

## Chapter 11: Reinforcement Learning

### Current Assessment

- Comprehensive coverage of PPO, GAE, reward design.
- Good discussion of failure modes in reward engineering.
- Code example uses evolution strategy (acknowledged limitation).
- Diagrams exist (RLLoopDiagram, PPODiagram).

### Issues

1. **Neural network architecture for walking policy is not described.** What does the policy network look like? How many layers? What activation functions? A 4th-year student needs to understand the concrete architecture, not just the loss function.
2. **No diagram of the actor-critic architecture.** The text mentions value function $V(s)$ but doesn't show the two-network structure (actor outputs actions, critic estimates values).
3. **GAE explanation could use a visual.** The exponentially-weighted sum of TD errors would be clearer with a diagram showing the weighting decay over future steps.
4. **No training curve diagram.** A typical RL training curve (reward vs environment steps) showing phases of learning (initial exploration, rapid improvement, plateau) would set realistic expectations.
5. **Curriculum learning section has no diagram.** A staircase diagram showing task difficulty increasing over training time, with example environments at each level, would be very informative.
6. **The code example (evolution strategy) is too disconnected from the PPO theory described.** The caveat is noted, but the gap between theory and practice is still large.

### Proposed Diagrams

| Diagram | Description | Priority |
|---------|-------------|----------|
| **Actor-critic network architecture** | Diagram showing: observation vector -> shared feature layers -> (1) actor head outputting action distribution $\pi(a|s)$ and (2) critic head outputting value $V(s)$. Show dimensions at each layer for a typical walking policy (e.g., obs=48, hidden=256, action=12). | High |
| **RL training progress curve** | Typical training curve with x-axis = environment steps (log scale), y-axis = episode reward. Show phases: random exploration (low reward), rapid learning, fine-tuning plateau. Mark where curriculum difficulty increases. | High |
| **GAE weighting diagram** | Timeline showing TD errors $\delta_t, \delta_{t+1}, \delta_{t+2}, \ldots$ with exponentially decaying weights $(\gamma\lambda)^0, (\gamma\lambda)^1, (\gamma\lambda)^2, \ldots$. Show how the weighted sum forms the advantage estimate. | Medium |
| **Curriculum learning staircase** | Staircase diagram: x-axis = training time, y-axis = task difficulty. Each step shows a representative environment (flat ground -> mild slopes -> stairs -> rough terrain -> external pushes). | Medium |
| **Reward component visualization** | Bar chart or radar chart showing the contribution of each reward component (velocity, energy, alive, style) to the total reward for different policies (undertrained, well-trained, reward-hacked). | Low |

---

## Chapter 12: Sim-to-Real Transfer

### Current Assessment

- Practical and well-motivated.
- Domain randomization concept is clear.
- Teacher-student distillation is well-explained.
- RMA architecture details are thorough.
- Diagrams exist (SimToRealPipelineDiagram, TeacherStudentDiagram).

### Issues

1. **No diagram showing the sim-to-real gap visually.** A comparison of simulated vs real robot behavior (same controller, different outcomes) would dramatically motivate the chapter.
2. **System identification section is too brief.** Only one equation. No discussion of which parameters are identifiable, methods (least squares, maximum likelihood), or practical considerations.
3. **No visualization of the domain randomization distribution.** A histogram or scatter plot showing the distribution of randomized parameters, with the "true" real-world value marked, would illustrate the concept.
4. **The failure modes section (overly conservative vs under-randomization) needs a diagram.** A trade-off curve showing performance vs randomization range, with the two failure modes at the extremes, would be valuable.
5. **No diagram of the RMA architecture.** While the text describes the base policy + adaptation module pipeline, a block diagram showing data flow (history -> adaptation module -> environment encoding -> concatenated with state -> base policy -> action) would be essential.
6. **Practical deployment section (contact, actuator, sensor modeling) lists challenges but provides no quantitative guidance.** What level of model fidelity is "good enough"?

### Proposed Diagrams

| Diagram | Description | Priority |
|---------|-------------|----------|
| **Sim-to-real gap visualization** | Two-panel diagram: (1) simulated robot walking perfectly on flat ground, (2) real robot with the same controller stumbling due to unmodeled effects (friction, delay, flexibility). Annotate the discrepancies. | High |
| **RMA architecture block diagram** | Detailed block diagram showing: state history $s_{t-H:t}$ -> adaptation module $f_\phi$ -> environment encoding $\hat{z}$ + current state $s_t$ -> base policy $\pi$ -> action $a_t$. Show the training loss connecting $\hat{z}$ to privileged $z^*$. | High |
| **Domain randomization distribution** | 2D scatter plot of (mass, friction) parameter samples used in training. Show the nominal (simulated) value, the randomization range as a bounding box, and the unknown real-world value as a star. | Medium |
| **Performance vs randomization trade-off** | Curve showing: x-axis = randomization range width, y-axis = real-world performance. Show inverted-U shape with "under-randomized" (overfitting) on the left and "over-randomized" (too conservative) on the right. | Medium |

---

## Chapter 13: Frontiers

### Current Assessment

- Good overview of cutting-edge topics.
- Timeline table is valuable.
- Connection to previous chapters is explicitly made.
- Diagram exists (FrontiersTaxonomyDiagram).

### Issues

1. **Transformer architecture for walking control is described but not diagrammed.** The text explains the token embedding and self-attention process, but a visual architecture diagram would make this much more accessible.
2. **No concrete example of a loco-manipulation task.** The section lists challenges but doesn't walk through a specific scenario (e.g., opening a door) with the forces and constraints involved.
3. **Foundation models / cross-embodiment section is vague.** What does "shared latent space" mean concretely? How is it learned? This needs more detail or a diagram.
4. **Vectorized environment architecture needs a visual.** The text describes batched tensor operations but a diagram showing $N$ robots simulated in parallel as a single GPU kernel would be clearer.
5. **The "classical methods still in use" section would benefit from a system architecture diagram** showing how classical and learned components integrate in a modern walking system.
6. **Open problems section has no research direction diagram.** A technology readiness level (TRL) chart or capability radar showing where the field stands on each problem would be forward-looking and useful.

### Proposed Diagrams

| Diagram | Description | Priority |
|---------|-------------|----------|
| **Transformer walking controller architecture** | Block diagram: state history tokens $z_{t-H}, \ldots, z_t$ -> positional encoding -> Transformer encoder (multi-head attention + FFN layers) -> action head -> $a_t$. Show attention weights highlighting which past states are attended to. | High |
| **Modern hybrid walking system architecture** | Full system diagram showing: perception (depth camera -> height map) -> high-level learned policy -> task commands -> low-level classical WBC/QP -> joint torques -> robot. Include sensor feedback loops. | High |
| **GPU-parallel simulation architecture** | Diagram showing $N$ robot instances (e.g., 4096) as rows in a state tensor $\mathbf{S} \in \mathbb{R}^{N \times d}$. Single GPU kernel processes all robots simultaneously. Compare with CPU approach (separate processes). | Medium |
| **Loco-manipulation force diagram** | Humanoid pushing a box: show ground reaction forces on feet, manipulation force on hands, resulting CoM perturbation, and the ZMP shift. Illustrate why this requires whole-body coordination. | Medium |
| **Research frontier capability radar** | Spider/radar chart with axes: energy efficiency, terrain diversity, agility, robustness, manipulation, perception, planning horizon. Show current state-of-the-art as a polygon and human performance as an outer boundary. | Low |

---

## Cross-Cutting Issues

### 1. Interactive Demos are All "Coming Soon"

Every chapter ends with an InteractiveDemo placeholder that says "coming soon." These should be prioritized, especially for:
- **LIPM phase plane** (Chapter 2): adjust initial conditions and see trajectory evolution
- **Push recovery** (Chapter 6): apply a push and see capture point shift
- **Passive walker** (Chapter 4): adjust slope angle and observe bifurcation
- **MPC horizon** (Chapter 10): adjust $N$ and see trajectory quality change

### 2. Missing Prerequisites Section

No chapter has a "Prerequisites" or "Background Knowledge" section. For a 4th-year student, knowing what they need to review (linear algebra, ODE theory, optimization basics) before reading each chapter would be helpful. Consider adding a short "Prerequisites" note at the top of each chapter.

### 3. Lack of Derivation Exercises

The chapters present theory and provide code but rarely ask the reader to derive something themselves. Adding 2-3 derivation exercises per chapter would deepen understanding. For example:
- Chapter 1: "Derive the inertia tensor for a thin rod of mass $m$ and length $l$ about its center."
- Chapter 5: "Show that the augmented system $(A_e, B_e)$ is controllable."
- Chapter 9: "Verify that the zero dynamics surface $Z$ is invariant under the controlled flow."

### 4. Notation Inconsistency

Some notation varies between chapters (e.g., $p_x$ for ZMP in Chapter 3 vs $r$ for CoP in Chapter 6). A notation glossary or consistent symbol table would help.

### 5. Missing Numerical Examples with Realistic Parameters

Many code examples use simplified or arbitrary parameters. Adding a "real robot" parameter set (e.g., based on a well-known humanoid like HRP-2 or Cassie) would ground the theory in practice.
