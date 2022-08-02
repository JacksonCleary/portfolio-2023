import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { state } from '../state';

function MyApp({ Component, pageProps }: AppProps) {
  console.log('bootstrap state', state);
  return <Component {...pageProps} />;
}

export default MyApp;
