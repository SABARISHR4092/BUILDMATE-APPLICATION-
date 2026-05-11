import { useNavigate } from 'react-router';
import { ArrowLeft, Building2, Calendar } from 'lucide-react';

export default function SavedProjectsScreen() {
  const navigate = useNavigate();

  const projects = [
    { id: 1, name: 'Residential Villa', location: 'Mumbai', cost: '₹27.5L', date: 'Apr 25, 2026', area: '1,850 sq ft' },
    { id: 2, name: 'Commercial Office', location: 'Pune', cost: '₹42.0L', date: 'Apr 20, 2026', area: '2,800 sq ft' },
    { id: 3, name: 'Apartment Renovation', location: 'Delhi', cost: '₹15.0L', date: 'Apr 15, 2026', area: '1,200 sq ft' },
  ];

  return (
    <div className="h-screen bg-[#F8FAFC] flex flex-col">
      <div className="bg-[#1E3A8A] rounded-b-[24px] p-4 pb-6 shadow-lg">
        <div className="flex items-center gap-4 mb-4">
          <button onClick={() => navigate('/home')} className="bg-white/10 backdrop-blur-sm p-2 rounded-[12px]">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h2 className="text-[20px] font-bold text-white">Saved Projects</h2>
        </div>
        <p className="text-blue-100 text-[13px]">View your estimation history</p>
      </div>

      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => navigate('/results')}
            className="w-full bg-white rounded-[16px] p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-left"
          >
            <div className="flex items-start gap-3 mb-4">
              <div className="bg-[#1E3A8A] p-3 rounded-[12px]">
                <Building2 className="w-6 h-6 text-[#EAB308]" />
              </div>
              <div className="flex-1">
                <h3 className="text-[#1E3A8A] font-semibold text-[14px] mb-1">{project.name}</h3>
                <p className="text-gray-500 text-[12px]">{project.location}</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div className="bg-gray-50 p-2 rounded-[8px]">
                <p className="text-[10px] text-gray-500 mb-1">Cost</p>
                <p className="text-[12px] text-[#1E3A8A] font-semibold">{project.cost}</p>
              </div>
              <div className="bg-gray-50 p-2 rounded-[8px]">
                <p className="text-[10px] text-gray-500 mb-1">Area</p>
                <p className="text-[12px] text-[#1E3A8A] font-semibold">{project.area}</p>
              </div>
              <div className="bg-gray-50 p-2 rounded-[8px]">
                <Calendar className="w-3 h-3 text-gray-400 mb-1" />
                <p className="text-[10px] text-gray-600">{project.date}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
