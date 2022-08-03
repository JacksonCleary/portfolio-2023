import type { NextPage } from 'next';
import { Wrapper } from '../components/wrapper';
import Link from 'next/link';
import { HomeComponent } from '../components/page';

const Home: NextPage = () => {
  return (
    <>
      <Wrapper>
        <Link href="/about">
          <a
            style={{
              zIndex: 5,
              position: 'absolute',
              top: '50%',
              right: ' 90%'
            }}
          >
            About
          </a>
        </Link>
        <HomeComponent />
      </Wrapper>
    </>
  );
};

export default Home;
