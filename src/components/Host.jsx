import React from "react"
import { HostsContext } from '../Context/HostsContext';

class Host extends React.Component {
  state = {
    id: this.props.match.params.id,
  };

  async componentDidMount() {
    const { id } = this.state;
    const anotherResponse = await fetch(`${process.env.REACT_APP_BACKEND_URL}/hosts/${id}`, {
      headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    const host = await anotherResponse.json();
    const response = await fetch(
      `https://restcountries.eu/rest/v2/name/${this.props.location.state.location}`
    );
    const countries = await response.json();
    this.setState({ countries: countries, host: host});
  }

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
          <h3>Description:</h3><p>{host.work_description}</p>
          <h3>Time required per week(hours):{host.time}</h3>
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
