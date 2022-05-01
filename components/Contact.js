import React from 'react';
import Image from 'next/image';
function Contact({ name, image, active }) {
  return (
    <div className='relative flex items-center space-x-2 rounded-none hover:bg-gray-200 cursor-pointer p-2'>
      <Image
        alt='userImage'
        src={image}
        width={50}
        height={50}
        layout='fixed'
        className=' rounded-full'
        objectFit='cover'
      />
      <p className='text-sm font-medium'>{name}</p>
      {active && (
        <div className='absolute w-3 h-3 rounded-full bg-green-400 left-9 bottom-2'></div>
      )}{' '}
    </div>
  );
}

export default Contact;
