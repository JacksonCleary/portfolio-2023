import type { NextPage } from 'next';
import { Wrapper } from '@/components/wrapper';
import { UatItem } from '@/components/page/portfolio/items/uat';

const Uat: NextPage = () => {
  return (
    <>
      <Wrapper>
        <UatItem />
      </Wrapper>
    </>
  );
};

export default Uat;
