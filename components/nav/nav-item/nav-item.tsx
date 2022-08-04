import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useBackgroundAnimation } from '@/providers/background-animation';

import styles from './nav-item.module.scss';

interface NavItemProps {
  route: string;
  text: string;
  label: string;
}

export const NavItem = ({ route, text, label }: NavItemProps): JSX.Element => {
  const bganim = useBackgroundAnimation();
  const router = useRouter();

  const push = () => {
    bganim.dispatch({
      type: 'contentReady',
      data: {
        ready: false
      }
    });
    setTimeout(() => {
      router.push(route);
    }, 1000);
  };

  return (
    <button aria-label={label} onClick={() => push()}>
      {text}
    </button>
  );
};
