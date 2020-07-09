import React from "react";

class Host extends React.Component {
  state = {
    id: this.props.match.params.id,
  };

  async componentDidMount() {
    // console.log(this.props)
    // console.log(this.props.location.state.location)
    const { id } = this.state;
    const anotherResponse = await fetch(`http://localhost:3000/host/${id}`);
    const host = await anotherResponse.json();
    const response = await fetch(
      `https://restcountries.eu/rest/v2/name/${this.props.location.state.location}`
    );
    const countries = await response.json();
    this.setState({ countries: countries, host: host});
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

  render() {
    const host = this.props.location.state;
    const {countries} = this.state;
    // console.log(this.props);
    console.log(countries)
    return (
      <div className="host">
      <>
      <div className="host-content">
          <h3>Name: {host.name}</h3>
          <h3>Location: {host.location}</h3>
          <h3>Work Category: {host.work_category}</h3>
          <p>Description:{host.work_description}</p>
          <h3>Time required per week:{host.time}</h3>
          {/* <p>Accomodation:{`${(host.accommodation)}`}</p> */}
        {countries &&
        
          countries.map((country, index) => {
          return (
              <div key={index} className="most">
                <p> Capital:{country.capital}</p>
                <p> Currency:{country.currencies[0].name}</p>
                <p> Language:{country.languages[0].name}</p>
              </div>
             )
          })
        }
        </div>
      </>
      </div>
    );
  }
}

export default Host;
