import React from 'react';
import { FadeIn } from '../../fade-in';
import { ContentHome } from '@/content/pages';
import styles from './home.module.scss';

export const HomeComponent = (): JSX.Element => {
  const title = 'Hello There!';

  return (
    <div className={styles.home}>
      <FadeIn title={title} className={styles.content}>
        <ContentHome />
      </FadeIn>
    </div>
  );
};
