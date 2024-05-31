import React from 'react';
import { FaHome, FaSignInAlt, FaUserCircle } from 'react-icons/fa';
import { FaArrowRightFromBracket, FaIdCard } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Nav } from './styled';
import * as actions from '../../store/modules/auth/action';
import history from '../../services/history';

export default function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispacth = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();

    dispacth(actions.loginFailure());
    history.push('/');
  };
  return (
    <Nav>
      <Link to={'/'}>
        <FaHome size={24} />
      </Link>
      {isLoggedIn ? (
        <Link to={'/register'}>
          <FaUserCircle size={24} />
        </Link>
      ) : (
        <Link to={'/register'}>
          <FaIdCard size={24} />
        </Link>
      )}

      {isLoggedIn ? (
        <Link onClick={handleClick} to="">
          <FaArrowRightFromBracket size={24} />
        </Link>
      ) : (
        <Link to="/login">
          <FaSignInAlt size={24} />
        </Link>
      )}
    </Nav>
  );
}
