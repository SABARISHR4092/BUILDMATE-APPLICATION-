import { useNavigate } from 'react-router';
import { ArrowLeft, Download, Share2, Save } from 'lucide-react';
import BottomNav from './BottomNav';

export default function EstimationResultsScreen() {
  const navigate = useNavigate();

  const summary = [
    { label: 'Total Building Area', value: '1,850 sq ft', color: 'bg-blue-50' },
    { label: 'Floor-wise Analysis', value: '2 Floors', color: 'bg-purple-50' },
    { label: 'Total Rooms', value: '8 Rooms', color: 'bg-green-50' },
  ];

  const costs = [
    { label: 'Material Cost', value: '₹ 15,00,000', icon: '🏗️' },
    { label: 'Labor Cost', value: '₹ 8,00,000', icon: '👷' },
    { label: 'Equipment Cost', value: '₹ 2,50,000', icon: '⚙️' },
    { label: 'Other Expenses', value: '₹ 1,00,000', icon: '📋' },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-[88px]">
      <div className="bg-[#1E3A8A] rounded-b-[24px] p-4 pb-6 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/home')} className="bg-white/10 backdrop-blur-sm p-2 rounded-[12px]">
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>
            <h2 className="text-[20px] font-bold text-white">Estimation Results</h2>
          </div>
          <button onClick={() => navigate('/reports')} className="bg-white/10 backdrop-blur-sm p-2 rounded-[12px]">
            <Share2 className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      <div className="px-4 py-6 space-y-4">
        {/* Total Cost Card */}
        <div className="bg-gradient-to-br from-[#1E3A8A] to-[#2563eb] rounded-[24px] p-6 shadow-lg text-white">
          <p className="text-blue-100 text-[12px] mb-2">Total Project Cost</p>
          <h1 className="text-[48px] font-bold mb-1">₹ 26.5L</h1>
          <p className="text-blue-100 text-[12px]">Comprehensive estimation with all materials</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-3 gap-3">
          {summary.map((item, index) => (
            <div key={index} className={`${item.color} rounded-[16px] p-4`}>
              <p className="text-gray-600 text-[10px] mb-1">{item.label}</p>
              <p className="text-[#1E3A8A] text-[14px] font-bold">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Cost Breakdown */}
        <div className="bg-white rounded-[24px] p-5 shadow-md border border-gray-100">
          <h3 className="text-[#1E3A8A] font-semibold text-[15px] mb-4">Cost Breakdown</h3>
          <div className="space-y-3">
            {costs.map((cost, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-[16px]">
                <div className="flex items-center gap-3">
                  <span className="text-[24px]">{cost.icon}</span>
                  <span className="text-gray-700 text-[13px] font-medium">{cost.label}</span>
                </div>
                <span className="text-[#1E3A8A] text-[16px] font-bold">{cost.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-3">
          <button
            onClick={() => navigate('/material-breakdown')}
            className="bg-white rounded-[16px] p-4 shadow-sm border border-gray-100 flex flex-col items-center gap-2"
          >
            <div className="text-[24px]">📦</div>
            <span className="text-[11px] text-gray-700 font-medium">Materials</span>
          </button>
          <button
            onClick={() => navigate('/cost-analysis')}
            className="bg-white rounded-[16px] p-4 shadow-sm border border-gray-100 flex flex-col items-center gap-2"
          >
            <div className="text-[24px]">📊</div>
            <span className="text-[11px] text-gray-700 font-medium">Analysis</span>
          </button>
          <button
            onClick={() => navigate('/reports')}
            className="bg-white rounded-[16px] p-4 shadow-sm border border-gray-100 flex flex-col items-center gap-2"
          >
            <div className="text-[24px]">📄</div>
            <span className="text-[11px] text-gray-700 font-medium">Report</span>
          </button>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => navigate('/success')}
            className="h-[52px] bg-[#EAB308] text-[#1E3A8A] rounded-[12px] shadow-md hover:bg-[#d9a307] transition-colors font-semibold text-[14px] flex items-center justify-center gap-2"
          >
            <Save className="w-4 h-4" />
            <span>Save Project</span>
          </button>
          <button className="h-[52px] bg-white text-[#1E3A8A] rounded-[12px] border-2 border-[#1E3A8A] hover:bg-blue-50 transition-colors font-semibold text-[14px] flex items-center justify-center gap-2">
            <Download className="w-4 h-4" />
            <span>Download</span>
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
