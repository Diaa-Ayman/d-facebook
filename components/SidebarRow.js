import React from 'react';

function SidebarRow({ src, Icon, title }) {
  return (
    <div
      className={` ${
        src && 'mb-6'
      } flex items-center mt-2 ml-2 p-2 space-x-2 cursor-pointer hover:bg-gray-200 rounded-full`}
    >
      {src && (
        <img
          src={src}
          alt='userImage'
          width='30'
          height='30'
          className='rounded-full'
        />
      )}
      {Icon && <Icon className='h-8 w-8 rounded-full text-blue-500' />}
      <p className='font-semibold text-base hidden md:inline-flex'>{title}</p>
    </div>
  );
}

export default SidebarRow;
