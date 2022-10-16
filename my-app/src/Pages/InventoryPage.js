import * as React from "react";
import Button from '@material-ui/core/Button';
import {useNavigate} from 'react-router-dom';

import chimchar from '../Images/chimchar.png';
import piplup from '../Images/piplup.png';
import turtwig from '../Images/turtwig.png';

const style = {
  margin: 15
};

class InventoryPage extends React.Component{
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  this.onValueChange = this.onValueChange.bind(this);
  this.formSubmit = this.formSubmit.bind(this);

  }

  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value
    });
  }

  formSubmit = (event) => {
    const navigate = useNavigate();
    event.preventDefault();
    console.log(this.state.selectedOption);
    navigate('/');
  }

  render(){
    
    return (
      <form onSubmit={this.formSubmit}>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Chimchar"
              checked={this.state.selectedOption === "Chimchar"}
              onChange={this.onValueChange}
            />
            Chimchar
          </label>
          <img src={chimchar} name="Chimchar" alt="Chimchar" />
        </div>
        <div className="radio"> 
          <label>
            <input
              type="radio"
              value="Piplup"
              checked={this.state.selectedOption === "Piplup"}
              onChange={this.onValueChange}
            />
            Piplup
          </label>
          <img src={piplup} name="Piplup" alt="Piplup" />
        </div>
        <div className="radio">
        <label>
            <input
              type="radio"
              value="Turtwig"
              checked={this.state.selectedOption === "Turtwig"}
              onChange={this.onValueChange}
            />
            Turtwig
          </label>
          <img src={turtwig} name="Turtwig" alt="Turtwig" />
        </div>
        <button variant = "Raised" type="submit">
          Submit
        </button>
      </form>
    );

  }
}

export default InventoryPage;
