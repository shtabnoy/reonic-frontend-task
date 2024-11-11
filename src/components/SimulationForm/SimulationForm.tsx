import { useState } from 'react';
import RangeInput from './RangeInput';
import { simulateCharging } from '../../utils';
import { DAYS_PER_MONTH } from '../../utils/common';
import { SimulationData } from '../../types';

interface SimulationFormProps {
  setTotalEnergyCharged: (value: number) => void;
  setTotalChargingEvents: (value: number) => void;
  setEnergyConsumedPerPointPerHour: (value: SimulationData) => void;
  setChargingEventsPerPointPerHour: (value: SimulationData) => void;
  setMaxPowerDemandPerPointPerHour: (value: SimulationData) => void;
}

export default function SimulationForm({
  setTotalEnergyCharged,
  setTotalChargingEvents,
  setEnergyConsumedPerPointPerHour,
  setChargingEventsPerPointPerHour,
  setMaxPowerDemandPerPointPerHour,
}: SimulationFormProps) {
  const [numChargePoints, setNumChargePoints] = useState(4);
  const [multiplier, setMultiplier] = useState(100);
  const [carConsumption, setCarConsumption] = useState(18);
  const [chargingPower, setChargingPower] = useState(11);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Simulate
    const {
      completedChargingEvents,
      energyConsumedPerPointPerHour,
      chargingEventsPerPointPerHour,
      maxPowerDemandPerPointPerHour,
    } = simulateCharging({
      numChargePoints,
      multiplier,
      carConsumption,
      chargingPower,
      simulationDays: DAYS_PER_MONTH,
    });

    // Process simulation data
    const totalEnergy = energyConsumedPerPointPerHour
      .flat(2)
      .reduce((acc, val) => acc + val, 0);
    const eventsPerDay = completedChargingEvents;
    const eventsPerMonth = eventsPerDay.reduce((acc, val) => acc + val, 0);

    // Update state
    setTotalEnergyCharged(totalEnergy);
    setTotalChargingEvents(eventsPerMonth);

    setEnergyConsumedPerPointPerHour(energyConsumedPerPointPerHour);
    setChargingEventsPerPointPerHour(chargingEventsPerPointPerHour);
    setMaxPowerDemandPerPointPerHour(maxPowerDemandPerPointPerHour);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <RangeInput
        label="Number of Chargepoints (CP)"
        min={1}
        max={20}
        value={numChargePoints}
        onChange={setNumChargePoints}
      />
      <RangeInput
        label="Arrival Probability Multiplier (%)"
        min={20}
        max={200}
        value={multiplier}
        onChange={setMultiplier}
      />
      <RangeInput
        label="Car Consumption (kWh)"
        min={10}
        max={100}
        value={carConsumption}
        onChange={setCarConsumption}
      />
      <RangeInput
        label="Charging Power per Chargepoint (kW)"
        min={1}
        max={50}
        value={chargingPower}
        onChange={setChargingPower}
      />
      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm"
      >
        Simulate
      </button>
    </form>
  );
}
