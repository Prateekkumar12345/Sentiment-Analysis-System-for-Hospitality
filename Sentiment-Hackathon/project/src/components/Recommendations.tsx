import React from 'react';
import { Lightbulb } from 'lucide-react';

interface Recommendation {
  id: string;
  category: string;
  text: string;
  priority: 'high' | 'medium' | 'low';
}

const recommendations: Recommendation[] = [
  {
    id: '1',
    category: 'Food Quality',
    text: 'Consider reviewing breakfast service procedures and food temperature maintenance.',
    priority: 'high'
  },
  {
    id: '2',
    category: 'Cleanliness',
    text: 'Implement regular hallway cleaning schedule during off-peak hours.',
    priority: 'medium'
  },
  {
    id: '3',
    category: 'Service',
    text: 'Maintain current staff training program as positive feedback continues.',
    priority: 'low'
  }
];

export function Recommendations() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-6">AI Recommendations</h2>
      <div className="space-y-4">
        {recommendations.map((rec) => (
          <div key={rec.id} className="border-l-4 pl-4 py-2" 
            style={{ 
              borderColor: 
                rec.priority === 'high' ? '#ef4444' : 
                rec.priority === 'medium' ? '#f59e0b' : 
                '#10b981'
            }}>
            <div className="flex items-center mb-2">
              <Lightbulb className="h-5 w-5 mr-2 text-blue-500" />
              <span className="font-medium text-gray-700">{rec.category}</span>
            </div>
            <p className="text-gray-600">{rec.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}