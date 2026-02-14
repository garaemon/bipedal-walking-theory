# Major Papers in Bipedal Walking Robotics

A comprehensive list of influential papers in bipedal walking robotics, organized chronologically and by topic, from foundational theories to state-of-the-art research.

---

## 1. Foundational Theories (1960s-1990s)

### 1.1 Early Bipedal Walking Robots

| Title | Authors | Year | Key Contribution |
|-------|---------|------|-----------------|
| Contribution to the Synthesis of Biped Gait | M. Vukobratovic, D. Juricic | 1969 | Introduced the Zero Moment Point (ZMP) concept, providing the first rigorous stability criterion for bipedal walking. This became one of the most widely used criteria in humanoid robotics. |
| Development of WABOT-1 | I. Kato et al. | 1973 | Created the first full-scale anthropomorphic robot at Waseda University with static bipedal walking, stereo vision, and speech capabilities. |
| The Realization of Dynamic Walking by the Biped Walking Robot WL-10RD | A. Takanishi et al. | 1985 | Demonstrated dynamic walking on a hydraulically driven anthropomorphic biped robot with 12 degrees of freedom at Waseda University. |

### 1.2 Dynamic Legged Locomotion

| Title | Authors | Year | Key Contribution |
|-------|---------|------|-----------------|
| Legged Robots That Balance | M. H. Raibert | 1986 | Foundational book establishing principles of dynamic legged locomotion through one-legged hopping machines. Demonstrated that active balance and dynamics-based control could enable robust locomotion. |
| Running With Symmetry | M. H. Raibert | 1986 | Introduced symmetry-based control decomposition for running, separating hopping height, forward speed, and body attitude into independent controllers. |
| Dynamically Stable Legged Locomotion | M. H. Raibert, H. B. Brown Jr. | 1984 | Presented early experimental results on dynamically stable one-legged hopping machines, laying the groundwork for dynamic locomotion control. |

### 1.3 Passive Dynamic Walking

| Title | Authors | Year | Key Contribution |
|-------|---------|------|-----------------|
| Passive Dynamic Walking | T. McGeer | 1990 | Demonstrated that a simple mechanical biped can walk stably down a gentle slope without any actuation or control, revealing the role of natural dynamics in locomotion. Popularized Poincare map analysis for walking stability. |
| Passive Walking With Knees | T. McGeer | 1990 | Extended passive dynamic walking to include knee joints, showing that more anthropomorphic passive gaits are possible with appropriate mechanical design. |

### 1.4 Zero Moment Point Theory

| Title | Authors | Year | Key Contribution |
|-------|---------|------|-----------------|
| Biped Locomotion: Dynamics, Stability, Control and Application | M. Vukobratovic, B. Borovac, D. Surla, D. Stokic | 1990 | Comprehensive book consolidating ZMP theory and its applications to bipedal locomotion control, providing a complete framework for stable walking. |
| Zero-Moment Point -- Thirty Five Years of Its Life | M. Vukobratovic, B. Borovac | 2004 | Comprehensive review paper covering the historical development, mathematical formulation, and various interpretations of ZMP over 35 years. |

### 1.5 Inverted Pendulum Models

| Title | Authors | Year | Key Contribution |
|-------|---------|------|-----------------|
| The Development of Honda Humanoid Robot | K. Hirai, M. Hirose, Y. Haikawa, T. Takenaka | 1998 | Described the mechanism, control algorithms, and integrated system of Honda's P2 humanoid robot, one of the first practical full-size bipedal robots. |
| The 3D Linear Inverted Pendulum Mode: A Simple Modeling for a Biped Walking Pattern Generation | S. Kajita, F. Kanehiro, K. Kaneko, K. Yokoi, H. Hirukawa | 2001 | Introduced the 3D Linear Inverted Pendulum Model (3D-LIPM), providing simple linear dynamics for analyzing and generating 3D walking patterns. Became a foundational model for humanoid walking control. |

---

## 2. Classical Control Approaches (1990s-2010s)

### 2.1 ZMP-Based Pattern Generation and Preview Control

