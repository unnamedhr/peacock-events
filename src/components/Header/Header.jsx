import React, { useState } from 'react';
import styles from './Header.module.scss';
import Menu from '../Menu/Menu';
import logo from '../../assets/logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Peacock Events" className={styles.logoImage} />
      </div>
      <button className={styles.burger} onClick={toggleMenu} aria-label="Toggle menu">
        <span />
        <span />
        <span />
      </button>
      <Menu mobileOpen={menuOpen} closeMenu={() => setMenuOpen(false)} />
    </header>
  )
};

export default Header;