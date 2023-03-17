import type { NextPage } from 'next';
import { Wrapper } from '@/components/wrapper';
import { ThreeFourThreeIndustriesItem } from '@/components/page/portfolio/items/343-industries';

const ThreeFourThree: NextPage = () => {
  return (
    <>
      <Wrapper>
        <ThreeFourThreeIndustriesItem />
      </Wrapper>
    </>
  );
};

export default ThreeFourThree;
