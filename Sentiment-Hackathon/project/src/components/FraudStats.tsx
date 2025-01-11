import React from 'react';
import { ShieldAlert, ShieldCheck } from 'lucide-react';
import type { FraudDetection } from '../types';

export function FraudStats({ total, aiGenerated, genuine }: FraudDetection) {
  const aiPercentage = (aiGenerated / total) * 100;
  const genuinePercentage = (genuine / total) * 100;

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Review Authenticity</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center text-green-500">
            <ShieldCheck size={24} />
            <span className="ml-2">Genuine Reviews</span>
          </div>
          <span className="font-semibold">{genuinePercentage.toFixed(1)}%</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-amber-500">
            <ShieldAlert size={24} />
            <span className="ml-2">AI Generated</span>
          </div>
          <span className="font-semibold">{aiPercentage.toFixed(1)}%</span>
        </div>
      </div>
    </div>
  );
}