import React from 'react';
import { Share2, Users, Battery, TrendingUp } from 'lucide-react';

interface SharingData {
  availableToShare: number;
  activeSharings: number;
  communityMembers: number;
  earningsToday: number;
}

interface Props {
  data: SharingData;
}

const CommunitySharing = ({ data }: Props) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold">Community Power Sharing</h2>
          <p className="text-sm text-gray-500">Share excess power with your community</p>
        </div>
        <Share2 className="h-5 w-5 text-gray-400" />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
          <div className="flex items-center justify-between">
            <Battery className="h-5 w-5 text-emerald-600" />
            <span className="text-xs text-emerald-600 font-medium px-2 py-1 bg-emerald-100 rounded-full">Available</span>
          </div>
          <p className="mt-2 text-2xl font-bold text-emerald-600">{data.availableToShare} kWh</p>
          <p className="text-sm text-gray-600">Available to Share</p>
        </div>

        <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
          <div className="flex items-center justify-between">
            <TrendingUp className="h-5 w-5 text-blue-600" />
            <span className="text-xs text-blue-600 font-medium px-2 py-1 bg-blue-100 rounded-full">Earnings</span>
          </div>
          <p className="mt-2 text-2xl font-bold text-blue-600">${data.earningsToday}</p>
          <p className="text-sm text-gray-600">Today's Earnings</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Users className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <p className="text-sm font-medium">Community Members</p>
              <p className="text-2xl font-semibold text-purple-600">{data.communityMembers}</p>
            </div>
          </div>
          <button className="px-4 py-2 text-sm font-medium text-purple-600 bg-purple-100 rounded-lg hover:bg-purple-200 transition-colors">
            View Network
          </button>
        </div>

        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Share2 className="h-5 w-5 text-orange-600" />
            </div>
            <div>
              <p className="text-sm font-medium">Active Sharings</p>
              <p className="text-2xl font-semibold text-orange-600">{data.activeSharings}</p>
            </div>
          </div>
          <button className="px-4 py-2 text-sm font-medium text-orange-600 bg-orange-100 rounded-lg hover:bg-orange-200 transition-colors">
            Manage
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunitySharing;