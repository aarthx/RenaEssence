import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <header className={styles.navBar}>
      <Link to="/">
        <h1 className={styles.logo}>Rena Essence</h1>
      </Link>
      <nav className={styles.links}>
        <Link to="/Artistas">Artistas</Link>
        <Link to="/Ciencia">Ciência</Link>
        <Link to="/Galeria">Galeria</Link>
      </nav>
    </header>
  );
};

export default NavBar;
