import { useState } from 'react';

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
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Number of Chargepoints (CP)
        </label>
        <input
          type="range"
          min="1"
          max="20"
          value={numChargePoints}
          onChange={(e) => setNumChargePoints(Number(e.target.value))}
          className="mt-1 block w-full"
        />
        <div className="text-center">{numChargePoints}</div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Arrival Probability Multiplier (%)
        </label>
        <input
          type="range"
          min="20"
          max="200"
          value={multiplier}
          onChange={(e) => setMultiplier(Number(e.target.value))}
          className="mt-1 block w-full"
        />
        <div className="text-center">{multiplier}%</div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Car Consumption (kWh)
        </label>
        <input
          type="range"
          min="10"
          max="100"
          value={carConsumption}
          onChange={(e) => setCarConsumption(Number(e.target.value))}
          className="mt-1 block w-full"
        />
        <div className="text-center">{carConsumption} kWh</div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Charging Power per Chargepoint (kW)
        </label>
        <input
          type="range"
          min="1"
          max="50"
          value={chargingPower}
          onChange={(e) => setChargingPower(Number(e.target.value))}
          className="mt-1 block w-full"
        />
        <div className="text-center">{chargingPower} kW</div>
      </div>
      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm"
      >
        Simulate
      </button>
    </form>
  );
}
