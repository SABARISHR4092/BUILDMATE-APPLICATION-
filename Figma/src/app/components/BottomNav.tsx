import { useNavigate, useLocation } from 'react-router';
import { Home, FolderOpen, Calculator, Bell, User } from 'lucide-react';

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Home', path: '/home' },
    { icon: FolderOpen, label: 'Projects', path: '/saved-projects' },
    { icon: Calculator, label: 'Estimate', path: '/create-project' },
    { icon: Bell, label: 'Alerts', path: '/notifications' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-[360px] mx-auto bg-white border-t border-gray-200 shadow-lg">
      <div className="grid grid-cols-5 h-[68px]">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center justify-center gap-1 transition-colors ${
                isActive ? 'text-[#1E3A8A]' : 'text-gray-400'
              }`}
            >
              <item.icon className="w-6 h-6" strokeWidth={2} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
