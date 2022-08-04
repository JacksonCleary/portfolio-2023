import React, { useRef, useState, useEffect } from 'react';
import { useBackgroundAnimation } from '../../providers';
import styles from './fade-in.module.scss';

type Props = {
  title?: string;
  className?: string;
  children?: React.ReactElement;
};

export const FadeIn = ({ title, className, children }: Props): JSX.Element => {
  const bganim = useBackgroundAnimation();
  const { contentReady } = bganim.state;
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  const [width, setWidth] = useState(0);
  const [needsOutro, setNeedsOutro] = useState(false);

  const handleIntroOutro = (): string => {
    let className = '';
    if (contentReady) {
      // if (needsOutro) {
      //   className = styles.outro;
      // } else {
      className = styles.intro;
      // }
      // else {
      //   className = styles.outro;
      // }
    } else {
      className = styles.outro;
    }
    return className;
  };

  useEffect(() => {
    if (titleRef.current) {
      setWidth(titleRef.current.offsetWidth);
    }
  }, []);

  return (
    <div
      className={`${styles.fadeIn} ${
        className ? className : ''
      } ${handleIntroOutro()}`}
      onAnimationEnd={() => setNeedsOutro(true)}
    >
      {title && (
        <div className={styles.header}>
          <h1 ref={titleRef}>{title}</h1>
          <svg
            width={width ? width : '100%'}
            viewBox="0 0 100 2"
            strokeWidth={2}
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path d="M 0 0 H 100 Z" />
          </svg>
        </div>
      )}
      <div className={styles.content}>{children}</div>
    </div>
  );
};
