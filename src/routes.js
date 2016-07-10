import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Domino from './components/domino/domino';
import SchoolCalc from './components/schoolCalc/schoolCalc';
import Home from './components/home/home';
import NotFound from './components/notFound/notFound';
import Grade from './components/schoolCalc/grade';

export const routes = (
  <div>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/domino' component={Domino} />
      <Route path='/school_GPA_calculator' component={SchoolCalc}>
        <Route path='/grade' component={Grade} />
      </Route>
    </Route>
    <Route path='*' component={NotFound} />
  </div>
);