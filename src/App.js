import { Suspense , lazy ,useContext} from 'react';
import {StoreContext} from './contexts/Store';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Spinner from "./components/Spinner"

import {BrowserRouter as Router , Switch} from 'react-router-dom';
const Home = lazy(() => import('./pages/Home.js'));
const Login = lazy(() => import('./pages/Login.js'));
const Register = lazy(() => import('./pages/Register.js'));

const App = () => {
  const {isLoggedIn} = useContext(StoreContext);
  return (
    <>
    <Router>
    
    <Navbar/>
    <Suspense fallback={<Spinner></Spinner>}>

    <Switch>
 {isLoggedIn ? <Route   path="/" component={Home} /> : <Route exact path="/" component={Login} />}
 {!isLoggedIn ? <Route exact path="/login" component={Login} /> : <Route  path="/" component={Home} />}
 {!isLoggedIn ? <Route exact path="/register"  component={Register} /> : <Route  path="/" component={Home} />}
 {/* {!isLoggedIn ? <Route exact path="/update/:id" render={(props) => <Update {...props}/>}></Route> : <Route  path="/" component={Home} />} */}
</Switch>
  </Suspense>

</Router>
  </>


  );
}

export default App;
