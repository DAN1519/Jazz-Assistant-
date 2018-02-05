import React from "react";

export default class MeasureNum extends React.Component {
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
        <div>How many measures are in the song total?</div>
        <input type="number" name="numberOfMeasures" min="1" value={this.state.value} onChange={this.handleChange}/> 
      </div>
    );
  }

}
