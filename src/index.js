import React from 'react';
import ReactDOM from 'react-dom';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

import App from './App';

i18n
  .use(HttpApi) 
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  
  
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    supportedLngs: ["en", "ar"],
	fallbackLng: "en",
	detection: {
		order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
		caches: ['cookie'],
	},
	backend: {
		loadPath: '/assets/locales/{{lng}}/translation.json',
	},
	react: { useSuspense: false },
  });



ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
