import { NavItem } from './nav-item';
import { useRouter } from 'next/router';
import { PortfolioNav } from './portfolio-nav';
import styles from './nav.module.scss';

export const Nav = (): JSX.Element => {
  const router = useRouter();
  const isPortfolio = router.asPath.includes('/portfolio');

  return (
    <div className={styles.nav}>
      <NavItem text="Home" label="Go home" route="/" />
      <NavItem text="Work History" label="See my work history" route="/work" />
      <NavItem
        text="Portfolio"
        label="See my work portfolio"
        route="/portfolio"
      />
      {isPortfolio && <PortfolioNav />}
      <NavItem
        text="Resume"
        label="See my resume"
        route="/resume.pdf"
        external={true}
      />
    </div>
  );
};
