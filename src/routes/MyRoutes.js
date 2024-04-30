import React from 'react';
import { Route, Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import PropTypes from 'prop-types';

export default function MyRoute({ component: Component, isClosed, ...rest }) {
  const isLoggedIn = false;

  if (!permission(isLoggedIn, isClosed)) {
    return redirectPage(false, rest, Component);
  }

  return redirectPage(true, rest, Component);
}

function permission(isClientLogged, isComponentClosed) {
  if (!isClientLogged && isComponentClosed) return false;

  return true;
}

function redirectPage(permission, rest, Component) {
  if (permission) return <Route {...rest} component={Component} />;

  return (
    <Redirect
      to={{ pathname: '/login', state: { prevPath: rest.location.pathname } }}
    />
  );
}
MyRoute.defaltProps = {
  isClosed: false,
};

MyRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isClosed: PropTypes.bool,
};
