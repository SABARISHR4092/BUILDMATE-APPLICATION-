import { useNavigate } from 'react-router';
import { ArrowLeft, Layers, Home, Square, Sparkles } from 'lucide-react';

export default function LiveSummaryScreen() {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-[#F8FAFC] flex flex-col">
      <div className="bg-[#1E3A8A] rounded-b-[24px] p-4 pb-6 shadow-lg">
        <div className="flex items-center gap-4 mb-4">
          <button onClick={() => navigate('/advanced-settings')} className="bg-white/10 backdrop-blur-sm p-2 rounded-[12px]">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h2 className="text-[20px] font-bold text-white">Live Summary</h2>
        </div>
        <p className="text-blue-100 text-[13px]">Review before generating</p>
      </div>

      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        <div className="bg-gradient-to-br from-[#1E3A8A] to-[#2563eb] rounded-[20px] p-6 shadow-lg text-white">
          <p className="text-blue-100 text-[12px] mb-2">Estimated Total Cost</p>
          <h2 className="text-[40px] font-bold mb-1">₹27.5L</h2>
          <p className="text-blue-100 text-[11px]">Live calculation</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-[16px] p-4 shadow-sm border border-gray-100">
            <div className="bg-[#1E3A8A] p-3 rounded-[12px] w-fit mb-3">
              <Layers className="w-6 h-6 text-[#EAB308]" />
            </div>
            <p className="text-gray-600 text-[11px] mb-1">Floors</p>
            <p className="text-[24px] font-bold text-[#1E3A8A]">2</p>
          </div>

          <div className="bg-white rounded-[16px] p-4 shadow-sm border border-gray-100">
            <div className="bg-[#1E3A8A] p-3 rounded-[12px] w-fit mb-3">
              <Home className="w-6 h-6 text-[#EAB308]" />
            </div>
            <p className="text-gray-600 text-[11px] mb-1">Rooms</p>
            <p className="text-[24px] font-bold text-[#1E3A8A]">5</p>
          </div>
        </div>

        <div className="bg-white rounded-[16px] p-4 shadow-sm border border-gray-100">
          <div className="bg-[#1E3A8A] p-3 rounded-[12px] w-fit mb-3">
            <Square className="w-6 h-6 text-[#EAB308]" />
          </div>
          <p className="text-gray-600 text-[11px] mb-1">Total Built-up Area</p>
          <p className="text-[24px] font-bold text-[#1E3A8A]">1,850 sq ft</p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-[16px] p-4">
          <h4 className="text-[#1E3A8A] font-semibold text-[13px] mb-3">Materials Included</h4>
          <div className="space-y-2 text-[12px] text-gray-600">
            <p>• Cement, Sand, Aggregate</p>
            <p>• Steel, Bricks, Blocks</p>
            <p>• Flooring, Painting, Electrical</p>
            <p>• Plumbing, Fixtures</p>
          </div>
        </div>
      </div>

      <div className="p-4 bg-white border-t border-gray-200">
        <button
          onClick={() => navigate('/loading')}
          className="w-full h-[52px] bg-[#EAB308] text-[#1E3A8A] rounded-[12px] shadow-md hover:bg-[#d9a307] transition-colors font-semibold text-[16px] flex items-center justify-center gap-2"
        >
          <Sparkles className="w-5 h-5" />
          <span>Generate Estimation</span>
        </button>
      </div>
    </div>
  );
}
