import React from "react";
import { NavLink } from 'react-router-dom';
import {useTranslation} from "react-i18next";

import Languages from "./languageNav";

const Navbar = () => {
	const { t } = useTranslation();
	return (
	<div class="primaryNav">
<Languages />
	<nav>
	  <ul>
		<li><NavLink to='/'>{t("home_page")}</NavLink></li>
		<li><NavLink to='/memoirs'>Read the Memoirs</NavLink></li>
		<li><NavLink to='/gallery'>Gallery</NavLink></li>
	  </ul>
	</nav>
	</div>
  );
}


export default Navbar;