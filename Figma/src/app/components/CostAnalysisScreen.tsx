import { useNavigate } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

export default function CostAnalysisScreen() {
  const navigate = useNavigate();

  const pieData = [
    { name: 'Materials', value: 1500000, color: '#1E3A8A' },
    { name: 'Labor', value: 800000, color: '#EAB308' },
    { name: 'Equipment', value: 250000, color: '#3b82f6' },
    { name: 'Other', value: 100000, color: '#60a5fa' },
  ];

  const barData = [
    { name: 'Cement', cost: 225000 },
    { name: 'Steel', cost: 320000 },
    { name: 'Concrete', cost: 270000 },
    { name: 'Bricks', cost: 175000 },
    { name: 'Electrical', cost: 150000 },
  ];

  const costDetails = [
    { category: 'Foundation Work', percentage: '15%', amount: '₹ 3,97,500' },
    { category: 'Structural Work', percentage: '35%', amount: '₹ 9,27,500' },
    { category: 'Masonry Work', percentage: '20%', amount: '₹ 5,30,000' },
    { category: 'Finishing Work', percentage: '25%', amount: '₹ 6,62,500' },
    { category: 'Services & MEP', percentage: '5%', amount: '₹ 1,32,500' },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col pb-24">
      <div className="bg-[#1E3A8A] rounded-b-[24px] p-4 pb-6 shadow-lg">
        <div className="flex items-center gap-4 mb-4">
          <button onClick={() => navigate('/estimation-results')} className="bg-white/10 backdrop-blur-sm p-2 rounded-[12px]">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h2 className="text-[20px] font-bold text-white">Cost Analysis</h2>
        </div>
        <p className="text-blue-100 text-[13px]">Comprehensive cost distribution</p>
      </div>

      <div className="flex-1 px-4 py-6 space-y-4 overflow-y-auto">
        {/* Pie Chart */}
        <div className="bg-white rounded-[24px] p-5 shadow-md border border-gray-100">
          <h3 className="text-[#1E3A8A] font-semibold text-[15px] mb-4">Cost Distribution</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label={(entry) => `${entry.name}`}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {pieData.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-[11px] text-gray-600">{item.name}: ₹{(item.value/100000).toFixed(1)}L</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bar Chart */}
        <div className="bg-white rounded-[24px] p-5 shadow-md border border-gray-100">
          <h3 className="text-[#1E3A8A] font-semibold text-[15px] mb-4">Top Materials Cost</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ fontSize: 10 }} />
              <YAxis tick={{ fontSize: 10 }} />
              <Bar dataKey="cost" fill="#1E3A8A" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Phase-wise Breakdown */}
        <div className="bg-white rounded-[24px] p-5 shadow-md border border-gray-100">
          <h3 className="text-[#1E3A8A] font-semibold text-[15px] mb-4">Phase-wise Cost</h3>
          <div className="space-y-3">
            {costDetails.map((detail, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 text-[13px] font-medium">{detail.category}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[#1E3A8A] text-[12px] font-bold">{detail.percentage}</span>
                    <span className="text-[#1E3A8A] text-[14px] font-bold">{detail.amount}</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-[#EAB308] h-2 rounded-full transition-all"
                    style={{ width: detail.percentage }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 max-w-[360px] mx-auto p-4 bg-white border-t border-gray-200">
        <button
          onClick={() => navigate('/reports')}
          className="w-full h-[52px] bg-[#EAB308] text-[#1E3A8A] rounded-[12px] shadow-md hover:bg-[#d9a307] transition-colors font-semibold text-[16px]"
        >
          Generate Report
        </button>
      </div>
    </div>
  );
}
