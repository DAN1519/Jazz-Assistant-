import React from "react";
import Input2 from "./../Input2/Input2";
import MeasureNum from "./MeasureNum";
import BPMInput from "./BPMInput";


export default class Input1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 1};
    this.state = {submittedValue: null};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
  	this.setState({submittedValue: this.state.value});
    event.preventDefault();
  }


  handleSelect(){

    
  }

  secondInput(){
  	  	var numberOfTests = 5;
  	var list = [numberOfTests];

  	for(var i = 0; i < numberOfTests; i++){
  		list[i] = <Input2 />
  	}
  	return(
  		{list}
  		)
  }

  testMethod(numValue){
    alert(numValue);

  }



  render() {

  	var numberOfTests = this.state.submittedValue;
  	var list = [numberOfTests];

  	for(var i = 0; i < numberOfTests; i++){
  		list[i] = <Input2 />
  	}

    return (

      <form class="Input" id ="Input1" onSubmit={this.handleSubmit}>
                

        <MeasureNum />

        <div>How many unique scales are in the song?</div>
        <input type="number" min="1" value={this.state.value} onChange={this.handleChange} id="input1Number" />
        
        <BPMInput />

        <div>What is the time signature of the song?</div>
        <select name="Time Signatures"> 
          <option>4/4</option>
          <option>3/4</option>
          <option>2/4</option>
          <option>6/8</option>
        </select>

        <br />
        <br />
        <button>Coninue</button>

        {list}
      </form>
    );
  }

}
