import React from "react";
import { HostsContext } from '../Context/HostsContext';

class CreateHost extends React.Component {
  static contextType = HostsContext
  onInputChange = (event) => {
    const key = event.target.id;
    this.setState({
      [key]: event.target.value,
    });
  };

  // onCheckBoxChange = (event) => {
  //   console.log(event.target.value);
  // }

  onFormSubmit = async (event) => {
    event.preventDefault();
    // console.log(this.state);
    const body = {
      host: this.state
    }
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/hosts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(body),
    });
    const host = await response.json()
    this.context.dispatch("add", host)
    this.props.history.push("/hosts");
    // this.props.history.push("/hosts");
  };

  render() {
    return (
      <div className="host">
      <div className="container">
        <h1>Create a listing</h1>
        <form onSubmit={this.onFormSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" onChange={this.onInputChange}/>
          <label htmlFor="location">Location</label>
          <input type="text" name="location" id="location" onChange={this.onInputChange}/>
          <label htmlFor="work_category">Category</label>
          <input type="text" name="work_category" id="work_category" onChange={this.onInputChange}/>
          <label htmlFor="work_description">Description</label>
          <textarea name="work_description" id="work_description" onChange={this.onInputChange}></textarea>
          <label htmlFor="time">Hours per week</label>
          <input type="text" name="time" id="time" onChange={this.onInputChange}/>
          {/* <label htmlFor="accommodation">Accommodation</label>     
          <input type="checkbox" id="accommodation" name="accommodation" value='true' onChange={this.onCheckBoxChange}/> */}
          
          <input className="edit-btn" type="submit" value="Submit" />
        </form>
      </div>
      </div>
    );
  }
}
  

export default CreateHost;
  
  
