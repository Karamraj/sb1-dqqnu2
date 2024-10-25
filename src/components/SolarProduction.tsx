import React from 'react';
import { Sun } from 'lucide-react';

interface SolarData {
  current: number;
  total: number;
  peak: number;
  forecast: number;
}

interface Props {
  data: SolarData;
}

const SolarProduction = ({ data }: Props) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Solar Production</h2>
        <Sun className="h-5 w-5 text-gray-400" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-yellow-50 rounded-lg">
          <p className="text-sm text-gray-600">Current Output</p>
          <p className="text-2xl font-semibold text-yellow-600">{data.current} kW</p>
        </div>
        <div className="p-4 bg-green-50 rounded-lg">
          <p className="text-sm text-gray-600">Today's Total</p>
          <p className="text-2xl font-semibold text-green-600">{data.total} kWh</p>
        </div>
        <div className="p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-gray-600">Peak Production</p>
          <p className="text-2xl font-semibold text-blue-600">{data.peak} kW</p>
        </div>
        <div className="p-4 bg-purple-50 rounded-lg">
          <p className="text-sm text-gray-600">Tomorrow's Forecast</p>
          <p className="text-2xl font-semibold text-purple-600">{data.forecast} kWh</p>
        </div>
      </div>
    </div>
  );
};

export default SolarProduction;