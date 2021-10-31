import type { NextPage } from 'next';
import Head from 'next/head';
import { Start } from '../components/start/Start';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>スカルキングのゲーム</title>
        <meta name="description" content="お前も神ゲーにならないか？" />
      </Head>
      <main>
        <Start />
      </main>
    </>
  );
};

export default Home;
