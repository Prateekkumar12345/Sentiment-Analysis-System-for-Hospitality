import React from 'react';
import { 
  LayoutDashboard, 
  MessageSquare, 
  BarChart2, 
  Settings, 
  Building2,
  Store
} from 'lucide-react';

export function Sidebar() {
  return (
    <div className="w-64 bg-white h-screen fixed left-0 top-0 shadow-lg">
      <div className="p-6 border-b">
        <h2 className="text-xl font-bold text-gray-800">ISIS</h2>
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <a href="#" className="flex items-center p-3 text-blue-600 bg-blue-50 rounded-lg">
              <LayoutDashboard className="h-5 w-5 mr-3" />
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-3 text-gray-700 hover:bg-gray-50 rounded-lg">
              <MessageSquare className="h-5 w-5 mr-3" />
              Reviews
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-3 text-gray-700 hover:bg-gray-50 rounded-lg">
              <BarChart2 className="h-5 w-5 mr-3" />
              Analytics
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-3 text-gray-700 hover:bg-gray-50 rounded-lg">
              <Building2 className="h-5 w-5 mr-3" />
              Hospitality
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-3 text-gray-700 hover:bg-gray-50 rounded-lg">
              <Store className="h-5 w-5 mr-3" />
              Retail
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-3 text-gray-700 hover:bg-gray-50 rounded-lg">
              <Settings className="h-5 w-5 mr-3" />
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}