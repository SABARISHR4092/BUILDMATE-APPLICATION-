import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft } from 'lucide-react';

export default function AdvancedSettingsScreen() {
  const navigate = useNavigate();
  const [settings, setSettings] = useState({
    wallThickness: 9,
    slabThickness: 6,
    columnSize: 12,
  });

  const toggles = [
    { key: 'wallThickness', label: 'Wall Thickness', unit: 'inches', min: 4, max: 12 },
    { key: 'slabThickness', label: 'Slab Thickness', unit: 'inches', min: 4, max: 10 },
    { key: 'columnSize', label: 'Column Size', unit: 'inches', min: 9, max: 18 },
  ];

  return (
    <div className="h-screen bg-[#F8FAFC] flex flex-col">
      <div className="bg-[#1E3A8A] rounded-b-[24px] p-4 pb-6 shadow-lg">
        <div className="flex items-center gap-4 mb-4">
          <button onClick={() => navigate('/add-rooms')} className="bg-white/10 backdrop-blur-sm p-2 rounded-[12px]">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h2 className="text-[20px] font-bold text-white">Advanced Settings</h2>
        </div>
        <p className="text-blue-100 text-[13px]">Configure construction parameters</p>
      </div>

      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {toggles.map((toggle) => (
          <div key={toggle.key} className="bg-white rounded-[16px] p-4 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h4 className="text-[#1E3A8A] font-semibold text-[14px]">{toggle.label}</h4>
                <p className="text-gray-500 text-[11px]">{toggle.unit}</p>
              </div>
              <span className="text-[#1E3A8A] font-bold text-[18px]">
                {settings[toggle.key as keyof typeof settings]}"
              </span>
            </div>
            <input
              type="range"
              min={toggle.min}
              max={toggle.max}
              value={settings[toggle.key as keyof typeof settings]}
              onChange={(e) => setSettings({...settings, [toggle.key]: parseInt(e.target.value)})}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#EAB308]"
            />
            <div className="flex justify-between text-[10px] text-gray-400 mt-1">
              <span>{toggle.min}"</span>
              <span>{toggle.max}"</span>
            </div>
          </div>
        ))}

        <div className="bg-blue-50 border border-blue-200 rounded-[16px] p-4">
          <p className="text-[12px] text-gray-700 leading-relaxed">
            💡 These settings affect material quantities. Standard values are pre-selected.
          </p>
        </div>
      </div>

      <div className="p-4 bg-white border-t border-gray-200">
        <button
          onClick={() => navigate('/live-summary')}
          className="w-full h-[52px] bg-[#EAB308] text-[#1E3A8A] rounded-[12px] shadow-md hover:bg-[#d9a307] transition-colors font-semibold text-[16px]"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
