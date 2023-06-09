import type { NextPage } from 'next';
import { Wrapper } from '@/components/wrapper';
import { PortfolioComponent } from '@/components/page/portfolio';

const Portfolio: NextPage = () => {
  return (
    <>
      <Wrapper>
        <PortfolioComponent />
      </Wrapper>
    </>
  );
};

export default Portfolio;
