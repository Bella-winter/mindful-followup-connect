
import React, { useState } from 'react';
import { Users, Phone, Mail, Calendar, Search, Plus, User } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Patients = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const [patients] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      phone: "+1 (555) 123-4567",
      email: "sarah.j@email.com",
      dateOfBirth: "1985-03-15",
      lastVisit: "2024-12-20",
      nextAppointment: "2024-12-27",
      condition: "Post-operative care",
      preferredContact: "SMS",
      status: "active"
    },
    {
      id: 2,
      name: "Michael Chen",
      phone: "+1 (555) 234-5678",
      email: "m.chen@email.com",
      dateOfBirth: "1978-07-22",
      lastVisit: "2024-12-15",
      nextAppointment: "2024-12-27",
      condition: "Hypertension monitoring",
      preferredContact: "Email",
      status: "active"
    },
    {
      id: 3,
      name: "Emma Davis",
      phone: "+1 (555) 345-6789",
      email: "emma.davis@email.com",
      dateOfBirth: "1992-11-08",
      lastVisit: "2024-12-22",
      nextAppointment: "2024-12-27",
      condition: "Routine check-up",
      preferredContact: "WhatsApp",
      status: "active"
    },
    {
      id: 4,
      name: "Robert Wilson",
      phone: "+1 (555) 456-7890",
      email: "r.wilson@email.com",
      dateOfBirth: "1965-01-30",
      lastVisit: "2024-11-28",
      nextAppointment: "2024-12-28",
      condition: "Cardiac rehabilitation",
      preferredContact: "Phone",
      status: "active"
    }
  ]);

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.phone.includes(searchTerm) ||
    patient.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.condition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const calculateAge = (dateOfBirth: string) => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const getContactIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'sms': return '📱';
      case 'email': return '📧';
      case 'whatsapp': return '💬';
      case 'phone': return '📞';
      default: return '📱';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Patient Management</h1>
              <p className="text-gray-600 mt-1">Manage patient records and communication preferences</p>
            </div>
            <Button className="healthcare-button">
              <Plus className="w-4 h-4 mr-2" />
              Add New Patient
            </Button>
          </div>

          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search patients by name, phone, email, or condition..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 max-w-lg"
            />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="healthcare-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Patients</p>
                  <p className="text-2xl font-bold text-gray-900">{patients.length}</p>
                </div>
                <Users className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="healthcare-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Patients</p>
                  <p className="text-2xl font-bold text-gray-900">{patients.filter(p => p.status === 'active').length}</p>
                </div>
                <User className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="healthcare-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">SMS Preferred</p>
                  <p className="text-2xl font-bold text-gray-900">{patients.filter(p => p.preferredContact === 'SMS').length}</p>
                </div>
                <Phone className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="healthcare-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Email Preferred</p>
                  <p className="text-2xl font-bold text-gray-900">{patients.filter(p => p.preferredContact === 'Email').length}</p>
                </div>
                <Mail className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Patients List */}
        <Card className="healthcare-card">
          <CardHeader>
            <CardTitle>Patient Database</CardTitle>
            <CardDescription>
              Comprehensive patient records with communication preferences
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredPatients.map((patient) => (
                <div key={patient.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {patient.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{patient.name}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span>Age {calculateAge(patient.dateOfBirth)}</span>
                        <span>•</span>
                        <div className="flex items-center">
                          <Phone className="w-3 h-3 mr-1" />
                          {patient.phone}
                        </div>
                        <span>•</span>
                        <div className="flex items-center">
                          <Mail className="w-3 h-3 mr-1" />
                          {patient.email}
                        </div>
                      </div>
                      <p className="text-sm text-blue-600 mt-1">{patient.condition}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">
                        Last visit: {new Date(patient.lastVisit).toLocaleDateString()}
                      </p>
                      <p className="text-sm text-blue-600">
                        Next: {new Date(patient.nextAppointment).toLocaleDateString()}
                      </p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="flex items-center space-x-1">
                        <span>{getContactIcon(patient.preferredContact)}</span>
                        <span>{patient.preferredContact}</span>
                      </Badge>
                      <Button size="sm" variant="ghost" className="text-blue-600">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredPatients.length === 0 && (
              <div className="text-center py-12">
                <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No patients found</h3>
                <p className="text-gray-600 mb-4">
                  {searchTerm 
                    ? 'Try adjusting your search criteria.' 
                    : 'Add your first patient to get started.'}
                </p>
                <Button className="healthcare-button">
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Patient
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Patients;
