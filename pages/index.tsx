import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className="p-0 m-0">
      <Head>
        <title>スカルキングのゲーム</title>
        <meta name="description" content="お前も神ゲーにならないか？" />
      </Head>
      <main>
        <p className="m-0">これがお前らのやり方か</p>
      </main>
    </div>
  );
};

export default Home;
