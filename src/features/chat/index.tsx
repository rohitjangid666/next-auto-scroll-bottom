'use client';

import ChatList from '@/components/ChatList';
import MessageList from '@/components/MessageList';

const Chat = () => {
  return (
    <main className='h-screen overflow-hidden'>
      <div className='w-full h-full grid grid-cols-[350px_1fr]'>
        <ChatList />

        <MessageList />
      </div>
    </main>
  );
};

export default Chat;
