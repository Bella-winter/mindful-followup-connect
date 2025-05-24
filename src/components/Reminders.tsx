
import React, { useState } from 'react';
import { MessageSquare, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Reminders = () => {
  const [selectedTemplate, setSelectedTemplate] = useState('');
  
  const [reminders] = useState([
    {
      id: 1,
      patientName: "Sarah Johnson",
      type: "SMS",
      message: "Hi Sarah, this is a reminder for your follow-up appointment tomorrow at 10:00 AM with Dr. Thompson. Please reply CONFIRM to confirm your attendance.",
      scheduledTime: "2024-12-26 18:00",
      appointmentDate: "2024-12-27 10:00",
      status: "scheduled",
      response: null
    },
    {
      id: 2,
      patientName: "Michael Chen",
      type: "Email",
      message: "Dear Michael, we hope this email finds you well. This is a friendly reminder about your consultation appointment scheduled for tomorrow at 11:30 AM...",
      scheduledTime: "2024-12-26 17:00",
      appointmentDate: "2024-12-27 11:30",
      status: "sent",
      response: null
    },
    {
      id: 3,
      patientName: "Emma Davis",
      type: "WhatsApp",
      message: "Hello Emma! 👋 Just a quick reminder about your check-up appointment tomorrow at 2:00 PM. Looking forward to seeing you!",
      scheduledTime: "2024-12-26 19:00",
      appointmentDate: "2024-12-27 14:00",
      status: "delivered",
      response: "Thanks! I'll be there ✓"
    },
    {
      id: 4,
      patientName: "Robert Wilson",
      type: "Voice",
      message: "This is an automated reminder from Cardiology Clinic. You have an appointment scheduled tomorrow at 9:00 AM with Dr. Thompson. Press 1 to confirm or 2 to reschedule.",
      scheduledTime: "2024-12-27 08:00",
      appointmentDate: "2024-12-28 09:00",
      status: "scheduled",
      response: null
    }
  ]);

  const [templates] = useState([
    {
      id: 'appointment-reminder',
      name: 'Appointment Reminder',
      type: 'SMS',
      content: 'Hi {patient_name}, this is a reminder for your {appointment_type} appointment on {date} at {time} with Dr. {doctor_name}. Please reply CONFIRM to confirm.'
    },
    {
      id: 'follow-up-care',
      name: 'Follow-up Care',
      type: 'Email',
      content: 'Dear {patient_name}, we hope you are feeling well after your recent visit. Please remember to follow the prescribed medication schedule and contact us if you have any concerns.'
    },
    {
      id: 'wellness-check',
      name: 'Wellness Check',
      type: 'WhatsApp',
      content: 'Hello {patient_name}! 👋 How are you feeling today? We wanted to check in and see how you\'re doing with your treatment plan.'
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'sent': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'delivered': return 'bg-green-100 text-green-800 border-green-200';
      case 'scheduled': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'failed': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'sms': return <MessageSquare className="w-4 h-4" />;
      case 'email': return <Mail className="w-4 h-4" />;
      case 'whatsapp': return <MessageSquare className="w-4 h-4" />;
      case 'voice': return <Phone className="w-4 h-4" />;
      default: return <MessageSquare className="w-4 h-4" />;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'sent': return <Send className="w-4 h-4 text-blue-600" />;
      case 'scheduled': return <Clock className="w-4 h-4 text-yellow-600" />;
      case 'failed': return <AlertCircle className="w-4 h-4 text-red-600" />;
      default: return <Clock className="w-4 h-4 text-gray-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Communication Center</h1>
          <p className="text-gray-600">Manage automated reminders and patient communications</p>
        </div>

        <Tabs defaultValue="reminders" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="reminders">Active Reminders</TabsTrigger>
            <TabsTrigger value="templates">Message Templates</TabsTrigger>
            <TabsTrigger value="analytics">Communication Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="reminders">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card className="healthcare-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Reminders</p>
                      <p className="text-2xl font-bold text-gray-900">{reminders.length}</p>
                    </div>
                    <MessageSquare className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="healthcare-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Delivered</p>
                      <p className="text-2xl font-bold text-gray-900">{reminders.filter(r => r.status === 'delivered').length}</p>
                    </div>
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="healthcare-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Scheduled</p>
                      <p className="text-2xl font-bold text-gray-900">{reminders.filter(r => r.status === 'scheduled').length}</p>
                    </div>
                    <Clock className="h-8 w-8 text-yellow-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="healthcare-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Response Rate</p>
                      <p className="text-2xl font-bold text-gray-900">85%</p>
                    </div>
                    <Send className="h-8 w-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Reminders List */}
            <div className="space-y-4">
              {reminders.map((reminder) => (
                <Card key={reminder.id} className="healthcare-card">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                          {reminder.patientName.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{reminder.patientName}</h3>
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <div className="flex items-center space-x-1">
                              {getTypeIcon(reminder.type)}
                              <span>{reminder.type}</span>
                            </div>
                            <span>•</span>
                            <span>Appointment: {new Date(reminder.appointmentDate).toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Badge className={getStatusColor(reminder.status)}>
                          <div className="flex items-center space-x-1">
                            {getStatusIcon(reminder.status)}
                            <span>{reminder.status.charAt(0).toUpperCase() + reminder.status.slice(1)}</span>
                          </div>
                        </Badge>
                        <Button size="sm" variant="outline">
                          Edit
                        </Button>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <p className="text-sm text-gray-700">{reminder.message}</p>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>Scheduled: {new Date(reminder.scheduledTime).toLocaleString()}</span>
                      {reminder.response && (
                        <div className="bg-green-50 border border-green-200 rounded px-3 py-1">
                          <span className="text-green-800 font-medium">Response: {reminder.response}</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="templates">
            <div className="grid gap-6">
              <Card className="healthcare-card">
                <CardHeader>
                  <CardTitle>Message Templates</CardTitle>
                  <CardDescription>Pre-configured templates for different types of patient communications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {templates.map((template) => (
                      <div key={template.id} className="p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center space-x-1 text-sm">
                              {getTypeIcon(template.type)}
                              <Badge variant="outline">{template.type}</Badge>
                            </div>
                            <h3 className="font-medium text-gray-900">{template.name}</h3>
                          </div>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">Edit</Button>
                            <Button size="sm" className="healthcare-button">Use Template</Button>
                          </div>
                        </div>
                        <div className="bg-gray-50 rounded p-3">
                          <p className="text-sm text-gray-700">{template.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="healthcare-card">
                <CardHeader>
                  <CardTitle>Create New Template</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Template Name</label>
                      <input className="w-full p-2 border border-gray-200 rounded-lg" placeholder="Enter template name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Communication Type</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sms">SMS</SelectItem>
                          <SelectItem value="email">Email</SelectItem>
                          <SelectItem value="whatsapp">WhatsApp</SelectItem>
                          <SelectItem value="voice">Voice Call</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message Content</label>
                    <textarea 
                      className="w-full p-3 border border-gray-200 rounded-lg h-32"
                      placeholder="Enter your message template here. Use {patient_name}, {date}, {time}, etc. for dynamic content."
                    />
                  </div>
                  <Button className="healthcare-button">Save Template</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid gap-6">
              <Card className="healthcare-card">
                <CardHeader>
                  <CardTitle>Communication Analytics</CardTitle>
                  <CardDescription>Track the effectiveness of your patient communications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-6 bg-blue-50 rounded-lg">
                      <div className="text-3xl font-bold text-blue-600 mb-2">94%</div>
                      <div className="text-sm text-gray-600">Delivery Rate</div>
                    </div>
                    <div className="text-center p-6 bg-green-50 rounded-lg">
                      <div className="text-3xl font-bold text-green-600 mb-2">78%</div>
                      <div className="text-sm text-gray-600">Response Rate</div>
                    </div>
                    <div className="text-center p-6 bg-purple-50 rounded-lg">
                      <div className="text-3xl font-bold text-purple-600 mb-2">89%</div>
                      <div className="text-sm text-gray-600">Appointment Confirmation</div>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-4">Communication Preferences</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">SMS Messages</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-24 bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{width: '65%'}}></div>
                          </div>
                          <span className="text-sm font-medium">65%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Email</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-24 bg-gray-200 rounded-full h-2">
                            <div className="bg-green-600 h-2 rounded-full" style={{width: '25%'}}></div>
                          </div>
                          <span className="text-sm font-medium">25%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">WhatsApp</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-24 bg-gray-200 rounded-full h-2">
                            <div className="bg-purple-600 h-2 rounded-full" style={{width: '10%'}}></div>
                          </div>
                          <span className="text-sm font-medium">10%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Reminders;
