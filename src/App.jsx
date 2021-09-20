import './App.css';
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Catalog from "./components/catalog";
import HomePage from './components/home';
import About from './components/about';
import Admin from './components/admin';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// import { test, test2, test3 } from "./components/home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar></NavBar>

        <div className="container-fluid">
          <Switch>
            <Route path="/" exact component={HomePage} ></Route>
            <Route path="/catalog" exact component={Catalog} ></Route>
            <Route path="/about" exact component={About}></Route>
            <Route path="/admin" exact component={Admin}></Route>
          </Switch>
        </div>

        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
