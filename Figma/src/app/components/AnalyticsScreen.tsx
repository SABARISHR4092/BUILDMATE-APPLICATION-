import { useNavigate } from 'react-router';
import { ArrowLeft, TrendingUp, TrendingDown } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import BottomNav from './BottomNav';

export default function AnalyticsScreen() {
  const navigate = useNavigate();

  const monthlyData = [
    { month: 'Jan', projects: 4, cost: 85 },
    { month: 'Feb', projects: 6, cost: 120 },
    { month: 'Mar', projects: 8, cost: 180 },
    { month: 'Apr', projects: 12, cost: 260 },
    { month: 'May', projects: 10, cost: 220 },
  ];

  const stats = [
    { label: 'Total Projects', value: '40', change: '+12%', trending: 'up', icon: '📊' },
    { label: 'Avg. Project Cost', value: '₹ 24L', change: '+8%', trending: 'up', icon: '💰' },
    { label: 'Material Savings', value: '₹ 3.2L', change: '+15%', trending: 'up', icon: '💡' },
    { label: 'Completion Rate', value: '94%', change: '-2%', trending: 'down', icon: '✅' },
  ];

  const materialUsage = [
    { material: 'Cement', usage: 85 },
    { material: 'Steel', usage: 92 },
    { material: 'Bricks', usage: 78 },
    { material: 'Sand', usage: 65 },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-[88px]">
      <div className="bg-[#1E3A8A] rounded-b-[24px] p-4 pb-6 shadow-lg">
        <div className="flex items-center gap-4 mb-4">
          <button onClick={() => navigate('/home')} className="bg-white/10 backdrop-blur-sm p-2 rounded-[12px]">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h2 className="text-[20px] font-bold text-white">Analytics</h2>
        </div>
        <p className="text-blue-100 text-[13px]">Project insights & trends</p>
      </div>

      <div className="px-4 py-6 space-y-4">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-[20px] p-5 shadow-md border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[24px]">{stat.icon}</span>
                <div className={`flex items-center gap-1 px-2 py-1 rounded-full ${
                  stat.trending === 'up' ? 'bg-green-50' : 'bg-red-50'
                }`}>
                  {stat.trending === 'up' ? (
                    <TrendingUp className="w-3 h-3 text-green-600" />
                  ) : (
                    <TrendingDown className="w-3 h-3 text-red-600" />
                  )}
                  <span className={`text-[10px] font-semibold ${
                    stat.trending === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>{stat.change}</span>
                </div>
              </div>
              <p className="text-gray-600 text-[11px] mb-1">{stat.label}</p>
              <p className="text-[#1E3A8A] text-[20px] font-bold">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Monthly Trend */}
        <div className="bg-white rounded-[24px] p-5 shadow-md border border-gray-100">
          <h3 className="text-[#1E3A8A] font-semibold text-[15px] mb-4">Monthly Projects Trend</h3>
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Line type="monotone" dataKey="projects" stroke="#1E3A8A" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Material Usage */}
        <div className="bg-white rounded-[24px] p-5 shadow-md border border-gray-100">
          <h3 className="text-[#1E3A8A] font-semibold text-[15px] mb-4">Material Usage Efficiency</h3>
          <div className="space-y-4">
            {materialUsage.map((item, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-700 text-[13px] font-medium">{item.material}</span>
                  <span className="text-[#1E3A8A] text-[13px] font-bold">{item.usage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-[#EAB308] h-2 rounded-full transition-all"
                    style={{ width: `${item.usage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Comparison */}
        <div className="bg-white rounded-[24px] p-5 shadow-md border border-gray-100">
          <h3 className="text-[#1E3A8A] font-semibold text-[15px] mb-4">Cost Trend (Lakhs ₹)</h3>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Bar dataKey="cost" fill="#EAB308" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
