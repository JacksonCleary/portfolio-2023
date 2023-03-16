import type { NextPage } from 'next';
import { Wrapper } from '@/components/wrapper';
import { ThreeFourThreeIndustries } from '@/components/page/portfolio/items/343-industries';

const Portfolio: NextPage = () => {
  return (
    <>
      <Wrapper>
        <ThreeFourThreeIndustries />
      </Wrapper>
    </>
  );
};

export default Portfolio;
