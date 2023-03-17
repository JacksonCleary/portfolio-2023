import { Slideshow, SlideShowImageProps } from '@/components/slideshow';
import { Heading } from '@/components/heading';

export const ThreeFourThreeIndustriesContent = (): JSX.Element => {
  const contentImagesLabel = 'Content Page Module System';
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

  const progressionImagesLabel = 'Halo Infinite Battlepass Progression';
  const progressionImages: SlideShowImageProps[] = [
    {
      src: '/343/progression-summary.jpg',
      alt: 'Progression Pages - Summary',
      width: 159,
      height: 300
    },
    {
      src: '/343/progression.jpg',
      alt: 'Progression Pages - Battlepass',
      width: 261,
      height: 300
    },
    {
      src: '/343/progression-store.jpg',
      alt: 'Progression Pages - Store',
      width: 252,
      height: 300
    },
    {
      src: '/343/progression-store-single.jpg',
      alt: 'Progression Pages - Store Single',
      width: 261,
      height: 300
    }
  ];

  const statsImagesLabel = 'Halo Infinite Player Stats';
  const statsImages: SlideShowImageProps[] = [
    {
      src: '/343/last-matches.jpg',
      alt: 'Halo Infinite Stats - Last Matches SVG Chart',
      width: 649,
      height: 300
    },
    {
      src: '/343/last-matches-list.jpg',
      alt: 'Halo Infinite Stats - Last Matches List',
      width: 659,
      height: 300
    }
  ];

  const ugcImagesLabel = 'Halo Infinite User Generated Content Portal';
  const ugcImages: SlideShowImageProps[] = [
    {
      src: '/343/ugc.jpg',
      alt: 'Halo Infinite UGC - Archive',
      width: 229,
      height: 300
    },
    {
      src: '/343/ugc-single.jpg',
      alt: 'Halo Infinite UGC - Single Asset',
      width: 286,
      height: 300
    }
  ];

  return (
    <section>
      <Heading text={'343 Industries'} />
      <p>
        Halowaypoint.com, and the accompanying mobile app, are comprehensive
        portals for managing game progress, tracking stats, and keeping up to
        date with all things Halo.
      </p>
      <p>
        <a
          href="https://www.halowaypoint.com"
          target="_blank"
          title="HaloWaypoint.com"
          rel="noreferrer"
        >
          See It Live!
        </a>{' '}
        (More features are available if you have an XBox or Steam account.)
      </p>
      <Slideshow label={contentImagesLabel} images={contentImages}>
        <p>
          A robust module ecosystem was built into our admin CMS to accommodate
          drag and drop content for our publishing team. This allowed for pixel
          perfect design across browsers and devices, and helped solidify
          communication between teams using staging tools like{' '}
          <a
            href="https://storybook.js.org/"
            title="Storybook"
            target={'_blank'}
            rel="noreferrer"
          >
            Storybook
          </a>{' '}
          for design and functionality review. CMS APIs were extended to allow
          for new types of content that would utilize these blocks for pages,
          blog posts and author archives.
        </p>
      </Slideshow>
      <hr />

      <Slideshow label={progressionImagesLabel} images={progressionImages}>
        <p>
          Halo Waypoint provides a portal where players can track progress
          across different seasonal Battle Passes, Events, and Challenges. I was
          tasked with building out Halo Infinite and Halo MCC progression.
        </p>
        <p>
          Halo Waypoint’s Infinite Store mimics the in-game store allowing
          players to purchase inventory bundles, currency, boosts, and pieces of
          armor related to customizing their player. <br />A portal to purchase
          Xbox GamePass, Halo Infinite, and Halo MCC was also implemented.
        </p>
      </Slideshow>
      <hr />

      <Slideshow label={statsImagesLabel} images={statsImages}>
        <p>
          The Halo Infinite stats section provides players with an interface to
          view previous games and information relating to stats, players, and
          performance.
        </p>
        <p>
          As part of this work, I was tasked with building a mobile friendly,
          accessible, SVG graph for the last 20 matches a player had played.
        </p>
        <p>
          After launch, I gave a presentation at an internal Microsoft UI /
          Accessibility conference about the implementation, challenges, and
          solutions needed to satisfy accessibility across devices, screen
          readers, and color schemes.
        </p>
      </Slideshow>
      <hr />

      <Slideshow label={ugcImagesLabel} images={ugcImages}>
        <p>
          Halo Waypoint&apos;s Infinite Content Browser is a web version of the
          game&apos;s implementation.
        </p>
        <p>
          Players are able to favorite, rate, report, and search for maps,
          modes, etc. they and other players have made.
        </p>
        <p>
          Every action is tied to APIs around the game to provide seamless
          functionality as a companion app.
        </p>
      </Slideshow>
    </section>
  );
};
