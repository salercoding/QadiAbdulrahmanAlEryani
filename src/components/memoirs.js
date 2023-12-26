import React, { Component } from 'react';

import PartOne from "./memoir-part-one.pdf";

class Memoirs extends Component {
    render() {
        return (
            <div className = "App">
              <a href = {PartOne} target = "_blank"><img src="images/memoir-one-image.jpeg"/></a>
            </div>
        );
}
}
/*const Memoirs = () => {
    return (
        <div className="memoirs">
        <h2> Memoirs </h2>
      <img src="images/memoir-one-image.jpeg"/>
        <a href="linktopdf"><img src="sample-image.jpeg"></img></a>
        <a href="linktopdf"><img src="sample-image.jpeg"></img></a>
        </div>
    );
}*/

export default Memoirs;