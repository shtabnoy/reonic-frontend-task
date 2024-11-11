import { SimulationData, TimeAggregation, ViewMode } from '../types';

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

const aggregateWeeklyData = (data: number[][], isMax: boolean = false) => {
  const weeks = Math.ceil(data.length / 7);
  return Array.from({ length: weeks }, (_, weekIdx) =>
    data.slice(weekIdx * 7, (weekIdx + 1) * 7).reduce((acc, day) => {
      day.forEach((val, cpIdx) => {
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
  timeAggregation: TimeAggregation;
  selectedDay: number;
  energyConsumedPerPointPerHour: SimulationData;
  chargingEventsPerPointPerHour: SimulationData;
  maxPowerDemandPerPointPerHour: SimulationData;
}

export function getHeatMapData({
  viewMode,
  timeAggregation,
  selectedDay,
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

  switch (timeAggregation) {
    case TimeAggregation.Daily:
      return data ? data[selectedDay] : [];
    case TimeAggregation.Weekly: {
      const dailyData = aggregateDailyData(
        data,
        viewMode === ViewMode.MaxPower
      );
      return dailyData
        ? aggregateWeeklyData(dailyData, viewMode === ViewMode.MaxPower)
        : [];
    }
    default:
      return aggregateDailyData(data, viewMode === ViewMode.MaxPower);
  }
}
