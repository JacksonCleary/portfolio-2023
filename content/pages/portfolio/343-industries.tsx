import { Slideshow, SlideShowImageProps } from '@/components/slideshow';
import { Heading } from '@/components/heading';

export const ThreeFourThreeIndustriesContent = (): JSX.Element => {
  const contentImagesLabel = 'Foo';
  const contentImages: SlideShowImageProps[] = [
    {
      src: '/343/content-hero.jpg',
      alt: 'Content Pages - Hero',
      width: 342,
      height: 300
    },
    {
      src: '/343/content-slideshow.jpg',
      alt: 'Content Pages - Slideshow',
      width: 535,
      height: 300
    },
    {
      src: '/343/content-news.jpg',
      alt: 'Content Pages - News',
      width: 362,
      height: 300
    },
    {
      src: '/343/content-media-gallery.jpg',
      alt: 'Content Pages - Media Gallery',
      width: 431,
      height: 300
    }
  ];

  return (
    <section>
      <Heading text={'343 Industries'} />
      <Slideshow label={contentImagesLabel} images={contentImages} />
    </section>
  );
};
