import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Page1 from '../components/Page1';
import Page2 from '../components/Page2';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import NavBar from '../components/NavBar';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <NavBar />
      <Switch>
        <Route path="/" component={Page1} exact={true} />
        <Route path="/page2" component={Page2} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
