import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Plus, Minus } from 'lucide-react';

export default function FloorRoomConfigScreen() {
  const navigate = useNavigate();
  const [floors, setFloors] = useState(2);
  const [rooms, setRooms] = useState({
    bedrooms: 3,
    bathrooms: 2,
    kitchen: 1,
    living: 1,
    dining: 1,
    other: 0,
  });

  const updateValue = (key: string, increment: boolean) => {
    if (key === 'floors') {
      setFloors(prev => Math.max(1, Math.min(20, prev + (increment ? 1 : -1))));
    } else {
      setRooms(prev => ({
        ...prev,
        [key]: Math.max(0, Math.min(10, prev[key as keyof typeof rooms] + (increment ? 1 : -1)))
      }));
    }
  };

  const roomTypes = [
    { key: 'bedrooms', label: 'Bedrooms' },
    { key: 'bathrooms', label: 'Bathrooms' },
    { key: 'kitchen', label: 'Kitchen' },
    { key: 'living', label: 'Living Room' },
    { key: 'dining', label: 'Dining Room' },
    { key: 'other', label: 'Other Rooms' },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col pb-24">
      <div className="bg-[#1E3A8A] rounded-b-[24px] p-4 pb-6 shadow-lg">
        <div className="flex items-center gap-4 mb-4">
          <button onClick={() => navigate('/building-type')} className="bg-white/10 backdrop-blur-sm p-2 rounded-[12px]">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h2 className="text-[20px] font-bold text-white">Floor & Room Setup</h2>
        </div>
        <p className="text-blue-100 text-[13px]">Configure building structure</p>
      </div>

      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {/* Total Floors */}
        <div className="bg-white rounded-[20px] p-5 shadow-md border border-gray-100">
          <h4 className="text-[#1E3A8A] font-semibold text-[14px] mb-4">Total Floors</h4>
          <div className="flex items-center justify-between">
            <button
              onClick={() => updateValue('floors', false)}
              className="bg-gray-100 p-3 rounded-[12px] w-12 h-12 flex items-center justify-center hover:bg-gray-200"
            >
              <Minus className="w-5 h-5 text-gray-700" />
            </button>
            <span className="text-[32px] font-bold text-[#1E3A8A]">{floors}</span>
            <button
              onClick={() => updateValue('floors', true)}
              className="bg-gray-100 p-3 rounded-[12px] w-12 h-12 flex items-center justify-center hover:bg-gray-200"
            >
              <Plus className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Room Configuration */}
        <div className="bg-white rounded-[20px] p-5 shadow-md border border-gray-100">
          <h4 className="text-[#1E3A8A] font-semibold text-[14px] mb-4">Room Configuration</h4>
          <div className="space-y-3">
            {roomTypes.map((room) => (
              <div key={room.key} className="flex items-center justify-between p-3 bg-gray-50 rounded-[16px]">
                <span className="text-gray-700 text-[13px] font-medium">{room.label}</span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => updateValue(room.key, false)}
                    className="bg-white p-2 rounded-[8px] w-8 h-8 flex items-center justify-center shadow-sm"
                  >
                    <Minus className="w-4 h-4 text-gray-600" />
                  </button>
                  <span className="text-[18px] font-bold text-[#1E3A8A] w-8 text-center">
                    {rooms[room.key as keyof typeof rooms]}
                  </span>
                  <button
                    onClick={() => updateValue(room.key, true)}
                    className="bg-white p-2 rounded-[8px] w-8 h-8 flex items-center justify-center shadow-sm"
                  >
                    <Plus className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 max-w-[360px] mx-auto p-4 bg-white border-t border-gray-200">
        <button
          onClick={() => navigate('/structural-inputs')}
          className="w-full h-[52px] bg-[#EAB308] text-[#1E3A8A] rounded-[12px] shadow-md hover:bg-[#d9a307] transition-colors font-semibold text-[16px]"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
