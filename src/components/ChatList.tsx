import { useState, useEffect } from 'react';

import { faker } from '@faker-js/faker';

import type { ChatType } from '@/types/chat';

const generateChatList = (num: number): ChatType[] => {
  const chats = [];
  for (let i = 0; i < num; i++) {
    const newChat: ChatType = {
      _id: faker.string.nanoid(),
      name: faker.person.fullName(),
      profile: faker.image.urlLoremFlickr({ category: 'people' }),
      message: faker.lorem.sentence(),
      time: faker.date.recent().toLocaleTimeString(),
    };

    chats.push(newChat);
  }
  return chats;
};

const ChatList = () => {
  const [chats, setChats] = useState<ChatType[]>([]);

  useEffect(() => {
    setChats(generateChatList(20));

    return () => {
      setChats([]);
    };
  }, []);

  return (
    <div className='h-full overflow-hidden'>
      <div className='flex flex-col h-full overflow-y-auto'>
        {chats.map(chat => (
          <div
            key={chat._id}
            className='flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded-md'
          >
            <div className='w-12 h-12 bg-gray-300 rounded-full mr-3'>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={chat.profile}
                alt='User Avatar'
                className='w-12 h-12 rounded-full'
              />
            </div>
            <div className='flex-1'>
              <h2 className='text-lg font-semibold'>{chat.name}</h2>
              <p className='text-gray-600 line-clamp-2'>{chat.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;
