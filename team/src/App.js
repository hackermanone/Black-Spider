import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom'
import HomePage from './pages/HomePage';
import LoadingPage from './pages/LoadingPage';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <div>
            <Switch>
             <Route exact path='/' component={LoadingPage} />
             <Route exact path='/home' component={HomePage} /> 
            </Switch>
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
