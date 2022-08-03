import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { BackgroundAnimationProvider } from '../providers';

const DynamicBackground = dynamic(
  () => import('../components/background/background'),
  {
    ssr: false
  }
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <BackgroundAnimationProvider>
        <DynamicBackground />
        <Component {...pageProps} />
      </BackgroundAnimationProvider>
    </>
  );
}

export default MyApp;
