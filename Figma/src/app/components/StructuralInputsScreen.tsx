import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft } from 'lucide-react';

export default function StructuralInputsScreen() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    projectName: '',
    clientName: '',
    plotArea: '',
    builtUpArea: '',
    wallThickness: '9',
    slabThickness: '6',
    columnDimensions: '12x12',
    beamDimensions: '9x12',
    staircaseType: 'rcc',
    roofType: 'flat',
    parkingArea: '',
    balconyArea: '',
    quality: 'standard',
  });

  const handleChange = (key: string, value: string) => {
    setInputs(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col pb-24">
      <div className="bg-[#1E3A8A] rounded-b-[24px] p-4 pb-6 shadow-lg">
        <div className="flex items-center gap-4 mb-4">
          <button onClick={() => navigate('/floor-room-config')} className="bg-white/10 backdrop-blur-sm p-2 rounded-[12px]">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h2 className="text-[20px] font-bold text-white">Structural Details</h2>
        </div>
        <p className="text-blue-100 text-[13px]">Enter project specifications</p>
      </div>

      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {/* Project Info */}
        <div className="bg-white rounded-[20px] p-5 shadow-md border border-gray-100">
          <h4 className="text-[#1E3A8A] font-semibold text-[14px] mb-4">Project Information</h4>
          <div className="space-y-3">
            <div>
              <label className="text-gray-600 text-[12px] font-medium mb-2 block">Project Name</label>
              <input
                type="text"
                value={inputs.projectName}
                onChange={(e) => handleChange('projectName', e.target.value)}
                placeholder="e.g., Green Valley Apartments"
                className="w-full bg-[#F8FAFC] h-[44px] px-4 rounded-[12px] border border-gray-200 outline-none text-[13px]"
              />
            </div>
            <div>
              <label className="text-gray-600 text-[12px] font-medium mb-2 block">Client Name</label>
              <input
                type="text"
                value={inputs.clientName}
                onChange={(e) => handleChange('clientName', e.target.value)}
                placeholder="e.g., John Developers"
                className="w-full bg-[#F8FAFC] h-[44px] px-4 rounded-[12px] border border-gray-200 outline-none text-[13px]"
              />
            </div>
          </div>
        </div>

        {/* Area Details */}
        <div className="bg-white rounded-[20px] p-5 shadow-md border border-gray-100">
          <h4 className="text-[#1E3A8A] font-semibold text-[14px] mb-4">Area Specifications</h4>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-gray-600 text-[11px] font-medium mb-2 block">Plot Area (sq ft)</label>
              <input
                type="number"
                value={inputs.plotArea}
                onChange={(e) => handleChange('plotArea', e.target.value)}
                placeholder="2000"
                className="w-full bg-[#F8FAFC] h-[44px] px-3 rounded-[12px] border border-gray-200 outline-none text-[13px]"
              />
            </div>
            <div>
              <label className="text-gray-600 text-[11px] font-medium mb-2 block">Built-up Area (sq ft)</label>
              <input
                type="number"
                value={inputs.builtUpArea}
                onChange={(e) => handleChange('builtUpArea', e.target.value)}
                placeholder="1800"
                className="w-full bg-[#F8FAFC] h-[44px] px-3 rounded-[12px] border border-gray-200 outline-none text-[13px]"
              />
            </div>
            <div>
              <label className="text-gray-600 text-[11px] font-medium mb-2 block">Parking Area (sq ft)</label>
              <input
                type="number"
                value={inputs.parkingArea}
                onChange={(e) => handleChange('parkingArea', e.target.value)}
                placeholder="200"
                className="w-full bg-[#F8FAFC] h-[44px] px-3 rounded-[12px] border border-gray-200 outline-none text-[13px]"
              />
            </div>
            <div>
              <label className="text-gray-600 text-[11px] font-medium mb-2 block">Balcony Area (sq ft)</label>
              <input
                type="number"
                value={inputs.balconyArea}
                onChange={(e) => handleChange('balconyArea', e.target.value)}
                placeholder="150"
                className="w-full bg-[#F8FAFC] h-[44px] px-3 rounded-[12px] border border-gray-200 outline-none text-[13px]"
              />
            </div>
          </div>
        </div>

        {/* Structural Elements */}
        <div className="bg-white rounded-[20px] p-5 shadow-md border border-gray-100">
          <h4 className="text-[#1E3A8A] font-semibold text-[14px] mb-4">Structural Elements</h4>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-gray-600 text-[11px] font-medium mb-2 block">Wall Thickness (inches)</label>
              <select
                value={inputs.wallThickness}
                onChange={(e) => handleChange('wallThickness', e.target.value)}
                className="w-full bg-[#F8FAFC] h-[44px] px-3 rounded-[12px] border border-gray-200 outline-none text-[13px]"
              >
                <option value="4">4"</option>
                <option value="6">6"</option>
                <option value="9">9"</option>
                <option value="12">12"</option>
              </select>
            </div>
            <div>
              <label className="text-gray-600 text-[11px] font-medium mb-2 block">Slab Thickness (inches)</label>
              <select
                value={inputs.slabThickness}
                onChange={(e) => handleChange('slabThickness', e.target.value)}
                className="w-full bg-[#F8FAFC] h-[44px] px-3 rounded-[12px] border border-gray-200 outline-none text-[13px]"
              >
                <option value="4">4"</option>
                <option value="5">5"</option>
                <option value="6">6"</option>
                <option value="8">8"</option>
              </select>
            </div>
            <div>
              <label className="text-gray-600 text-[11px] font-medium mb-2 block">Column Size</label>
              <select
                value={inputs.columnDimensions}
                onChange={(e) => handleChange('columnDimensions', e.target.value)}
                className="w-full bg-[#F8FAFC] h-[44px] px-3 rounded-[12px] border border-gray-200 outline-none text-[13px]"
              >
                <option value="9x9">9" x 9"</option>
                <option value="12x12">12" x 12"</option>
                <option value="15x15">15" x 15"</option>
              </select>
            </div>
            <div>
              <label className="text-gray-600 text-[11px] font-medium mb-2 block">Beam Size</label>
              <select
                value={inputs.beamDimensions}
                onChange={(e) => handleChange('beamDimensions', e.target.value)}
                className="w-full bg-[#F8FAFC] h-[44px] px-3 rounded-[12px] border border-gray-200 outline-none text-[13px]"
              >
                <option value="9x12">9" x 12"</option>
                <option value="9x15">9" x 15"</option>
                <option value="12x15">12" x 15"</option>
              </select>
            </div>
          </div>
        </div>

        {/* Quality Selection */}
        <div className="bg-white rounded-[20px] p-5 shadow-md border border-gray-100">
          <h4 className="text-[#1E3A8A] font-semibold text-[14px] mb-4">Construction Quality</h4>
          <div className="space-y-2">
            {['standard', 'premium', 'luxury'].map((quality) => (
              <button
                key={quality}
                onClick={() => handleChange('quality', quality)}
                className={`w-full p-3 rounded-[12px] border-2 transition-all text-left ${
                  inputs.quality === quality
                    ? 'border-[#1E3A8A] bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <span className="text-[13px] font-semibold text-[#1E3A8A] capitalize">{quality}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 max-w-[360px] mx-auto p-4 bg-white border-t border-gray-200">
        <button
          onClick={() => navigate('/cad-upload')}
          className="w-full h-[52px] bg-[#EAB308] text-[#1E3A8A] rounded-[12px] shadow-md hover:bg-[#d9a307] transition-colors font-semibold text-[16px]"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
