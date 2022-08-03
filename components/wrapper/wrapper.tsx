import React from 'react';
import styles from './wrapper.module.scss';
type Props = {
  children?: React.ReactElement | React.ReactElement[];
};

export const Wrapper = ({ children }: Props): JSX.Element => {
  return <div className={styles.wrapper}>{children}</div>;
};
