import React from 'react';
import { BarChart3, MessageSquare, Star, Users } from 'lucide-react';
import { Sidebar } from './components/Sidebar';
import { DepartmentCard } from './components/DepartmentCard';
import { TrendChart } from './components/TrendChart';
import { FraudStats } from './components/FraudStats';
import { ReviewsList } from './components/ReviewsList';
import { Recommendations } from './components/Recommendations';

// Mock data remains the same as before
const departments = [
  { name: 'Cleanliness', score: 4.5, reviews: 128, change: 5.2 },
  { name: 'Food Quality', score: 4.2, reviews: 256, change: -2.1 },
  { name: 'Service', score: 4.8, reviews: 192, change: 8.3 },
  { name: 'Ambiance', score: 4.6, reviews: 164, change: 3.7 }
];

const monthlyTrends = [
  { month: 'Jan', sentiment: 4.2, reviewCount: 150 },
  { month: 'Feb', sentiment: 4.3, reviewCount: 180 },
  { month: 'Mar', sentiment: 4.1, reviewCount: 160 },
  { month: 'Apr', sentiment: 4.5, reviewCount: 200 },
  { month: 'May', sentiment: 4.6, reviewCount: 220 },
  { month: 'Jun', sentiment: 4.4, reviewCount: 190 }
];

const fraudStats = {
  total: 1000,
  aiGenerated: 50,
  genuine: 950
};

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="ml-64">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <h1 className="text-2xl font-bold text-gray-900">Sentiment Analysis Dashboard</h1>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 py-8">
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <MessageSquare className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-600">Total Reviews</p>
                  <p className="text-xl font-semibold">1,234</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Star className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-600">Avg. Rating</p>
                  <p className="text-xl font-semibold">4.5</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-600">Active Users</p>
                  <p className="text-xl font-semibold">856</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center">
                <div className="p-2 bg-amber-100 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-amber-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-600">Growth</p>
                  <p className="text-xl font-semibold">+12.5%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Split Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Reviews Section */}
            <div className="space-y-8">
              <ReviewsList />
              <Recommendations />
            </div>

            {/* Analytics Section */}
            <div className="space-y-8">
              {/* Department Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {departments.map((dept, index) => (
                  <DepartmentCard key={index} {...dept} />
                ))}
              </div>

              {/* Charts */}
              <TrendChart data={monthlyTrends} />
              <FraudStats {...fraudStats} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;