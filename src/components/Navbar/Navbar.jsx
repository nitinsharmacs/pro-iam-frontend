import React from 'react';
import './Navbar.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMaximize, faGear } from '@fortawesome/free-solid-svg-icons';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

const NavbarItem = (props) => (
  <NavLink to={props.href} className='navbar-item'>
    <MenuItem>
      <ListItemIcon
        className={({ isActive }) =>
          ['navbar-item-icon', isActive ? 'active' : ''].join(' ')
        }
      >
        <FontAwesomeIcon icon={props.icon} />
      </ListItemIcon>
      <Typography variant='inherit' className='navbar-item-label'>
        {props.label}
      </Typography>
    </MenuItem>
  </NavLink>
);

const Navbar = (props) => {
  const navItems = [
    { label: 'Applications', href: '/applications', icon: faWindowMaximize },
    { label: 'Settings', href: '/settings', icon: faGear },
  ];
  return (
    <div className='navbar'>
      <MenuList>
        {navItems.map((item, index) => (
          <NavbarItem key={index + item.label} {...item} />
        ))}
      </MenuList>
    </div>
  );
};

export default Navbar;
