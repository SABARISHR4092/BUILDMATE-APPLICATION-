import { useNavigate } from 'react-router';
import { ArrowLeft, User, Globe, Palette, Wifi, Bell, Lock, Database, ChevronRight } from 'lucide-react';
import BottomNav from './BottomNav';

export default function SettingsScreen() {
  const navigate = useNavigate();

  const settingsGroups = [
    {
      title: 'Account',
      items: [
        { icon: User, label: 'Profile Settings', path: '/profile', badge: null },
        { icon: Lock, label: 'Security & Privacy', path: '/profile', badge: null },
      ]
    },
    {
      title: 'Preferences',
      items: [
        { icon: Globe, label: 'Currency', path: '/settings', badge: '₹ INR' },
        { icon: Globe, label: 'Language', path: '/settings', badge: 'English' },
        { icon: Palette, label: 'Appearance', path: '/settings', badge: 'Light' },
        { icon: Bell, label: 'Notifications', path: '/settings', badge: 'On' },
      ]
    },
    {
      title: 'Data & Storage',
      items: [
        { icon: Wifi, label: 'Offline Mode', path: '/settings', badge: 'Off' },
        { icon: Database, label: 'Auto Save', path: '/settings', badge: 'On' },
        { icon: Database, label: 'Data Backup', path: '/settings', badge: null },
      ]
    },
    {
      title: 'Information',
      items: [
        { icon: User, label: 'Help & Support', path: '/help', badge: null },
        { icon: User, label: 'About BuildMate', path: '/about', badge: 'v1.0.0' },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-[88px]">
      <div className="bg-[#1E3A8A] rounded-b-[24px] p-4 pb-6 shadow-lg">
        <div className="flex items-center gap-4 mb-4">
          <button onClick={() => navigate('/home')} className="bg-white/10 backdrop-blur-sm p-2 rounded-[12px]">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h2 className="text-[20px] font-bold text-white">Settings</h2>
        </div>
        <p className="text-blue-100 text-[13px]">Manage app preferences</p>
      </div>

      <div className="px-4 py-6 space-y-6">
        {settingsGroups.map((group, groupIndex) => (
          <div key={groupIndex}>
            <h3 className="text-gray-600 text-[12px] font-semibold mb-3 uppercase tracking-wide">{group.title}</h3>
            <div className="bg-white rounded-[20px] shadow-sm border border-gray-100 overflow-hidden">
              {group.items.map((item, itemIndex) => (
                <button
                  key={itemIndex}
                  onClick={() => navigate(item.path)}
                  className={`w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors ${
                    itemIndex !== group.items.length - 1 ? 'border-b border-gray-100' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-gray-100 p-2 rounded-[10px]">
                      <item.icon className="w-5 h-5 text-gray-600" strokeWidth={2} />
                    </div>
                    <span className="text-[#1E3A8A] text-[14px] font-medium">{item.label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.badge && (
                      <span className="text-gray-500 text-[12px]">{item.badge}</span>
                    )}
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}

        {/* Logout Button */}
        <button
          onClick={() => navigate('/logout-confirmation')}
          className="w-full bg-red-50 text-red-600 h-[52px] rounded-[16px] border-2 border-red-200 flex items-center justify-center gap-2 hover:bg-red-100 transition-colors font-semibold text-[14px]"
        >
          Logout
        </button>
      </div>

      <BottomNav />
    </div>
  );
}
