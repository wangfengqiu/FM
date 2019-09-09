import React, { Component } from 'react';
import {Route,Switch,Redirect} from "react-router-dom";
import Home from "./components/home/home";
import Detail from "./components/detail/detail";
import Cang from "./components/cang/cang";
class App extends Component {
  render() {
    return (
      <div className="app">
       
          <Switch>
              <Route path="/home" component={Home}></Route>
              <Route path="/detail" component={Detail}></Route>
              <Route path="/cang" component={Cang}></Route>
              <Redirect from="/" to="/home"></Redirect>
          </Switch>
         
      </div>
    );
  }
}


export default App;