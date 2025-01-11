import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import type { DepartmentMetrics } from '../types';

export function DepartmentCard({ name, score, reviews, change }: DepartmentMetrics) {
  const isPositive = change >= 0;
  
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <span className={`flex items-center ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {isPositive ? <TrendingUp size={20} /> : <TrendingDown size={20} />}
          <span className="ml-1">{Math.abs(change)}%</span>
        </span>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Sentiment Score</span>
          <span className="font-semibold">{score.toFixed(1)}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Reviews</span>
          <span className="font-semibold">{reviews}</span>
        </div>
      </div>
    </div>
  );
}