import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Hosts from "./Hosts";
import NoMatch from "./NoMatch";
import Navbar from "../shared/Navbar";
import CreateHost from "./CreateHost";
import EditHost from "./EditHost";
import Host from './Host';

class App extends React.Component {


  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/hosts" component={Hosts} />
          <Route exact path="/hosts/create" component={CreateHost} />
          <Route exact path="/hosts/:id/edit" component={EditHost} />
          <Route exact path="/hosts/:id" component={Host} />
          <Route exact path="/" component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </>
    );
  }
}

export default App;
