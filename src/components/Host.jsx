import React from "react";

class Host extends React.Component {
  state = {
    id: this.props.match.params.id
  };
  
  async componentDidMount() {
    // console.log(this.props)
    // console.log(this.props.location.state.location)
    const {id} = this.state
    const anotherResponse = await fetch(`http://localhost:3000/hosts/${id}`)
    const host = await anotherResponse.json();
    this.setState({host: host});
    console.log(this.state)
    const response = await fetch(`https://restcountries.eu/rest/v2/capital/${this.props.location.state.location}`);
    const countries = await response.json();
    this.setState({countries: countries})
  }
  
  // render() {
  //   console.log("here");
  //   console.log(this.state)
  //   const countries = this.state?.countries;
  //   return (
  //     <>
  //       {countries &&
  //         countries.map((countries, index) => {
  //           return (
  //             <div key={index}>
  //               <p>{countries.name}</p>
  //               <p><img src ={countries.flag} alt ="flag"></img></p>
  //               <hr />
  //             </div>
  //           );
  //         })}
  //     </>
  //   );
  // }



  //   async componentDidMount() {
  //   this.getHosts();
  //     const response = await fetch("https://restcountries.eu/rest/v2/all");
  //   const data = await response.json();
  // }
  render() {
    const host = this.props.location.state;
    // console.log(this.props);
    return (
        <div>
          <h3>Name: {host.name}</h3>
          <h3>Location: {host.location}</h3>
          <h3>Work Category: {host.work_category}</h3>
          <p>Description:{host.work_description}</p>
          <h1>Time required per week:{host.time}</h1>
          <p>Accomodation:{`${(host.accommodation)}`}</p>
          {/* {countries && countries,map((countries, index)=>{
              <div key = {index}>
                <p> {countries.languages.[0].english}</p>
                </div>
            )
          }) */}
     
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