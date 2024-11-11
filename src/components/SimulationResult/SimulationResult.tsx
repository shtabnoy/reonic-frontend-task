import Summary from './Summary';

interface SimulationResultProps {
  totalEnergyCharged: number;
  totalChargingEvents: number;
}

export default function SimulationResult({
  totalEnergyCharged,
  totalChargingEvents,
}: SimulationResultProps) {
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
