import React from "react";
import { Link } from "react-router-dom";
import moment from 'moment'
import { HostsContext } from '../Context/HostsContext';

class Hosts extends React.Component {
  static contextType = HostsContext;
  // state = { hosts: [] };

  // getHosts = async () => {
  //   const response = await fetch("http://localhost:3000/hosts");
  //   const hosts = await response.json();
  //   console.log(hosts)
  //   this.setState({ hosts: hosts });
  // };
  

  deleteHost = async (id) => {
    this.context.dispatch("remove", id);
    fetch(`${process.env.REACT_APP_BACKEND_URL}/hosts/${id}`, {
      method: "DELETE",
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    // this.getHosts();
  };

  // componentDidMount = async () => {
  //   await this.getHosts()
  // }

  // getLocationData = async() =>{
  //   const response = await fetch(`https://restcountries.eu/rest/v2/capital/${location}`);
  //   const countries = await response.json();
  //   this.setState({countries: countries})
  //   const {id} = this.state
  //   const anotherResponse = await fetch(`http://localhost:3000/host/${id}`)
  //   const host = await anotherResponse.json();
  //   this.setState({host: host});
  // }

  renderHosts = (hosts) => {
    return hosts.map((host, index) => {
      return (
        <div key={index} className="hosts">
          <ul>
          <li><h3>Name: {host.name}</h3></li>
          <li><h3>Location: {host.location}</h3></li>
          <li><h3>Work Category: {host.work_category}</h3></li>
          <li><h3>Description:</h3><p>{host.work_description}</p></li>
          <li><h3>Time required per week:{host.time}</h3></li>
          </ul>
     
          <p>{moment(host.created_at).startOf('minute').fromNow()}</p>
          <Link to={{
            pathname: `/hosts/${host.id}`,
            state: host,
          }} >
            <button className="host-show-btn"> Show </button>
          </Link>
          <div className="edit-delete-container">
            <Link to={`/hosts/${host.id}/edit`}>Edit</Link>
            <span onClick={() => this.deleteHost(host.id)}>Delete</span>
          </div>
          <hr />
        </div>
      );
    });
  };

  // componentDidMount(){
  //   this.getHosts();
  // }

  render() {
    const { hosts } = this.context
      // const countries = this.state?.countryData;
    return (<div>{this.renderHosts(hosts)}
    </div>);

  }
}

export default Hosts;
