import type { NextPage } from 'next';
import Head from 'next/head';
import { SocketSample } from '../components/SocketSample';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>スカルキングのゲーム</title>
        <meta name="description" content="お前も神ゲーにならないか？" />
      </Head>
      <main>
        <SocketSample />
      </main>
    </>
  );
};

export default Home;
