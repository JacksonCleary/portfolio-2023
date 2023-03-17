import type { NextPage } from 'next';
import { Wrapper } from '@/components/wrapper';
import { FourCultureItem } from '@/components/page/portfolio/items/4culture';

const FourCulture: NextPage = () => {
  return (
    <>
      <Wrapper>
        <FourCultureItem />
      </Wrapper>
    </>
  );
};

export default FourCulture;
