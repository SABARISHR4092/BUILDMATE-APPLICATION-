import { useNavigate } from 'react-router';
import { ArrowLeft, Download, Share2, Save } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

export default function ResultsScreen() {
  const navigate = useNavigate();

  const costData = [
    { name: 'Materials', value: 1500000, color: '#1E3A8A' },
    { name: 'Labor', value: 800000, color: '#EAB308' },
    { name: 'Other', value: 450000, color: '#3b82f6' },
  ];

  const materials = [
    { name: 'Cement', quantity: '450 bags', cost: '₹2.25L' },
    { name: 'Steel', quantity: '3.2 tons', cost: '₹3.20L' },
    { name: 'Bricks', quantity: '25,000 pcs', cost: '₹1.75L' },
    { name: 'Sand', quantity: '120 cft', cost: '₹48K' },
  ];

  return (
    <div className="h-screen bg-[#F8FAFC] flex flex-col">
      <div className="bg-[#1E3A8A] rounded-b-[24px] p-4 pb-6 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/home')} className="bg-white/10 backdrop-blur-sm p-2 rounded-[12px]">
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>
            <h2 className="text-[20px] font-bold text-white">Results</h2>
          </div>
          <button className="bg-white/10 backdrop-blur-sm p-2 rounded-[12px]">
            <Share2 className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      <div className="flex-1 p-4 space-y-4 overflow-y-auto pb-24">
        <div className="bg-gradient-to-br from-[#1E3A8A] to-[#2563eb] rounded-[20px] p-6 shadow-lg text-white">
          <p className="text-blue-100 text-[12px] mb-2">Total Project Cost</p>
          <h1 className="text-[40px] font-bold mb-1">₹27.5L</h1>
          <p className="text-blue-100 text-[11px]">All materials + labor included</p>
        </div>

        <div className="bg-white rounded-[16px] p-4 shadow-sm border border-gray-100">
          <h3 className="text-[#1E3A8A] font-semibold text-[14px] mb-4">Cost Breakdown</h3>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie
                data={costData}
                cx="50%"
                cy="50%"
                outerRadius={70}
                dataKey="value"
                label={(entry) => `₹${(entry.value / 100000).toFixed(1)}L`}
              >
                {costData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-3 gap-2 mt-4">
            {costData.map((item) => (
              <div key={item.name} className="text-center">
                <div className="w-3 h-3 rounded-full mx-auto mb-1" style={{ backgroundColor: item.color }} />
                <p className="text-[10px] text-gray-600">{item.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[16px] p-4 shadow-sm border border-gray-100">
          <h3 className="text-[#1E3A8A] font-semibold text-[14px] mb-4">Material Quantities</h3>
          <div className="space-y-3">
            {materials.map((material) => (
              <div key={material.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-[12px]">
                <div className="flex-1">
                  <p className="text-[#1E3A8A] font-semibold text-[13px]">{material.name}</p>
                  <p className="text-gray-500 text-[11px]">{material.quantity}</p>
                </div>
                <p className="text-[#1E3A8A] font-bold text-[14px]">{material.cost}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 max-w-[360px] mx-auto p-4 bg-white border-t border-gray-200">
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => navigate('/success')}
            className="h-[52px] bg-[#EAB308] text-[#1E3A8A] rounded-[12px] shadow-md hover:bg-[#d9a307] transition-colors font-semibold text-[14px] flex items-center justify-center gap-2"
          >
            <Save className="w-4 h-4" />
            <span>Save</span>
          </button>
          <button className="h-[52px] bg-white text-[#1E3A8A] rounded-[12px] border-2 border-[#1E3A8A] hover:bg-blue-50 transition-colors font-semibold text-[14px] flex items-center justify-center gap-2">
            <Download className="w-4 h-4" />
            <span>Download</span>
          </button>
        </div>
      </div>
    </div>
  );
}
