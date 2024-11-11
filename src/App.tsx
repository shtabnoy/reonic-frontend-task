import { useState } from 'react';
import { SimulationForm, SimulationResult } from './components';

function App() {
  const [totalEnergyCharged, setTotalEnergyCharged] = useState<number>(0);
  const [totalChargingEvents, setTotalChargingEvents] = useState<number>(0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">
        Electric Car Charging Simulation
      </h1>
      <SimulationForm
        setTotalEnergyCharged={setTotalEnergyCharged}
        setTotalChargingEvents={setTotalChargingEvents}
      />
      <SimulationResult
        totalEnergyCharged={totalEnergyCharged}
        totalChargingEvents={totalChargingEvents}
      />
    </div>
  );
}

export default App;
