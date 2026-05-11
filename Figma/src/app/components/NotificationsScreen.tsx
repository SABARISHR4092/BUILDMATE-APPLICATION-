import { useNavigate } from 'react-router';
import { ArrowLeft, CheckCircle, AlertCircle, Info, TrendingUp } from 'lucide-react';
import BottomNav from './BottomNav';

export default function NotificationsScreen() {
  const navigate = useNavigate();

  const notifications = [
    {
      id: 1,
      type: 'success',
      icon: CheckCircle,
      iconColor: 'text-green-500',
      iconBg: 'bg-green-50',
      title: 'Estimation Completed',
      message: 'Your project "Green Valley" estimation is ready',
      time: '2 hours ago',
      unread: true,
    },
    {
      id: 2,
      type: 'info',
      icon: Info,
      iconColor: 'text-blue-500',
      iconBg: 'bg-blue-50',
      title: 'Project Saved Successfully',
      message: 'Residential Villa project has been saved to your library',
      time: '5 hours ago',
      unread: true,
    },
    {
      id: 3,
      type: 'update',
      icon: TrendingUp,
      iconColor: 'text-orange-500',
      iconBg: 'bg-orange-50',
      title: 'Material Rate Updated',
      message: 'Cement prices have been updated in your area',
      time: '1 day ago',
      unread: false,
    },
    {
      id: 4,
      type: 'success',
      icon: CheckCircle,
      iconColor: 'text-green-500',
      iconBg: 'bg-green-50',
      title: 'Export Completed',
      message: 'PDF report downloaded successfully',
      time: '2 days ago',
      unread: false,
    },
    {
      id: 5,
      type: 'info',
      icon: AlertCircle,
      iconColor: 'text-purple-500',
      iconBg: 'bg-purple-50',
      title: 'System Update Available',
      message: 'New features and improvements are ready to install',
      time: '3 days ago',
      unread: false,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-[88px]">
      <div className="bg-[#1E3A8A] rounded-b-[24px] p-4 pb-6 shadow-lg">
        <div className="flex items-center gap-4 mb-4">
          <button onClick={() => navigate('/home')} className="bg-white/10 backdrop-blur-sm p-2 rounded-[12px]">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h2 className="text-[20px] font-bold text-white">Notifications</h2>
        </div>
        <p className="text-blue-100 text-[13px]">Stay updated with your projects</p>
      </div>

      <div className="px-4 py-6 space-y-3">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className={`bg-white rounded-[20px] p-4 shadow-sm border transition-all ${
              notif.unread ? 'border-[#1E3A8A]' : 'border-gray-100'
            }`}
          >
            <div className="flex gap-4">
              <div className={`${notif.iconBg} p-3 rounded-[12px] h-fit`}>
                <notif.icon className={`w-5 h-5 ${notif.iconColor}`} strokeWidth={2} />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-1">
                  <h4 className="text-[#1E3A8A] font-semibold text-[14px]">{notif.title}</h4>
                  {notif.unread && (
                    <div className="w-2 h-2 bg-[#EAB308] rounded-full" />
                  )}
                </div>
                <p className="text-gray-600 text-[12px] mb-2 leading-relaxed">{notif.message}</p>
                <p className="text-gray-400 text-[11px]">{notif.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
}
