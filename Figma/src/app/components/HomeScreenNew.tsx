import { useNavigate } from 'react-router';
import { Search, PlusCircle, FolderOpen, DollarSign, BarChart3, Bell, Settings, Upload } from 'lucide-react';
import Logo from './Logo';
import BottomNav from './BottomNav';

export default function HomeScreenNew() {
  const navigate = useNavigate();

  const quickActions = [
    { icon: PlusCircle, label: 'New Estimation', path: '/create-project', color: '#1E3A8A' },
    { icon: FolderOpen, label: 'Saved Projects', path: '/saved-projects', color: '#1E3A8A' },
    { icon: DollarSign, label: 'Material Rates', path: '/material-rates', color: '#1E3A8A' },
    { icon: BarChart3, label: 'Reports', path: '/reports', color: '#1E3A8A' },
    { icon: BarChart3, label: 'Analytics', path: '/analytics', color: '#1E3A8A' },
    { icon: Bell, label: 'Notifications', path: '/notifications', color: '#1E3A8A' },
    { icon: Settings, label: 'Settings', path: '/settings', color: '#1E3A8A' },
    { icon: Upload, label: 'CAD Upload', path: '/cad-upload', color: '#1E3A8A' },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-[88px]">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#1E3A8A] to-[#2563eb] rounded-b-[28px] p-6 pb-8 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div style={{ transform: 'scale(0.5)', transformOrigin: 'left center' }}>
              <Logo size={80} showText={false} />
            </div>
            <div>
              <h1 className="text-[20px] font-bold text-white">BuildMate</h1>
              <p className="text-blue-100 text-[11px]">Smart Construction Estimation</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => navigate('/notifications')} className="relative bg-white/10 backdrop-blur-sm p-2 rounded-[12px]">
              <Bell className="w-5 h-5 text-white" />
              <span className="absolute -top-1 -right-1 bg-[#EAB308] text-[#1E3A8A] text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">3</span>
            </button>
            <button onClick={() => navigate('/profile')} className="bg-[#EAB308] p-2 rounded-[12px]">
              <div className="w-8 h-8 bg-[#1E3A8A] rounded-[8px] flex items-center justify-center text-white text-[14px] font-bold">
                JC
              </div>
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-white text-[16px] font-semibold mb-1">Good Morning, John 👋</h2>
          <p className="text-blue-100 text-[12px]">Ready to estimate your next project?</p>
        </div>
      </div>

      <div className="px-4 -mt-4">
        {/* Search Bar */}
        <div className="bg-white rounded-[20px] p-4 shadow-md border border-gray-100 mb-6 flex items-center gap-3">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search projects, materials..."
            className="flex-1 outline-none text-[14px]"
          />
        </div>

        {/* Quick Actions Grid */}
        <div className="mb-6">
          <h3 className="text-gray-700 text-[15px] font-semibold mb-4">Quick Actions</h3>
          <div className="grid grid-cols-4 gap-3">
            {quickActions.map((action) => (
              <button
                key={action.label}
                onClick={() => navigate(action.path)}
                className="bg-white rounded-[20px] p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all flex flex-col items-center text-center gap-2"
              >
                <div className="bg-[#1E3A8A] p-3 rounded-[16px]">
                  <action.icon className="w-6 h-6 text-[#EAB308]" strokeWidth={2} />
                </div>
                <span className="text-[10px] font-medium text-gray-700 leading-tight">{action.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Empty State - Recent Projects */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-700 text-[15px] font-semibold">Recent Projects</h3>
            <button className="text-[#1E3A8A] text-[12px] font-semibold">View All</button>
          </div>

          <div className="bg-white rounded-[24px] p-8 shadow-sm border border-gray-100 text-center">
            <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center">
              <FolderOpen className="w-12 h-12 text-[#1E3A8A] opacity-50" strokeWidth={1.5} />
            </div>
            <h4 className="text-gray-800 text-[16px] font-semibold mb-2">No Recent Projects Yet</h4>
            <p className="text-gray-500 text-[13px] mb-6 max-w-[220px] mx-auto">
              Start your first estimation to see your projects here
            </p>
            <button
              onClick={() => navigate('/create-project')}
              className="bg-[#EAB308] text-[#1E3A8A] px-6 py-3 rounded-[12px] font-semibold text-[14px] shadow-md hover:bg-[#d9a307] transition-colors"
            >
              Create New Project
            </button>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
