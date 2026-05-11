import { useNavigate } from 'react-router';
import { ArrowLeft, FileText, Download, Share2, Printer, FileSpreadsheet } from 'lucide-react';

export default function ReportsScreen() {
  const navigate = useNavigate();

  const reports = [
    { icon: FileText, label: 'Export as PDF', subtitle: 'Comprehensive project report', color: 'bg-red-50', iconColor: 'text-red-600' },
    { icon: FileSpreadsheet, label: 'Export as Excel', subtitle: 'Detailed material breakdown', color: 'bg-green-50', iconColor: 'text-green-600' },
    { icon: Printer, label: 'Print Report', subtitle: 'Ready-to-print document', color: 'bg-blue-50', iconColor: 'text-blue-600' },
    { icon: Share2, label: 'Share Report', subtitle: 'Email, WhatsApp, Drive', color: 'bg-purple-50', iconColor: 'text-purple-600' },
  ];

  const recentReports = [
    { name: 'Green Valley Apartments - Report.pdf', date: 'Apr 28, 2026', size: '2.4 MB' },
    { name: 'Residential Villa - Estimation.xlsx', date: 'Apr 25, 2026', size: '856 KB' },
    { name: 'Commercial Complex - Analysis.pdf', date: 'Apr 20, 2026', size: '3.1 MB' },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col pb-24">
      <div className="bg-[#1E3A8A] rounded-b-[24px] p-4 pb-6 shadow-lg">
        <div className="flex items-center gap-4 mb-4">
          <button onClick={() => navigate('/estimation-results')} className="bg-white/10 backdrop-blur-sm p-2 rounded-[12px]">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h2 className="text-[20px] font-bold text-white">Reports & Export</h2>
        </div>
        <p className="text-blue-100 text-[13px]">Generate and share project reports</p>
      </div>

      <div className="flex-1 px-4 py-6 space-y-6 overflow-y-auto">
        {/* Export Options */}
        <div>
          <h3 className="text-gray-700 text-[14px] font-semibold mb-4">Export Options</h3>
          <div className="grid grid-cols-2 gap-3">
            {reports.map((report, index) => (
              <button
                key={index}
                className="bg-white rounded-[20px] p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all"
              >
                <div className={`${report.color} p-4 rounded-[16px] mb-3 w-fit`}>
                  <report.icon className={`w-7 h-7 ${report.iconColor}`} strokeWidth={2} />
                </div>
                <h4 className="text-[#1E3A8A] font-semibold text-[13px] mb-1 text-left">{report.label}</h4>
                <p className="text-gray-500 text-[10px] text-left">{report.subtitle}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Generate Invoice */}
        <div className="bg-gradient-to-br from-[#EAB308] to-[#f59e0b] rounded-[24px] p-6 shadow-lg text-[#1E3A8A]">
          <h3 className="text-[18px] font-bold mb-2">Generate Invoice</h3>
          <p className="text-[12px] opacity-90 mb-4">Create a professional invoice for your client</p>
          <button className="bg-white text-[#1E3A8A] px-6 py-3 rounded-[12px] font-semibold text-[13px] shadow-md hover:bg-gray-50 transition-colors">
            Create Invoice
          </button>
        </div>

        {/* Recent Reports */}
        <div>
          <h3 className="text-gray-700 text-[14px] font-semibold mb-4">Recent Reports</h3>
          <div className="space-y-3">
            {recentReports.map((report, index) => (
              <div key={index} className="bg-white rounded-[20px] p-4 shadow-sm border border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3 flex-1">
                  <div className="bg-blue-50 p-3 rounded-[12px]">
                    <FileText className="w-5 h-5 text-[#1E3A8A]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[#1E3A8A] font-medium text-[12px] mb-1 truncate">{report.name}</h4>
                    <p className="text-gray-500 text-[10px]">{report.date} · {report.size}</p>
                  </div>
                </div>
                <button className="bg-[#EAB308] p-2 rounded-[10px] ml-2">
                  <Download className="w-4 h-4 text-[#1E3A8A]" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 max-w-[360px] mx-auto p-4 bg-white border-t border-gray-200">
        <button
          onClick={() => navigate('/success')}
          className="w-full h-[52px] bg-[#EAB308] text-[#1E3A8A] rounded-[12px] shadow-md hover:bg-[#d9a307] transition-colors font-semibold text-[16px]"
        >
          Save & Export Report
        </button>
      </div>
    </div>
  );
}
