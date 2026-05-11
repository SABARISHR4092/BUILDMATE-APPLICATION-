import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Building2, Home, Briefcase, GraduationCap, Hospital, ShoppingBag, Hotel, Building } from 'lucide-react';

export default function BuildingTypeScreen() {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState('');

  const buildingTypes = [
    { id: 'house', icon: Home, label: 'House', subtitle: 'Residential villa' },
    { id: 'apartment', icon: Building2, label: 'Apartment', subtitle: 'Multi-floor residential' },
    { id: 'office', icon: Briefcase, label: 'Office', subtitle: 'Commercial workspace' },
    { id: 'college', icon: GraduationCap, label: 'College', subtitle: 'Educational institution' },
    { id: 'hospital', icon: Hospital, label: 'Hospital', subtitle: 'Healthcare facility' },
    { id: 'mall', icon: ShoppingBag, label: 'Mall', subtitle: 'Shopping complex' },
    { id: 'hotel', icon: Hotel, label: 'Hotel', subtitle: 'Hospitality building' },
    { id: 'commercial', icon: Building, label: 'Commercial Complex', subtitle: 'Mixed-use building' },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col pb-24">
      <div className="bg-[#1E3A8A] rounded-b-[24px] p-4 pb-6 shadow-lg">
        <div className="flex items-center gap-4 mb-4">
          <button onClick={() => navigate('/create-project')} className="bg-white/10 backdrop-blur-sm p-2 rounded-[12px]">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h2 className="text-[20px] font-bold text-white">Select Building Type</h2>
        </div>
        <p className="text-blue-100 text-[13px]">Choose the type of construction project</p>
      </div>

      <div className="flex-1 p-4 overflow-y-auto">
        <div className="grid grid-cols-2 gap-3">
          {buildingTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={`bg-white rounded-[20px] p-5 shadow-sm border-2 transition-all ${
                selectedType === type.id
                  ? 'border-[#1E3A8A] bg-blue-50'
                  : 'border-gray-100 hover:border-gray-200'
              }`}
            >
              <div className={`p-4 rounded-[16px] mb-3 mx-auto w-fit ${
                selectedType === type.id ? 'bg-[#1E3A8A]' : 'bg-gray-100'
              }`}>
                <type.icon className={`w-8 h-8 ${
                  selectedType === type.id ? 'text-[#EAB308]' : 'text-gray-600'
                }`} strokeWidth={2} />
              </div>
              <h4 className="text-[#1E3A8A] font-semibold text-[13px] mb-1">{type.label}</h4>
              <p className="text-gray-500 text-[10px]">{type.subtitle}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 max-w-[360px] mx-auto p-4 bg-white border-t border-gray-200">
        <button
          onClick={() => navigate('/floor-room-config')}
          disabled={!selectedType}
          className={`w-full h-[52px] rounded-[12px] shadow-md transition-colors font-semibold text-[16px] ${
            selectedType
              ? 'bg-[#EAB308] text-[#1E3A8A] hover:bg-[#d9a307]'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
