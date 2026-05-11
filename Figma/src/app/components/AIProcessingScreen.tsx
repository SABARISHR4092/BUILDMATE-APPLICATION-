import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { Brain, CheckCircle } from 'lucide-react';

export default function AIProcessingScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/estimation-results');
    }, 4000);
    return () => clearTimeout(timer);
  }, [navigate]);

  const steps = [
    { label: 'Analyzing building structure', delay: 0 },
    { label: 'Calculating material quantities', delay: 1 },
    { label: 'Processing cost estimation', delay: 2 },
    { label: 'Generating detailed report', delay: 3 },
  ];

  return (
    <div className="h-screen bg-gradient-to-br from-[#1E3A8A] to-[#2563eb] flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-[28px]">
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Brain className="w-20 h-20 text-[#EAB308]" strokeWidth={1.5} />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-center mb-12"
      >
        <h2 className="text-[28px] font-bold text-white mb-2">AI Processing</h2>
        <p className="text-blue-100 text-[14px]">Analyzing your project data...</p>
      </motion.div>

      <div className="w-full max-w-[300px] space-y-4">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: step.delay * 0.8 }}
            className="bg-white/10 backdrop-blur-sm rounded-[16px] p-4 flex items-center gap-3"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: step.delay * 0.8 + 0.5 }}
              className="bg-[#EAB308] p-1 rounded-full"
            >
              <CheckCircle className="w-5 h-5 text-[#1E3A8A]" />
            </motion.div>
            <span className="text-white text-[13px]">{step.label}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="mt-8 bg-white/10 backdrop-blur-sm rounded-[16px] px-6 py-3"
      >
        <p className="text-blue-100 text-[12px] text-center">
          This may take a few moments...
        </p>
      </motion.div>
    </div>
  );
}
