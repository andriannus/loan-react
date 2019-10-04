import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Home from 'pages/home';

const MainRouters = () => {
  return (
    <Switch>
      <Route exact path="" component={Home} />
    </Switch>
  )
}

export default withRouter(MainRouters);
