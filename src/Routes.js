import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './components/Login/Login';
import MainPage from './components/MainPage/MainPage';
import Registration from './components/Registration/Registration';
import Favorites from './components/Favorites/Favorites';

export const routes = (
    <Switch>
      <Route path='/Login' component={Login} />
      <Route path='/MainPage' component={MainPage} />
      <Route path='/Registration' component={Registration} />
      <Route path='/Favorites' component={Favorites} />
    </Switch>
);
