import { Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import AuthProvider from './Components/Context/AuthProvider';
import Header from './Components/Home/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import OurServices from './Components/OurServices/OurServices';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Products from './Components/Products/Products';
import Register from './Components/Register/Register';

function App() {
  return (
    <div className="App">

      <AuthProvider>
        <Router>
          <Header></Header>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/ourservices">
              <OurServices></OurServices>
            </Route>
            <PrivateRoute exact path="/products">
              <Products></Products>
            </PrivateRoute>
            <Route exact path="/aboutus">
              <AboutUs></AboutUs>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
