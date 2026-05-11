import { useNavigate } from 'react-router';
import { Save, ArrowRight } from 'lucide-react';

export default function OnboardingThree() {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-[#F8FAFC] flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <div className="bg-[#1E3A8A] p-10 rounded-[24px] mb-8 shadow-lg">
          <Save className="w-[100px] h-[100px] text-[#EAB308]" strokeWidth={2} />
        </div>
        <h2 className="text-[28px] font-bold mb-4 text-[#1E3A8A]">Save & Track Projects</h2>
        <p className="text-gray-600 text-[16px] max-w-[280px] leading-relaxed">
          Save multiple projects and access your estimation history anytime, anywhere
        </p>
      </div>

      <div className="px-4 pb-8">
        <div className="flex justify-center gap-2 mb-8">
          <div className="w-8 h-2 bg-gray-300 rounded-full"></div>
          <div className="w-8 h-2 bg-gray-300 rounded-full"></div>
          <div className="w-8 h-2 bg-[#1E3A8A] rounded-full"></div>
        </div>
        <button
          onClick={() => navigate('/login')}
          className="w-full h-[52px] bg-[#EAB308] text-[#1E3A8A] rounded-[12px] flex items-center justify-center gap-2 shadow-md hover:bg-[#d9a307] transition-colors font-semibold text-[16px]"
        >
          <span>Get Started</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
