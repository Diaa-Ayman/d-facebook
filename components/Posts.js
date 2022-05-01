import React from 'react';
import Post from './Post';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
function Posts({ posts }) {
  const [realTimePosts] = useCollection(
    db.collection('posts').orderBy('timeStamp', 'desc')
  );

  return (
    <div className=' w-full py-2 rounded-lg'>
      {realTimePosts
        ? realTimePosts?.docs.map((post) => (
            <Post
              key={post.id}
              name={post.data().name}
              profileImage={post.data().image}
              postImage={post.data().postImage}
              text={post.data().post}
              timeStamp={post.data().timeStamp}
            />
          ))
        : posts.map((post) => (
            <Post
              key={post.id}
              name={post.name}
              profileImage={post.image}
              postImage={post.postImage}
              text={post.post}
              timeStamp={post.timeStamp}
            />
          ))}
    </div>
  );
}

export default Posts;
