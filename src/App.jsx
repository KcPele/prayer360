import React, { useEffect, useContext } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Gurujis from "./components/pages/Gurujis";
import Agents from "./components/pages/Agents";
import Settings from "./components/pages/Settings";
import Notifications from "./components/pages/Notifications";
import Subscribers from "./components/pages/Subscribers";
import GurujiContents from "./components/pages/GurujiContents";
import SubscriberContents from "./components/pages/SubscriberContents";
import Referrals from "./components/pages/Referrals";
import Subscription from "./components/pages/Subscription";
import CreateGuruji from "./components/pages/CreateGuruji";
import CreateAgent from "./components/pages/CreateAgent";
import PrivateRoute from "./components/routing/PrivateRoute";
import Dashboard from "./components/pages/Dashboard";
import GurujiDetails from "./components/pages/GurujiDetails";
import AgentDetails from "./components/pages/AgentDetails";
import SubscriberDetails from "./components/pages/SubscriberDetails";
import GurujiStore from "./components/pages/GurujiStore";

import AdminState from "./context/admin/AdminState";
import SharedState from "./context/shared/SharedState";
import UserState from "./context/user/UserState";
import GurujiState from "./context/guruji/GurujiState";
import setAuthToken from "./utils/setAuthToken";

import AuthContext from "./context/auth/authContext";
import VirtualHome from "./components/pages/VirtualHome";
import Tour from "./components/pages/Tour";
import Store from "./components/pages/Store";
import Church from "./components/pages/Church";
import SubscribedChurch from "./components/pages/SubscribedChurch";
import AllChurch from "./components/pages/AllChurch";
function App() {
  const authContext = useContext(AuthContext);

  const { loadUser } = authContext;
  const token = localStorage.token;

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      loadUser();
    }
    // eslint-disable-next-line
  }, [token]);

  return (
    <AdminState>
      <SharedState>
        <GurujiState>
          <UserState>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/virtual-home" exact component={VirtualHome} />
              <Route path="/tour" exact component={Tour} />
              <Route path="/store" exact component={Store} />
              <Route path="/church/:slug" exact component={Church} />
              <Route path="/login" exact component={Login} />

              <PrivateRoute exact path="/dashboard" component={Dashboard} />

              <PrivateRoute exact path="/subscribers" component={Subscribers} />

              <PrivateRoute exact path="/gurujis" component={Gurujis} />

              <PrivateRoute exact path="/agents" component={Agents} />

              <PrivateRoute
                path="/guruji-contents"
                exact
                component={GurujiContents}
              />

              <PrivateRoute
                path="/subscriber-contents"
                exact
                component={SubscriberContents}
              />
              <PrivateRoute
                path="/subscribed-churches"
                exact
                component={SubscribedChurch}
              />
              <PrivateRoute path="/all-churches" exact component={AllChurch} />

              <PrivateRoute path="/referrals" exact component={Referrals} />

              <PrivateRoute
                path="/subscription"
                exact
                component={Subscription}
              />

              <PrivateRoute
                path="/notifications"
                exact
                component={Notifications}
              />

              <PrivateRoute path="/settings" exact component={Settings} />

              <PrivateRoute
                path="/create-guruji"
                exact
                component={CreateGuruji}
              />

              <PrivateRoute
                path="/create-agent"
                exact
                component={CreateAgent}
              />

              <PrivateRoute
                path="/guruji/:reference"
                exact
                component={GurujiDetails}
              />

              <PrivateRoute
                path="/agent/:reference"
                exact
                component={AgentDetails}
              />

              <PrivateRoute
                path="/subscriber/:reference"
                exact
                component={SubscriberDetails}
              />

              <PrivateRoute path="/store" exact component={GurujiStore} />
            </Switch>
          </UserState>
        </GurujiState>
      </SharedState>
    </AdminState>
  );
}

export default App;
