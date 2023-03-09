import type { NextPage } from 'next';
import { Wrapper } from '@/components/wrapper';
import { WorkComponent } from '@/components/page';
import { NavItem } from '@/components/nav';

const Work: NextPage = () => {
  return (
    <>
      <Wrapper>
        <div
          style={{
            zIndex: 5,
            position: 'absolute',
            top: '50%',
            right: ' 90%'
          }}
        >
          <NavItem route="/" text="Home" label="Go To Home Page" />
          <NavItem
            route="/portfolio"
            text="Portfolio"
            label="Go To Portfolio Page"
          />
        </div>
        <WorkComponent />
      </Wrapper>
    </>
  );
};

export default Work;
