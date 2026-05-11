import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Upload, FileText, X } from 'lucide-react';

export default function CADUploadScreen() {
  const navigate = useNavigate();
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  const handleFileUpload = () => {
    // Simulate file upload
    setUploadedFiles([...uploadedFiles, `Blueprint_${Date.now()}.dwg`]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(uploadedFiles.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col pb-24">
      <div className="bg-[#1E3A8A] rounded-b-[24px] p-4 pb-6 shadow-lg">
        <div className="flex items-center gap-4 mb-4">
          <button onClick={() => navigate('/structural-inputs')} className="bg-white/10 backdrop-blur-sm p-2 rounded-[12px]">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h2 className="text-[20px] font-bold text-white">CAD/Blueprint Upload</h2>
        </div>
        <p className="text-blue-100 text-[13px]">Upload architectural drawings (Optional)</p>
      </div>

      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {/* Upload Area */}
        <button
          onClick={handleFileUpload}
          className="w-full bg-white rounded-[24px] p-8 shadow-md border-2 border-dashed border-gray-300 hover:border-[#1E3A8A] transition-colors"
        >
          <div className="flex flex-col items-center">
            <div className="bg-blue-50 p-6 rounded-full mb-4">
              <Upload className="w-12 h-12 text-[#1E3A8A]" strokeWidth={1.5} />
            </div>
            <h4 className="text-[#1E3A8A] font-semibold text-[15px] mb-2">Upload CAD Files</h4>
            <p className="text-gray-500 text-[12px] mb-4 max-w-[240px] text-center">
              Supported formats: DWG, DXF, PDF, JPG, PNG
            </p>
            <span className="bg-[#EAB308] text-[#1E3A8A] px-6 py-2 rounded-[10px] text-[13px] font-semibold">
              Choose Files
            </span>
          </div>
        </button>

        {/* Uploaded Files */}
        {uploadedFiles.length > 0 && (
          <div className="bg-white rounded-[20px] p-5 shadow-md border border-gray-100">
            <h4 className="text-[#1E3A8A] font-semibold text-[14px] mb-4">Uploaded Files</h4>
            <div className="space-y-2">
              {uploadedFiles.map((file, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-[12px]">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-[8px]">
                      <FileText className="w-5 h-5 text-[#1E3A8A]" />
                    </div>
                    <div>
                      <p className="text-[13px] font-medium text-gray-800">{file}</p>
                      <p className="text-[10px] text-gray-500">2.4 MB</p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFile(index)}
                    className="text-red-500 p-2 hover:bg-red-50 rounded-[8px]"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Info Card */}
        <div className="bg-blue-50 rounded-[20px] p-5 border border-blue-100">
          <h4 className="text-[#1E3A8A] font-semibold text-[13px] mb-2">AI-Powered Analysis</h4>
          <p className="text-gray-700 text-[12px] leading-relaxed">
            Our AI will automatically extract dimensions, room layouts, and structural details from your blueprints for accurate estimation.
          </p>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 max-w-[360px] mx-auto p-4 bg-white border-t border-gray-200 space-y-2">
        <button
          onClick={() => navigate('/ai-processing')}
          className="w-full h-[52px] bg-[#EAB308] text-[#1E3A8A] rounded-[12px] shadow-md hover:bg-[#d9a307] transition-colors font-semibold text-[16px]"
        >
          Generate Estimation
        </button>
        <button
          onClick={() => navigate('/ai-processing')}
          className="w-full h-[48px] bg-white text-gray-600 rounded-[12px] border-2 border-gray-200 hover:bg-gray-50 transition-colors text-[14px] font-medium"
        >
          Skip & Continue
        </button>
      </div>
    </div>
  );
}
