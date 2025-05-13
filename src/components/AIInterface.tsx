import React, { useState } from 'react';
import { Send } from 'lucide-react';
import InputPanel from './InputPanel';
import OutputPanel from './OutputPanel';
import ThemeToggle from './ThemeToggle';

const AIInterface: React.FC = () => {
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [history, setHistory] = useState<{ input: string; output: string }[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isProcessing) return;

    setIsProcessing(true);
    
    // Simulate AI processing
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock response - in a real app, this would call an API
      const response = `Response to: "${input}"\n\nThis is a simulated AI response to demonstrate the interface. In a production environment, this would connect to actual cloud AI research models like GPT-4, Claude, or other specialized models.`;
      
      setHistory(prev => [...prev, { input, output: response }]);
      setInput('');
    } catch (error) {
      console.error('Error processing request:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center">
              <Send className="w-5 h-5 text-white transform -rotate-45" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">AI Research Lab</h1>
          </div>
          <ThemeToggle />
        </header>

        <main className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Experimental AI Interface
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Enter your prompt below to interact with the AI research model.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <InputPanel 
                value={input} 
                onChange={setInput} 
                isProcessing={isProcessing}
              />
              
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={!input.trim() || isProcessing}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg 
                             flex items-center space-x-2 transition-colors duration-200
                             disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                  <span>{isProcessing ? 'Processing...' : 'Submit'}</span>
                </button>
              </div>
            </form>
          </div>

          {history.length > 0 && (
            <div className="space-y-4">
              {history.map((item, index) => (
                <OutputPanel 
                  key={index} 
                  input={item.input} 
                  output={item.output} 
                />
              ))}
            </div>
          )}
        </main>

        <footer className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>AI Research Lab Interface © {new Date().getFullYear()}</p>
        </footer>
      </div>
    </div>
  );
};

export default AIInterface;