import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Hosts from './components/Hosts';
import NoMatch from './components//NoMatch';
import CreateHost from './components/CreateHost';
import EditHost from './components/EditHost';
import Navbar from "./components/Navbar";

class App extends React.Component {
  state = {
    countryData: [],
    hostsData: []
  }
  
  async componentDidMount(){
    // const response = await fetch("https://restcountries.eu/rest/v2/all");
    // const data = await response.json();
    const response2 = await fetch("https://localhost:3000")
    const hosts = await response2.json();
    this.setState({ hostsData: hosts});
  }

  render() {
    // const countries = this.state?.countryData;
    // console.log(countries);
    console.log(this.state?.hostsData);
    return (
      <>
        <Navbar /> 
         <Switch>
          <Route exact path="/hosts" component={Hosts} />
          <Route exact path="/hosts/create" component={CreateHost} />
          <Route exact path="/hosts/:id/edit" component={EditHost} />
          <Route exact path="/" component={Home} />
          <Route component={NoMatch} />
        </Switch>
        {this.state.hostsData?.map((host) => {
          return(<Hosts hostData={host}/>)
        })}
      

      </>
    )
  }
}

export default App;