| Title | Authors | Year | Key Contribution |
|-------|---------|------|-----------------|
| Biped Walking Pattern Generation by Using Preview Control of Zero-Moment Point | S. Kajita, F. Kanehiro, K. Kaneko, K. Fujiwara, K. Harada, K. Yokoi, H. Hirukawa | 2003 | Proposed using preview control theory with ZMP for walking pattern generation, enabling the robot to use future reference trajectories for more dynamic and stable gaits. One of the most cited papers in humanoid walking. |
| Real-time 3D Walking Pattern Generation for a Biped Robot with Telescopic Legs | S. Kajita, O. Matsumoto, M. Saigo | 2001 | Demonstrated real-time 3D dynamic walking without pre-computed trajectories using the 3D-LIPM model. |

### 2.2 Capture Point and Divergent Component of Motion

| Title | Authors | Year | Key Contribution |
|-------|---------|------|-----------------|
| Capture Point: A Step toward Humanoid Push Recovery | J. Pratt, J. Carff, S. Drakunov, A. Goswami | 2006 | Introduced the Capture Point concept -- the point on the ground where a humanoid must step to come to a complete stop, providing an intuitive criterion for push recovery and balance. |
| Bipedal Walking Control Based on Capture Point Dynamics | J. Englsberger, C. Ott, M. A. Roa, A. Albu-Schaffer, G. Hirzinger | 2011 | Extended capture point dynamics for practical bipedal walking control, developing real-time planning and tracking controllers. |
| Three-Dimensional Bipedal Walking Control Based on Divergent Component of Motion | J. Englsberger, C. Ott, A. Albu-Schaffer | 2015 | Extended DCM (also known as Capture Point) to full 3D, introducing the Enhanced Centroidal Moment Pivot point (eCMP) and Virtual Repellent Point (VRP) for encoding external forces in walking control. |

### 2.3 Central Pattern Generators

| Title | Authors | Year | Key Contribution |
|-------|---------|------|-----------------|
| Central Pattern Generators for Locomotion Control in Animals and Robots: A Review | A. J. Ijspeert | 2008 | Comprehensive review of CPG models for locomotion, bridging neuroscience and robotics. Demonstrated how coupled oscillator networks can generate rhythmic locomotion patterns. |
| Programmable Central Pattern Generators: An Application to Biped Locomotion Control | L. Righetti, A. J. Ijspeert | 2006 | Proposed programmable CPGs for online generation of periodic trajectories applicable to biped locomotion control. |

### 2.4 Virtual Model Control and Compliant Walking

| Title | Authors | Year | Key Contribution |
|-------|---------|------|-----------------|
| Virtual Model Control: An Intuitive Approach for Bipedal Locomotion | J. Pratt, C.-M. Chew, A. Torres, P. Dilworth, G. Pratt | 2001 | Introduced virtual model control, using virtual components (springs, dampers) to create intuitive force-based controllers for bipedal locomotion. |
| Series Elastic Actuators | G. A. Pratt, M. M. Williamson | 1995 | Introduced series elastic actuators (SEA) for force control in legged robots, enabling compliant and safe interaction with the environment. Became foundational for modern humanoid actuator design. |

### 2.5 Whole-Body Control

| Title | Authors | Year | Key Contribution |
|-------|---------|------|-----------------|
| Synthesis of Whole-Body Behaviors through Hierarchical Control of Behavioral Primitives | O. Khatib, L. Sentis, J. Park, J. Warren | 2005 | Proposed hierarchical whole-body control framework for humanoid robots using operational space formulation, enabling simultaneous management of multiple tasks with priority ordering. |
| A Whole-Body Control Framework for Humanoids Operating in Human Environments | L. Sentis, O. Khatib | 2006 | Developed a complete whole-body control framework for humanoid robots in human environments, integrating constraints, contacts, and task priorities using operational space control. |

### 2.6 Hybrid Zero Dynamics

| Title | Authors | Year | Key Contribution |
|-------|---------|------|-----------------|
| Hybrid Zero Dynamics of Planar Biped Walkers | E. R. Westervelt, J. W. Grizzle, D. E. Koditschek | 2003 | Introduced the hybrid zero dynamics (HZD) framework for bipedal walking, using virtual constraints to create provably stable periodic walking gaits for underactuated bipeds. |
| Feedback Control of Dynamic Bipedal Robot Locomotion | E. R. Westervelt, J. W. Grizzle, C. Chevallereau, J. H. Choi, B. Morris | 2007 | Comprehensive book on HZD-based control for bipedal robots, providing a complete mathematical framework for designing stable walking controllers with formal guarantees. |

---

## 3. Modern Approaches (2010s-2020s)

### 3.1 Optimization-Based Planning and Control

