import React from 'react';
import styles from './Menu.module.scss';
import { NavLink } from 'react-router-dom';

const menuItems = [
  { label: "HOME", href: "/home" },
  { label: "ABOUT US", href: "/about" },
  { label: "INQUIRE", href: "/inquire" },
];

const Menu = ({mobileOpen, closeMenu}) => (
  <nav className={`${styles.menu} ${mobileOpen ? styles.open : ''}`}>
    <ul>
      {menuItems.map(item => (
         <li key={item.label}>
          <NavLink 
            to={item.href} 
            className={({ isActive }) => isActive ? styles.active : ""}>
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Menu;