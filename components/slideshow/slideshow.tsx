import Image from 'next/image';
import styles from './slideshow.module.scss';

export interface SlideShowImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface SlideshowProps {
  label: string;
  images: SlideShowImageProps[];
}

export const Slideshow = ({ label, images }: SlideshowProps): JSX.Element => {
  const imgStart = '/portfolio';

  return (
    <div className={styles.container}>
      <div className={styles.slideshow}>
        {images.map((image) => (
          <Image
            key={image.src}
            src={imgStart + image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            // placeholder="blur"
            style={{
              borderRight: '6px solid var(--color-text-secondary)'
            }}
          />
        ))}
      </div>
    </div>
  );
};
