import React from 'react';

interface InputPanelProps {
  value: string;
  onChange: (value: string) => void;
  isProcessing: boolean;
}

const InputPanel: React.FC<InputPanelProps> = ({ value, onChange, isProcessing }) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
      <textarea
        className="w-full bg-transparent text-gray-900 dark:text-white p-4 outline-none 
                  rounded-lg resize-none overflow-hidden placeholder:text-gray-400 
                  dark:placeholder:text-gray-500 min-h-[120px]"
        placeholder="Enter your query or prompt here..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={isProcessing}
        rows={4}
      />
      <div className="px-4 py-2 text-xs text-gray-500 dark:text-gray-400 flex justify-between items-center border-t border-gray-200 dark:border-gray-600">
        <div className="flex items-center">
          {isProcessing ? (
            <span className="flex items-center">
              <span className="h-2 w-2 bg-indigo-600 rounded-full animate-pulse mr-1"></span>
              <span>Processing...</span>
            </span>
          ) : (
            <span>Type your prompt and submit</span>
          )}
        </div>
        <div>
          {value.length} characters
        </div>
      </div>
    </div>
  );
};

export default InputPanel;