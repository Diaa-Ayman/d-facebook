import {
  SearchIcon,
  FlagIcon,
  PlayIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline';
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from '@heroicons/react/solid';
import HeaderIcon from './HeaderIcon';
import { signOut, useSession } from 'next-auth/client';
import Image from 'next/image';
import { useState } from 'react';
function Header() {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [session] = useSession();
  return (
    <header className='flex top-0 z-50 bg-white  justify-between items-center p-2 shadow-md'>
      {/* Left */}
      <div className='flex items-center space-x-2 '>
        <Image
          src='https://links.papareact.com/5me'
          alt='logo'
          width={35}
          height={35}
          layout='fixed'
          className='mr-2'
        />
        <div className='flex items-center bg-gray-100 p-2 rounded-full'>
          <SearchIcon
            onClick={() => {
              setShowSearchBar((prev) => !prev);
            }}
            className='h-5 w-5 text-gray-400 cursor-pointer md:cursor-default'
          />
          <input
            type='text'
            placeholder='Search facebook'
            className={`outline-none  bg-transparent ml-2 ${
              !showSearchBar && 'hidden'
            } md:inline-flex`}
          />
        </div>
      </div>

      {/* Center */}
      <div
        className={` ${
          showSearchBar ? 'hidden' : 'flex'
        }  md:flex flex-grow justify-center items-center md:justify-center  md:space-x-5`}
      >
        <HeaderIcon Icon={HomeIcon} active />
        <HeaderIcon Icon={FlagIcon} />
        <HeaderIcon Icon={PlayIcon} />
        <HeaderIcon Icon={ShoppingCartIcon} />
        <HeaderIcon Icon={UserGroupIcon} />
      </div>

      {/* Right */}
      <div className='flex items-center justify-end'>
        {/* Profile Image */}

        <div className='flex'>
          <img
            src={session.user.image}
            alt='user image'
            className='w-8 h-8 rounded-full cursor-pointer hover:opacity-90 mr-2 object-cover'
            onClick={signOut}
          />
          <p className='text-lg font-medium hidden md:inline-flex truncate'>
            {session.user.name}
          </p>
        </div>
        {/* Options of Right Side */}
        <div className='space-x-2 ml-6'>
          <ViewGridIcon className='icon' />
          <ChatIcon className='icon' />
          <BellIcon className='icon' />
          <ChevronDownIcon className='icon' />
        </div>
      </div>
    </header>
  );
}

export default Header;
