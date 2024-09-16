import React, { useState } from 'react';
import { FaCopy, FaCode } from 'react-icons/fa'; // Import icons from react-icons

const FooterPreview = ({ footer }) => {
  const [showCode, setShowCode] = useState(false);

  // Function to copy code to clipboard
  const handleCopyCode = () => {
    navigator.clipboard.writeText(footer.code);
    alert('Code copied to clipboard!');
  };

  if (!footer) return <div className="p-4 text-gray-700">Select a footer to preview</div>;

  return (
    <div className="preview bg-gradient-to-r from-indigo-50 to-indigo-100 p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 relative">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl font-semibold text-gray-900">{footer.title}</h2>
        <button
          onClick={() => setShowCode(!showCode)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 focus:outline-none transition-colors"
        >
          <FaCode className="inline mr-2" />
          {showCode ? 'Hide Code' : 'Show Code'}
        </button>
      </div>
      <div className="border border-gray-300 rounded-lg overflow-hidden">
        <div className="p-4 bg-white rounded-lg shadow-sm" dangerouslySetInnerHTML={{ __html: footer.code }} />
      </div>
      {showCode && (
        <div className="mt-6">
          <div className="bg-gray-100 p-4 rounded-lg text-gray-800">
            <pre className="whitespace-pre-wrap overflow-x-auto">{footer.code}</pre>
          </div>
          <button
            onClick={handleCopyCode}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 focus:outline-none transition-colors"
          >
            <FaCopy className="inline mr-2" />
            Copy Code
          </button>
        </div>
      )}
    </div>
  );
};

export default FooterPreview;
