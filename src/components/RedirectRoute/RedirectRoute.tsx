import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { AuthContext } from '../../providers/AuthProvider/AuthProvider';

interface RedirectRouteProps {
  path: string;
  component: any;
  exact: boolean;
  authorized: boolean;
  redirectPath: string;
}

export const RedirectRoute: React.FC<RedirectRouteProps> = ({
  component: Component,
  authorized,
  redirectPath,
  ...rest
}) => {
  const currentUser = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={props => (!!currentUser === authorized ? <Component {...props} /> : <Redirect to={redirectPath} />)}
    />
  );
};

export default RedirectRoute;
