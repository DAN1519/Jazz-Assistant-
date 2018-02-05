import React from "react";

export default class BPMInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 1};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    {this.props.triggerParentUpdate}
  }


  render() {

    return (

      <div id ="MeasureNum">
        <div>What is the tempo of the song in beats per minute?</div>
        <input type="number" name="BPM value" min="1" value={this.state.value} onChange={this.handleChange}/> 
      </div>
    );
  }

}
