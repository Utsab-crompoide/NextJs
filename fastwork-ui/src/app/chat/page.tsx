'use client'

import {useState } from 'react';
import ChatMessage from '@/components/ChatMessage';
import NavBar from '../section/navBar/NavBar';
import FormContainer from '@/components/FormContainer';

const Home = () => {
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'John',
      avatar: '/avatar.svg',
      text: 'Hey there!',
    },
    {
      id: 2,
      sender: 'Jane',
      avatar: '/avatar.svg',
      text: 'Hi John!',
    },
  ]);

  const handleMessageSubmit = () => {
    if (newMessage.trim() !== '') {
      const newMessageObj = {
        id: messages.length + 1,
        sender: 'You',
        avatar: '/avatar.svg',
        text: newMessage,
      };
      setMessages([...messages, newMessageObj]);
      setNewMessage('');
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-full"
      style={{
        background:
          'linear-gradient( 89.5deg,  rgba(66,144,251,1) 0.4%, rgba(131,204,255,1) 100.3% )',
      }}
    >
    <NavBar showOnlyLogo />
      <FormContainer>
        <div className="mx-auto mt-6 bg-blue-50 rounded-lg h-80 w-full">
          <h1 className="text-xl font-bold mb-4">Chat Room</h1>
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
          <div className="flex justify-items-start">
            <input
              type="text"
              className="w-full rounded-lg px-4 py-2 border text-black border-gray-100 focus:outline-none focus:border-blue-500"
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button
              className="ml-2 px-4 py-4 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 focus:outline-none"
              onClick={handleMessageSubmit}
            >
              Send
            </button>
          </div>
        </div>
        </FormContainer>
      </div>
  );
};

export default Home;
