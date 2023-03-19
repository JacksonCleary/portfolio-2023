import type { NextPage } from 'next';
import { Wrapper } from '@/components/wrapper';
import { StickerguyItem } from '@/components/page/portfolio/items/stickerguy';

const Stickerguy: NextPage = () => {
  return (
    <>
      <Wrapper>
        <StickerguyItem />
      </Wrapper>
    </>
  );
};

export default Stickerguy;
