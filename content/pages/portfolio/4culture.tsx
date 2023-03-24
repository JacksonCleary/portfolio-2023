import { Slideshow, SlideShowImageProps } from '@/components/slideshow';
import { Heading } from '@/components/heading';
import styles from '../../content.module.scss';
export const FourCultureContent = (): JSX.Element => {
  const contentImagesLabel =
    'Robust Art, Application, and Business Administration Portal';
  const contentImages: SlideShowImageProps[] = [
    {
      src: '/4culture/4culture_home.jpg',
      alt: '4Culture Home',
      width: 191,
      height: 300
    },
    {
      src: '/4culture/4culture_project.jpg',
      alt: '4Culture - Sample Project Page',
      width: 149,
      height: 300
    },
    {
      src: '/4culture/4culture_apply.jpg',
      alt: '4Culture - Sample Apply Page',
      width: 175,
      height: 300
    }
  ];

  return (
    <>
      <Heading text={'4Culture'} />
      <div className={styles['content-padding']}>
        <p>
          4Culture provides funding and support for the cultural work that makes
          King County (WA) vibrant.
        </p>
        <p>
          <a
            href="https://www.4culture.org/"
            target="_blank"
            title="4culture.org"
            rel="noreferrer"
          >
            See It Live!
          </a>
        </p>
      </div>
      <Slideshow label={contentImagesLabel} images={contentImages}>
        <div className={styles['content-padding']}>
          <p>
            Ever since moving to Seattle I wanted to contribute to the city in
            some way. Working with{' '}
            <a
              href="https://4culture.org"
              title="4culture"
              target="_blank"
              rel="noreferrer"
            >
              4culture
            </a>{' '}
            on their site revamp allowed me to give back and contribute to local
            artistic funding and exhibitions.
          </p>

          <p>
            During this project I worked as a technical lead to manage and
            program alongside a team dedicated to making exactly what 4culture
            needed.{' '}
          </p>
        </div>
      </Slideshow>
    </>
  );
};
