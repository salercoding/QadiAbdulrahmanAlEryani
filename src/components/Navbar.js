import React from "react";
import { NavLink } from 'react-router-dom';

import Languages from "./languageNav";

const Navbar = () => (
	<div class="primaryNav">
<Languages />
	<nav>
	  <ul>
		<li><NavLink to='/'>Home</NavLink></li>
		<li><NavLink to='/memoirs'>Read the Memoirs</NavLink></li>
		<li><NavLink to='/gallery'>Gallery</NavLink></li>
	  </ul>
	</nav>
	</div>
  );


export default Navbar;