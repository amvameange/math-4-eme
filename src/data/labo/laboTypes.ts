export interface ChapterExpMeta {
  shortTitles: string[];
  titles: string[];
}

export interface LaboSliderSpec {
  label: string;
  min: number;
  max: number;
  step: number;
  defaultValue: number;
  unit?: string;
}

export interface LaboPresetSpec {
  label: string;
  values: number[];
}

export interface LaboMetric {
  label: string;
  value: string;
  accent?: 'sky' | 'amber' | 'emerald' | 'rose' | 'purple';
}

export type PhysicsVisualKind =
  | 'frenet'
  | 'braking'
  | 'trajectory'
  | 'mru-mruv'
  | 'vel-area'
  | 'freefall'
  | 'circular'
  | 'incline'
  | 'lorentz'
  | 'orbit'
  | 'pendulum-wave'
  | 'energy-bars'
  | 'rc-curve'
  | 'rlc-fresnel'
  | 'resonance-bell'
  | 'wave-train'
  | 'young-fringes'
  | 'photoelectric'
  | 'decay-curve'
  | 'aston-bars'
  | 'kinetics-curve'
  | 'ph-titration'
  | 'organic-bars';

export type MathVisualKind =
  | 'euclid-clock'
  | 'bezout-line'
  | 'argand-plane'
  | 'roots-polygon'
  | 'barycenter-bar'
  | 'vector-area'
  | 'limit-curve'
  | 'tangent-secant'
  | 'osc-ode'
  | 'cobweb-suite'
  | 'riemann-sum'
  | 'binomial-bars'
  | 'regression-line'
  | 'sphere-section'
  | 'isometry-tri'
  | 'conic-curve';

export interface LaboEvalResult {
  headline: string;
  metrics: LaboMetric[];
  conclusion: string;
  /** Normalized numeric params consumed by SVG renderers */
  svg: Record<string, number | string>;
}

export interface PhysicsLaboExpSpec {
  id: string;
  shortTitle: string;
  title: string;
  goal: string;
  formula: string;
  visualKind: PhysicsVisualKind;
  sliders: LaboSliderSpec[];
  presets?: LaboPresetSpec[];
  evaluate: (v: number[]) => LaboEvalResult;
}

export interface MathLaboExpSpec {
  id: string;
  shortTitle: string;
  title: string;
  goal: string;
  formula: string;
  visualKind: MathVisualKind;
  sliders: LaboSliderSpec[];
  presets?: LaboPresetSpec[];
  evaluate: (v: number[]) => LaboEvalResult;
}
