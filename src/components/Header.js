import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className='App'>
      <NavLink activeClassName='is-active' exact to='/Home'>
        Home
      </NavLink>{' '}
      |
      <NavLink activeClassName='is-active' exact to='/Authors'>
        Athour
      </NavLink>{' '}
      |
      <NavLink activeClassName='is-active' exact to='/Calculator'>
        Calculator
      </NavLink>{' '}
      |
    </div>
  );
}

export default Header;
