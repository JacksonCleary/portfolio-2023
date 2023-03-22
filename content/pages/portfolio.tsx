import Link from 'next/link';
import { PortfolioNav } from '@/components/nav';
import { Heading } from '@/components/heading';
export const ContentPortfolio = (): JSX.Element => {
  const threefourthree =
    'I also have a PDF of current work samples from my time at 343 Industries.';
  return (
    <>
      <Heading text="Portfolio" />
      <p>Here are some examples of my work.</p>
      <Link href={'/Daniel-Jackson-343-work-summary-2020-present.pdf'} passHref>
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
      <hr />
      <PortfolioNav />
    </>
  );
};
