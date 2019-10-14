import React from 'react';
import { Route, Redirect } from 'react-router-dom';

interface RedirectRouteProps {
  path: string;
  component: any;
  exact: boolean;
  redirectPath: string;
  redirectCondition: boolean;
}

export const RedirectRoute = ({
  component: Component,
  redirectPath,
  redirectCondition,
  ...rest
}: RedirectRouteProps) => (
  <Route {...rest} render={props => (redirectCondition ? <Redirect to={redirectPath} /> : <Component {...props} />)} />
);

export default RedirectRoute;
