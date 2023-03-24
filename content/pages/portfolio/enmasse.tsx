import { Slideshow, SlideShowImageProps } from '@/components/slideshow';
import { Heading } from '@/components/heading';
import styles from '../../content.module.scss';

export const EnmasseContent = (): JSX.Element => {
  const contentImagesLabel = 'En Masse Entertainment';
  const contentImages: SlideShowImageProps[] = [
    {
      src: '/enmasse/enmasse_home.jpg',
      alt: 'enmasse Home',
      width: 148,
      height: 300
    },
    {
      src: '/enmasse/tera.jpg',
      alt: 'enmasse - TERA campaign',
      width: 465,
      height: 300
    },
    {
      src: '/enmasse/dark_crystal_1.jpg',
      alt: 'enmasse - Dark Crystal Page',
      width: 224,
      height: 300
    },
    {
      src: '/enmasse/dark_crystal_2.jpg',
      alt: 'enmasse - Dark Crystal Page',
      width: 249,
      height: 300
    }
  ];

  return (
    <>
      <Heading text={'EME'} />

      <Slideshow label={contentImagesLabel} images={contentImages}>
        <div className={styles['content-padding']}>
          <p>
            Building functional frontend plugins, backend optimizations, and
            quality-of-life improvements in the form of{' '}
            <a
              href="https://apostrophecms.com/"
              target="_blank"
              rel="noreferrer"
            >
              ApostropheCMS
            </a>{' '}
            modules.
          </p>
          <p>These included:</p>
          <ul>
            <li>
              An infinite scroll blog archive, complete with pagination and
              accessibility for indexed blog posts
            </li>
            <li>A Javascript replacement for RoR cookie handling</li>
            <li>
              Lots and lots of new content modules for project managers to
              render conditional content
            </li>
            <li>Internationalization</li>
            <li>Generating HTML, embedding API media</li>
          </ul>
          <p>
            Other work included a migration to CraftCMS from Ruby Refinery and
            updates / improvements to the VueJS layer of EME&apos;s game
            launcher.
          </p>
        </div>
      </Slideshow>
    </>
  );
};
