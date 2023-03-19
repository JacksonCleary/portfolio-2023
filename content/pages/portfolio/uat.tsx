import { Slideshow, SlideShowImageProps } from '@/components/slideshow';
import { Heading } from '@/components/heading';

export const UatContent = (): JSX.Element => {
  const contentImagesLabel = 'Bugherd / Teamwork UAT tool';
  const contentImages: SlideShowImageProps[] = [
    {
      src: '/uat/uat.jpg',
      alt: 'uat Configurator Blank',
      width: 191,
      height: 300
    }
  ];

  return (
    <section>
      <Heading text={'Uat'} />
      <p>
        This was one tool of many I built to help expedite our UAT process while
        at{' '}
        <a
          href="https://coolblueweb.com"
          title="coolblueweb"
          target="_blank"
          rel="noreferrer"
        >
          coolblueweb
        </a>
        . At the time, we used Bugherd for bugs and Teamwork for tasks, and
        there was no fast way to import one from the other. So I built this one
        page registration for Bugherd webhooks.
      </p>
      <Slideshow label={contentImagesLabel} images={contentImages}></Slideshow>
      <p>Essentially you would:</p>
      <ul>
        <li>Pick your Bugherd list</li>
        <li>Pick your Teamwork task list</li>
        <li>Connect the two</li>
        <li>Add the Bugherd JS to your site for debugging.</li>
      </ul>
      <p>
        Easy Peasy. The webhook would auto fire when a new bug was created and
        create a task in TW.{' '}
      </p>
    </section>
  );
};
