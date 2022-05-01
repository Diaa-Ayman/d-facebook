import React from 'react';
import { useSession } from 'next-auth/client';
import { EmojiHappyIcon } from '@heroicons/react/outline';
import { VideoCameraIcon, CameraIcon } from '@heroicons/react/solid';
import { useState, useRef } from 'react';
import { db, storage } from '../firebase';
import firebase from 'firebase';
function InputBox() {
  const [session, loading] = useSession();
  const [post, setPost] = useState(null);
  const filePickerRef = useRef(null);
  const [postImage, setPostImage] = useState(null);
  const sendPostHandler = (e) => {
    e.preventDefault();
    if (!post) return;

    db.collection('posts')
      .add({
        post: post,
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
        timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((doc) => {
        if (postImage) {
          const uploadTask = storage
            .ref(`posts/${doc.id}`)
            .putString(postImage, 'data_url'); // upload as url.

          removeImagePost();

          uploadTask.on(
            'state_change',
            null,
            (error) => console.error(error),
            () => {
              //when the upload done...
              storage
                .ref('posts')
                .child(doc.id)
                .getDownloadURL() // get URL of image
                .then((url) => {
                  // then add it to db
                  db.collection('posts').doc(doc.id).set(
                    {
                      postImage: url,
                    },
                    { merge: true } // to merge new data with old one
                  );
                });
            }
          );
        }
      });
    setPost('');
  };

  // Make a custom hook here...

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]); // reading the image as url
    }

    reader.onload = (readerEvent) => {
      setPostImage(readerEvent.target.result);
    };
  };

  const removeImagePost = () => {
    setPostImage(null);
  };
  return (
    <div className='bg-white my-2 p-2 rounded-lg space-y-4'>
      <div className='flex items-center p-2'>
        <img
          className='w-8 h-8 rounded-full'
          src={session.user.image}
          alt='profile image'
        />
        <form className='flex-1 mr-4' onSubmit={sendPostHandler}>
          <input
            value={post}
            onChange={(event) => setPost(event.target.value)}
            className='p-2 mx-2 w-full outline-none bg-gray-100 rounded-xl whitespace-normal'
            type='text'
            placeholder={`What's on your mind, ${session.user.name}?`}
          />
          <button hidden type='submit'>
            submit
          </button>
        </form>
      </div>
      <hr></hr>
      {postImage && (
        <div className='flex items-center m-2 justify-center cursor-pointer hover:brightness-110 transition duration-150 object-contain transform hover:scale-105 filter'>
          <img
            onClick={removeImagePost}
            className='h-44 md:h-60 lg:h-68'
            src={postImage}
            alt='image'
          />
        </div>
      )}
      <div className='flex items-center justify-between px-2'>
        <div className='input-icon'>
          <VideoCameraIcon className='text-red-500 w-6 h-6' />
          <p className='text-xs lg:text-sm font-medium '>Live video</p>
        </div>
        <div
          onClick={() => filePickerRef.current.click()}
          className='input-icon'
        >
          <CameraIcon className='text-green-500 w-6 h-6' />
          <p className='lg:text-sm font-medium text-xs '>Photo/Video</p>
          <input
            ref={filePickerRef}
            hidden
            type='file'
            onChange={addImageToPost}
          />
        </div>
        <div className='input-icon'>
          <EmojiHappyIcon className='text-yellow-500 w-6 h-6' />
          <p className='lg:text-sm text-xs font-medium '>Feeling Activity</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
