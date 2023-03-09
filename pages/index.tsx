import type { NextPage } from 'next';
import { Wrapper } from '../components/wrapper';
import { HomeComponent } from '../components/page';
import { NavItem } from '@/components/nav';

const Home: NextPage = () => {
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
          <NavItem route="/work" text="Work" label="Go To Work Page" />
          <NavItem
            route="/portfolio"
            text="Portfolio"
            label="Go To Portfolio Page"
          />
        </div>
        <HomeComponent />
      </Wrapper>
    </>
  );
};

export default Home;
