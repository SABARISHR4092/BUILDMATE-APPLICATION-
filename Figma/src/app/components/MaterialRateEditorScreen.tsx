import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Edit3 } from 'lucide-react';

export default function MaterialRateEditorScreen() {
  const navigate = useNavigate();
  const [editMode, setEditMode] = useState<number | null>(null);

  const [materials, setMaterials] = useState([
    { id: 1, name: 'Cement', rate: 500, unit: 'bag' },
    { id: 2, name: 'Steel', rate: 100000, unit: 'ton' },
    { id: 3, name: 'Bricks', rate: 7000, unit: '1000 pcs' },
    { id: 4, name: 'Sand', rate: 400, unit: 'cft' },
    { id: 5, name: 'Aggregate', rate: 500, unit: 'cft' },
    { id: 6, name: 'Paint', rate: 350, unit: 'liter' },
  ]);

  const updateRate = (id: number, newRate: number) => {
    setMaterials(materials.map(m => m.id === id ? { ...m, rate: newRate } : m));
    setEditMode(null);
  };

  return (
    <div className="h-screen bg-[#F8FAFC] flex flex-col">
      <div className="bg-[#1E3A8A] rounded-b-[24px] p-4 pb-6 shadow-lg">
        <div className="flex items-center gap-4 mb-4">
          <button onClick={() => navigate('/home')} className="bg-white/10 backdrop-blur-sm p-2 rounded-[12px]">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h2 className="text-[20px] font-bold text-white">Material Rates</h2>
        </div>
        <p className="text-blue-100 text-[13px]">Update current market prices</p>
      </div>

      <div className="flex-1 p-4 space-y-3 overflow-y-auto pb-24">
        {materials.map((material) => (
          <div key={material.id} className="bg-white rounded-[16px] p-4 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h4 className="text-[#1E3A8A] font-semibold text-[14px] mb-1">{material.name}</h4>
                <p className="text-gray-500 text-[11px]">per {material.unit}</p>
              </div>
              {editMode === material.id ? (
                <input
                  type="number"
                  defaultValue={material.rate}
                  onBlur={(e) => updateRate(material.id, parseInt(e.target.value) || material.rate)}
                  className="w-24 h-10 p-2 bg-gray-50 rounded-[12px] outline-none border-2 border-[#EAB308] text-right font-semibold text-[14px]"
                  autoFocus
                />
              ) : (
                <div className="flex items-center gap-3">
                  <p className="text-[18px] font-bold text-[#1E3A8A]">₹{material.rate.toLocaleString()}</p>
                  <button
                    onClick={() => setEditMode(material.id)}
                    className="bg-gray-100 p-2 rounded-[8px]"
                  >
                    <Edit3 className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}

        <div className="bg-blue-50 border border-blue-200 rounded-[16px] p-4">
          <p className="text-[11px] text-gray-600 leading-relaxed">
            💡 Tip: Keep rates updated for accurate estimations. Prices may vary by location.
          </p>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 max-w-[360px] mx-auto p-4 bg-white border-t border-gray-200">
        <button
          onClick={() => navigate('/home')}
          className="w-full h-[52px] bg-[#EAB308] text-[#1E3A8A] rounded-[12px] shadow-md hover:bg-[#d9a307] transition-colors font-semibold text-[16px]"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
