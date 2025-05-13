import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface OutputPanelProps {
  input: string;
  output: string;
}

const OutputPanel: React.FC<OutputPanelProps> = ({ input, output }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden 
                   transition-all duration-300 animate-fade-in">
      <div className="border-b border-gray-200 dark:border-gray-700 px-6 py-4">
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Prompt:</div>
        <div className="text-gray-900 dark:text-white font-medium">{input}</div>
      </div>
      
      <div className="px-6 py-4">
        <div className="flex justify-between items-center mb-2">
          <div className="text-sm text-gray-500 dark:text-gray-400">Response:</div>
          <button
            onClick={handleCopy}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 
                     dark:hover:text-gray-200 p-1 rounded-md transition-colors"
          >
            {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
        
        <div className="whitespace-pre-wrap text-gray-800 dark:text-gray-200">
          {output}
        </div>
      </div>
    </div>
  );
};

export default OutputPanel;