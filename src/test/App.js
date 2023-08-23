import React, { Children, useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from "./components/pages/Login";
import Admin from "./admin/Admin";
import Guruji from "./guruji/Guruji";
import Agent from "./agent/Agent";
import User from "./user/User";
import Header from './Header';
import SideNav from './SideNav';

function App() {
  const role = "ADMIN";
  const isAdmin = ({children}) => {
    if(role === "ADMIN") {
      children
    } else {
      console.log("Not Admin");
    }
  }

  return (
    <div>
      <Header />
      <div>
        <SideNav />
        <div>
          <Switch>
            <Route path="/" exact>
              <Login />
            </Route>
            <Route path="/admin" exact>
              <isAdmin>
                <Admin />
              </isAdmin>
            </Route>
            <Route path="/guruji" exact>
              <Guruji />
            </Route>
            <Route path="/agent" exact>
              <Agent />
            </Route>
            <Route path="/user" exact>
              <User />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
