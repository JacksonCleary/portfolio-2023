import { Slideshow, SlideShowImageProps } from '@/components/slideshow';
import { Heading } from '@/components/heading';

export const StickerguyContent = (): JSX.Element => {
  const contentImagesLabel = 'Sticker Configurator';
  const contentImages: SlideShowImageProps[] = [
    {
      src: '/stickerguy/stickerguy_configurator.jpg',
      alt: 'stickerguy Configurator Blank',
      width: 213,
      height: 300
    },
    {
      src: '/stickerguy/stickerguy_sticker.jpg',
      alt: 'stickerguy Configurator Upload',
      width: 209,
      height: 300
    }
  ];

  return (
    <>
      <Heading text={'Stickerguy!'} />
      <p>
        <a
          href="https://stickerguy.com/product/bw425x550/"
          target="_blank"
          title="Stickerguy customize sticker"
          rel="noreferrer"
        >
          See It Live!
        </a>
      </p>
      <p>
        While working at{' '}
        <a
          href="https://coolblueweb.com"
          title="coolblueweb"
          target="_blank"
          rel="noreferrer"
        >
          coolblueweb
        </a>{' '}
        I was one of the &quot;configurator&quot; guys and had the opportunity
        to build one for{' '}
        <a
          href="https://stickerguy.com"
          title="StickerGuy!"
          target="_blank"
          rel="noreferrer"
        >
          StickerGuy!
        </a>
      </p>

      <p>
        It uses a combo of SVG for ineraction and HTML5 Canvas for rendering
        stickers at the right dimensions / Pixels Per Inch (PPI).
      </p>

      <p>
        The site also needed custom shipping and pricing rules, which I was able
        to modularize through a couple of plugin extensions.
      </p>
      <Slideshow label={contentImagesLabel} images={contentImages}></Slideshow>
    </>
  );
};
