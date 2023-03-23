import React from 'react';
import { ContentContact } from '@/content/pages';
import Head from 'next/head';

export const ContactComponent = (): JSX.Element => {
  return (
    <div>
      <Head>
        <title>Daniel Jackson - Contact</title>
        <meta charSet="utf-8" />
        <meta name="description" content="This is my contact page." />
        <meta name="author" content="Daniel Jackson" />

        <meta property="og:title" content="Daniel Jackson - Contact" />
        <meta property="og:url" content={'https://jacksonweb.dev/contact'} />
        <meta
          property="og:image"
          content="https://jacksonweb.dev/favicon.ico"
        />
      </Head>
      <ContentContact />
    </div>
  );
};
