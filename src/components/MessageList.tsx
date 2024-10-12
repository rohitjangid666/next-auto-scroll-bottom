import { useEffect, useRef, useState } from 'react';

import { faker } from '@faker-js/faker';

import type { MessageType } from '@/types/chat';

const MessageList = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<MessageType[]>([]);

  useEffect(() => {
    if (messages.length) {
      ref.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
    }
  }, [messages.length]);

  function handleAddRandomMessage(
    e: React.MouseEvent<HTMLButtonElement>
  ): void {
    const newMessage: MessageType = {
      _id: faker.string.nanoid(),
      body: faker.lorem.lines(faker.number.int({ min: 1, max: 3 })),
      date: new Date(),
      from: {
        fullName: faker.person.fullName(),
        profile: faker.image.urlLoremFlickr({ category: 'people' }),
      },
    };

    setMessages(prev => [...prev, newMessage]);
  }

  return (
    <div className='flex-1 h-full overflow-hidden'>
      <div className='flex flex-col h-full overflow-hidden'>
        <header className='bg-gray-100 p-4 text-gray-700'>
          <h1 className='text-2xl font-semibold'>Active User</h1>
        </header>

        <div className='flex-grow overflow-auto'>
          <div className='flex flex-col h-full'>
            <div className='flex-grow overflow-y-auto bg-pink-200'>
              {messages.map(message => {
                return (
                  <div
                    key={message._id}
                    className='flex justify-end mt-4 cursor-pointer'
                  >
                    <div className='flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3'>
                      <p>{message.body}</p>
                    </div>
                    <div className='w-9 h-9 rounded-full flex items-center justify-center ml-2'>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={message.from.profile}
                        alt={message.from.fullName}
                        className='w-8 h-8 rounded-full'
                      />
                    </div>
                  </div>
                );
              })}
              <div ref={ref} className='h-5' />
            </div>
          </div>
        </div>

        <button
          onClick={handleAddRandomMessage}
          className='bg-blue-700 text-white p-4 rounded-none font-bold'
        >
          Add random message
        </button>
      </div>
    </div>
  );
};

export default MessageList;
