import React from 'react';
import { ContentWork } from '@/content/pages';
import styles from './work.module.scss';

export const WorkComponent = (): JSX.Element => {
  return (
    <div className={styles.work}>
      <ContentWork />
    </div>
  );
};
