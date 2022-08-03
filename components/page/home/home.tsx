import React from 'react';
import { FadeIn } from '../../fade-in';
import styles from './home.module.scss';

export const HomeComponent = (): JSX.Element => {
  const title = 'Hello There!';

  return (
    <div className={styles.home}>
      <FadeIn title={title}>
        <p>Some Content Goes Here</p>
      </FadeIn>
    </div>
  );
};
