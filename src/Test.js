import { Component } from "react";

class Test extends Component {
  
  render() {
    console.log(this.props.testState);
    
    this.props.handleChangeName();
    return (
      <div>
      </div>
    );
  }
}

export default Test;
