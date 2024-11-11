import { useState } from 'react';
import Summary from './Summary';

export default function SimulationResult() {
  const [totalEnergyCharged] = useState(100);
  const [totalChargingEvents] = useState(100);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Simulation Result</h2>
      <Summary
        totalEnergyCharged={totalEnergyCharged}
        totalChargingEvents={totalChargingEvents}
      />
    </div>
  );
}
