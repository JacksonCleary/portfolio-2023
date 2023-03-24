import React from 'react';
import { ContentWork } from '@/content/pages';
import Head from 'next/head';
import styles from './work.module.scss';

export const WorkComponent = (): JSX.Element => {
  return (
    <div className={styles.work}>
      <Head>
        <title>Daniel Jackson - Work History</title>
        <meta charSet="utf-8" />
        <meta name="description" content="This is my work history page." />
        <meta name="author" content="Daniel Jackson" />

        <meta property="og:title" content="Daniel Jackson - Work History" />
        <meta property="og:url" content={'https://jacksonweb.dev/work'} />
        <meta
          property="og:image"
          content="https://jacksonweb.dev/favicon.ico"
        />
      </Head>
      <ContentWork />
    </div>
  );
};
