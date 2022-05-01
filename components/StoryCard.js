import Image from 'next/image';
const StoryCard = ({ src, profile, name }) => {
  return (
    <div className='relative w-14 h-14 md:w-20 md:h-36 lg:h-48 lg:w-32 overflow-hidden hover:scale-105 transition tranform hover:animate-pulse p-1 duration-200 ease-in cursor-pointer'>
      <Image
        className='rounded-full absolute z-50 opacity-0 md:opacity-100'
        src={profile}
        alt='profile image'
        width={40}
        height={40}
        objectFit='cover'
      />
      <Image
        className='rounded-full md:rounded-2xl filter object-cover brightness-75  cursor-pointer'
        src={src}
        alt='profile image'
        layout='fill'
      />
      <p className='hover:text-blue-500 absolute bottom-2 left-1 text-white font-medium text-sm truncate opacity-0 md:opacity-100'>
        {name}
      </p>
    </div>
  );
};

export default StoryCard;
