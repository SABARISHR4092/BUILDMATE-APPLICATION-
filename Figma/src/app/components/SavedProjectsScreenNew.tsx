import { useNavigate } from 'react-router';
import { ArrowLeft, Building2, Calendar, FolderOpen } from 'lucide-react';
import BottomNav from './BottomNav';

export default function SavedProjectsScreenNew() {
  const navigate = useNavigate();

  // Empty state - no projects
  const hasProjects = false;

  const projects = [
    // Empty for now as per requirements
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-[88px]">
      <div className="bg-[#1E3A8A] rounded-b-[24px] p-4 pb-6 shadow-lg">
        <div className="flex items-center gap-4 mb-4">
          <button onClick={() => navigate('/home')} className="bg-white/10 backdrop-blur-sm p-2 rounded-[12px]">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h2 className="text-[20px] font-bold text-white">Saved Projects</h2>
        </div>
        <p className="text-blue-100 text-[13px]">View your estimation history</p>
      </div>

      <div className="px-4 py-8">
        {!hasProjects ? (
          /* Empty State */
          <div className="bg-white rounded-[28px] p-10 shadow-sm border border-gray-100 text-center">
            <div className="w-28 h-28 mx-auto mb-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center">
              <FolderOpen className="w-14 h-14 text-[#1E3A8A] opacity-50" strokeWidth={1.5} />
            </div>
            <h3 className="text-gray-800 text-[18px] font-bold mb-3">No Recent Projects Yet</h3>
            <p className="text-gray-500 text-[14px] mb-8 max-w-[240px] mx-auto leading-relaxed">
              Your saved projects will appear here. Start by creating your first estimation.
            </p>
            <button
              onClick={() => navigate('/create-project')}
              className="bg-[#EAB308] text-[#1E3A8A] px-8 py-4 rounded-[14px] font-semibold text-[15px] shadow-md hover:bg-[#d9a307] transition-colors"
            >
              Create New Project
            </button>
          </div>
        ) : (
          /* Project List */
          <div className="space-y-4">
            {projects.map((project: any) => (
              <button
                key={project.id}
                onClick={() => navigate('/estimation-results')}
                className="w-full bg-white rounded-[20px] p-5 shadow-md border border-gray-100 hover:shadow-lg transition-shadow text-left"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-[#1E3A8A] p-3 rounded-[14px]">
                    <Building2 className="w-6 h-6 text-[#EAB308]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[#1E3A8A] font-semibold text-[15px] mb-1">{project.name}</h3>
                    <p className="text-gray-500 text-[12px]">{project.location}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-gray-50 p-3 rounded-[12px]">
                    <p className="text-[10px] text-gray-500 mb-1">Cost</p>
                    <p className="text-[13px] text-[#1E3A8A] font-semibold">{project.cost}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-[12px]">
                    <p className="text-[10px] text-gray-500 mb-1">Area</p>
                    <p className="text-[13px] text-[#1E3A8A] font-semibold">{project.area}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-[12px]">
                    <Calendar className="w-3 h-3 text-gray-400 mb-1" />
                    <p className="text-[10px] text-gray-600">{project.date}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