| Title | Authors | Year | Key Contribution |
|-------|---------|------|-----------------|
| Optimization-Based Locomotion Planning, Estimation, and Control Design for the Atlas Humanoid Robot | S. Kuindersma, R. Deits, M. Fallon, A. Valenzuela, H. Dai, F. Permenter, T. Koolen, P. Marion, R. Tedrake | 2016 | Presented a complete optimization-based system for Atlas humanoid locomotion, integrating convex, mixed-integer, and sparse nonlinear optimization for footstep planning, whole-body control at 1 kHz, and state estimation. |
| Dynamic Walking: Toward Agile and Efficient Bipedal Robots | R. W. Reher, A. D. Ames | 2021 | Comprehensive overview of dynamic walking approaches combining HZD, control Lyapunov functions, and optimization for achieving agile and efficient bipedal locomotion. |

### 3.2 Control Lyapunov Functions and Control Barrier Functions

| Title | Authors | Year | Key Contribution |
|-------|---------|------|-----------------|
| Rapidly Exponentially Stabilizing Control Lyapunov Functions and Hybrid Zero Dynamics | A. D. Ames, K. Galloway, K. Sreenath, J. W. Grizzle | 2014 | Unified control Lyapunov functions with hybrid zero dynamics for provably stable dynamic bipedal walking, enabling optimization-based torque control for underactuated robots. |
| Control Barrier Function Based Quadratic Programs for Safety Critical Systems | A. D. Ames, X. Xu, J. W. Grizzle, P. Tabuada | 2017 | Introduced CBF-based quadratic programs unifying safety constraints with control objectives, with applications to safe bipedal robot locomotion and navigation. |

### 3.3 Spring-Mass Model Robots

| Title | Authors | Year | Key Contribution |
|-------|---------|------|-----------------|
| ATRIAS: Design and Validation of a Tether-Free 3D-Capable Spring-Mass Bipedal Robot | C. Hubicki, J. Grimes, M. Jones, D. Renjewski, A. Sprowit, A. Abate, J. Hurst | 2016 | Designed a human-scale bipedal robot that mechanically embodies the spring-mass (SLIP) model, demonstrating efficient dynamic walking and hopping by exploiting natural passive dynamics. |
| Walking and Running with Passive Compliance: Lessons from Engineering a Live Demonstration of the ATRIAS Biped | C. Hubicki et al. | 2018 | Demonstrated robust walking and running on the ATRIAS robot using passive compliance, showing that spring-mass dynamics can produce energy-efficient and versatile bipedal gaits. |

### 3.4 Model Predictive Control for Bipedal Walking

| Title | Authors | Year | Key Contribution |
|-------|---------|------|-----------------|
| Model Predictive Control of Legged and Humanoid Robots: Models and Algorithms | P. B. Wieber | 2023 | Comprehensive review of MPC methods for legged and humanoid robots, covering simplified and full-body models, online trajectory generation, and real-time optimization algorithms. |
| Bipedal Locomotion with Nonlinear Model Predictive Control | V. Galliker et al. | 2022 | Demonstrated nonlinear MPC leveraging full-order dynamics for diverse dynamic walking behaviors on bipedal robots. |
| Force-and-Moment-Based Model Predictive Control for Achieving Highly Dynamic Locomotion on Bipedal Robots | Z. Li, C. Nguyen et al. | 2023 | Proposed a force-and-moment-based MPC framework achieving highly dynamic locomotion on Cassie-class bipedal robots. |

### 3.5 Reinforcement Learning for Locomotion

| Title | Authors | Year | Key Contribution |
|-------|---------|------|-----------------|
| DeepMimic: Example-Guided Deep Reinforcement Learning of Physics-Based Character Skills | X. B. Peng, P. Abbeel, S. Levine, M. van de Panne | 2018 | Demonstrated that RL agents can learn to imitate diverse motion clips including locomotion, acrobatics, and martial arts. Showed motion imitation as an effective approach for training physics-based character controllers. |
| Feedback Control for Cassie with Deep Reinforcement Learning | Z. Xie, G. Berseth, P. Clary, J. Hurst, M. van de Panne | 2018 | One of the first applications of deep RL to a real-world 3D bipedal robot (Cassie), demonstrating that RL policies can produce stable walking on hardware. |
| Learning Locomotion Skills for Cassie: Iterative Design and Sim-to-Real | Z. Xie, P. Clary, J. Dao, P. Morais, J. Hurst, M. van de Panne | 2020 | Achieved the first successful sim-to-real transfer of an end-to-end deep RL locomotion policy on the 3D torque-controlled bipedal robot Cassie. |

