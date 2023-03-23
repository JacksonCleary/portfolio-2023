import React, { useRef, useState } from 'react';
import { Nav } from '../nav';
import { MobileNav } from '../nav/mobile-nav';
import { SecondaryNav } from '../nav/secondary-nav';
import { throttle } from 'lodash';
import styles from './wrapper.module.scss';
type Props = {
  children?: React.ReactElement | React.ReactElement[];
};

export const Wrapper = ({ children }: Props): JSX.Element => {
  const scrollThrottle = 300;
  const scrollRef = useRef<HTMLElement>(null);
  const [canScrollToTop, setCanScrollToTop] = useState<boolean>(false);

  const enabledClass = canScrollToTop ? styles.enabled : '';

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    var element = e.target as HTMLElement;

    const top = element.scrollTop === 0;
    if (top) {
      if (canScrollToTop) {
        setCanScrollToTop(false);
      }
    } else {
      if (!canScrollToTop) {
        setCanScrollToTop(true);
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <section
          id="section-main"
          onScroll={throttle(handleScroll, scrollThrottle)}
          ref={scrollRef}
        >
          {children}
        </section>
        <div className={`${styles['scroll-to-top']} ${enabledClass}`}>
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
