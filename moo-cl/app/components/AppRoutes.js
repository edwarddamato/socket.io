import React from 'react';
import { Router, browserHistory } from 'react-router';
import routes from './../config/routes.js';

export default class AppRoutes extends React.Component {
  render() {
    return (
      <Router history={browserHistory} routes={routes} onUpdate={() => window.scrollTo(0, 0)}/>
    );
  }
}