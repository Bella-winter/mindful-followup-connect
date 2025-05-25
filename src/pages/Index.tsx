import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Dashboard from '@/components/Dashboard';
import Appointments from '@/components/Appointments';
import Patients from '@/components/Patients';
import Reminders from '@/components/Reminders';
import { Shield, Settings } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [currentSection, setCurrentSection] = useState('dashboard');

  const renderContent = () => {
    switch (currentSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'appointments':
        return <Appointments />;
      case 'patients':
        return <Patients />;
      case 'reminders':
        return <Reminders />;
      case 'compliance':
        return <ComplianceSection />;
      case 'settings':
        return <SettingsSection />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen dark-theme">
      <Navigation currentSection={currentSection} onSectionChange={setCurrentSection} />
      {renderContent()}
    </div>
  );
};

const ComplianceSection = () => {
  return (
    <div className="min-h-screen dark-theme p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" style={{ color: 'hsl(var(--teal-cyan))' }}>Privacy & Compliance</h1>
          <p className="text-teal-300">HIPAA compliance and data security management</p>
        </div>

        <div className="grid gap-6">
          <Card className="healthcare-card">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Shield className="w-6 h-6" style={{ color: 'hsl(var(--teal-cyan))' }} />
                <CardTitle style={{ color: 'hsl(var(--teal-cyan))' }}>Security Status</CardTitle>
              </div>
              <CardDescription className="text-teal-300">Current security and compliance status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-800 rounded-lg border border-gray-700">
                  <Badge className="bg-teal-600 text-white mb-2">Active</Badge>
                  <h3 className="font-medium" style={{ color: 'hsl(var(--teal-cyan))' }}>HIPAA Compliance</h3>
                  <p className="text-sm text-teal-300 mt-1">All patient data encrypted and secure</p>
                </div>
                <div className="text-center p-4 bg-gray-800 rounded-lg border border-gray-700">
                  <Badge className="bg-cyan-600 text-white mb-2">Enabled</Badge>
                  <h3 className="font-medium" style={{ color: 'hsl(var(--teal-cyan))' }}>Data Encryption</h3>
                  <p className="text-sm text-teal-300 mt-1">AES-256 encryption at rest and in transit</p>
                </div>
                <div className="text-center p-4 bg-gray-800 rounded-lg border border-gray-700">
                  <Badge className="bg-teal-700 text-white mb-2">Protected</Badge>
                  <h3 className="font-medium" style={{ color: 'hsl(var(--teal-cyan))' }}>Access Control</h3>
                  <p className="text-sm text-teal-300 mt-1">Role-based permissions and audit logs</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="healthcare-card">
            <CardHeader>
              <CardTitle>Data Privacy Settings</CardTitle>
              <CardDescription>Configure patient data handling and privacy settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Patient Consent Management</h4>
                  <p className="text-sm text-gray-600">Track and manage patient communication consents</p>
                </div>
                <Badge className="bg-green-100 text-green-800">Enabled</Badge>
              </div>
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Data Retention Policy</h4>
                  <p className="text-sm text-gray-600">Automatic data archival after 7 years</p>
                </div>
                <Badge className="bg-blue-100 text-blue-800">Active</Badge>
              </div>
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Audit Logging</h4>
                  <p className="text-sm text-gray-600">Track all system access and data changes</p>
                </div>
                <Badge className="bg-green-100 text-green-800">Enabled</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="healthcare-card">
            <CardHeader>
              <CardTitle>Communication Compliance</CardTitle>
              <CardDescription>Ensure all patient communications meet regulatory requirements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h4 className="font-medium text-yellow-800 mb-2">⚠️ Important Notice</h4>
                  <p className="text-sm text-yellow-700">
                    All patient communications are logged for compliance purposes. Ensure you have proper patient consent before sending automated messages.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">SMS Compliance</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>✓ TCPA compliance enabled</li>
                      <li>✓ Opt-out mechanisms included</li>
                      <li>✓ Time restrictions enforced</li>
                    </ul>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Email Compliance</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>✓ CAN-SPAM compliance</li>
                      <li>✓ Unsubscribe links included</li>
                      <li>✓ Professional disclaimers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

const SettingsSection = () => {
  return (
    <div className="min-h-screen dark-theme p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" style={{ color: 'hsl(var(--teal-cyan))' }}>System Settings</h1>
          <p className="text-teal-300">Configure your reminder system and integrations</p>
        </div>

        <div className="grid gap-6">
          <Card className="healthcare-card">
            <CardHeader>
              <CardTitle>Communication Providers</CardTitle>
              <CardDescription>Configure your SMS, email, and voice communication providers</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-gray-900">Twilio SMS/Voice</h4>
                  <Badge className="bg-green-100 text-green-800">Connected</Badge>
                </div>
                <p className="text-sm text-gray-600 mb-3">Send SMS reminders and voice calls through Twilio</p>
                <Button size="sm" variant="outline">Configure Settings</Button>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-gray-900">WhatsApp Business API</h4>
                  <Badge className="bg-yellow-100 text-yellow-800">Setup Required</Badge>
                </div>
                <p className="text-sm text-gray-600 mb-3">Send WhatsApp messages for patient reminders</p>
                <Button size="sm" className="healthcare-button">Setup Integration</Button>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-gray-900">Email Service (SMTP)</h4>
                  <Badge className="bg-green-100 text-green-800">Connected</Badge>
                </div>
                <p className="text-sm text-gray-600 mb-3">Professional email reminders and follow-ups</p>
                <Button size="sm" variant="outline">Configure Settings</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="healthcare-card">
            <CardHeader>
              <CardTitle>Clinic Information</CardTitle>
              <CardDescription>Update your clinic details and contact information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Clinic Name</label>
                  <input 
                    className="w-full p-2 border border-gray-200 rounded-lg" 
                    defaultValue="Cardiology Clinic" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Doctor Name</label>
                  <input 
                    className="w-full p-2 border border-gray-200 rounded-lg" 
                    defaultValue="Dr. Alex Thompson" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input 
                    className="w-full p-2 border border-gray-200 rounded-lg" 
                    defaultValue="+1 (555) 987-6543" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input 
                    className="w-full p-2 border border-gray-200 rounded-lg" 
                    defaultValue="contact@cardiologyclinic.com" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Clinic Address</label>
                <textarea 
                  className="w-full p-2 border border-gray-200 rounded-lg h-20"
                  defaultValue="123 Medical Center Dr, Healthcare City, HC 12345"
                />
              </div>
              <Button className="healthcare-button">Save Changes</Button>
            </CardContent>
          </Card>

          <Card className="healthcare-card">
            <CardHeader>
              <CardTitle>Reminder Settings</CardTitle>
              <CardDescription>Configure default reminder timing and preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Reminder</label>
                  <select className="w-full p-2 border border-gray-200 rounded-lg">
                    <option>24 hours before</option>
                    <option>48 hours before</option>
                    <option>72 hours before</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Second Reminder</label>
                  <select className="w-full p-2 border border-gray-200 rounded-lg">
                    <option>2 hours before</option>
                    <option>4 hours before</option>
                    <option>6 hours before</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Business Hours Start</label>
                  <input 
                    type="time" 
                    className="w-full p-2 border border-gray-200 rounded-lg" 
                    defaultValue="08:00"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Business Hours End</label>
                  <input 
                    type="time" 
                    className="w-full p-2 border border-gray-200 rounded-lg" 
                    defaultValue="18:00"
                  />
                </div>
              </div>
              <Button className="healthcare-button">Update Settings</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
