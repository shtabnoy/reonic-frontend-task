import { HOURS_PER_DAY } from './common';

/**
 * Generate charging events for each charge point for each hour of each day
 * and presents them in the form of a 3D array, such as:
 * chargingEvents[day][hour][chargePoint] = true if a car arrives at the charge point, and
 * chargingEvents[day][hour][chargePoint] = false otherwise.
 *
 * Example of the array (with 4 charge points):
 * [
 *   [
 *     [true,  false, false, false],  // Day 1 Hour 1
 *     [false, false, true,  false],  // Day 1 Hour 2
 *     [false, false, true,  true],   // Day 1 Hour 3
 *     ...
 *   ],
 *   [
 *     ... // Day 2
 *   ],
 *   ...
 *  ]
 */
export default function generateChargingEvents(
  numChargePoints: number,
  multiplier: number,
  simulationDays: number
): boolean[][][] {
  const arrivalProbability = 0.2 * (multiplier / 100);

  const chargingEvents = Array.from({ length: simulationDays }, () =>
    Array.from({ length: HOURS_PER_DAY }, () =>
      Array.from(
        { length: numChargePoints },
        () => Math.random() < arrivalProbability
      )
    )
  );
  return chargingEvents;
}
