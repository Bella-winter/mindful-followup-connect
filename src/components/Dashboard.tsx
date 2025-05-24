
import React, { useState } from 'react';
import { Calendar, Clock, Users, MessageSquare, Bell, Phone, Mail } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Dashboard = () => {
  const [stats] = useState({
    totalPatients: 1247,
    appointmentsToday: 24,
    pendingReminders: 8,
    completedFollowUps: 156
  });

  const [recentAppointments] = useState([
    {
      id: 1,
      patientName: "Sarah Johnson",
      time: "10:00 AM",
      type: "Follow-up",
      status: "confirmed",
      reminderSent: true
    },
    {
      id: 2,
      patientName: "Michael Chen",
      time: "11:30 AM",
      type: "Consultation",
      status: "pending",
      reminderSent: false
    },
    {
      id: 3,
      patientName: "Emma Davis",
      time: "2:00 PM",
      type: "Check-up",
      status: "confirmed",
      reminderSent: true
    }
  ]);

  const [upcomingReminders] = useState([
    {
      id: 1,
      patientName: "John Smith",
      type: "SMS",
      scheduledTime: "9:00 AM Tomorrow",
      appointmentDate: "Dec 28, 2024"
    },
    {
      id: 2,
      patientName: "Lisa Wang",
      type: "Email",
      scheduledTime: "6:00 PM Today",
      appointmentDate: "Dec 30, 2024"
    }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">HealthCare Reminder System</h1>
              <p className="text-gray-600 mt-1">Streamlined patient care and communication</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="relative">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
                <Badge className="absolute -top-2 -right-2 bg-red-500">3</Badge>
              </Button>
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-semibold">
                Dr
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="healthcare-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Patients</CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stats.totalPatients.toLocaleString()}</div>
              <p className="text-xs text-green-600 mt-1">+12% from last month</p>
            </CardContent>
          </Card>

          <Card className="healthcare-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Today's Appointments</CardTitle>
              <Calendar className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stats.appointmentsToday}</div>
              <p className="text-xs text-blue-600 mt-1">3 pending confirmations</p>
            </CardContent>
          </Card>

          <Card className="healthcare-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Pending Reminders</CardTitle>
              <Clock className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stats.pendingReminders}</div>
              <p className="text-xs text-orange-600 mt-1">Next in 2 hours</p>
            </CardContent>
          </Card>

          <Card className="healthcare-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Follow-ups Completed</CardTitle>
              <MessageSquare className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stats.completedFollowUps}</div>
              <p className="text-xs text-green-600 mt-1">94% response rate</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Today's Appointments */}
          <div className="lg:col-span-2">
            <Card className="healthcare-card">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Today's Appointments</CardTitle>
                <CardDescription>Manage and track today's patient appointments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentAppointments.map((appointment) => (
                    <div key={appointment.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                          {appointment.patientName.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{appointment.patientName}</p>
                          <p className="text-sm text-gray-600">{appointment.time} • {appointment.type}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge variant={appointment.status === 'confirmed' ? 'default' : 'secondary'}>
                          {appointment.status}
                        </Badge>
                        {appointment.reminderSent ? (
                          <Badge variant="outline" className="text-green-600 border-green-200">
                            <MessageSquare className="w-3 h-3 mr-1" />
                            Sent
                          </Badge>
                        ) : (
                          <Button size="sm" variant="outline" className="text-blue-600">
                            Send Reminder
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <Button className="w-full healthcare-button">
                    <Calendar className="w-4 h-4 mr-2" />
                    View All Appointments
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Reminders */}
          <div>
            <Card className="healthcare-card mb-6">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">Upcoming Reminders</CardTitle>
                <CardDescription>Scheduled patient communications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingReminders.map((reminder) => (
                    <div key={reminder.id} className="p-3 border border-gray-100 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-medium text-gray-900 text-sm">{reminder.patientName}</p>
                        <div className="flex items-center space-x-1">
                          {reminder.type === 'SMS' ? (
                            <Phone className="w-3 h-3 text-blue-600" />
                          ) : (
                            <Mail className="w-3 h-3 text-green-600" />
                          )}
                          <span className="text-xs text-gray-600">{reminder.type}</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600">{reminder.scheduledTime}</p>
                      <p className="text-xs text-blue-600">Appointment: {reminder.appointmentDate}</p>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Manage Reminders
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="healthcare-card">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Users className="w-4 h-4 mr-2" />
                  Add New Patient
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Appointment
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Send Bulk Reminders
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Phone className="w-4 h-4 mr-2" />
                  Communication Log
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
