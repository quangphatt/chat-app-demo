import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from './components/Login';
import Chats from './components/Chats';

const App = () => {
  return (
    <div style={{fontFamily: 'Avenir'}}>
      <Router>
        <Switch>
          <Route path='/' component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
