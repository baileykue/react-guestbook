import Header from './components/Header/Header';
import Home from './views/Home/Home';
import styles from './App.css';

export default function App() {
  const { App } = styles;

  return (
    <div className={App}>
      <Header />
      <Home />
    </div>
  );
}
