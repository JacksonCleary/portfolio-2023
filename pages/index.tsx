import type { NextPage } from 'next';
import { Background } from '../components/background';
import { BackgroundAnimationProvider } from '../providers';

const Home: NextPage = () => {
  return (
    <>
      <BackgroundAnimationProvider>
        <Background />
      </BackgroundAnimationProvider>
    </>
  );
};

export default Home;
