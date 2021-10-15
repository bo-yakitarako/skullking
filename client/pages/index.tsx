import type { NextPage } from 'next';
import Head from 'next/head';
import { SocketSample } from '../components/SocketSample';

const Home: NextPage = () => {
  return (
    <div className="p-0 m-0">
      <Head>
        <title>スカルキングのゲーム</title>
        <meta name="description" content="お前も神ゲーにならないか？" />
      </Head>
      <main>
        <SocketSample />
      </main>
    </div>
  );
};

export default Home;
