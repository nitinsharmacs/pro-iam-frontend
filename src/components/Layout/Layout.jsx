import React from 'react';
import './Layout.scss';

import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';

const Layout = (props) => {
  return (
    <div className='layout'>
      <div className='sidebar'>
        <section className='logo-section'>
          <Logo />
        </section>
        <section className='navbar-section'>
          <Navbar />
        </section>
        <section className='user-section'>User icon goes here</section>
      </div>
      <main className='main'>{props.children}</main>
    </div>
  );
};

export default Layout;
