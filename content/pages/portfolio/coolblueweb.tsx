import { Slideshow, SlideShowImageProps } from '@/components/slideshow';
import { Heading } from '@/components/heading';

export const CoolbluewebContent = (): JSX.Element => {
  const contentImagesLabel = 'Building Better eCommerce Solutions';
  const contentImages: SlideShowImageProps[] = [
    {
      src: '/coolblueweb/coolblueweb_home.jpg',
      alt: 'coolblueweb Home',
      width: 297,
      height: 300
    },
    {
      src: '/coolblueweb/coolblueweb_info.jpg',
      alt: 'coolblueweb - Info Page',
      width: 293,
      height: 300
    },
    {
      src: '/coolblueweb/coolblueweb_about.jpg',
      alt: 'coolblueweb - About Page',
      width: 215,
      height: 300
    },
    {
      src: '/coolblueweb/coolblueweb_footer.jpg',
      alt: 'coolblueweb - Footer',
      width: 431,
      height: 300
    }
  ];

  return (
    <>
      <Heading text={'coolblueweb'} />
      <p>
        I had the opportunity to work at{' '}
        <a
          href="https://coolblueweb.com"
          title="coolblueweb"
          target="_blank"
          rel="noreferrer"
        >
          coolblueweb
        </a>{' '}
        for about 3 1/2 years as a Tech lead.
      </p>

      <p>
        In that time I built and maintained many websites, webapps, plugins, and
        tools across PHP, MySQL, HTML, CSS and Javascript in WooCommerce,
        CodeIgniter, Magento, Laravel, CakePHP, React, Vue and custom.
      </p>

      <p>
        I managed teams, was client facing, conducted code reviews and lead
        projects in programming.
      </p>

      <p>
        <a
          href="https://www.coolblueweb.com/"
          target="_blank"
          title="coolblueweb.come"
          rel="noreferrer"
        >
          See It Live!
        </a>
      </p>
      <Slideshow label={contentImagesLabel} images={contentImages}>
        <p>
          During that time we wanted to revamp our corporate site. I built a
          robust AJAX and SEO friendly frontend and an extensive backend built
          by modular WordPress PHP plugins.
        </p>
      </Slideshow>
    </>
  );
};
