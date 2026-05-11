import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import Logo from './Logo';

export default function OTPVerificationScreen() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleVerify = () => {
    navigate('/login-progress');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
      <div className="p-4">
        <button onClick={() => navigate(-1)} className="bg-white p-2 rounded-[12px] shadow-sm">
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <div className="flex-1 flex flex-col justify-center px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Logo size={100} showText={false} />
          </div>
          <h1 className="text-[28px] font-bold text-[#1E3A8A] mb-2">Enter Verification Code</h1>
          <p className="text-gray-600 text-[14px] max-w-[280px] mx-auto">
            We've sent a 6-digit code to your email
          </p>
        </div>

        <div className="flex justify-center gap-3 mb-8">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              className="w-12 h-14 text-center text-[24px] font-bold bg-white rounded-[12px] border-2 border-gray-200 focus:border-[#1E3A8A] outline-none shadow-sm"
            />
          ))}
        </div>

        <button
          onClick={handleVerify}
          className="w-full h-[52px] bg-[#EAB308] text-[#1E3A8A] rounded-[12px] shadow-md hover:bg-[#d9a307] transition-colors font-semibold text-[16px] mb-4"
        >
          Verify Code
        </button>

        <p className="text-center text-gray-500 text-[12px]">
          Didn't receive code?{' '}
          <button className="text-[#1E3A8A] font-semibold">Resend</button>
        </p>
      </div>
    </div>
  );
}
