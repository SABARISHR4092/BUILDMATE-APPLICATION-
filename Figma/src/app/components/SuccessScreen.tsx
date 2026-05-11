import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { CheckCircle, Home } from 'lucide-react';

export default function SuccessScreen() {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-gradient-to-br from-[#1E3A8A] to-[#2563eb] flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 0.6 }}
        className="mb-8"
      >
        <div className="bg-[#EAB308] p-8 rounded-full">
          <CheckCircle className="w-[100px] h-[100px] text-[#1E3A8A]" strokeWidth={2} />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-center mb-12"
      >
        <h2 className="text-[28px] font-bold text-white mb-3">Estimation Generated!</h2>
        <p className="text-blue-100 text-[14px] max-w-[280px]">
          Your project has been saved successfully and is ready to access
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="w-full max-w-[328px] space-y-3"
      >
        <button
          onClick={() => navigate('/results')}
          className="w-full h-[52px] bg-[#EAB308] text-[#1E3A8A] rounded-[12px] shadow-md hover:bg-[#d9a307] transition-colors font-semibold text-[16px]"
        >
          View Results
        </button>
        <button
          onClick={() => navigate('/home')}
          className="w-full h-[52px] bg-white/10 backdrop-blur-sm text-white rounded-[12px] border border-white/20 flex items-center justify-center gap-2 hover:bg-white/20 transition-colors font-semibold text-[14px]"
        >
          <Home className="w-5 h-5" />
          <span>Back to Home</span>
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-12 bg-white/10 backdrop-blur-sm rounded-[16px] p-4 max-w-[280px]"
      >
        <p className="text-blue-100 text-[11px] text-center">
          📊 Your detailed report is available in Downloads
        </p>
      </motion.div>
    </div>
  );
}
