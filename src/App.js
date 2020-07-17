import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { routes } from './Routes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <Header />
      {routes}
      <Footer />
    </Router>
  );
}

export default App;
