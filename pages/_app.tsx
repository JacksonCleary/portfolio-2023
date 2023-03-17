import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { MaskProvider } from '../providers';
import useEmblaCarousel from 'embla-carousel-react';

useEmblaCarousel.globalOptions = { loop: true };

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
      <MaskProvider>
        <DynamicMask />
        <DynamicMeSVG />

        <Component {...pageProps} />
      </MaskProvider>
    </>
  );
}

export default MyApp;
