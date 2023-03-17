/* eslint-disable @next/next/no-img-element */
import React, { useCallback, useState, useEffect } from 'react';

import useEmblaCarousel from 'embla-carousel-react';

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
  children?: React.ReactNode;
}

export const Slideshow = ({
  label,
  images,
  children
}: SlideshowProps): JSX.Element => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', loop: true });
  const [prevDisabled, setPrevDisabled] = useState<boolean>(true);
  const [nextDisabled, setNextDisabled] = useState<boolean>(false);

  const imgStart = '/portfolio';

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    setPrevDisabled(!emblaApi?.canScrollPrev());
    setNextDisabled(!emblaApi?.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  // useEffect(() => {
  //   if (emblaApi) {
  //     console.log('emblaApi?.canScrollPrev())', emblaApi?.canScrollPrev());

  //   }
  // }, [emblaApi]);

  return (
    <div className={styles.wrapper}>
      <h3>{label}</h3>
      <div className="" ref={emblaRef}>
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
          onClick={scrollPrev}
          aria-label="View Previous Slide"
          disabled={prevDisabled}
        >
          <span className={`${styles.triangle} ${styles.reverse}`} />_
          <span className={styles.text}>Prev</span>
        </button>
        <button
          onClick={scrollNext}
          aria-label="View Next Slide"
          disabled={nextDisabled}
        >
          <span className={styles.text}>Next</span>
          _
          <span className={`${styles.triangle}`} />
        </button>
      </div>
      {children && <div className={styles.description}>{children}</div>}
    </div>
  );
};
