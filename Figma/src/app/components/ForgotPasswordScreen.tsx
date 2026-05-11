import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Mail, ArrowLeft } from 'lucide-react';
import Logo from './Logo';

export default function ForgotPasswordScreen() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    navigate('/otp-verification');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
      <div className="p-4">
        <button onClick={() => navigate('/login')} className="bg-white p-2 rounded-[12px] shadow-sm">
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <div className="flex-1 flex flex-col justify-center px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Logo size={100} showText={false} />
          </div>
          <h1 className="text-[28px] font-bold text-[#1E3A8A] mb-2">Reset Password</h1>
          <p className="text-gray-600 text-[14px] max-w-[280px] mx-auto">
            Enter your email address and we'll send you a verification code
          </p>
        </div>

        <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100 mb-6">
          <div className="bg-[#F8FAFC] rounded-[16px] h-[48px] flex items-center px-4 gap-3 border border-gray-200">
            <Mail className="w-5 h-5 text-gray-400" />
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 outline-none text-[14px] bg-transparent"
            />
          </div>
        </div>

        <button
          onClick={handleResetPassword}
          className="w-full h-[52px] bg-[#EAB308] text-[#1E3A8A] rounded-[12px] shadow-md hover:bg-[#d9a307] transition-colors font-semibold text-[16px]"
        >
          Send Verification Code
        </button>
      </div>
    </div>
  );
}
