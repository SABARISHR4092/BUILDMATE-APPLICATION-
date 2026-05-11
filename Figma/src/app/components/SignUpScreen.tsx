import { useState } from 'react';
import { useNavigate } from 'react-router';
import { User, Mail, Lock, Phone, ArrowLeft } from 'lucide-react';
import Logo from './Logo';

export default function SignUpScreen() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleSignUp = () => {
    navigate('/otp-verification');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
      <div className="p-4">
        <button onClick={() => navigate('/login')} className="bg-white p-2 rounded-[12px] shadow-sm">
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <div className="flex-1 flex flex-col px-4 pb-8 overflow-y-auto">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <Logo size={80} showText={false} />
          </div>
          <h1 className="text-[28px] font-bold text-[#1E3A8A] mb-2">Create Account</h1>
          <p className="text-gray-600 text-[14px]">Join BuildMate today</p>
        </div>

        <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100 mb-6">
          <div className="space-y-4">
            <div className="bg-[#F8FAFC] rounded-[16px] h-[48px] flex items-center px-4 gap-3 border border-gray-200">
              <User className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="flex-1 outline-none text-[14px] bg-transparent"
              />
            </div>
            <div className="bg-[#F8FAFC] rounded-[16px] h-[48px] flex items-center px-4 gap-3 border border-gray-200">
              <Mail className="w-5 h-5 text-gray-400" />
              <input
                type="email"
                placeholder="Email address"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="flex-1 outline-none text-[14px] bg-transparent"
              />
            </div>
            <div className="bg-[#F8FAFC] rounded-[16px] h-[48px] flex items-center px-4 gap-3 border border-gray-200">
              <Phone className="w-5 h-5 text-gray-400" />
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="flex-1 outline-none text-[14px] bg-transparent"
              />
            </div>
            <div className="bg-[#F8FAFC] rounded-[16px] h-[48px] flex items-center px-4 gap-3 border border-gray-200">
              <Lock className="w-5 h-5 text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="flex-1 outline-none text-[14px] bg-transparent"
              />
            </div>
            <div className="bg-[#F8FAFC] rounded-[16px] h-[48px] flex items-center px-4 gap-3 border border-gray-200">
              <Lock className="w-5 h-5 text-gray-400" />
              <input
                type="password"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                className="flex-1 outline-none text-[14px] bg-transparent"
              />
            </div>
          </div>
        </div>

        <button
          onClick={handleSignUp}
          className="w-full h-[52px] bg-[#EAB308] text-[#1E3A8A] rounded-[12px] shadow-md hover:bg-[#d9a307] transition-colors font-semibold text-[16px] mb-4"
        >
          Sign Up
        </button>

        <p className="text-center text-gray-500 text-[12px]">
          Already have an account?{' '}
          <button onClick={() => navigate('/login')} className="text-[#1E3A8A] font-semibold">
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
}
