import { HeatmapData, ViewMode } from '../../types';
import { getHeatMapColor } from '../../utils';
import { DAYS_PER_MONTH } from '../../utils/common';

function getTitle(viewMode: ViewMode) {
  switch (viewMode) {
    case ViewMode.Events:
      return 'Number of Charging Events per Charge Point';
    case ViewMode.MaxPower:
      return 'Max Power Demand per Charge Point';
    default:
      return 'Energy Consumed per Charge Point';
  }
}

interface HeatMapGridProps {
  heatMapData: HeatmapData;
  numChargingPoints: number;
  viewMode: ViewMode;
}

export default function HeatMapGrid({
  viewMode,
  numChargingPoints,
  heatMapData,
}: HeatMapGridProps) {
  const xLabels = Array.from(
    { length: numChargingPoints },
    (_, i) => `CP ${i + 1}`
  );
  const yLabels: string[] = Array.from(
    { length: DAYS_PER_MONTH },
    (_, i) => `Day ${i + 1}`
  );

  const maxValue = Math.max(...heatMapData.flat());

  return (
    <>
      <h3 className="text-xl font-bold mt-8 mb-2">{getTitle(viewMode)}</h3>
      <div className="text-xs sm:text-base overflow-auto">
        <table className="border-spacing-1 border-separate w-full">
          <thead>
            <tr>
              <th></th>
              {xLabels.map((label, x) => (
                <th key={x}>{label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {heatMapData.map((row, index) => (
              <tr key={index}>
                <td className="max-w-20 min-w-12 text-left">
                  {yLabels[index]}
                </td>
                {row.map((value, x) => (
                  <td
                    key={x}
                    className="border-red-100 border-2 p-2 min-w-16 rounded text-center"
                    style={{
                      backgroundColor: getHeatMapColor(value, maxValue),
                    }}
                  >
                    {`${value}${viewMode === ViewMode.Events ? '' : ' kW'}`}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
