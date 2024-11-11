import { useState } from 'react';
import { SimulationForm, SimulationResult } from './components';
import { SimulationData } from './types';

function App() {
  const [totalEnergyCharged, setTotalEnergyCharged] = useState<number>(0);
  const [totalChargingEvents, setTotalChargingEvents] = useState<number>(0);
  const [energyConsumedPerPointPerHour, setEnergyConsumedPerPointPerHour] =
    useState<SimulationData>([[[]]]);
  const [chargingEventsPerPointPerHour, setChargingEventsPerPointPerHour] =
    useState<SimulationData>([[[]]]);
  const [maxPowerDemandPerPointPerHour, setMaxPowerDemandPerPointPerHour] =
    useState<SimulationData>([[[]]]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">
        Electric Car Charging Simulation
      </h1>
      <SimulationForm
        setTotalEnergyCharged={setTotalEnergyCharged}
        setTotalChargingEvents={setTotalChargingEvents}
        setEnergyConsumedPerPointPerHour={setEnergyConsumedPerPointPerHour}
        setChargingEventsPerPointPerHour={setChargingEventsPerPointPerHour}
        setMaxPowerDemandPerPointPerHour={setMaxPowerDemandPerPointPerHour}
      />
      <SimulationResult
        totalEnergyCharged={totalEnergyCharged}
        totalChargingEvents={totalChargingEvents}
        energyConsumedPerPointPerHour={energyConsumedPerPointPerHour}
        chargingEventsPerPointPerHour={chargingEventsPerPointPerHour}
        maxPowerDemandPerPointPerHour={maxPowerDemandPerPointPerHour}
      />
    </div>
  );
}

export default App;
