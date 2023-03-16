/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

import useEmblaCarousel from 'embla-carousel-react';

useEmblaCarousel.globalOptions = { loop: true };

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
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start' });

  const imgStart = '/portfolio';

  return (
    <div className={styles.wrapper}>
      <h3>{label}</h3>
      <div className="embla" ref={emblaRef}>
        <div className={styles['embla__container']}>
          {images.map((image) => (
            <img
              className={styles['embla__slide']}
              key={image.src}
              src={imgStart + image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              loading="lazy"
            />
          ))}
        </div>
      </div>

      <div className={styles.controls}>
        <button
          onClick={() =>
            emblaApi?.canScrollPrev() ? emblaApi.scrollPrev() : undefined
          }
          aria-label="View Previous Slide"
          disabled={!emblaApi?.canScrollPrev()}
        >
          <span className={`${styles.triangle} ${styles.reverse}`} />_
          <span className={styles.text}>Prev</span>
        </button>
        <button
          onClick={() =>
            emblaApi?.canScrollNext() ? emblaApi.scrollNext() : undefined
          }
          aria-label="View Next Slide"
          disabled={!emblaApi?.canScrollNext()}
        >
          <span className={styles.text}>Next</span>
          _
          <span className={`${styles.triangle}`} />
        </button>
      </div>
    </div>
  );
};
