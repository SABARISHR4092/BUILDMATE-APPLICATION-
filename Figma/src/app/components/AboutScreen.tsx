import { useNavigate } from 'react-router';
import { ArrowLeft, Shield, Award, Users, Code } from 'lucide-react';
import Logo from './Logo';

export default function AboutScreen() {
  const navigate = useNavigate();

  const features = [
    { icon: Shield, label: 'Secure & Reliable', description: 'Your data is protected' },
    { icon: Award, label: 'Industry Leading', description: 'Trusted by professionals' },
    { icon: Users, label: '10,000+ Users', description: 'Growing community' },
    { icon: Code, label: 'AI-Powered', description: 'Smart estimation engine' },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col pb-24">
      <div className="bg-[#1E3A8A] rounded-b-[24px] p-4 pb-6 shadow-lg">
        <div className="flex items-center gap-4 mb-4">
          <button onClick={() => navigate('/settings')} className="bg-white/10 backdrop-blur-sm p-2 rounded-[12px]">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h2 className="text-[20px] font-bold text-white">About BuildMate</h2>
        </div>
      </div>

      <div className="flex-1 px-4 py-8 space-y-6 overflow-y-auto">
        {/* Logo & Version */}
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Logo size={120} showText={false} />
          </div>
          <h1 className="text-[24px] font-bold text-[#1E3A8A] mb-2">BuildMate</h1>
          <p className="text-gray-600 text-[14px] mb-1">Smart Construction Estimation</p>
          <p className="text-gray-500 text-[12px]">Version 1.0.0</p>
        </div>

        {/* Description */}
        <div className="bg-white rounded-[24px] p-6 shadow-md border border-gray-100">
          <h3 className="text-[#1E3A8A] font-semibold text-[15px] mb-3">About Us</h3>
          <p className="text-gray-700 text-[13px] leading-relaxed mb-4">
            BuildMate is a professional construction estimation platform designed to help engineers, contractors, and builders create accurate material and cost estimates quickly and efficiently.
          </p>
          <p className="text-gray-700 text-[13px] leading-relaxed">
            Using advanced AI algorithms and industry-standard calculations, we provide reliable estimations for residential, commercial, and industrial construction projects.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-3">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-[20px] p-5 shadow-sm border border-gray-100 text-center">
              <div className="bg-blue-50 p-4 rounded-full w-fit mx-auto mb-3">
                <feature.icon className="w-6 h-6 text-[#1E3A8A]" strokeWidth={2} />
              </div>
              <h4 className="text-[#1E3A8A] font-semibold text-[13px] mb-1">{feature.label}</h4>
              <p className="text-gray-500 text-[10px]">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Legal Links */}
        <div className="bg-white rounded-[20px] shadow-sm border border-gray-100 overflow-hidden">
          <button className="w-full p-4 text-left border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <span className="text-[#1E3A8A] text-[13px] font-medium">Terms of Service</span>
          </button>
          <button className="w-full p-4 text-left border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <span className="text-[#1E3A8A] text-[13px] font-medium">Privacy Policy</span>
          </button>
          <button className="w-full p-4 text-left hover:bg-gray-50 transition-colors">
            <span className="text-[#1E3A8A] text-[13px] font-medium">Licenses</span>
          </button>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-500 text-[11px]">
            © 2026 BuildMate. All rights reserved.
          </p>
          <p className="text-gray-400 text-[10px] mt-1">
            Made with ❤️ for construction professionals
          </p>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 max-w-[360px] mx-auto p-4 bg-white border-t border-gray-200">
        <button
          onClick={() => navigate('/settings')}
          className="w-full h-[52px] bg-white text-gray-600 rounded-[12px] border-2 border-gray-200 hover:bg-gray-50 transition-colors font-semibold text-[14px]"
        >
          Back to Settings
        </button>
      </div>
    </div>
  );
}
