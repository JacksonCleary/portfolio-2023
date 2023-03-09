import type { NextPage } from 'next';
import { Wrapper } from '@/components/wrapper';
import { PortfolioComponent } from '@/components/page/portfolio';
import { NavItem } from '@/components/nav';
import { useBackgroundAnimation } from '../providers';

const Portfolio: NextPage = () => {
  const bganim = useBackgroundAnimation();

  const insertClasses = (classArr: string[]) => {
    console.log('triggerred');
    bganim.dispatch({
      type: 'updateBodyClasses',
      data: {
        classes: classArr
      }
    });
  };

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
          <NavItem route="/work" text="Work" label="Go To Work Page" />
          <a
            style={{
              position: 'relative',
              backgroundColor: 'cyan',
              width: 50,
              height: 50,
              display: 'block'
            }}
            onTouchStart={() => insertClasses(['portfolioHover'])}
            onTouchEnd={() => insertClasses([])}
            onMouseEnter={() => insertClasses(['portfolioHover'])}
            onMouseLeave={() => insertClasses([])}
          >
            Hover
          </a>
        </div>
        <PortfolioComponent />
      </Wrapper>
    </>
  );
};

export default Portfolio;
