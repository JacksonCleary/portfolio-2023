import { Slideshow, SlideShowImageProps } from '@/components/slideshow';
import { Heading } from '@/components/heading';

export const BioclearContent = (): JSX.Element => {
  const contentImagesLabel = 'By Dentists, For Dentists.';
  const contentImages: SlideShowImageProps[] = [
    {
      src: '/bioclear/bioclear_home.jpg',
      alt: 'Bioclear Home',
      width: 84,
      height: 300
    },
    {
      src: '/bioclear/bioclear_products.jpg',
      alt: 'Bioclear - Products Page',
      width: 142,
      height: 300
    },
    {
      src: '/bioclear/bioclear_doctors.jpg',
      alt: 'Bioclear - Find a Dentist',
      width: 121,
      height: 300
    }
  ];

  return (
    <>
      <Heading text={'Bioclear'} />
      <p>
        Bioclear Matrix wanted to revamp their online presence and offer the
        ability to find other Dentists, register for online classes, and make
        reordering dental supplies easier for their customers.
      </p>
      <p>
        <a
          href="https://www.bioclearmatrix.com/"
          target="_blank"
          title="Bioclearmatrix.come"
          rel="noreferrer"
        >
          See It Live!
        </a>
      </p>
      <Slideshow label={contentImagesLabel} images={contentImages}></Slideshow>
    </>
  );
};
