import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { BackgroundAnimationProvider } from '../providers';

// const DynamicBackground = dynamic(
//   () => import('../components/background/background'),
//   {
//     ssr: false
//   }
// );

const DynamicMeSVG = dynamic(() => import('../components/me-svg/me-svg'), {
  ssr: false
});

const DynamicMask = dynamic(
  () => import('../components/mask-collection/mask-collection'),
  {
    ssr: false
  }
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <BackgroundAnimationProvider>
        <DynamicBackground />
        
      </BackgroundAnimationProvider> */}
      <DynamicMask />
      <DynamicMeSVG />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
