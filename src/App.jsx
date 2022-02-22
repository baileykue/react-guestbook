import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

import Header from './components/Header/Header';
import Home from './views/Home/Home';
import Login from './views/Auth/Login';

import styles from './App.css';

export default function App() {
  const { App } = styles;

  return (
    <div className={App}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <PrivateRoute path="/guestbook">
            <Home />
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
