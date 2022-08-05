import React from 'react';
import { FadeIn } from '../../fade-in';
import { ContentWork } from '@/content/pages';
import styles from './work.module.scss';

export const WorkComponent = (): JSX.Element => {
  const title = 'Work History';

  return (
    <div className={styles.work}>
      <FadeIn title={title} className={styles.content}>
        <ContentWork />
      </FadeIn>
    </div>
  );
};
