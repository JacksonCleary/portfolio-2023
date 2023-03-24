import { Heading } from '@/components/heading';
import styles from '../content.module.scss';

interface Meta {
  text: string;
}

const Business = ({ text }: Meta): JSX.Element => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
        version="1.1"
      >
        <path d="M661 84v860H84V84h577m29.3-80H54.7C26.7 4 4 30.9 4 64v900c0 33.1 22.7 60 50.7 60h635.6c28 0 50.7-26.9 50.7-60V64c0-33.1-22.7-60-50.7-60z" />
        <path d="M505 742v201H240V742h265m61-80H178.1c-16.8 0-18.1 9.5-18.1 21.2v318.5c0 11.7 1.4 21.2 18.1 21.2H566c16.8 0 19-9.5 19-21.2V683.2c0-11.7-2.2-21.2-19-21.2z m376-267v548H742.1V395H942m63.9-80H677.5c-14.2 0-15.3 18.6-15.3 41.6v624.7c0 23 1.1 41.6 15.3 41.6h328.4c14.2 0 16.1-18.6 16.1-41.6V356.6c0-23-1.9-41.6-16.1-41.6zM291 223H185c-22.1 0-40-17.9-40-40s17.9-40 40-40h106c22.1 0 40 17.9 40 40s-17.9 40-40 40z m270 0H455c-22.1 0-40-17.9-40-40s17.9-40 40-40h106c22.1 0 40 17.9 40 40s-17.9 40-40 40zM291 380H185c-22.1 0-40-17.9-40-40s17.9-40 40-40h106c22.1 0 40 17.9 40 40s-17.9 40-40 40z m270 0H455c-22.1 0-40-17.9-40-40s17.9-40 40-40h106c22.1 0 40 17.9 40 40s-17.9 40-40 40zM291 537H185c-22.1 0-40-17.9-40-40s17.9-40 40-40h106c22.1 0 40 17.9 40 40s-17.9 40-40 40z m270 0H455c-22.1 0-40-17.9-40-40s17.9-40 40-40h106c22.1 0 40 17.9 40 40s-17.9 40-40 40z" />
        <path d="M766 557h-39.7c-22.1 0-40-17.9-40-40s17.9-40 40-40H766c22.1 0 40 17.9 40 40s-17.9 40-40 40z m0 179h-43c-22.1 0-40-17.9-40-40s17.9-40 40-40h43c22.1 0 40 17.9 40 40s-17.9 40-40 40z m0 179h-36.4c-22.1 0-40-17.9-40-40s17.9-40 40-40H766c22.1 0 40 17.9 40 40s-17.9 40-40 40z" />
      </svg>
      <h3>{text}</h3>
    </div>
  );
};

const Location = ({ text }: Meta): JSX.Element => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        viewBox="0 0 395.71 395.71"
        xmlSpace="preserve"
      >
        <g>
          <path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738   c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388   C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191   c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z" />
        </g>
      </svg>
      <h3>{text}</h3>
    </div>
  );
};

const Time = ({ text }: Meta): JSX.Element => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
        version="1.1"
      >
        <path d="M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512S793.6 1024 512 1024zM512 85.333333C277.333333 85.333333 85.333333 277.333333 85.333333 512s192 426.666667 426.666667 426.666667 426.666667-192 426.666667-426.666667S746.666667 85.333333 512 85.333333z" />
        <path d="M512 554.666667c-25.6 0-42.666667-17.066667-42.666667-42.666667L469.333333 213.333333c0-25.6 17.066667-42.666667 42.666667-42.666667s42.666667 17.066667 42.666667 42.666667l0 298.666667C554.666667 537.6 537.6 554.666667 512 554.666667z" />
        <path d="M682.666667 725.333333c-12.8 0-21.333333-4.266667-29.866667-12.8l-170.666667-170.666667c-17.066667-17.066667-17.066667-42.666667 0-59.733333s42.666667-17.066667 59.733333 0l170.666667 170.666667c17.066667 17.066667 17.066667 42.666667 0 59.733333C704 721.066667 695.466667 725.333333 682.666667 725.333333z" />
      </svg>
      <h3>{text}</h3>
    </div>
  );
};

