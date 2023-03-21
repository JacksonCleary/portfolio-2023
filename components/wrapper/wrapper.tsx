import React from 'react';
import { Nav } from '../nav';
import { MobileNav } from '../nav/mobile-nav';
import styles from './wrapper.module.scss';
type Props = {
  children?: React.ReactElement | React.ReactElement[];
};

export const Wrapper = ({ children }: Props): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>{children}</div>
      <MobileNav />
      <Nav />
    </div>
  );
};
