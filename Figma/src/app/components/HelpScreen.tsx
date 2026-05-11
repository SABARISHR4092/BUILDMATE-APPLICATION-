import { useNavigate } from 'react-router';
import { ArrowLeft, MessageCircle, Mail, Phone, FileText, Video, ChevronRight } from 'lucide-react';

export default function HelpScreen() {
  const navigate = useNavigate();

  const helpTopics = [
    { icon: Video, title: 'Video Tutorials', subtitle: 'Step-by-step guides' },
    { icon: FileText, title: 'Documentation', subtitle: 'Comprehensive user manual' },
    { icon: MessageCircle, title: 'FAQs', subtitle: 'Frequently asked questions' },
  ];

  const contactOptions = [
    { icon: MessageCircle, label: 'Live Chat', subtitle: 'Available 9 AM - 6 PM', action: 'Start Chat' },
    { icon: Mail, label: 'Email Support', subtitle: 'support@buildmate.com', action: 'Send Email' },
    { icon: Phone, label: 'Phone Support', subtitle: '+91 98765 43210', action: 'Call Now' },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col pb-24">
      <div className="bg-[#1E3A8A] rounded-b-[24px] p-4 pb-6 shadow-lg">
        <div className="flex items-center gap-4 mb-4">
          <button onClick={() => navigate('/settings')} className="bg-white/10 backdrop-blur-sm p-2 rounded-[12px]">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h2 className="text-[20px] font-bold text-white">Help & Support</h2>
        </div>
        <p className="text-blue-100 text-[13px]">We're here to help you</p>
      </div>

      <div className="flex-1 px-4 py-6 space-y-6 overflow-y-auto">
        {/* Help Topics */}
        <div>
          <h3 className="text-gray-700 text-[14px] font-semibold mb-4">Learn BuildMate</h3>
          <div className="space-y-3">
            {helpTopics.map((topic, index) => (
              <button
                key={index}
                className="w-full bg-white rounded-[20px] p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-blue-50 p-3 rounded-[14px]">
                    <topic.icon className="w-6 h-6 text-[#1E3A8A]" strokeWidth={2} />
                  </div>
                  <div className="text-left">
                    <h4 className="text-[#1E3A8A] font-semibold text-[14px]">{topic.title}</h4>
                    <p className="text-gray-500 text-[12px]">{topic.subtitle}</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div>
          <h3 className="text-gray-700 text-[14px] font-semibold mb-4">Contact Support</h3>
          <div className="space-y-3">
            {contactOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-[20px] p-5 shadow-sm border border-gray-100">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-[#EAB308] p-3 rounded-[14px]">
                    <option.icon className="w-6 h-6 text-[#1E3A8A]" strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[#1E3A8A] font-semibold text-[14px] mb-1">{option.label}</h4>
                    <p className="text-gray-600 text-[12px]">{option.subtitle}</p>
                  </div>
                </div>
                <button className="w-full bg-blue-50 text-[#1E3A8A] h-[44px] rounded-[12px] font-semibold text-[13px] hover:bg-blue-100 transition-colors">
                  {option.action}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Feedback */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-[24px] p-6 border border-blue-100">
          <h3 className="text-[#1E3A8A] font-semibold text-[15px] mb-2">Send Feedback</h3>
          <p className="text-gray-700 text-[12px] mb-4 leading-relaxed">
            Help us improve BuildMate by sharing your suggestions and feature requests
          </p>
          <button className="bg-[#EAB308] text-[#1E3A8A] px-6 py-3 rounded-[12px] font-semibold text-[13px] shadow-sm hover:bg-[#d9a307] transition-colors">
            Submit Feedback
          </button>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 max-w-[360px] mx-auto p-4 bg-white border-t border-gray-200">
        <button
          onClick={() => navigate('/settings')}
          className="w-full h-[52px] bg-white text-gray-600 rounded-[12px] border-2 border-gray-200 hover:bg-gray-50 transition-colors font-semibold text-[14px]"
        >
          Back to Settings
        </button>
      </div>
    </div>
  );
}
