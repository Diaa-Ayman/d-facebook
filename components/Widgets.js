import React from 'react';
import { SearchIcon } from '@heroicons/react/outline';
import { DotsHorizontalIcon, VideoCameraIcon } from '@heroicons/react/solid';
import Contact from './Contact';
const contacts = [
  {
    name: 'Bill Gates',
    src: 'https://links.papareact.com/4u4',
  },
  {
    name: 'Mark Zuckerberg',
    src: 'https://links.papareact.com/xql',
  },
  {
    name: 'Jeff Bezoz',
    src: 'https://links.papareact.com/k2j',
  },
  {
    name: 'Elon Mask',
    src: 'https://links.papareact.com/4zn',
  },
  {
    name: 'Bill Gates',
    src: 'https://links.papareact.com/4u4',
  },
  {
    name: 'Mark Zuckerberg',
    src: 'https://links.papareact.com/xql',
  },
  {
    name: 'Jeff Bezoz',
    src: 'https://links.papareact.com/k2j',
  },
  {
    name: 'Elon Mask',
    src: 'https://links.papareact.com/4zn',
  },
];
function Widgets() {
  return (
    <div className='hidden lg:flex flex-col w-72 overflow-auto scrollbar-hide h-screen my-2 mr-4 pb-20 rounded-md'>
      <div className='flex justify-between p-2'>
        <h3 className='text-lg font-medium'>Contact</h3>
        <div className='text-gray-500 flex space-x-2'>
          <VideoCameraIcon className='h-6' />
          <SearchIcon className='h-6' />
          <DotsHorizontalIcon className='h-6' />
        </div>
      </div>
      <hr className='mt-4 mb-6'></hr>
      <div className=''>
        {contacts.map((contact) => (
          <Contact
            active
            key={contact.src}
            name={contact.name}
            image={contact.src}
          />
        ))}
      </div>
    </div>
  );
}

export default Widgets;
