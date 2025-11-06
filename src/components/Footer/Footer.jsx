import React from 'react';
import styles from './Footer.module.scss';
import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.socialSection}>
      <span className={styles.socialLabel}>SOCIAL</span>
      <hr className={styles.divider} />
      <div className={styles.icons}>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebookF />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <FaYoutube />
        </a>
      </div>
    </div>
    <div className={styles.bottomLine}>
      © Peacock Events 2025 CREATED BY THEORY DIGITAL AGENCY
    </div>
  </footer>
);

export default Footer;