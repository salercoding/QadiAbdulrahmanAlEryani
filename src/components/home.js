import React from "react";
import {useTranslation} from "react-i18next";




const Home = () => {
  const { t } = useTranslation();
  return (
  <div class="home">
    <h1>{t('name')}</h1>
    <img src="images/home-image-2.jpeg"/>
    <div class="intro">
    <h3>Intro Message</h3>
    </div>
    <h2 class="greeting">welcome message</h2>
  </div>
);
}

export default Home;