export const ContentWork = (): JSX.Element => {
  return (
    <>
      <Heading text="Work History" />
      <div className={styles['content-padding']}>
        <h2>Software Design Engineer</h2>
        <div className={styles.meta}>
          <Business text={'343 Industries'} />
          <Location text={'Redmond, WA'} />
          <Time text={'2020 - Present'} />
        </div>
        <p>
          Software development building out new services, extending APIs,
          providing training, internationalization, and pushing accessible UX
          for the redesign and launch of Halo Waypoint. Development includes
          paired launches of content for two AAA Halo game titles with ways to
          view player records, statistics, progression, and customization.
          Technological experience includes Javascript ES6+, PHP7, WordPress,
          NodeJS, NextJS, React Three Fiber, Canvas, React, React Native,
          Typescript, Jest testing, Storybook, Docker, SCSS, SVG animation,
          Azure DevOps.
        </p>
      </div>
      <hr />
      <div className={styles['content-padding']}>
        <h2>Front End Web Developer</h2>
        <div className={styles.meta}>
          <Business text={'En Masse Entertainment'} />
          <Location text={'Seattle, WA'} />
          <Time text={'2019 - 2020'} />
        </div>
        <p>
          Web development work building new features and micro sites for
          company’s corporate websites, internationalization, work on the En
          Masse PC games launcher, and building new features for the game TERA’s
          in-game store. Technological experience ranged from Ruby on Rails in
          Refinery, Javascript ES6+ in Apostrophe and VueJS, CSS and SVG
          animation, Docker deployment and Git versioning, and PHP work in
          custom work and CraftCMS / Yii Framework.{' '}
        </p>
      </div>

      <hr />
      <div className={styles['content-padding']}>
        <h2>Full Stack Tech Lead</h2>
        <div className={styles.meta}>
          <Business text={'coolblueweb'} />
          <Location text={'Seattle, WA'} />
          <Time text={'2016 - 2019'} />
        </div>
        <p>
          Web development in an agency capacity across a range of frontend,
          backend, and networking tasks. Duties included: creating solutions,
          writing documentation, estimating tasks per budget, overseeing
          developers, code reviewing, and communicating with clients through
          training and component diagrams. Technology experience ranged from
          creating, debugging, and maintaining WordPress / WooCommerce, Laravel,
          and Magento solutions, building rich interfaces and interaction via
          Javascript, and building eCommerce configurators.
        </p>
      </div>

      <hr />
      <div className={styles['content-padding']}>
        <h2>Freelance Full Stack Developer</h2>
        <div className={styles.meta}>
          <Business text={'JacksonWebDev'} />
          <Location text={'Seattle, WA'} />
          <Time text={'2010 - 2020'} />
        </div>
        <p>
          Web development in a freelance capacity: building new features across
          WordPress, custom PHP solutions, interactive Javascript presentations,
          and building React / VueJS components including frameworks like
          Nuxt.js and Gatsby.
        </p>
      </div>
      <hr />
      <div className={styles['content-padding']}>
        <h2>Web Developer / Designer</h2>
        <div className={styles.meta}>
          <Business text={'Pinpoint Creative'} />
          <Location text={'Clemmons, NC'} />
          <Time text={'2012 - 2013'} />
        </div>
        <p>
          Web and print design, general web development, IT support, and
          generating MailChimp email campaigns for Christian based
          organizations.{' '}
        </p>
      </div>
      <hr />
      <div className={styles['content-padding']}>
        <h2>Creative Collaborator</h2>
        <div className={styles.meta}>
          <Business text={'One Hero Creative'} />
          <Location text={'Winston-Salem, NC'} />
          <Time text={'2010 - 2012'} />
        </div>
        <p>
          Web design and development, ActionScript 3 UI / UX interfacing,
          philanthropic programming to better myself.
        </p>
      </div>
    </>
  );
};
