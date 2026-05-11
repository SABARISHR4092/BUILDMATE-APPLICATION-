import { useNavigate } from 'react-router';
import { ArrowLeft, User, Mail, Phone, MapPin, LogOut, Bell, Lock } from 'lucide-react';

export default function ProfileScreen() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/logout-progress');
  };

  return (
    <div className="h-screen bg-[#F8FAFC] flex flex-col">
      <div className="bg-[#1E3A8A] rounded-b-[24px] p-4 pb-8 shadow-lg">
        <div className="flex items-center gap-4 mb-6">
          <button onClick={() => navigate('/home')} className="bg-white/10 backdrop-blur-sm p-2 rounded-[12px]">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h2 className="text-[20px] font-bold text-white">Profile</h2>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-[#EAB308] p-6 rounded-full mb-4">
            <User className="w-16 h-16 text-[#1E3A8A]" strokeWidth={2} />
          </div>
          <h3 className="text-[22px] font-bold text-white mb-1">John Contractor</h3>
          <p className="text-blue-100 text-[12px]">Professional Builder</p>
        </div>
      </div>

      <div className="flex-1 p-4 space-y-4 overflow-y-auto pb-24">
        <div className="bg-white rounded-[16px] p-4 shadow-sm border border-gray-100">
          <h4 className="text-gray-600 font-semibold text-[13px] mb-4">Contact Information</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-[12px]">
              <Mail className="w-4 h-4 text-gray-400" />
              <div className="flex-1">
                <p className="text-[10px] text-gray-500">Email</p>
                <p className="text-[#1E3A8A] text-[13px] font-semibold">john@buildmate.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-[12px]">
              <Phone className="w-4 h-4 text-gray-400" />
              <div className="flex-1">
                <p className="text-[10px] text-gray-500">Phone</p>
                <p className="text-[#1E3A8A] text-[13px] font-semibold">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-[12px]">
              <MapPin className="w-4 h-4 text-gray-400" />
              <div className="flex-1">
                <p className="text-[10px] text-gray-500">Location</p>
                <p className="text-[#1E3A8A] text-[13px] font-semibold">Mumbai, Maharashtra</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[16px] p-4 shadow-sm border border-gray-100">
          <h4 className="text-gray-600 font-semibold text-[13px] mb-4">Preferences</h4>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-[12px] hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-3">
                <Bell className="w-4 h-4 text-gray-400" />
                <span className="text-[#1E3A8A] text-[13px] font-medium">Notifications</span>
              </div>
              <span className="text-gray-500 text-[11px]">Enabled</span>
            </button>
            <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-[12px] hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-3">
                <Lock className="w-4 h-4 text-gray-400" />
                <span className="text-[#1E3A8A] text-[13px] font-medium">Privacy & Security</span>
              </div>
              <span className="text-gray-500 text-[11px]">Settings</span>
            </button>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 max-w-[360px] mx-auto p-4 bg-white border-t border-gray-200">
        <button
          onClick={handleLogout}
          className="w-full bg-red-50 text-red-600 h-[52px] rounded-[12px] border-2 border-red-200 flex items-center justify-center gap-2 hover:bg-red-100 transition-colors font-semibold text-[14px]"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}
