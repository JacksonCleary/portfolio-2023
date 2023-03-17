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
      <NavItem
        text="4Culture"
        label="See 4Culture work"
        route="/portfolio/4culture"
      />
      <NavItem
        text="Bioclear"
        label="See Bioclear work"
        route="/portfolio/bioclear"
      />
      <NavItem text="CAMSS" label="See CAMSS work" route="/portfolio/camss" />
      <NavItem
        text="coolblueweb"
        label="See coolblueweb work"
        route="/portfolio/coolblueweb"
      />
      <NavItem
        text="En Masse Entertainment"
        label="See en masse work"
        route="/portfolio/enmasse"
      />
    </div>
  );
};
