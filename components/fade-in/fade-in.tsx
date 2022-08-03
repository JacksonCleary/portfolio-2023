import React from 'react';
import { useBackgroundAnimation } from '../../providers';
import styles from './fade-in.module.scss';

type Props = {
  title?: string;
  children?: React.ReactElement;
};

export const FadeIn = ({ title, children }: Props): JSX.Element => {
  const bganim = useBackgroundAnimation();
  const { contentReady } = bganim.state;
  return (
    <div className={`${styles.fadeIn} ${contentReady ? styles.ready : ''}`}>
      {title && (
        <div className={styles.header}>
          <h1>{title}</h1>
          <svg
            height="100%"
            width="100%"
            viewBox="0 0 100 2"
            strokeWidth={2}
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path d="M 0 0 H 100 Z" />
          </svg>
        </div>
      )}
      {children}
    </div>
  );
};
