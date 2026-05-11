import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Mail, Lock } from 'lucide-react';
import Logo from './Logo';

export default function LoginScreen() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigate('/login-progress');
  };

  const handleGuestLogin = () => {
    navigate('/login-progress');
  };

  return (
    <div className="h-screen bg-[#F8FAFC] flex flex-col">
      <div className="flex-1 flex flex-col justify-center px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Logo size={100} showText={false} />
          </div>
          <h1 className="text-[28px] font-bold text-[#1E3A8A] mb-2">Welcome Back</h1>
          <p className="text-gray-600 text-[14px]">Sign in to BuildMate</p>
        </div>

        <div className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100 mb-6">
          <div className="space-y-4">
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
            <div className="bg-[#F8FAFC] rounded-[16px] h-[48px] flex items-center px-4 gap-3 border border-gray-200">
              <Lock className="w-5 h-5 text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="flex-1 outline-none text-[14px] bg-transparent"
              />
            </div>
            <div className="text-right">
              <button className="text-[#1E3A8A] text-[12px] font-semibold">Forgot Password?</button>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={handleLogin}
            className="w-full h-[52px] bg-[#EAB308] text-[#1E3A8A] rounded-[12px] shadow-md hover:bg-[#d9a307] transition-colors font-semibold text-[16px]"
          >
            Login
          </button>
          <button
            onClick={handleGuestLogin}
            className="w-full h-[52px] bg-white text-gray-600 rounded-[12px] border-2 border-gray-300 hover:bg-gray-50 transition-colors text-[14px] font-medium"
          >
            Continue as Guest
          </button>
        </div>

        <p className="text-center text-gray-500 text-[12px] mt-8">
          Don't have an account?{' '}
          <button className="text-[#1E3A8A] font-semibold">Sign Up</button>
        </p>
      </div>
    </div>
  );
}
