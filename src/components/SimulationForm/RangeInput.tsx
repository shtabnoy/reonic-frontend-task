import React from 'react';

interface RangeInputProps {
  label: string;
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
}

export default function RangeInput({
  label,
  min,
  max,
  value,
  onChange,
}: RangeInputProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(event.target.value));
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
        className="mt-1 block w-full"
      />
      <div className="text-center">{value}</div>
    </div>
  );
}
