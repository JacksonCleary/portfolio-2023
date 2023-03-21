import { useState, useEffect } from 'react';
import { Turn as Hamburger } from 'hamburger-react';
import { Nav } from '../nav';
import useLoading from '@/hooks/loading';
import styles from '../nav.module.scss';

export const MobileNav = (): JSX.Element => {
  const loading = useLoading();
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (loading.complete) {
      setOpen(false);
    }
  }, [loading.complete]);

  return (
    <div className={`${styles['mobile-nav']} ${isOpen ? styles.open : ''}`}>
      <div className={styles.burger}>
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          color={'var(--color-text-tertiary)'}
          size={30}
          direction={'left'}
        />
      </div>
      <div className={`${styles['menu-container']}`}>
        <Nav className={styles['mobile-menu']} />
      </div>
    </div>
  );
};