### 3.6 Domain Randomization and Sim-to-Real Transfer

| Title | Authors | Year | Key Contribution |
|-------|---------|------|-----------------|
| Domain Randomization for Transferring Deep Neural Networks from Simulation to the Real World | J. Tobin, R. Fong, A. Ray, J. Schneider, W. Zaremba, P. Abbeel | 2017 | Introduced domain randomization as a technique for sim-to-real transfer, randomizing simulation parameters during training to achieve robust zero-shot policy transfer to real robots. |
| Sim-to-Real: Learning Agile Locomotion for Quadruped Robots | J. Tan, T. Zhang, E. Coumans, A. Iscen, Y. Bai, D. Hafner, S. Bohez, V. Vanhoucke | 2018 | Demonstrated sim-to-real transfer for agile quadruped locomotion using domain randomization and learned actuator models. While focused on quadrupeds, the methodology became foundational for bipedal sim-to-real work. |

---

## 4. State-of-the-Art (2020s-)

### 4.1 Learning-Based Humanoid Locomotion

| Title | Authors | Year | Key Contribution |
|-------|---------|------|-----------------|
| Real-World Humanoid Locomotion with Reinforcement Learning | I. Radosavovic, T. Xiao, B. Zhang, T. Darrell, J. Malik, K. Sreenath | 2024 | Demonstrated a fully learning-based approach for real-world humanoid locomotion using a causal transformer controller, trained with large-scale model-free RL in simulation and deployed zero-shot on a real humanoid robot across diverse outdoor environments. Published in Science Robotics. |
| Learning Humanoid Locomotion with Transformers | I. Radosavovic, T. Xiao, B. Zhang, T. Darrell, J. Malik, K. Sreenath | 2023 | Proposed using causal transformers for humanoid locomotion control, where the model uses observation-action history to adapt behavior in-context without weight updates. |
| Learning Humanoid Locomotion over Challenging Terrain | I. Radosavovic et al. | 2024 | Extended transformer-based humanoid locomotion to challenging natural and man-made terrain using pre-training on flat-ground trajectories followed by RL fine-tuning on uneven terrain. |

### 4.2 Agile Bipedal Skills

| Title | Authors | Year | Key Contribution |
|-------|---------|------|-----------------|
| Learning Agile Soccer Skills for a Bipedal Robot with Deep Reinforcement Learning | T. Haarnoja et al. (Google DeepMind) | 2024 | Trained a bipedal humanoid robot to play 1v1 soccer using deep RL with SAC, achieving agile multi-skill locomotion including rapid fall recovery, walking, turning, and kicking. Demonstrated zero-shot sim-to-real transfer. Published in Science Robotics. |
| Reinforcement Learning for Versatile, Dynamic, and Robust Bipedal Locomotion Control | Z. Li, X. B. Peng, P. Abbeel, S. Levine, G. Berseth, K. Sreenath | 2024 | Presented a comprehensive RL framework for versatile, dynamic, and robust bipedal locomotion on the Cassie robot, demonstrating diverse locomotion skills including walking, running, and jumping. Published in IJRR. |
| Robust and Versatile Bipedal Jumping Control through Multi-Task Reinforcement Learning | Z. Li et al. | 2023 | Achieved robust bipedal jumping through multi-task RL, demonstrating versatile dynamic behaviors beyond walking on bipedal robots. Presented at RSS 2023. |

### 4.3 Sim-to-Real for Bipedal Robots

| Title | Authors | Year | Key Contribution |
|-------|---------|------|-----------------|
| Sim-to-Real Learning of All Common Bipedal Gaits via Periodic Reward Composition | J. Siekmann, Y. Godse, A. Fern, J. Hurst | 2021 | Demonstrated sim-to-real learning of multiple bipedal gaits (walking, running, skipping, etc.) on the Cassie robot using periodic reward composition. |
| Blind Bipedal Stair Traversal via Sim-to-Real Reinforcement Learning | J. Siekmann, K. Green, J. Warber, A. Fern, J. Hurst | 2021 | Achieved blind stair climbing on a bipedal robot through sim-to-real RL, demonstrating that proprioceptive-only policies can handle challenging terrain without vision. |
| Sim-to-Real Transfer of Compliant Bipedal Locomotion on Torque Sensor-Less Gear-Driven Humanoid | R. Otao et al. | 2022 | Demonstrated sim-to-real transfer of compliant bipedal walking on a gear-driven humanoid robot without torque sensors, showing the approach generalizes beyond series-elastic platforms. |

