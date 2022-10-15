import * as React from "react";
import Button from '@material-ui/core/Button';
import {Navigate} from 'react-router-dom';
 

import chimchar from '../Images/chimchar.png';
import piplup from '../Images/piplup.png';
import turtwig from '../Images/turtwig.png';

const style = {
  margin: 15
};

const InventoryPage = () => {



  return (
    <div className="container pets">
        <div className="pet-container">
          <form>
            <div className="venuesHeader">
              <h1>Choose your pet!</h1>
            </div>

            <img src={piplup} name="Piplup" alt="Piplup" className="adopt-pet"  />
            <img src={chimchar} name="Chimchar" alt="Chimchar"className="adopt-pet"  />
            <img src={turtwig} name="Turtwig" alt="Turtwig"className="adopt-pet"/>
            <br /><br />

            <Button variant="Raised"
              label="Select"
              type="submit"
              primary={true}
              style={style}
            />
          </form>
        </div>

      </div>
  );
};

export default InventoryPage;
