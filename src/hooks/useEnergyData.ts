import { useState, useEffect } from 'react';

// Simulated data for demonstration
const mockData = {
  overview: {
    currentUsage: 3.2,
    solarProduction: 2.8,
    batteryLevel: 75,
    savings: 127.50
  },
  currentRate: 0.22,
  forecast: [
    { time: '2PM', rate: 0.25 },
    { time: '4PM', rate: 0.32 },
    { time: '6PM', rate: 0.45 },
    { time: '8PM', rate: 0.28 }
  ],
  consumption: [
    { time: '8AM', usage: 2.1 },
    { time: '10AM', usage: 1.8 },
    { time: '12PM', usage: 2.4 },
    { time: '2PM', usage: 3.2 }
  ],
  devices: [
    {
      id: '1',
      name: 'EV Charger',
      status: 'scheduled',
      nextRun: '1:00 AM',
      consumption: 7.2
    },
    {
      id: '2',
      name: 'Dishwasher',
      status: 'off',
      nextRun: '10:30 PM',
      consumption: 1.2
    },
    {
      id: '3',
      name: 'Pool Pump',
      status: 'on',
      nextRun: '4:00 PM',
      consumption: 0.8
    }
  ],
  solar: {
    current: 2.8,
    total: 18.5,
    peak: 4.2,
    forecast: 20.1
  },
  communitySharing: {
    availableToShare: 1.8,
    activeSharings: 3,
    communityMembers: 42,
    earningsToday: 12.50
  },
  recommendations: [
    {
      id: '1',
      title: 'Shift EV Charging',
      description: 'Schedule EV charging between 1 AM - 5 AM to take advantage of lower rates',
      savings: 45.20,
      priority: 'high'
    },
    {
      id: '2',
      title: 'Optimize Pool Pump',
      description: 'Run pool pump during peak solar production hours',
      savings: 28.50,
      priority: 'medium'
    },
    {
      id: '3',
      title: 'Battery Usage',
      description: 'Your battery is fully charged. Consider using stored energy during upcoming peak rates',
      savings: 15.75,
      priority: 'low'
    },
    {
      id: '4',
      title: 'Share Excess Power',
      description: 'You have 1.8 kWh available to share with the community',
      savings: 12.50,
      priority: 'medium'
    }
  ]
};

export const useEnergyData = () => {
  const [loading, setLoading] = useState(true);
  const [energyData, setEnergyData] = useState(mockData);

  useEffect(() => {
    // Simulate API call
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setEnergyData(mockData);
      setLoading(false);
    };

    fetchData();
  }, []);

  return { loading, energyData };
};

export type { Device } from '../components/SmartScheduler';