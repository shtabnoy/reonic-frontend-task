import { generate3DArray, generateArray, HOURS_PER_DAY } from './common';
import generateChargingEvents from './generateChargingEvents';

interface SimulateChargingProps {
  numChargePoints: number;
  multiplier: number;
  carConsumption: number;
  chargingPower: number;
  simulationDays: number;
}

/**
 *
 * This function simulates the charging process for each charge point for each hour of each day.
 *
 * It produces several values, such as:
 * - completedChargingEvents:
 * an array that contains the number of completed charging events for each day.
 * An event is considered completed when a car stayed on a charge point until it is fully charged.
 * - energyConsumedPerPointPerHour:
 * a 3D array that contains the amount of energy consumed by each charge point for each hour of each day.
 *
 *
 * For simplicity, we assume that a car needs ONE HOUR OF ITS CHARGING POWER to be fully charged, e.g.
 * if a car consumes 18 kWh and the charging power is 11 kW, the car will be fully charged in 2 hours.
 */
export default function simulateCharging({
  numChargePoints,
  multiplier,
  carConsumption,
  chargingPower,
  simulationDays,
}: SimulateChargingProps) {
  const chargingEvents = generateChargingEvents(
    numChargePoints,
    multiplier,
    simulationDays
  );

  const completedChargingEvents = generateArray(simulationDays);
  const remainingCharge = generateArray(numChargePoints);

  const energyConsumedPerPointPerHour = generate3DArray(
    simulationDays,
    HOURS_PER_DAY,
    numChargePoints
  );

  energyConsumedPerPointPerHour.forEach((day, dayIdx) => {
    day.forEach((hour, hourIdx) => {
      hour.forEach((_, cpIdx) => {
        if (remainingCharge[cpIdx] > 0) {
          // The car is already charging. We need to continue charging it.
          const charge = Math.min(chargingPower, remainingCharge[cpIdx]);
          energyConsumedPerPointPerHour[dayIdx][hourIdx][cpIdx] = charge;
          remainingCharge[cpIdx] -= charge;
        } else if (chargingEvents[dayIdx][hourIdx][cpIdx]) {
          // The car has arrived. We need to charge it from zero to full (carConsumption)
          remainingCharge[cpIdx] = carConsumption;
          const charge = Math.min(chargingPower, remainingCharge[cpIdx]);
          energyConsumedPerPointPerHour[dayIdx][hourIdx][cpIdx] = charge;
          remainingCharge[cpIdx] -= charge;
        }

        if (remainingCharge[cpIdx] === 0) {
          completedChargingEvents[dayIdx]++;
        }
      });
    });
  });

  return {
    completedChargingEvents,
    energyConsumedPerPointPerHour,
  };
}
