
import React, { useState } from 'react';
import { Calendar, Users, MessageSquare, Settings, BarChart3, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface NavigationProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentSection, onSectionChange }) => {
  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3, description: 'Overview and analytics' },
    { id: 'appointments', label: 'Appointments', icon: Calendar, description: 'Schedule and manage appointments' },
    { id: 'patients', label: 'Patients', icon: Users, description: 'Patient database and records' },
    { id: 'reminders', label: 'Reminders', icon: MessageSquare, description: 'Communication center' },
    { id: 'compliance', label: 'Compliance', icon: Shield, description: 'Privacy and security settings' },
    { id: 'settings', label: 'Settings', icon: Settings, description: 'System configuration' }
  ];

  return (
    <div className="w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex space-x-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentSection === item.id;
              
              return (
                <Button
                  key={item.id}
                  variant={isActive ? "default" : "ghost"}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                  onClick={() => onSectionChange(item.id)}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{item.label}</span>
                </Button>
              );
            })}
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">Dr. Alex Thompson</p>
              <p className="text-xs text-gray-600">Cardiology Clinic</p>
            </div>
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-semibold">
              AT
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
