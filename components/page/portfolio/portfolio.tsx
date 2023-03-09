import React from 'react';
import { FadeIn } from '../../fade-in';
import styles from './portfolio.module.scss';

export const PortfolioComponent = (): JSX.Element => {
  const title = 'Portfolio';

  return (
    <div className={styles.work}>
      <FadeIn title={title} className={styles.content}>
        <div></div>
      </FadeIn>
    </div>
  );
};
