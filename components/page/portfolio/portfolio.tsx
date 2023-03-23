import React from 'react';
import { ContentPortfolio } from '@/content/pages/portfolio';
import Head from 'next/head';

export const PortfolioComponent = (): JSX.Element => {
  return (
    <div>
      <Head>
        <title>Daniel Jackson - Portfolio</title>
        <meta charSet="utf-8" />
        <meta name="description" content="This is my portfolio page." />
        <meta name="author" content="Daniel Jackson" />

        <meta property="og:title" content="Daniel Jackson - Portfolio" />
        <meta property="og:url" content={'https://jacksonweb.dev/portfolio'} />
        <meta
          property="og:image"
          content="https://jacksonweb.dev/favicon.ico"
        />
      </Head>
      <ContentPortfolio />
    </div>
  );
};
