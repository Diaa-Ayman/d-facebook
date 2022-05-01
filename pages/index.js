import { getSession } from 'next-auth/client';
import Head from 'next/head';
import Header from '../components/Header';
import Login from '../components/Login';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Widgets from '../components/Widgets';
import { db } from '../firebase';
export default function Home({ session, posts }) {
  if (!session) return <Login />;
  return (
    <div className='bg-gray-100 h-screen overflow-hidden'>
      <Head>
        <title>D-facebook</title>
      </Head>
      <Header />
      <main className='flex space-x-4 lg:justify-between justify-evenly'>
        <Sidebar />
        <Feed posts={posts} />
        <Widgets />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  const posts = await db.collection('posts').orderBy('timeStamp', 'desc').get();
  const docs = posts.docs.map((post) => ({
    id: post.id,
    ...post.data(),
    timeStamp: null,
  }));
  return {
    props: {
      session,
      posts: docs,
    },
  };
}
