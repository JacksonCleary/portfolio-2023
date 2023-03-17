import type { NextPage } from 'next';
import { Wrapper } from '@/components/wrapper';
import { BioclearItem } from '@/components/page/portfolio/items/bioclear';

const Bioclear: NextPage = () => {
  return (
    <>
      <Wrapper>
        <BioclearItem />
      </Wrapper>
    </>
  );
};

export default Bioclear;
