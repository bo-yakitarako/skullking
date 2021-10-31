import { Box } from '@chakra-ui/layout';
import type { NextPage } from 'next';
import Head from 'next/head';
import { PlayerCountSP } from '../components/start/PlayerCountSP';
import { Start } from '../components/start/Start';
import { StartPlayerList } from '../components/start/StartPlayerList';

const Home: NextPage = () => {
  return (
    <Box fontFamily="'Hachi Maru Pop', cursive">
      <Head>
        <title>すかるきんぐ</title>
        <meta name="description" content="お前も神ゲーにならないか？" />
      </Head>
      <main>
        <Start />
      </main>
      <StartPlayerList />
      <PlayerCountSP />
    </Box>
  );
};

export default Home;
