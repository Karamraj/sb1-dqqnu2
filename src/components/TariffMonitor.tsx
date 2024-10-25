import React from 'react';
import { Clock } from 'lucide-react';

interface TariffData {
  time: string;
  rate: number;
}

interface Props {
  currentRate: number;
  forecast: TariffData[];
}

const TariffMonitor = ({ currentRate, forecast }: Props) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Electricity Tariff Monitor</h2>
        <Clock className="h-5 w-5 text-gray-400" />
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Current Rate</span>
          <span className="text-2xl font-bold text-blue-600">${currentRate}/kWh</span>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-gray-600 font-medium">Upcoming Rates</h3>
        <div className="grid grid-cols-4 gap-4">
          {forecast.map((item, index) => (
            <div key={index} className="text-center p-3 rounded-lg bg-gray-50">
              <p className="text-sm text-gray-500">{item.time}</p>
              <p className="text-lg font-semibold mt-1">${item.rate}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TariffMonitor;