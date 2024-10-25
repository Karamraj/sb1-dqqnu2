import React from 'react';
import { Lightbulb } from 'lucide-react';

interface Recommendation {
  id: string;
  title: string;
  description: string;
  savings: number;
  priority: 'high' | 'medium' | 'low';
}

interface Props {
  recommendations: Recommendation[];
}

const Recommendations = ({ recommendations }: Props) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Smart Recommendations</h2>
        <Lightbulb className="h-5 w-5 text-gray-400" />
      </div>

      <div className="space-y-4">
        {recommendations.map((rec) => (
          <div key={rec.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
            <div className={`p-2 rounded-lg ${
              rec.priority === 'high' ? 'bg-red-100' :
              rec.priority === 'medium' ? 'bg-yellow-100' :
              'bg-green-100'
            }`}>
              <Lightbulb className={`h-5 w-5 ${
                rec.priority === 'high' ? 'text-red-600' :
                rec.priority === 'medium' ? 'text-yellow-600' :
                'text-green-600'
              }`} />
            </div>
            <div className="flex-1">
              <h3 className="font-medium">{rec.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{rec.description}</p>
            </div>
            <div className="text-right">
              <span className="text-green-600 font-semibold">${rec.savings}</span>
              <p className="text-xs text-gray-500">potential savings</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;