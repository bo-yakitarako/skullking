import type { NextPage } from 'next';
import Head from 'next/head';
import { Start } from '../components/start/Start';
import { StartPlayerList } from '../components/start/StartPlayerList';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>すかるきんぐ</title>
        <meta name="description" content="お前も神ゲーにならないか？" />
      </Head>
      <main>
        <Start />
      </main>
      <StartPlayerList />
    </>
  );
};

export default Home;
