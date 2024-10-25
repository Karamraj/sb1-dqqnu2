import React from 'react';
import { Battery, Sun, Zap, Clock, DollarSign, Calendar, BarChart3, Settings } from 'lucide-react';
import Navbar from './components/Navbar';
import EnergyOverview from './components/EnergyOverview';
import TariffMonitor from './components/TariffMonitor';
import ConsumptionChart from './components/ConsumptionChart';
import SmartScheduler from './components/SmartScheduler';
import SolarProduction from './components/SolarProduction';
import Recommendations from './components/Recommendations';
import CommunitySharing from './components/CommunitySharing';
import { useEnergyData } from './hooks/useEnergyData';

function App() {
  const { loading, energyData } = useEnergyData();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Energy Dashboard</h1>
          <p className="text-gray-600">Optimize your energy usage and maximize savings</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <EnergyOverview data={energyData.overview} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <TariffMonitor currentRate={energyData.currentRate} forecast={energyData.forecast} />
          </div>
          <div>
            <ConsumptionChart data={energyData.consumption} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <SmartScheduler devices={energyData.devices} />
          <SolarProduction data={energyData.solar} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <CommunitySharing data={energyData.communitySharing} />
          <Recommendations recommendations={energyData.recommendations} />
        </div>
      </main>
    </div>
  );
}

export default App;