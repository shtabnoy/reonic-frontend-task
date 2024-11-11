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

const aggregateDailyData = (data: number[][][] = []) => {
  return data.map((day) =>
    day.reduce((acc, hour) => {
      hour.forEach((val, cpIdx) => {
        acc[cpIdx] = (acc[cpIdx] || 0) + val;
      });
      return acc;
    }, [])
  );
};

interface HeatmapDataProps {
  energyConsumedPerPointPerHour: number[][][];
}

export function getHeatMapData({
  energyConsumedPerPointPerHour = [],
}: HeatmapDataProps): number[][] {
  return aggregateDailyData(energyConsumedPerPointPerHour);
}
