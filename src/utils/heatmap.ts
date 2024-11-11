import { SimulationData, ViewMode } from '../types';

// heat map with gradient color from white to red-500
export const START_COLOR_RGB = [255, 255, 255];
export const END_COLOR_RGB = [239, 68, 68];

export function getHeatMapColor(value: number, max: number): string {
  const ratio = value / max;
  const r = Math.round(
    START_COLOR_RGB[0] - (START_COLOR_RGB[0] - END_COLOR_RGB[0]) * ratio
  );
  const g = Math.round(
    START_COLOR_RGB[1] - (START_COLOR_RGB[1] - END_COLOR_RGB[1]) * ratio
  );
  const b = Math.round(
    START_COLOR_RGB[2] - (START_COLOR_RGB[2] - END_COLOR_RGB[2]) * ratio
  );

  return `rgb(${r}, ${g}, ${b})`;
}

const aggregateDailyData = (
  data: SimulationData = [],
  isMax: boolean = false
) => {
  return data.map((day) =>
    day.reduce((acc, hour) => {
      hour.forEach((val, cpIdx) => {
        if (isMax) {
          acc[cpIdx] = Math.max(acc[cpIdx] || 0, val);
        } else {
          acc[cpIdx] = (acc[cpIdx] || 0) + val;
        }
      });
      return acc;
    }, [])
  );
};

interface HeatmapDataProps {
  viewMode: ViewMode;
  energyConsumedPerPointPerHour: SimulationData;
  chargingEventsPerPointPerHour: SimulationData;
  maxPowerDemandPerPointPerHour: SimulationData;
}

export function getHeatMapData({
  viewMode,
  energyConsumedPerPointPerHour = [],
  chargingEventsPerPointPerHour = [],
  maxPowerDemandPerPointPerHour = [],
}: HeatmapDataProps): number[][] {
  let data;

  switch (viewMode) {
    case ViewMode.Events:
      data = chargingEventsPerPointPerHour;
      break;
    case ViewMode.MaxPower:
      data = maxPowerDemandPerPointPerHour;
      break;
    default:
      data = energyConsumedPerPointPerHour;
  }

  return aggregateDailyData(data, viewMode === ViewMode.MaxPower);
}
