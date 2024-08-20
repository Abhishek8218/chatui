'use client'

import React, { useState} from 'react';

const ChatUI  = () => {
  const [message, setMessage] = useState('');
  const [chatVisible, setChatVisible] = useState(true);
  const [vanishComplete, setVanishComplete] = useState(false);

  const handleSend = () => {
    if (message.trim() !== '') {
      setChatVisible(false);
      setTimeout(() => {
        setVanishComplete(true);
      }, 2000); // Delay for 2s (same as animation duration)
    }
  };

  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 items-center justify-center">
      {!vanishComplete ? (
        <div
          className={`w-full h-full  bg-white shadow-lg rounded-lg transition-transform duration-500 ease-in-out transform ${
            chatVisible ? 'scale-100 opacity-100' : 'animate-vanish'
          }`}
        >
          {/* Header */}
          <div className="bg-blue-600 text-white flex items-center justify-start p-4 shadow-lg">

            <img
              src="/profile.webp"
              alt="Profile"
              className="rounded-full w-16 h-16 bg-gray-100"
            />
          </div>

          {/* Chat Section */}
          <div className="p-4">
            <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
              <p className="text-left text-gray-700">Hello! How can I help you? <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, cupiditate repellendus? Blanditiis, officia. Iusto iure tempora excepturi consectetur ipsa error dignissimos numquam delectus architecto fugit ratione et autem, nemo quas.</p>
            </div>
          </div>

          {/* Input Box */}
          <div className=" absolute bottom-0 w-full p-4 bg-white rounded-b-lg text-black">
            <div className="flex">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none"
              />
              <button
                onClick={handleSend}
                className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-2xl text-gray-500">
          Chat vanished
        </div>
      )}
    </div>
  );
};

export default ChatUI;
