import type { NextPage } from 'next';
import { Wrapper } from '../components/wrapper';
import { HomeComponent } from '../components/page';

const Home: NextPage = () => {
  return (
    <>
      <Wrapper>
        <HomeComponent />
      </Wrapper>
    </>
  );
};

export default Home;
