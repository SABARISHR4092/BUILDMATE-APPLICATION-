import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Building, MapPin } from 'lucide-react';

export default function CreateProjectScreen() {
  const navigate = useNavigate();
  const [projectName, setProjectName] = useState('');
  const [location, setLocation] = useState('');
  const [projectType, setProjectType] = useState('');

  const types = ['Residential', 'Commercial', 'Industrial', 'Renovation'];
  const saveProject = async () => {

  const projectData = {

    projectName,

    location,

    projectType
  };

  try {

    const response = await fetch(
      "http://localhost:5000/api/projects/save",
      {

        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(projectData)
      }
    );

    const data = await response.json();

    console.log(data);

    alert("Project Saved Successfully!");

    navigate('/add-floors');

  } catch (error) {

    console.log(error);

    alert("Backend Connection Failed");
  }
};

  return (
    <div className="h-screen bg-[#F8FAFC] flex flex-col">
      <div className="bg-[#1E3A8A] rounded-b-[24px] p-4 pb-6 shadow-lg">
        <div className="flex items-center gap-4 mb-4">
          <button onClick={() => navigate('/home')} className="bg-white/10 backdrop-blur-sm p-2 rounded-[12px]">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h2 className="text-[20px] font-bold text-white">Create Project</h2>
        </div>
        <p className="text-blue-100 text-[13px]">Enter project details</p>
      </div>

      <div className="flex-1 p-4 space-y-5 overflow-y-auto">
        <div>
          <label className="text-gray-700 text-[13px] mb-2 block font-semibold">Project Name</label>
          <div className="bg-white rounded-[16px] h-[48px] flex items-center px-4 gap-3 shadow-sm border border-gray-200">
            <Building className="w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="e.g., Residential Villa"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="flex-1 outline-none text-[14px]"
            />
          </div>
        </div>

        <div>
          <label className="text-gray-700 text-[13px] mb-2 block font-semibold">Location</label>
          <div className="bg-white rounded-[16px] h-[48px] flex items-center px-4 gap-3 shadow-sm border border-gray-200">
            <MapPin className="w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="e.g., Mumbai, Maharashtra"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="flex-1 outline-none text-[14px]"
            />
          </div>
        </div>

        <div>
          <label className="text-gray-700 text-[13px] mb-2 block font-semibold">Building Type</label>
          <div className="space-y-3">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setProjectType(type)}
                className={`w-full h-[48px] rounded-[16px] border-2 transition-all text-[14px] font-semibold ${
                  projectType === type
                    ? 'bg-[#1E3A8A] border-[#1E3A8A] text-white'
                    : 'bg-white border-gray-200 text-gray-700 hover:border-[#1E3A8A]/30'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4 bg-white border-t border-gray-200">
        <button
          onClick={saveProject}
          className="w-full h-[52px] bg-[#EAB308] text-[#1E3A8A] rounded-[12px] shadow-md hover:bg-[#d9a307] transition-colors font-semibold text-[16px]"
        >
          Next
        </button>
      </div>
    </div>
    
  );
}
