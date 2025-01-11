import React from 'react';
import type { MonthlyTrend } from '../types';

export function TrendChart({ data }: { data: MonthlyTrend[] }) {
  const maxSentiment = Math.max(...data.map(d => d.sentiment));
  
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Monthly Trends</h3>
      <div className="h-64 flex items-end space-x-2">
        {data.map((item, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div 
              className="w-full bg-blue-500 rounded-t"
              style={{ 
                height: `${(item.sentiment / maxSentiment) * 100}%`,
                minHeight: '20px'
              }}
            />
            <span className="text-xs text-gray-600 mt-2">{item.month}</span>
          </div>
        ))}
      </div>
    </div>
  );
}