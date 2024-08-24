'use client'

import React, { useState } from 'react';

const ChatUI = () => {
  const [message, setMessage] = useState('');
  const [chatVisible, setChatVisible] = useState(true);
  const [vanishComplete, setVanishComplete] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [sentMessage, setSentMessage] = useState<string | null>(null);

  const handleSend = () => {
    if (message.trim() !== '') {
      setShowModal(true); // Show the confirmation modal
    }
  };

  const handleConfirm = () => {
    setShowModal(false); // Hide the modal
    setSentMessage(message); // Store the sent message
    setChatVisible(false); // Vanish the chat UI
    setTimeout(() => {
      setVanishComplete(true); // Complete the vanish effect after animation
    }, 2000); // Delay for 2s (same as animation duration)
  };

  const handleCancel = () => {
    setShowModal(false); // Hide the modal
  };

  return (
    <div className="relative flex flex-col h-[100dvh] md:h-screen w-full bg-gray-100 items-center justify-center overflow-hidden">
      {!vanishComplete ? (
        <div
          className={`h-full w-full bg-white shadow-lg rounded-lg transition-transform duration-500 ease-in-out transform ${
            chatVisible ? 'scale-100 opacity-100' : 'animate-vanish'
          }`}
        >
          {/* Header */}
          <div className="bg-blue-600 text-white flex items-center justify-start p-4 shadow-lg">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="rounded-full w-16 h-16 bg-gray-100 object-cover"
            />
            <div className="ml-4">
              <p className="text-lg font-semibold">Neem Karoli Baba</p>

              {/* Status */}
              {/* <p className="text-sm font-bold text-green-300">Online</p> */}
              </div>
          </div>

          {/* Chat Section */}
          <div className="p-4 flex flex-col gap-4">
            <div className="bg-gray-100 p-4 rounded-lg shadow-inner max-w-[90%] md:max-w-[50%]">
              <p className="text-left text-gray-700">अपने मन की बात बोल दो मुझसे।<br/>Share what&apos;s on your mind with me.</p>
            </div>

            {/* Display Sent Message */}
            {sentMessage && (
              <div className="flex justify-end">
                <div className="bg-blue-500 text-white p-4 rounded-lg shadow-inner max-w-[90%] md:max-w-[50%]">
                  <p className="text-right">{sentMessage}</p>
                </div>
              </div>
            )}
          </div>

          {/* Input Box */}
          <div className="absolute bottom-0 w-full p-4 bg-white rounded-b-lg text-black">
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

          {/* Confirmation Modal */}
          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-4 rounded-lg shadow-lg max-w-sm mx-auto">
                <p className="text-lg mb-4">Are you sure you want to send this message?</p>
                
                <div className="flex justify-end gap-4">
                  <button
                    onClick={handleConfirm}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                  >
                    Yes
                  </button>
                  <button
                    onClick={handleCancel}
                    className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400"
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="text-2xl text-gray-500 text-center">
          Your Message has been sent! Thank you!!!<br/>You will recieve blessings Soon.
        </div>
      )}
    </div>
  );
};

export default ChatUI;
