import Link from 'next/link';
import { Heading } from '@/components/heading';
import styles from '../content.module.scss';
export const ContentHome = (): JSX.Element => {
  const startDate = new Date(2010, 0, 0);
  const now = new Date();
  const diff = now.valueOf() - startDate.valueOf();
  // Below one is the single line logic to calculate the no. of years...
  const years = new Date(diff).getFullYear() - 1970;

  return (
    <>
      <Heading text="Hello" />
      <div className={styles['content-padding']}>
        <p>
          My name is Daniel, and I&apos;ve been a developer/software
          engineer/strategist for {years} years.{' '}
        </p>
        <p>Here&apos;s quick summary of my skills:</p>
        <div className={styles.skills}>
          <h4>Leadership</h4>
          <p>
            Mentoring, Code Reviews, Tech Leading, Shareholder Facing, Feature
            Owning
          </p>
        </div>
        <div className={styles.skills}>
          <h4>Soft Skills</h4>
          <p>Github, Gitlab, Documentation, Training, Public Speaking, IT</p>
        </div>
        <div className={styles.skills}>
          <h4>Javascript</h4>
          <p>
            NodeJS, NextJS, React, React Native, Typescript, React Three Fiber,
            Express, Jest testing, Storybook, VueJS, jQuery, lodash, moment,
            GSAP, Redux
          </p>
        </div>
        <div className={styles.skills}>
          <h4>CSS</h4>
          <p>
            CSS, SCSS, Sass, Tailwind, Flexbox, Grid, Animation, various
            frameworks like Bulma and Miligram
          </p>
        </div>
        <div className={styles.skills}>
          <h4>HTML</h4>
          <p>HTML, SVG, Canvas, Semanitic HTML and Accessibility</p>
        </div>
        <div className={styles.skills}>
          <h4>Server Side</h4>
          <p>Node, PHP 7.1+, some Python and Ruby on Rails</p>
        </div>
        <div className={styles.skills}>
          <h4>Database / Storage</h4>
          <p>
            GraphQL, MySQL, Postgres, MongoDB, <br /> LocalStorage, flat storage
          </p>
        </div>
        <div className={styles.skills}>
          <h4>CMS / Frameworks</h4>
          <p>
            Wordpress, Craft3, ApostropheJS, <br /> Laravel, Magento, NextJS,
            Gatsby, ApostropheJS
          </p>
        </div>
        <div className={styles.skills}>
          <h4>DevOps</h4>
          <p>Docker, Vagrant, Kubernetes, Azure Devops</p>
        </div>
      </div>
      <hr />
      <div className={styles['content-padding']}>
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
      </div>
    </>
  );
};
