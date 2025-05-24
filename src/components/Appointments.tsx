
import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, Plus, Search, Filter } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Appointments = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  
  const [appointments] = useState([
    {
      id: 1,
      patientName: "Sarah Johnson",
      patientPhone: "+1 (555) 123-4567",
      patientEmail: "sarah.j@email.com",
      date: "2024-12-27",
      time: "10:00 AM",
      type: "Follow-up",
      status: "confirmed",
      reminderSent: true,
      notes: "Post-surgery check-up"
    },
    {
      id: 2,
      patientName: "Michael Chen",
      patientPhone: "+1 (555) 234-5678",
      patientEmail: "m.chen@email.com",
      date: "2024-12-27",
      time: "11:30 AM",
      type: "Consultation",
      status: "pending",
      reminderSent: false,
      notes: "Initial consultation for chest pain"
    },
    {
      id: 3,
      patientName: "Emma Davis",
      patientPhone: "+1 (555) 345-6789",
      patientEmail: "emma.davis@email.com",
      date: "2024-12-27",
      time: "2:00 PM",
      type: "Check-up",
      status: "confirmed",
      reminderSent: true,
      notes: "Routine cardiac screening"
    },
    {
      id: 4,
      patientName: "Robert Wilson",
      patientPhone: "+1 (555) 456-7890",
      patientEmail: "r.wilson@email.com",
      date: "2024-12-28",
      time: "9:00 AM",
      type: "Follow-up",
      status: "confirmed",
      reminderSent: true,
      notes: "Blood pressure monitoring"
    }
  ]);

  const filteredAppointments = appointments.filter(appointment => {
    const matchesSearch = appointment.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         appointment.patientPhone.includes(searchTerm) ||
                         appointment.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || appointment.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800 border-green-200';
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'cancelled': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Appointments</h1>
              <p className="text-gray-600 mt-1">Manage patient appointments and scheduling</p>
            </div>
            <Button className="healthcare-button">
              <Plus className="w-4 h-4 mr-2" />
              Schedule New Appointment
            </Button>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search patients, phone, or appointment type..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="confirmed">Confirmed</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Appointments Grid */}
        <div className="grid gap-6">
          {filteredAppointments.map((appointment) => (
            <Card key={appointment.id} className="healthcare-card">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  {/* Patient Info */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {appointment.patientName.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{appointment.patientName}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Phone className="w-3 h-3 mr-1" />
                          {appointment.patientPhone}
                        </div>
                        <div className="flex items-center">
                          <Mail className="w-3 h-3 mr-1" />
                          {appointment.patientEmail}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Appointment Details */}
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                    <div className="text-center lg:text-right">
                      <div className="flex items-center text-gray-900 font-medium mb-1">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(appointment.date).toLocaleDateString('en-US', { 
                          weekday: 'short', 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <Clock className="w-3 h-3 mr-1" />
                        {appointment.time}
                      </div>
                    </div>

                    <div className="text-center">
                      <Badge variant="outline" className="mb-2">
                        {appointment.type}
                      </Badge>
                      <Badge className={`block ${getStatusColor(appointment.status)}`}>
                        {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                      </Badge>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col space-y-2">
                      {appointment.reminderSent ? (
                        <Badge variant="outline" className="text-green-600 border-green-200 justify-center">
                          ✓ Reminder Sent
                        </Badge>
                      ) : (
                        <Button size="sm" variant="outline" className="text-blue-600">
                          Send Reminder
                        </Button>
                      )}
                      <Button size="sm" variant="ghost" className="text-gray-600">
                        Edit Appointment
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Notes */}
                {appointment.notes && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Notes:</span> {appointment.notes}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredAppointments.length === 0 && (
          <Card className="healthcare-card">
            <CardContent className="text-center py-12">
              <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No appointments found</h3>
              <p className="text-gray-600 mb-4">
                {searchTerm || filterStatus !== 'all' 
                  ? 'Try adjusting your search or filter criteria.' 
                  : 'Schedule your first appointment to get started.'}
              </p>
              <Button className="healthcare-button">
                <Plus className="w-4 h-4 mr-2" />
                Schedule New Appointment
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Appointments;
