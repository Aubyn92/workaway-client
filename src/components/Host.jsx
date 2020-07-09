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
      <>
          <p>Name: {host.name}</p>
          <p>Location: {host.location}</p>
          <p>Work Category: {host.work_category}</p>
          <p>Description:{host.work_description}</p>
          <p>Time required per week:{host.time}</p>
          <p>Accomodation:{`${(host.accommodation)}`}</p>
        {countries &&
        
          countries.map((country, index) => {
          return (
              <div key={index}>
                <p> Capital:{country.capital}</p>
                <p> Currency:{country.currencies[0].name}</p>
                <p> Language:{country.languages[0].name}</p>

              </div>
             )
          })
        }
      </>
    );
  }
}

export default Host;
