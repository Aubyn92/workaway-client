import React from "react";

class CreateHost extends React.Component {
  onInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  onCheckBoxChange = (event) => {
    console.log(event.target.value);
  }

  onFormSubmit = async (event) => {
    event.preventDefault();
    console.log(this.state);
    await fetch("http://localhost:3000/hosts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    });
    this.props.history.push("/hosts");
  };

  render() {
    return (
      <div className="container">
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
          
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
  

export default CreateHost;
  
  
