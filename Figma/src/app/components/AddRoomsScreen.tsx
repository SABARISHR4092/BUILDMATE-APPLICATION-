import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Home, Plus } from 'lucide-react';

export default function AddRoomsScreen() {
  const navigate = useNavigate();
  const [rooms, setRooms] = useState([
    { id: 1, type: 'Bedroom', length: 12, width: 10, height: 10 },
  ]);

  const roomTypes = ['Bedroom', 'Bathroom', 'Kitchen', 'Living Room', 'Dining Room', 'Office'];

  const addRoom = () => {
    setRooms([...rooms, {
      id: rooms.length + 1,
      type: 'Bedroom',
      length: 12,
      width: 10,
      height: 10
    }]);
  };

  const updateRoom = (id: number, field: string, value: any) => {
    setRooms(rooms.map(room =>
      room.id === id ? { ...room, [field]: value } : room
    ));
  };

  return (
    <div className="h-screen bg-[#F8FAFC] flex flex-col">
      <div className="bg-[#1E3A8A] rounded-b-[24px] p-4 pb-6 shadow-lg">
        <div className="flex items-center gap-4 mb-4">
          <button onClick={() => navigate('/add-floors')} className="bg-white/10 backdrop-blur-sm p-2 rounded-[12px]">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h2 className="text-[20px] font-bold text-white">Add Rooms</h2>
        </div>
        <p className="text-blue-100 text-[13px]">Define room dimensions</p>
      </div>

      <div className="flex-1 p-4 space-y-4 overflow-y-auto pb-24">
        {rooms.map((room) => (
          <div key={room.id} className="bg-white rounded-[16px] p-4 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#1E3A8A] p-2 rounded-[12px]">
                <Home className="w-5 h-5 text-[#EAB308]" />
              </div>
              <select
                value={room.type}
                onChange={(e) => updateRoom(room.id, 'type', e.target.value)}
                className="flex-1 bg-gray-50 h-10 px-3 rounded-[12px] outline-none border border-gray-200 text-[13px] font-semibold"
              >
                {roomTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="text-gray-600 text-[11px] mb-1 block">Length (ft)</label>
                <input
                  type="number"
                  value={room.length}
                  onChange={(e) => updateRoom(room.id, 'length', parseInt(e.target.value) || 0)}
                  className="w-full bg-gray-50 h-10 px-2 rounded-[12px] outline-none border border-gray-200 text-center text-[13px] font-semibold"
                />
              </div>
              <div>
                <label className="text-gray-600 text-[11px] mb-1 block">Width (ft)</label>
                <input
                  type="number"
                  value={room.width}
                  onChange={(e) => updateRoom(room.id, 'width', parseInt(e.target.value) || 0)}
                  className="w-full bg-gray-50 h-10 px-2 rounded-[12px] outline-none border border-gray-200 text-center text-[13px] font-semibold"
                />
              </div>
              <div>
                <label className="text-gray-600 text-[11px] mb-1 block">Height (ft)</label>
                <input
                  type="number"
                  value={room.height}
                  onChange={(e) => updateRoom(room.id, 'height', parseInt(e.target.value) || 0)}
                  className="w-full bg-gray-50 h-10 px-2 rounded-[12px] outline-none border border-gray-200 text-center text-[13px] font-semibold"
                />
              </div>
            </div>
            <p className="text-[11px] text-gray-500 mt-3">Area: {room.length * room.width} sq ft</p>
          </div>
        ))}

        <button
          onClick={addRoom}
          className="w-full bg-white border-2 border-dashed border-[#1E3A8A] text-[#1E3A8A] h-[52px] rounded-[16px] flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors font-semibold text-[14px]"
        >
          <Plus className="w-5 h-5" />
          <span>Add Room</span>
        </button>
      </div>

      <div className="fixed bottom-0 left-0 right-0 max-w-[360px] mx-auto p-4 bg-white border-t border-gray-200">
        <button
          onClick={() => navigate('/advanced-settings')}
          className="w-full h-[52px] bg-[#EAB308] text-[#1E3A8A] rounded-[12px] shadow-md hover:bg-[#d9a307] transition-colors font-semibold text-[16px]"
        >
          Next
        </button>
      </div>
    </div>
  );
}
