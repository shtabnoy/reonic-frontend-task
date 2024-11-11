import { DAYS_PER_MONTH } from '../../utils/common';

interface DaySelectorProps {
  selectedDay: number;
  handleDayChange: (value: number) => void;
}

export default function DaySelector({
  selectedDay,
  handleDayChange,
}: DaySelectorProps) {
  return (
    <div className="mt-4">
      <label className="block text-sm font-medium text-gray-700">
        Select Day
      </label>
      <select
        value={selectedDay}
        onChange={(event) => handleDayChange(Number(event.target.value))}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
      >
        {Array.from({ length: DAYS_PER_MONTH }, (_, i) => (
          <option key={i} value={i}>
            Day {i + 1}
          </option>
        ))}
      </select>
    </div>
  );
}
