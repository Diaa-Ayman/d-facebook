import Stories from './Stories';
import InputBox from './InputBox';
import Posts from './Posts';
const posts = [];
export default function Feed({ posts }) {
  return (
    <div className='w-11/12 items-center lg:w-2/5 overflow-auto scrollbar-hide h-screen pb-20'>
      {/* Stories */}
      <Stories />
      {/* InputBox */}
      <InputBox />
      {/* Posts */}
      <Posts posts={posts} />
    </div>
  );
}
