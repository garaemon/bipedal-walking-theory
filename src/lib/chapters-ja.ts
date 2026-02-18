import { Chapter } from "./chapters";

export const chaptersJa: Chapter[] = [
  {
    slug: "01-rigid-body-dynamics",
    title: "Rigid Body Dynamics (剛体力学)",
    description:
      "二足歩行のための剛体力学の基礎",
  },
  {
    slug: "02-inverted-pendulum",
    title: "Inverted Pendulum Model (倒立振子モデル)",
    description:
      "線形倒立振子モデル(LIPM)と歩行への応用",
  },
  {
    slug: "03-zero-moment-point",
    title: "Zero Moment Point (ZMP)",
    description: "ZMP安定性基準と支持多角形の概念",
  },
  {
    slug: "04-passive-dynamic-walking",
    title: "Passive Dynamic Walking (受動歩行)",
    description:
      "McGeerの受動歩行、リミットサイクル、エネルギー効率の良い歩容",
  },
  {
    slug: "05-preview-control",
    title: "Preview Control for Walking (プレビュー制御)",
    description:
      "プレビュー制御理論と歩行パターン生成パイプライン",
  },
  {
    slug: "06-capture-point-dcm",
    title: "Capture Point and DCM (キャプチャポイントとDCM)",
    description:
      "発散成分運動と押し回復戦略",
  },
  {
    slug: "07-cpg",
    title: "Central Pattern Generators (CPG)",
    description:
      "結合振動子モデルと運動のための位相協調",
  },
  {
    slug: "08-whole-body-control",
    title: "Whole-Body Motion Control (全身運動制御)",
    description:
      "逆運動学、ヤコビアン、タスク優先度フレームワーク",
  },
  {
    slug: "09-hybrid-zero-dynamics",
    title: "Hybrid Zero Dynamics (ハイブリッドゼロダイナミクス)",
    description:
      "仮想制約とゼロダイナミクス安定性",
  },
  {
    slug: "10-mpc",
    title: "Model Predictive Control (MPC)",
    description: "歩行のための線形・非線形MPC定式化",
  },
  {
    slug: "11-reinforcement-learning",
    title: "Reinforcement Learning for Walking (強化学習)",
    description:
      "方策勾配法と歩行のための報酬関数設計",
  },
  {
    slug: "12-sim-to-real",
    title: "Sim-to-Real Transfer (シミュレーションから実機へ)",
    description:
      "ドメインランダム化、システム同定、シミュレーションと実機のギャップ",
  },
  {
    slug: "13-frontiers",
    title: "Frontiers of Bipedal Locomotion (最前線)",
    description:
      "Transformerベースのコントローラ、アジャイルスキル、未解決問題",
  },
];
