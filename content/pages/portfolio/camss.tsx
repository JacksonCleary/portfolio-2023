import { Slideshow, SlideShowImageProps } from '@/components/slideshow';
import { Heading } from '@/components/heading';

export const CamssContent = (): JSX.Element => {
  const contentImagesLabel = 'Portable Military Shelter Systems';
  const contentImages: SlideShowImageProps[] = [
    {
      src: '/camss/camss_home_1.jpg',
      alt: 'Camss Home',
      width: 118,
      height: 300
    },
    {
      src: '/camss/camss_home_2.jpg',
      alt: 'Camss - Home',
      width: 92,
      height: 300
    },
    {
      src: '/camss/camss_about.jpg',
      alt: 'Camss - About',
      width: 141,
      height: 300
    },
    {
      src: '/camss/camss_shelter.jpg',
      alt: 'Camss - Example Shelter',
      width: 457,
      height: 300
    },
    {
      src: '/camss/camss_customize.jpg',
      alt: 'Camss - Shelter Configurator',
      width: 248,
      height: 300
    }
  ];

  return (
    <section>
      <Heading text={'Camss'} />
      <p>
        This was a project fully developed by me. We initially had designs to
        run with, and after the initial Phase 1 of our project I took over
        designing / developing everything.
      </p>
      <p>
        <a
          href="https://www.camss.com/"
          target="_blank"
          title="camss.come"
          rel="noreferrer"
        >
          See It Live!
        </a>
      </p>
      <Slideshow label={contentImagesLabel} images={contentImages}>
        <p>
          What you see on CAMSS.com is a complex backend of WooCommerce,
          Advanced Custom Fields, the agility of flexbox, and many performance
          saving frontend techniques to make a ton of WP content manageable and
          fast.
        </p>

        <p>
          Many shelters on the site come with a configurator for customization,
          and I had a lot of fun making both the frontend and backend of these
          complex pages.
        </p>
      </Slideshow>
    </section>
  );
};
