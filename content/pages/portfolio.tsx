import Link from 'next/link';
import { PortfolioNav } from '@/components/nav';
import { Heading } from '@/components/heading';
import styles from '../content.module.scss';
export const ContentPortfolio = (): JSX.Element => {
  const threefourthree =
    'I also have a PDF of current work samples from my time at 343 Industries (2020 to 2023).';
  return (
    <>
      <Heading text="Portfolio" />
      <div className={styles['content-padding']}>
        <p>Here are some examples of my work.</p>
        <Link
          href={'/Daniel-Jackson-343-work-summary-2020-present.pdf'}
          passHref
        >
          <a
            href={'/Daniel-Jackson-343-work-summary-2020-present.pdf'}
            aria-label={'PDF of my work at 343 Industries'}
            target={'_blank'}
            rel="noreferrer"
          >
            {threefourthree}
          </a>
        </Link>
        <p></p>
      </div>
      <hr />
      <PortfolioNav />
    </>
  );
};
