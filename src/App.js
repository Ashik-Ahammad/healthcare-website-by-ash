import { Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import Header from './Components/Home/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import OurServices from './Components/OurServices/OurServices';
import Products from './Components/Products/Products';
import Register from './Components/Register/Register';

function App() {
  return (
    <div className="App">

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
          <Route exact path="/products">
            <Products></Products>
          </Route>
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

    </div>
  );
}

export default App;
