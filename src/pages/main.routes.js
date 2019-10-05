import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Detail from 'pages/detail';
import Home from 'pages/home';

const MainRouters = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/detail" component={Detail} />
    </Switch>
  )
}

export default withRouter(MainRouters);
