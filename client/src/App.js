import React from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import './App.css';
import RegisterClient from './components/RegisterClient';
import RegisterTrans from './components/RegisterTrans';
import LoginClient from './components/LoginClient';
import LoginTrans from './components/LoginTrans';
import Alerts from './components/Alerts';
import PrivateRoute from './components/PrivateRoute'
import setAuthToken from './utils/setAuthToken';


if (localStorage.token) {
  setAuthToken(localStorage.token)
}





function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='c'>
        <Alerts />
      <Switch>
      <PrivateRoute exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/register/client" component={RegisterClient} />
      <Route exact path="/register/trans" component={RegisterTrans} />
      <Route exact path="/login/client" component={LoginClient} />
      <Route exact path="/login/trans" component={LoginTrans} />
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
