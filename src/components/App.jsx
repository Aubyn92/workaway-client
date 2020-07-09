import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Hosts from "./Hosts";
import NoMatch from "./NoMatch";
import Navbar from "../shared/Navbar";
import CreateHost from "./CreateHost";
import EditHost from "./EditHost";
import Host from './Host';
import ProtectedRoute from './ProtectedRoute';
import Login from './Login';
import SignUp from './SignUp';

class App extends React.Component {

  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/hosts" component={Hosts} />
          <ProtectedRoute exact path="/hosts/create" component={CreateHost} />
          {/* <Route exact path="/hosts/create" component={CreateHost} /> */}
          <ProtectedRoute exact path="/hosts/:id/edit" component={EditHost} />
          <Route exact path="/hosts/:id" component={Host} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/" component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </>
    );
  }
}

export default App;
