import React from 'react';
import { Link } from 'react-router-dom';
import logoSvg from '../assets/imgs/svg/applogo.svg';

export function AppHeader() {
  return (
    <section className='app-header'>
      <div className='app-header-layout'>
        <section className='app-logo'>
          <img src={logoSvg} alt='' />
        </section>
        <nav className='nav-links'>
          <Link className='header-link' to='/'>
            homepage
          </Link>
          <Link className='header-link' to='/about'>
            About
          </Link>
        </nav>
      </div>
    </section>
  );
}
