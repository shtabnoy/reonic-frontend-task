import { getHeatMapData } from '../../utils/heatmap';
import HeatMapGrid from './HeatMapGrid';
import Summary from './Summary';

interface SimulationResultProps {
  totalEnergyCharged: number;
  totalChargingEvents: number;
  energyConsumedPerPointPerHour: number[][][];
}

export default function SimulationResult({
  totalEnergyCharged,
  totalChargingEvents,
  energyConsumedPerPointPerHour,
}: SimulationResultProps) {
  if (totalEnergyCharged === 0) {
    return null;
  }

  const heatMapData = getHeatMapData({ energyConsumedPerPointPerHour });

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Simulation Result</h2>
      <Summary
        totalEnergyCharged={totalEnergyCharged}
        totalChargingEvents={totalChargingEvents}
      />
      <HeatMapGrid
        heatMapData={heatMapData}
        numChargingPoints={energyConsumedPerPointPerHour[0]?.[0].length}
      />
    </div>
  );
}
