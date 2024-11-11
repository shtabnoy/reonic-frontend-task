interface SummaryProps {
  totalEnergyCharged: number;
  totalChargingEvents: number;
}

export default function Summary({
  totalEnergyCharged,
  totalChargingEvents,
}: SummaryProps) {
  return (
    <>
      <h3 className="text-xl font-bold my-4">Summary</h3>
      <dl>
        <div className="flex flex-wrap">
          <dt className="text-gray-700 underline mr-1">
            Total energy consumption (per month):
          </dt>
          <dd className="text-gray-900">{totalEnergyCharged} kWh</dd>
        </div>
        <div className="flex flex-wrap">
          <dt className="text-gray-700 underline mr-1">
            Total charging events (per month):
          </dt>
          <dd className="text-gray-900">{totalChargingEvents}</dd>
        </div>
      </dl>
    </>
  );
}
