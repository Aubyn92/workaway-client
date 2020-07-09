import React from "react";

class Host extends React.Component {
  render() {
    const host = this.props.location.state;
    return (
        <div>
          <h3>Name: {host.name}</h3>
          <h3>Location: {host.location}</h3>
          <h3>Work Category: {host.work_category}</h3>
          <p>Description:{host.work_description}</p>
          <h3>Time required per week:{host.time}</h3>
          <p>Accomodation:{`${(host.accommodation)}`}</p>
     
          {/* <p>{moment(host.created_at).startOf('minute').fromNow()}</p> */}
          {/* <div className="edit-delete-container">
            <Link to={`/hosts/${host.id}/edit`}>Edit</Link>
            <span onClick={() => this.deleteHost(host.id)}>Delete</span>
          </div> */}
          <hr />
        </div>
    );
  }
}

export default Host;



  // async componentDidMount() {
  //   this.getHosts();
  //     const response = await fetch("https://restcountries.eu/rest/v2/all");
  //   const data = await response.json();
  // }

  // async componentDidMount(){
  //   const response = await fetch("https://restcountries.eu/rest/v2/all");
  //   const data = await response.json();
  //   const response2 = await fetch("https://localhost:3000")
  //   const hosts = await response2.json();
  //   this.setState({ hostsData: hosts});