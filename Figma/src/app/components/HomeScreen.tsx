import { useNavigate } from 'react-router';
import { PlusCircle, FolderOpen, DollarSign, User } from 'lucide-react';
import Logo from './Logo';

export default function HomeScreen() {
  const navigate = useNavigate();

  const cards = [
    { icon: PlusCircle, label: 'New Project', subtitle: 'Start estimation', path: '/create-project', color: '#1E3A8A' },
    { icon: FolderOpen, label: 'Saved Projects', subtitle: 'View history', path: '/saved-projects', color: '#1E3A8A' },
    { icon: DollarSign, label: 'Material Rates', subtitle: 'Update prices', path: '/material-rates', color: '#1E3A8A' },
    { icon: User, label: 'Profile', subtitle: 'Account settings', path: '/profile', color: '#1E3A8A' },
  ];

  return (
    <div className="h-screen bg-[#F8FAFC] flex flex-col">
      <div className="bg-[#1E3A8A] rounded-b-[24px] p-4 pb-8 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div style={{ transform: 'scale(0.5)', transformOrigin: 'left center' }}>
              <Logo size={80} showText={false} />
            </div>
            <div>
              <h1 className="text-[20px] font-bold text-white">BuildMate</h1>
              <p className="text-blue-100 text-[12px]">Smart Construction Estimation</p>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-[16px] p-4">
          <p className="text-blue-100 text-[12px] mb-1">Active Projects</p>
          <p className="text-white text-[24px] font-bold">12</p>
        </div>
      </div>

      <div className="flex-1 p-4">
        <h3 className="text-gray-600 text-[14px] mb-4 font-semibold">Quick Actions</h3>

        <div className="grid grid-cols-2 gap-4">
          {cards.map((card) => (
            <button
              key={card.label}
              onClick={() => navigate(card.path)}
              className="bg-white rounded-[16px] p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all flex flex-col items-center text-center h-[140px] justify-center"
            >
              <div className="bg-[#1E3A8A] p-4 rounded-[16px] mb-3">
                <card.icon className="w-8 h-8 text-[#EAB308]" strokeWidth={2} />
              </div>
              <h4 className="text-[#1E3A8A] font-semibold text-[14px] mb-1">{card.label}</h4>
              <p className="text-gray-500 text-[11px]">{card.subtitle}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
