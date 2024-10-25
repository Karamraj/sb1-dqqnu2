import React from 'react';
import { BarChart3 } from 'lucide-react';

interface ConsumptionData {
  time: string;
  usage: number;
}

interface Props {
  data: ConsumptionData[];
}

const ConsumptionChart = ({ data }: Props) => {
  const maxUsage = Math.max(...data.map(d => d.usage));

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Energy Consumption</h2>
        <BarChart3 className="h-5 w-5 text-gray-400" />
      </div>

      <div className="relative h-64">
        <div className="absolute inset-0 flex items-end space-x-2">
          {data.map((item, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div 
                className="w-full bg-blue-500 rounded-t"
                style={{ 
                  height: `${(item.usage / maxUsage) * 100}%`,
                  opacity: 0.7 + (index / data.length) * 0.3
                }}
              ></div>
              <span className="text-xs text-gray-500 mt-2">{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConsumptionChart;