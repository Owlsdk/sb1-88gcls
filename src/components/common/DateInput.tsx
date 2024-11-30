import React from 'react';
import DatePicker from 'react-datepicker';
import { DATE_RANGE } from '../../utils/constants';

interface DateInputProps {
  selected: Date;
  onChange: (date: Date | null) => void;
  minDate?: Date;
  maxDate?: Date;
  label: string;
}

export function DateInput({
  selected,
  onChange,
  minDate = DATE_RANGE.MIN,
  maxDate = DATE_RANGE.MAX,
  label
}: DateInputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-white mb-2">
        {label}
      </label>
      <DatePicker
        selected={selected}
        onChange={onChange}
        minDate={minDate}
        maxDate={maxDate}
        className="block w-full rounded-lg bg-gray-900 border-gray-700 text-white pl-4 pr-8 py-2 focus:border-orange-500 focus:ring-orange-500"
      />
    </div>
  );
}