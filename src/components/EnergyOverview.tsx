import React from 'react';
import { Battery, Sun, Zap, DollarSign } from 'lucide-react';

interface OverviewData {
  currentUsage: number;
  solarProduction: number;
  batteryLevel: number;
  savings: number;
}

interface Props {
  data: OverviewData;
}

const EnergyOverview = ({ data }: Props) => {
  const cards = [
    {
      title: 'Current Usage',
      value: `${data.currentUsage} kWh`,
      icon: Zap,
      color: 'text-purple-600',
      bg: 'bg-purple-100',
    },
    {
      title: 'Solar Production',
      value: `${data.solarProduction} kWh`,
      icon: Sun,
      color: 'text-yellow-600',
      bg: 'bg-yellow-100',
    },
    {
      title: 'Battery Level',
      value: `${data.batteryLevel}%`,
      icon: Battery,
      color: 'text-green-600',
      bg: 'bg-green-100',
    },
    {
      title: 'Monthly Savings',
      value: `$${data.savings}`,
      icon: DollarSign,
      color: 'text-blue-600',
      bg: 'bg-blue-100',
    },
  ];

  return (
    <>
      {cards.map((card, index) => (
        <div key={index} className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className={`${card.bg} p-3 rounded-lg`}>
              <card.icon className={`h-6 w-6 ${card.color}`} />
            </div>
          </div>
          <h3 className="text-gray-500 text-sm">{card.title}</h3>
          <p className="text-2xl font-semibold mt-1">{card.value}</p>
        </div>
      ))}
    </>
  );
};

export default EnergyOverview;