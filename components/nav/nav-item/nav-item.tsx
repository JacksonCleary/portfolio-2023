import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './nav-item.module.scss';

interface NavItemProps {
  route: string;
  text: string;
  label: string;
  external?: boolean;
}

export const NavItem = ({
  route,
  text,
  label,
  external = false
}: NavItemProps): JSX.Element => {
  const router = useRouter();

  const maybeActive = router.asPath === route ? styles.active : '';

  return (
    <Link href={route} passHref>
      <a
        aria-label={label}
        className={`${styles.link} ${maybeActive}`}
        target={external ? '_blank' : '_self'}
        rel="noreferrer"
      >
        {text}
      </a>
    </Link>
  );
};
