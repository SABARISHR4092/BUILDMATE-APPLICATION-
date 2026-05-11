import { useNavigate } from 'react-router';
import { ArrowLeft } from 'lucide-react';

export default function MaterialBreakdownScreen() {
  const navigate = useNavigate();

  const materials = [
    { name: 'Cement', quantity: '450 bags', unit: '50kg', cost: '₹ 2,25,000', icon: '🏗️' },
    { name: 'Steel (TMT Bars)', quantity: '3.2 tons', unit: 'tons', cost: '₹ 3,20,000', icon: '⚙️' },
    { name: 'Bricks', quantity: '25,000 pcs', unit: 'pieces', cost: '₹ 1,75,000', icon: '🧱' },
    { name: 'Sand', quantity: '120 cft', unit: 'cubic feet', cost: '₹ 48,000', icon: '⛏️' },
    { name: 'Aggregate (20mm)', quantity: '150 cft', unit: 'cubic feet', cost: '₹ 60,000', icon: '🪨' },
    { name: 'Concrete (RMC)', quantity: '45 m³', unit: 'cubic meter', cost: '₹ 2,70,000', icon: '🏗️' },
    { name: 'Electrical Materials', quantity: 'Lump Sum', unit: '-', cost: '₹ 1,50,000', icon: '⚡' },
    { name: 'Plumbing Materials', quantity: 'Lump Sum', unit: '-', cost: '₹ 1,20,000', icon: '🚰' },
    { name: 'Paint & Finishing', quantity: '500 liters', unit: 'liters', cost: '₹ 1,00,000', icon: '🎨' },
    { name: 'Flooring Materials', quantity: '1800 sq ft', unit: 'sq ft', cost: '₹ 1,80,000', icon: '📐' },
  ];

  const totalCost = materials.reduce((sum, m) => {
    const cost = parseInt(m.cost.replace(/[₹,\s]/g, ''));
    return sum + cost;
  }, 0);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col pb-24">
      <div className="bg-[#1E3A8A] rounded-b-[24px] p-4 pb-6 shadow-lg">
        <div className="flex items-center gap-4 mb-4">
          <button onClick={() => navigate('/estimation-results')} className="bg-white/10 backdrop-blur-sm p-2 rounded-[12px]">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h2 className="text-[20px] font-bold text-white">Material Breakdown</h2>
        </div>
        <p className="text-blue-100 text-[13px]">Detailed material quantities & costs</p>
      </div>

      <div className="flex-1 px-4 py-6 space-y-4 overflow-y-auto">
        {/* Total Material Cost */}
        <div className="bg-gradient-to-br from-[#EAB308] to-[#f59e0b] rounded-[20px] p-6 shadow-lg text-[#1E3A8A]">
          <p className="text-[#1E3A8A] opacity-80 text-[12px] mb-1">Total Material Cost</p>
          <h2 className="text-[36px] font-bold">₹ {(totalCost / 100000).toFixed(2)}L</h2>
        </div>

        {/* Material List */}
        <div className="space-y-3">
          {materials.map((material, index) => (
            <div key={index} className="bg-white rounded-[20px] p-5 shadow-md border border-gray-100">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-[32px]">{material.icon}</span>
                  <div>
                    <h4 className="text-[#1E3A8A] font-semibold text-[14px]">{material.name}</h4>
                    <p className="text-gray-500 text-[11px]">{material.unit}</p>
                  </div>
                </div>
                <span className="text-[#1E3A8A] font-bold text-[16px]">{material.cost}</span>
              </div>
              <div className="bg-gray-50 rounded-[12px] p-3">
                <p className="text-gray-600 text-[12px]">
                  <span className="font-semibold">Quantity:</span> {material.quantity}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 max-w-[360px] mx-auto p-4 bg-white border-t border-gray-200">
        <button
          onClick={() => navigate('/cost-analysis')}
          className="w-full h-[52px] bg-[#EAB308] text-[#1E3A8A] rounded-[12px] shadow-md hover:bg-[#d9a307] transition-colors font-semibold text-[16px]"
        >
          View Cost Analysis
        </button>
      </div>
    </div>
  );
}
