import { BrowserRouter, Switch, Route } from 'react-router-dom';

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
          <Route path="/">
            <Login />
          </Route>
          <Route exact path="/guestbook">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
