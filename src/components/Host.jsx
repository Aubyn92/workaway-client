import React from "react";

class Host extends React.Component {
  
  async componentDidMount() {
    const {location} = this.props.location.state;
    const response = await fetch(`https://restcountries.eu/rest/v2/name/${location}`);
    const data = await response.json();
    console.log(data);
  }

  render() {
    const host = this.props.location.state;
    return (
        <div>
          <h3>Name: {host.name}</h3>
          <h3>Location: {host.location}</h3>
          <h3>Work Category: {host.work_category}</h3>
          <p>Description:{host.work_description}</p>
          <h1>Time required per week:{host.time}</h1>
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




  // async componentDidMount(){
  //   const response = await fetch("https://restcountries.eu/rest/v2/all");
  //   const data = await response.json();
  //   const response2 = await fetch("https://localhost:3000")
  //   const hosts = await response2.json();
  //   this.setState({ hostsData: hosts});