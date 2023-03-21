import { useState, useEffect } from 'react';
import styles from './theme-toggle.module.scss';

const ThemeToggle = () => {
  const [activeTheme, setActiveTheme] = useState(document.body.dataset.theme);
  const inactiveTheme = activeTheme === 'light' ? 'dark' : 'light';

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
    window.localStorage.setItem('theme', activeTheme as string);
  }, [activeTheme]);

  return (
    <button
      className={`${styles.toggle} ${
        activeTheme === 'dark' ? styles.dark : ''
      }`}
      aria-label={`Change to ${inactiveTheme} mode`}
      title={`Change to ${inactiveTheme} mode`}
      type="button"
      onClick={() => setActiveTheme(inactiveTheme)}
    >
      <span className={`${styles.thumb}`} />
      <span>🌙</span>
      <span>☀️</span>
    </button>
  );
};

export default ThemeToggle;
