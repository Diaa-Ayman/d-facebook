import React from 'react';

function HeaderIcon({ Icon, active }) {
  return (
    <div className='flex items-center cursor-pointer p-4 md:px-6 sm:h-10 rounded-xl active:border-b-2 active:border-blue-500 hover:bg-gray-100 group'>
      <Icon
        className={`h-6 sm:h-7 cursor-pointer ${
          active && 'text-blue-700'
        } group-hover:text-blue-600`}
      />
    </div>
  );
}

export default HeaderIcon;
