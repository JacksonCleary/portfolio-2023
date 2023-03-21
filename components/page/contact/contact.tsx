import React from 'react';
import { ContentContact } from '@/content/pages';
import styles from './contact.module.scss';

export const ContactComponent = (): JSX.Element => {
  return (
    <div className={styles.home}>
      <ContentContact />
    </div>
  );
};
