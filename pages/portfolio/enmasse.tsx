import type { NextPage } from 'next';
import { Wrapper } from '@/components/wrapper';
import { EnmasseItem } from '@/components/page/portfolio/items/enmasse';

const Enmasse: NextPage = () => {
  return (
    <>
      <Wrapper>
        <EnmasseItem />
      </Wrapper>
    </>
  );
};

export default Enmasse;