### 4.4 Vision-Based Bipedal Locomotion

| Title | Authors | Year | Key Contribution |
|-------|---------|------|-----------------|
| Learning Vision-Based Bipedal Locomotion for Challenging Terrain | H. Duan et al. | 2024 | Integrated visual perception with bipedal locomotion control, enabling a bipedal robot to traverse challenging terrain using learned vision-based policies. Presented at ICRA 2024. |
| Advancing Humanoid Locomotion: Mastering Challenging Terrains with Denoising World Model Learning | X. Gu et al. | 2024 | Proposed a denoising world model for humanoid locomotion on challenging terrain, advancing the integration of world models with bipedal walking control. Presented at RSS 2024. |

### 4.5 Adapting and Robust Locomotion

| Title | Authors | Year | Key Contribution |
|-------|---------|------|-----------------|
| Adapting Rapid Motor Adaptation for Bipedal Robots | A. Kumar et al. | 2022 | Adapted the Rapid Motor Adaptation (RMA) framework for bipedal robots, enabling online adaptation to changing dynamics without explicit system identification. Presented at IROS 2022. |
| Torque-Based Deep Reinforcement Learning for Task-and-Robot Agnostic Learning on Bipedal Robots Using Sim-to-Real Transfer | D. Kim et al. | 2023 | Proposed a torque-based RL framework that generalizes across different bipedal robot platforms, demonstrating task-agnostic learning with sim-to-real transfer. Published in RA-L. |

---

## 5. Survey and Review Papers

| Title | Authors | Year | Key Contribution |
|-------|---------|------|-----------------|
| Biped Locomotion: Dynamics, Stability, Control and Application | M. Vukobratovic, B. Borovac, D. Surla, D. Stokic | 1990 | Foundational book on bipedal locomotion theory covering ZMP, stability analysis, and control methods. |
| Feedback Control of Dynamic Bipedal Robot Locomotion | E. R. Westervelt, J. W. Grizzle, C. Chevallereau, J. H. Choi, B. Morris | 2007 | Comprehensive book on HZD-based feedback control for bipedal locomotion with formal stability guarantees. |
| Deep Reinforcement Learning for Robotic Bipedal Locomotion: A Brief Survey | (Multiple authors) | 2024 | Survey covering end-to-end and hierarchical RL frameworks for bipedal locomotion, sim-to-real techniques, and open challenges. |
| Model Predictive Control of Legged and Humanoid Robots: Models and Algorithms | P. B. Wieber | 2023 | Review of MPC methods for legged robots covering linear/nonlinear formulations, simplified/full-body models, and computational approaches. |

---

## Summary by Topic

| Category | Key Concepts | Representative Researchers |
|----------|-------------|---------------------------|
| ZMP and Stability | Zero Moment Point, CoP, stability criteria | Vukobratovic, Kajita, Takanishi |
| Inverted Pendulum Models | LIPM, 3D-LIPM, SLIP | Kajita, Raibert, Hubicki |
| Passive Dynamics | Passive walking, limit cycles, energy efficiency | McGeer |
| Pattern Generation | Preview control, CPG, ZMP tracking | Kajita, Ijspeert |
| Capture Point / DCM | Capture Point, Divergent Component of Motion | Pratt, Englsberger |
| Hybrid Zero Dynamics | Virtual constraints, underactuated walking | Grizzle, Westervelt, Ames |
| Whole-Body Control | Operational space, task-priority control | Khatib, Sentis |
| Optimization-Based | QP, MPC, trajectory optimization | Kuindersma, Tedrake, Wieber |
| Reinforcement Learning | Deep RL, motion imitation, multi-task RL | Peng, Xie, Li, Radosavovic |
| Sim-to-Real Transfer | Domain randomization, zero-shot transfer | Tobin, Siekmann, Haarnoja |
| CLF / CBF | Safety-critical control, stability guarantees | Ames, Sreenath |
| Agile Locomotion | Running, jumping, soccer, parkour | Haarnoja (DeepMind), Li |

---

*Last updated: 2025-02*
