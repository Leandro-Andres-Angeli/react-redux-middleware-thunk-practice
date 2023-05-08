import {
  BrowserRouter as Router,
  Switch,
  Route,
  //  Link
} from 'react-router-dom';
import { Appbar } from './pages/Appbar';
import Home from './pages/Home';
import Products from './pages/Products';
import CakesPage from './pages/CakesPage';
import ThunkSection from './pages/ThunkSection';

export default function App() {
  return (
    <Router>
      <Appbar></Appbar>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/products'>
          <Products />
        </Route>
        <Route path='/cakes-page'>
          <CakesPage />
        </Route>
        <Route path='/thunk-section'>
          <ThunkSection />
        </Route>
        <Route path='/*' component={() => <div>Error 404</div>}></Route>
      </Switch>
    </Router>
  );
}
