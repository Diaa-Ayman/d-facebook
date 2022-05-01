import React from 'react';
import Image from 'next/image';
import { signIn } from 'next-auth/client';
import Head from 'next/head';
import { Fragment } from 'react';
function Login() {
  return (
    <Fragment>
      <Head>
        <title>facebook login</title>
      </Head>
      <div className='grid place-items-center'>
        <Image
          width={400}
          height={400}
          objectFit='contain'
          alt='Logo'
          src='https://links.papareact.com/t4i'
        />
        <button
          onClick={signIn}
          className='cursor-pointer p-5 bg-blue-600 hover:bg-blue-500 text-center text-white rounded-full shadow text font-medium'
        >
          Sign in with Facebook
        </button>
      </div>
    </Fragment>
  );
}

export default Login;
