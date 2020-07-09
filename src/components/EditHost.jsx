import React from "react";

class EditHost extends React.Component {
  state = {
    name: "",
    location: "",
    work_category: "",
    work_description: "",
    time: "",
    // accommodation: true,
    id: this.props.match.params.id
  };
  onInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    })
  };

  onFormSubmit = async (event) => {
    event.preventDefault();
    const {
      name,
      location,
      work_category,
      work_description,
      time,
      // accommodation,
      id
    } = this.state
    await fetch(`http://localhost:3000/hosts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        location,
        work_category,
        work_description,
        time,
        // accommodation
      }),
    });
    this.props.history.push("/hosts");
  };

  async componentDidMount() {
    const { id } = this.state;
    const response = await fetch(`http://localhost:3000/hosts/${id}`);
    const {
      name,
      location,
      work_category,
      work_description,
      time,
      // accommodation,
      loading
    } = await response.json();
    this.setState({
      name,
      location,
      work_category,
      work_description,
      time,
      // accommodation,
      loading
    });
  }

  render() {
    const {
      name,
      location,
      work_category,
      work_description,
      time,
      // accommodation,
      loading
    } = this.state;
    return (
      !loading && (
        <div className="host">
        <div className="container">
          <h1>Edit a Listing</h1>
          <form onSubmit={this.onFormSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={this.onInputChange}
              value={name}
            />
            <label htmlFor="location">Location</label>
            <input
              type="text"
              name="location"
              id="location"
              onChange={this.onInputChange}
              value={location}
            />
            <label htmlFor="work_category">Work Category</label>
            <input
              type="text"
              name="work_category"
              id="work_category"
              onChange={this.onInputChange}
              value={work_category}
            />
            <label htmlFor="work_description">Work Description</label>
            <textarea 
            name="work_description" 
            id="work_description" onChange={this.onInputChange}>
            </textarea>

            <label htmlFor="time">Hours per week</label>
            <input
              type="text"
              name="time"
              id="time"
              onChange={this.onInputChange}
              value={time}
            />
            {/* <label htmlFor="accommodation">Accommodation</label>
            <input
              type="text"
              name="accommodation"
              id="accommodation"
              onChange={this.onInputChange}
              value={accommodation}
            /> */}
            <input className="edit-btn" type="submit" value="Submit" />
          </form>
        </div>
        </div>
      )
    );
  }
}

export default EditHost;
