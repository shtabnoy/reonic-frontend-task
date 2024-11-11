import { useState } from 'react';
import RangeInput from './RangeInput';

export default function SimulationForm() {
  const [numChargePoints, setNumChargePoints] = useState(4);
  const [multiplier, setMultiplier] = useState(100);
  const [carConsumption, setCarConsumption] = useState(18);
  const [chargingPower, setChargingPower] = useState(11);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log('Submit');
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
