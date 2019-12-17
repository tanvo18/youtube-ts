import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../../components/header/Header';
import HomePage from '../homepage/HomePage';
import DetailPage from '../detail-page/DetailPage';
import SearchPage from '../search-page/SearchPage';

const RootRouter = () => (
  <Router>
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/watch/:id' component={DetailPage} />
        <Route path='/search/:searchtext' component={SearchPage} />
      </Switch>
    </React.Fragment>
  </Router>
);

export default RootRouter;
