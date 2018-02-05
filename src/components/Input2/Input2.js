import React from "react";

export default class Input2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 0};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    var copies = "";
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="number" value={this.state.value} onChange={this.handleChange} id="input1Number" />
        </label>
        <input type="submit" value="Submit"/>

        <div id = "biggliestTestEvah">
		 </div>
      </form>
    );
  }
}








