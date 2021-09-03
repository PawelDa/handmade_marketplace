import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../firebase/config';

import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../assets/images/default-monochrome.svg';
import CartIcon from './CartIcon';
import CartDropdown from './CartDropdown';

import '../assets/stylesheets/components/Header.scss';
import cartReducer from '../redux/reducers/cart';

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {
        currentUser ?
        <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
        :
        <Link className='option' to='/signin'>SIGN IN</Link>
      }
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Header);
