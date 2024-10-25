import React from 'react';
import { Calendar, Power } from 'lucide-react';

interface Device {
  id: string;
  name: string;
  status: 'on' | 'off' | 'scheduled';
  nextRun: string;
  consumption: number;
}

interface Props {
  devices: Device[];
}

const SmartScheduler = ({ devices }: Props) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Smart Device Scheduler</h2>
        <Calendar className="h-5 w-5 text-gray-400" />
      </div>

      <div className="space-y-4">
        {devices.map((device) => (
          <div key={device.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h3 className="font-medium">{device.name}</h3>
              <p className="text-sm text-gray-500">Next run: {device.nextRun}</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className={`px-3 py-1 rounded-full text-sm ${
                device.status === 'on' ? 'bg-green-100 text-green-800' :
                device.status === 'scheduled' ? 'bg-blue-100 text-blue-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {device.status.charAt(0).toUpperCase() + device.status.slice(1)}
              </span>
              <button className="p-2 text-gray-400 hover:text-blue-600">
                <Power className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartScheduler;