import React from "react";
import { Link } from "react-router-dom";
// import moment from 'moment'

class Hosts extends React.Component {
  state = { hosts: [] };

  getHosts = async () => {
    const response = await fetch("http://localhost:3000/hosts");
    const hosts = await response.json();
    console.log(hosts)
    this.setState({ hosts: hosts });
  };


  deleteHost = async (id) => {
    await fetch(`http://localhost:3000/hosts/${id}`, {
      method: "DELETE",
    });
    this.getHosts();
  };

  renderHosts = () => {
    return this.state.hosts.map((host, index) => {
      return (
        <div key={index} className="host">
          <h3>Name: {host.name}</h3>
          <h3>Location: {host.location}</h3>
          <h3>Work Category: {host.work_category}</h3>
          <p>Description:{host.work_description}</p>
          <h3>Time required per week:{host.time}</h3>
          <p>Accomodation:{`${(host.accommodation)}`}</p>
     
          {/* <p>{moment(host.created_at).startOf('minute').fromNow()}</p> */}
          <div className="edit-delete-container">
            <Link to={`/hosts/${host.id}/edit`}>Edit</Link>
            <span onClick={() => this.deleteHost(host.id)}>Delete</span>
          </div>
          <hr />
        </div>
      );
    });
  };

  

  render() {
    // const countries = this.state?.countryData;
    return <div>{this.renderHosts()}</div>;
  }
}

export default Hosts;
