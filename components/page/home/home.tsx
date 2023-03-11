import React from 'react';
import { ContentHome } from '@/content/pages';
import styles from './home.module.scss';

export const HomeComponent = (): JSX.Element => {
  return (
    <div className={styles.home}>
      <ContentHome />
    </div>
  );
};
