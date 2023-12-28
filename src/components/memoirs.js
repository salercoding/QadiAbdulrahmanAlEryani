import React, { Component } from 'react';

import PartOne from "./memoir-part-one.pdf";
import PartTwo from "./memoir-part-two.pdf";
import PartThree from "./memoir-part-three.pdf";
class Memoirs extends Component {
    render() {
        return (
            <div className = "memoirs">
            <h2>Memoirs</h2>
            <div className = "memoirsContainer">
              <a href = {PartOne} target = "_blank"><img src="images/memoir-part-one-image.jpg"/></a>
              <a href = {PartTwo} target = "_blank"><img src="images/memoir-part-two-image.jpg"/></a>
              <a href = {PartThree} target = "_blank"><img src="images/memoir-part-three-image.jpg"/></a>
            </div>
            </div>
        
        );
       
}
}
export default Memoirs;