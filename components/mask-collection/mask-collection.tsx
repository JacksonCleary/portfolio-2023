/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import useLoading from '../../hooks/loading';
import { useMask } from '../../providers';
import { chain } from '@/util/chain';
import useWindowDimensions from '@/hooks/get-window-dimensions';
import styles from './mask-collection.module.scss';

const MaskCollection = (): JSX.Element => {
  const windowDimensions = useWindowDimensions();
  const isMobile = windowDimensions.width <= 1170;
  const isLoading = useLoading();
  const isReady = !isLoading.loading && isLoading.complete;
  const mask = useMask();
  const [currentMaskClass, setCurrentMaskClass] = useState<string>('');
  const [animationStateClass, setAnimationStateClass] = useState<string>('');

  const setRandomMaskingScheme = async () => {
    const maskScheme = mask.state;
    const current = document.body.dataset.scheme;
    const randomIndex = Math.floor(Math.random() * maskScheme.length);
    const randomScheme = maskScheme.filter((scheme) => scheme !== current)[
      randomIndex
    ];
    document.body.dataset.scheme = randomScheme;
  };

  const handleTrigger = () => {
    chain(
      { time: 300, callback: handleReverse },
      { time: 300, callback: setRandomMaskingScheme },
      { time: 300, callback: handleForward }
    );
  };

  const start = () => {
    if (!isMobile) {
      setAnimationStateClass(styles.start);
    }
  };

  const handleForward = () => {
    if (!isMobile) {
      setCurrentMaskClass('');
      setAnimationStateClass(styles.start);
    }
  };

  const handleReverse = () => {
    if (!isMobile) {
      setAnimationStateClass(styles.stop);
      setCurrentMaskClass(styles.reverse);
    }
  };

  useEffect(() => {
    chain({ time: 500, callback: () => start() });
  }, []);

  useEffect(() => {
    if (isReady) {
      handleTrigger();
    }
  }, [isReady]);

  if (isMobile) {
    return <div></div>;
  }

  return (
    <div
      className={`${styles['mask-animation']} ${currentMaskClass} ${animationStateClass}`}
    >
      <div className={styles.preload}>
        <link rel="prefetch" href="/mask/spritesheet.png" as="image" />
        <link rel="prefetch" href="/mask/spritesheet-inverted.png" as="image" />
      </div>
      <div className={styles['mask-container']}>
        <div
          className={`${styles['color-image']} ${styles['clothing-2']} ${styles['top-down']}`}
        ></div>
        <img
          src="/mask/clothing-2-transparent.svg"
          alt=""
          role="presentation"
        />
      </div>

      <div className={styles['mask-container']}>
        <div
          className={`${styles['color-image']} ${styles['clothing-1']} ${styles['bottom-up']}`}
        ></div>
        <img
          src="/mask/clothing-1-transparent.svg"
          alt=""
          role="presentation"
        />
      </div>

      <div className={styles['mask-container']}>
        <div
          className={`${styles['color-image']} ${styles['face']} ${styles['bottom-up']}`}
        ></div>
        <img src="/mask/face-transparent.svg" alt="" role="presentation" />
      </div>

      <div className={styles['mask-container']}>
        <div
          className={`${styles['color-image']} ${styles['glasses']} ${styles['top-down']}`}
          // onAnimationEnd={() => handleReverse()}
        ></div>
        <img src="/mask/glasses-transparent.svg" alt="" role="presentation" />
      </div>
    </div>
  );
};

export default MaskCollection;
