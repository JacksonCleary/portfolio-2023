import useLoading from '@/hooks/loading';
import Link from 'next/link';
import { Heading } from '@/components/heading';
export const ContentHome = (): JSX.Element => {
  const { loading } = useLoading();

  return (
    <section>
      <Heading text="Hello" />
      <p>My name is Daniel, and I am a software engineer. </p>
      <p>
        These days it&apos;s mostly Javascript, but I have experience in other
        things too.
      </p>
      <hr />
      <p>
        This site is built with{' '}
        <a
          title="Visit NextJS Home Page"
          target="_blank"
          rel="noreferrer"
          href="https://nextjs.org/"
        >
          Next.js
        </a>{' '}
        and utilizes React, SCSS and some SVG goodness for flavor.
      </p>
    </section>
  );
};
