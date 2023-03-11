import styles from './mask-collection.module.scss';

interface MaskCollectionOptions {
  isReady?: boolean;
}

const MaskCollection = ({
  isReady = true
}: MaskCollectionOptions): JSX.Element => {
  return (
    <div className={isReady ? styles['mask-animation'] : ''}>
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
        ></div>
        <img src="/mask/glasses-transparent.svg" alt="" role="presentation" />
      </div>
    </div>
  );
};

export default MaskCollection;
