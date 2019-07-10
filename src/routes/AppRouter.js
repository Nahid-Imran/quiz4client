import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './../components/App';
import Home from './../components/Home';
import Authors from './../components/Authors';
import Calculator from './../components/Calculator';
import FileNotFound from './../components/FileNotFound';
import Header from '../components/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path='/' exact component={App} />
        <Route path='/Home/:id' component={Home} />
        <Route exact path='/Authors' component={Authors} />
        <Route path='/Calculator' component={Calculator} />
        <Route component={FileNotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
