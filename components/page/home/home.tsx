import React from 'react';
import { ContentHome } from '@/content/pages';
import Head from 'next/head';

export const HomeComponent = (): JSX.Element => {
  return (
    <div>
      <Head>
        <title>Daniel Jackson - Home</title>
        <meta charSet="utf-8" />
        <meta name="description" content="This is my portfolio site." />
        <meta name="author" content="Daniel Jackson" />

        <meta property="og:title" content="Daniel Jackson - Home" />
        <meta property="og:url" content={'https://jacksonweb.dev'} />
        <meta
          property="og:image"
          content="https://jacksonweb.dev/favicon.ico"
        />
      </Head>
      <ContentHome />
    </div>
  );
};
