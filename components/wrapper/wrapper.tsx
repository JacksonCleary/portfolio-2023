import React, { useRef, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Nav } from '../nav';
import { MobileNav } from '../nav/mobile-nav';
import { SecondaryNav } from '../nav/secondary-nav';
import { throttle } from 'lodash';
import useWindowDimensions from '@/hooks/get-window-dimensions';
import styles from './wrapper.module.scss';

type Binding = HTMLElement;

type WrapperProps = {
  children?: React.ReactElement | React.ReactElement[];
};

export const Wrapper = ({ children }: WrapperProps): JSX.Element => {
  const router = useRouter();
  const windowDimensions = useWindowDimensions();
  const scrollThrottle = 300;
  const manualScrollRef = useRef<HTMLElement | null>(null);
  const [hideScrollArrow, setHideScrollArrow] = useState<boolean>(false);

  const hiddenArrow = hideScrollArrow ? styles.hide : '';

  const disableCalcScroll = windowDimensions.width < 768;

  const onScroll = (e: React.UIEvent<HTMLElement>) => {
    const element = e.target as HTMLElement;
    handleScrollCalc(element);
  };

  const onManualRef = () => {
    if (manualScrollRef.current) {
      handleScrollCalc(manualScrollRef.current);
    }
  };

  const handleScrollCalc = (binding: Binding) => {
    const bottom =
      binding.scrollTop + binding.clientHeight >= binding.scrollHeight;

    if (bottom) {
      setHideScrollArrow(true);
    } else {
      setHideScrollArrow(false);
    }
  };

  useEffect(() => {
    // check if scroll arrow is necessary when route changes / onload
    onManualRef();
  }, [router.asPath]);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <section
          id="section-main"
          onScroll={
            !disableCalcScroll ? throttle(onScroll, scrollThrottle) : undefined
          }
          ref={manualScrollRef}
        >
          {children}
        </section>
        <div className={`${styles['scroll-to-top']} ${hiddenArrow}`}>
          <span className={styles.triangle} />
        </div>
      </div>
      <MobileNav />
      <Nav>
        <SecondaryNav />
      </Nav>
    </div>
  );
};
