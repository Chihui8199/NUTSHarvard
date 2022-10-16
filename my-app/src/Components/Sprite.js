import * as React from "react";
import nyan from "../Images/nyancat.gif"


const Sprite = () => {
    return (  
    <div>
        <img className="mt 3 sprite" src={nyan} alt="sprite"/>
    </div>

    );
};

export default Sprite;
