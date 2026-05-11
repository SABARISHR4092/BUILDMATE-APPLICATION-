import { useNavigate } from 'react-router';
import { LogOut, X } from 'lucide-react';

export default function LogoutConfirmationScreen() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/logout-progress');
  };

  return (
    <div className="min-h-screen bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-[28px] p-6 max-w-[320px] w-full shadow-2xl">
        <div className="flex justify-between items-start mb-6">
          <div className="bg-red-50 p-4 rounded-[16px]">
            <LogOut className="w-8 h-8 text-red-600" strokeWidth={2} />
          </div>
          <button onClick={() => navigate('/settings')} className="text-gray-400 hover:text-gray-600">
            <X className="w-6 h-6" />
          </button>
        </div>

        <h2 className="text-[24px] font-bold text-[#1E3A8A] mb-2">Logout</h2>
        <p className="text-gray-600 text-[14px] mb-8 leading-relaxed">
          Are you sure you want to logout? Your data will be saved and you can login anytime.
        </p>

        <div className="space-y-3">
          <button
            onClick={handleLogout}
            className="w-full h-[52px] bg-red-500 text-white rounded-[12px] shadow-md hover:bg-red-600 transition-colors font-semibold text-[15px]"
          >
            Yes, Logout
          </button>
          <button
            onClick={() => navigate('/settings')}
            className="w-full h-[52px] bg-white text-gray-600 rounded-[12px] border-2 border-gray-200 hover:bg-gray-50 transition-colors font-semibold text-[15px]"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
