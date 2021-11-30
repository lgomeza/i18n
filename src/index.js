import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import './index.css';

import JobsList from "./components/jobslist";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

const browserLanguage = (window.navigator.language || window.navigator.userLanguage) ?? "en";
const formattedLanguage = browserLanguage.split("-")[0];

ReactDOM.render(
  <IntlProvider locale={browserLanguage} messages={formattedLanguage === 'en' ? localeEnMessages : localeEsMessages}>
    <JobsList />
  </IntlProvider>, 
  document.getElementById("root")
);
