import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';

export default function LoadingScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/results');
    }, 3500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-screen bg-gradient-to-br from-[#1E3A8A] to-[#2563eb] flex flex-col items-center justify-center px-4">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="w-20 h-20 border-4 border-white/20 border-t-[#EAB308] rounded-full mb-8"
      />
      <h2 className="text-[24px] font-bold text-white mb-3 text-center">Analyzing Building Structure</h2>
      <p className="text-blue-100 text-[14px] text-center max-w-[280px]">
        Calculating materials and generating your detailed cost report...
      </p>

      <div className="mt-12 space-y-3 w-full max-w-[280px]">
        {['Calculating quantities', 'Processing materials', 'Generating report'].map((text, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.8 }}
            className="bg-white/10 backdrop-blur-sm rounded-[16px] p-3 text-white text-[13px] text-center"
          >
            {text}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
