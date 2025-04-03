"use client";

import { MessageCircle } from "lucide-react";
import { useState } from "react";

const FloatingButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      {isChatOpen && (
        <div className="fixed bottom-20 right-4 sm:right-6 bg-white text-black  shadow-lg rounded-lg p-4 w-72 sm:w-80 border border-gray-300">
          <div className="flex justify-between items-center border-b pb-2 mb-2">
            <h3 className="text-lg font-semibold">Chat with us</h3>
            <button
              onClick={() => setIsChatOpen(false)}
              className="text-gray-600 hover:text-gray-800"
            >
              <X size={20} />
            </button>
          </div>
          <p className="text-sm text-gray-600">How can we help you?</p>
          <input
            type="text"
            placeholder="Type a message..."
            className="mt-2 w-full px-2 py-1 border rounded-md text-sm"
          />
          <button className="mt-2 w-full bg-blue-500 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-600">
            Send
          </button>
        </div>
      )}

      <button
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
        onClick={() => setIsChatOpen(!isChatOpen)}
      >
        <MessageCircle size={24} />
      </button>
    </>
  );
};

export default FloatingButton;
