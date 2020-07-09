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
  async componentDidMount(){
    // const response = await fetch("https://restcountries.eu/rest/v2/all");
    // const data = await response.json();
  //   const response2 = await fetch("http://localhost:3000")
  //   const hosts = await response2.json();
  //   this.setState({ hostsData: hosts});
  }

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
