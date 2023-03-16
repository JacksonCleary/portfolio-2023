import { NavItem } from './nav-item';
import styles from './nav.module.scss';

export const PortfolioNav = (): JSX.Element => {
  return (
    <div className={styles['portfolio-nav']}>
      <NavItem
        text="343 Industries"
        label="See 343 Industries work"
        route="/portfolio/343-industries"
      />
    </div>
  );
};
