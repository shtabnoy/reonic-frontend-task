import { SimulationForm, SimulationResult } from './components';

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">
        Electric Car Charging Simulation
      </h1>
      <SimulationForm />
      <SimulationResult />
    </div>
  );
}

export default App;
