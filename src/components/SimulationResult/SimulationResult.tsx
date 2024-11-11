import { useState } from 'react';
import { getHeatMapData } from '../../utils/heatmap';
import HeatMapGrid from './HeatMapGrid';
import SummaryComponent from './Summary';
import ViewModeComponent from './ViewMode';
import { SimulationData, TimeAggregation, ViewMode } from '../../types';
import TimeAggregationComponent from './TimeAggregation';
import DaySelectorComponent from './DaySelector';

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
  const [timeAggregation, setTimeAggregation] = useState<TimeAggregation>(
    TimeAggregation.Monthly
  );
  const [selectedDay, setSelectedDay] = useState<number>(0);

  if (totalEnergyCharged === 0) {
    return null;
  }

  const heatMapData = getHeatMapData({
    viewMode,
    timeAggregation,
    selectedDay,
    energyConsumedPerPointPerHour,
    chargingEventsPerPointPerHour,
    maxPowerDemandPerPointPerHour,
  });

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Simulation Result</h2>
      <SummaryComponent
        totalEnergyCharged={totalEnergyCharged}
        totalChargingEvents={totalChargingEvents}
      />
      <ViewModeComponent
        viewMode={viewMode}
        handleViewModeChange={setViewMode}
      />
      <TimeAggregationComponent
        timeAggregation={timeAggregation}
        handleTimeAggregationChange={setTimeAggregation}
      />
      {timeAggregation === TimeAggregation.Daily && (
        <DaySelectorComponent
          selectedDay={selectedDay}
          handleDayChange={setSelectedDay}
        />
      )}
      <HeatMapGrid
        viewMode={viewMode}
        timeAggregation={timeAggregation}
        heatMapData={heatMapData}
        numChargingPoints={energyConsumedPerPointPerHour[0][0].length}
      />
    </div>
  );
}
