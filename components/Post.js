import React from 'react';
import { ChatIcon, HeartIcon } from '@heroicons/react/outline';
import { ShareIcon } from '@heroicons/react/solid';

function Post({ name, profileImage, postImage, text, timeStamp }) {
  return (
    <div className='my-4 bg-white rounded-lg py-2'>
      <div className='flex items-center space-x-2 mb-4 ml-2'>
        <img
          className=' cursor-pointer w-12 h-12 rounded-full hover:brightness-75'
          src={profileImage}
          alt='profile image'
        />
        <div>
          <p className=' cursor-pointer font-semibold text-base hover:underline hover:text-blue-500'>
            {name}
          </p>
          {timeStamp ? (
            <p className='text-gray-400 text-xs'>
              {new Date(timeStamp?.toDate()).toLocaleString()}
            </p>
          ) : (
            <p className='text-gray-400 text-xs'>loading...</p>
          )}
        </div>
      </div>
      <div className=' py-2 cursor-pointer mb-2'>
        {text && <p className=' ml-2 font-semibold text-base'>{text}</p>}
        {postImage && (
          <img
            src={postImage}
            alt='postImage'
            className='rounded-none hover:brightness-105 transform transition duration-400 hover:brightness-95 cursor-pointer'
          />
        )}
      </div>

      <hr></hr>
      <div className='flex items-center justify-between mt-1'>
        <div className='reaction hover:text-cyan-500'>
          <ShareIcon />
          <span>Share</span>
        </div>
        <div className='reaction hover:text-indigo-500'>
          <div>
            <ChatIcon />
          </div>
          <span>Comment</span>
        </div>
        <div className='reaction hover:text-rose-500'>
          <HeartIcon />
          <span>Love</span>
        </div>
      </div>
    </div>
  );
}

export default Post;
