import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import 'materialize-css/dist/css/materialize.min.css';
import PageSearcher from './PageSearcher';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={PageSearcher} />
    </Switch>
  </BrowserRouter>
);

export default App;
