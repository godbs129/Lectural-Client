import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import Header from '../components/Header/Header';
import GlobalStyle from '../styles/GlobalStyle';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <Toaster />
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}

export default MyApp;
