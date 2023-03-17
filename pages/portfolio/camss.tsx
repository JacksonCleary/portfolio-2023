import type { NextPage } from 'next';
import { Wrapper } from '@/components/wrapper';
import { CamssItem } from '@/components/page/portfolio/items/camss';

const Camss: NextPage = () => {
  return (
    <>
      <Wrapper>
        <CamssItem />
      </Wrapper>
    </>
  );
};

export default Camss;
