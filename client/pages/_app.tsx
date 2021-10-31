import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { RecoilRoot } from 'recoil';
import { SocketProvider } from '../components/SocketProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ChakraProvider>
        <SocketProvider>
          <Component {...pageProps} />
        </SocketProvider>
      </ChakraProvider>
    </RecoilRoot>
  );
}
