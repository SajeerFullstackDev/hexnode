"use client";

import { MessageCircle, X, Home, Newspaper, Mail } from "lucide-react";
import { useState } from "react";

const FloatingButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      {isChatOpen && (
        <div className="fixed bottom-20 right-4 sm:right-6 bg-white text-black shadow-lg rounded-lg p-4 w-72 sm:w-80 border border-gray-200">
          {/* Header */}
          <div className="flex justify-between items-center pb-3 mb-3 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800">Hexnode</h3>
            <button
              onClick={() => setIsChatOpen(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>
          </div>
          
          {/* Welcome message */}
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-700">Good Day!</h4>
            <p className="text-xs text-gray-500">How can we help?</p>
          </div>
          
          {/* Send message button */}
          <button className="w-full mb-4 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-md transition duration-200">
            Send us a message
          </button>
          
          <div className="border-t border-gray-200 pt-3">
            <h4 className="text-xs font-semibold text-gray-500 mb-2">Featured Article</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-gray-700 hover:text-blue-500 cursor-pointer">
                <Home size={14} className="mr-2" />
                Home
              </li>
              <li className="flex items-center text-sm text-gray-700 hover:text-blue-500 cursor-pointer">
                <Mail size={14} className="mr-2" />
                Messages
              </li>
              <li className="flex items-center text-sm text-gray-700 hover:text-blue-500 cursor-pointer">
                <Newspaper size={14} className="mr-2" />
                News
              </li>
            </ul>
          </div>
          
          <div className="mt-4 pt-3 border-t border-gray-200">
            <p className="text-xs font-semibold text-gray-700">Hexnode Browser</p>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
        onClick={() => setIsChatOpen(!isChatOpen)}
      >
        <MessageCircle size={20} />
      </button>
    </>
  );
};

export default FloatingButton;