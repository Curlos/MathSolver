import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MathWorksheetsList from '../components/MathWorksheetsList';
import Header from '../components/Header';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route component={MathWorksheetsList} path="/" exact={true} />
          
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;