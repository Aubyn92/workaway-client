import React from "react";

class CreateHost extends React.Component {
  onInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  onFormSubmit = async (event) => {
    event.preventDefault();
    await fetch("http://localhost:3000/create", {
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
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
          <label htmlFor="location">Location</label>
          <input type="text" name="location" id="location" />
          <label htmlFor="work_category">Category</label>
          <input type="text" name="work_category" id="work_category" />
          <label htmlFor="work_description">Description</label>
          <textarea name="work_description" id="work_description"></textarea>
          <label htmlFor="time">Hours per week</label>
          <input type="text" name="time" id="time" />
          <label htmlFor="accommodation">Accommodation</label>     
          <div><label for="true">True</label><input type="checkbox" id="accommodation" name="accommodation"
           checked /></div>
          <div><label for="false">False</label>
          <input type="checkbox" id="accommodation" name="accommodation" /> </div>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
  

export default CreateHost;
  
  
