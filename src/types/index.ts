export enum ViewMode {
  Energy,
  Events,
  MaxPower,
}

export enum TimeAggregation {
  Monthly,
  Weekly,
  Daily,
}

export type HeatmapData = number[][];
export type SimulationData = number[][][];
