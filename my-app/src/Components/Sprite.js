import * as React from "react";
import nyan from "../Images/nyancat.gif"
import "./Sprite.css"


const Sprite = () => {
    return (  
    <div>
        <img className="sprite" src={nyan} alt="sprite" />
    </div>

    );
};

export default Sprite;
