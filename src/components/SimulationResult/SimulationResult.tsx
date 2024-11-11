import { useState } from 'react';
import { getHeatMapData } from '../../utils/heatmap';
import HeatMapGrid from './HeatMapGrid';
import Summary from './Summary';
import ViewModeComponent from './ViewMode';
import { SimulationData, ViewMode } from '../../types';

interface SimulationResultProps {
  totalEnergyCharged: number;
  totalChargingEvents: number;
  energyConsumedPerPointPerHour: SimulationData;
  chargingEventsPerPointPerHour: SimulationData;
  maxPowerDemandPerPointPerHour: SimulationData;
}

export default function SimulationResult({
  totalEnergyCharged,
  totalChargingEvents,
  energyConsumedPerPointPerHour,
  chargingEventsPerPointPerHour,
  maxPowerDemandPerPointPerHour,
}: SimulationResultProps) {
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.Energy);

  if (totalEnergyCharged === 0) {
    return null;
  }

  const heatMapData = getHeatMapData({
    viewMode,
    energyConsumedPerPointPerHour,
    chargingEventsPerPointPerHour,
    maxPowerDemandPerPointPerHour,
  });

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Simulation Result</h2>
      <Summary
        totalEnergyCharged={totalEnergyCharged}
        totalChargingEvents={totalChargingEvents}
      />
      <ViewModeComponent
        viewMode={viewMode}
        handleViewModeChange={setViewMode}
      />
      <HeatMapGrid
        viewMode={viewMode}
        heatMapData={heatMapData}
        numChargingPoints={energyConsumedPerPointPerHour[0][0].length}
      />
    </div>
  );
}
