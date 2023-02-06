import React from 'react';
import './Layout.scss';

import Logo from '../Logo/Logo';

const Layout = (props) => {
  return (
    <div className='layout'>
      <div className='sidebar'>
        <section className='logo-section'>
          <Logo />
        </section>
        <section className='navbar-section'>Navigation goes here</section>
        <section className='user-section'>User icon goes here</section>
      </div>
      <main className='main'>Main section</main>
    </div>
  );
};

export default Layout;
