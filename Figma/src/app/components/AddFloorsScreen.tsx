import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Layers, Plus, Minus } from 'lucide-react';

export default function AddFloorsScreen() {
  const navigate = useNavigate();
  const [floors, setFloors] = useState([
    { id: 1, name: 'Ground Floor', height: 10 },
  ]);

  const addFloor = () => {
    setFloors([...floors, {
      id: floors.length + 1,
      name: `Floor ${floors.length + 1}`,
      height: 10
    }]);
  };

  const updateHeight = (id: number, height: number) => {
    setFloors(floors.map(floor =>
      floor.id === id ? { ...floor, height: Math.max(8, Math.min(20, height)) } : floor
    ));
  };

  return (
    <div className="h-screen bg-[#F8FAFC] flex flex-col">
      <div className="bg-[#1E3A8A] rounded-b-[24px] p-4 pb-6 shadow-lg">
        <div className="flex items-center gap-4 mb-4">
          <button onClick={() => navigate('/create-project')} className="bg-white/10 backdrop-blur-sm p-2 rounded-[12px]">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h2 className="text-[20px] font-bold text-white">Add Floors</h2>
        </div>
        <p className="text-blue-100 text-[13px]">Define floor count and heights</p>
      </div>

      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {floors.map((floor) => (
          <div key={floor.id} className="bg-white rounded-[16px] p-4 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#1E3A8A] p-2 rounded-[12px]">
                <Layers className="w-5 h-5 text-[#EAB308]" />
              </div>
              <h4 className="text-[#1E3A8A] font-semibold text-[14px] flex-1">{floor.name}</h4>
            </div>
            <div>
              <label className="text-gray-600 text-[12px] mb-2 block">Floor Height (ft)</label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => updateHeight(floor.id, floor.height - 1)}
                  className="bg-gray-100 p-2 rounded-[8px] w-10 h-10 flex items-center justify-center"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <input
                  type="number"
                  value={floor.height}
                  onChange={(e) => updateHeight(floor.id, parseInt(e.target.value) || 10)}
                  className="flex-1 text-center bg-gray-50 h-10 rounded-[12px] outline-none border border-gray-200 font-semibold"
                />
                <button
                  onClick={() => updateHeight(floor.id, floor.height + 1)}
                  className="bg-gray-100 p-2 rounded-[8px] w-10 h-10 flex items-center justify-center"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={addFloor}
          className="w-full bg-white border-2 border-dashed border-[#1E3A8A] text-[#1E3A8A] h-[52px] rounded-[16px] flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors font-semibold text-[14px]"
        >
          <Plus className="w-5 h-5" />
          <span>Add Floor</span>
        </button>
      </div>

      <div className="p-4 bg-white border-t border-gray-200">
        <button
          onClick={() => navigate('/add-rooms')}
          className="w-full h-[52px] bg-[#EAB308] text-[#1E3A8A] rounded-[12px] shadow-md hover:bg-[#d9a307] transition-colors font-semibold text-[16px]"
        >
          Next
        </button>
      </div>
    </div>
  );
}
