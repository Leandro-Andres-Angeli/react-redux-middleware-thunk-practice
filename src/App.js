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
import { useEffect, useState } from 'react';
import { app } from './firebase_config/firebase_config';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import FirebaseSection from './pages/FirebaseSection';
import Login from './pages/Login';
import Signin from './pages/Signin';

export default function App() {
  // const [first, setFirst] = useState([]);
  // const getTodos = async () => {
  //   const db = getFirestore(app);
  //   const todos = await getDocs(collection(db, 'todos'));
  //   console.log(todos);
  //   todos.forEach((todo) =>
  //     setFirst((prev) => [...prev, { id: todo.id, ...todo.data() }])
  //   );
  // };
  // useEffect(() => {
  //   getTodos();
  // }, []);
  // console.log(first);
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
        <Route path='/firebase-section'>
          <FirebaseSection />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/signin'>
          <Signin />
        </Route>
        <Route path='/*' component={() => <div>Error 404</div>}></Route>
      </Switch>
    </Router>
  );
}
