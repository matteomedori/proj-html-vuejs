import { createApp } from "vue";

// entry point css
import "./assets/css/style.scss";
import App from "./App.vue";

import "@fontsource/raleway";
import "@fontsource/raleway/500.css"; // Specify weight
import "@fontsource/raleway/600.css"; // Specify weight
import "@fontsource/raleway/800.css"; // Specify weight

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faTrophy,
  faBoltLightning,
  faQuestion,
  faAngleRight,
  faAngleLeft,
  faLocationArrow,
  faUser,
  faMagnifyingGlass,
  faPhone,
  faEnvelope,
  faGear,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

import { faClock } from "@fortawesome/free-regular-svg-icons";

import {
  faTwitter,
  faSquareTwitter,
  faSquareFacebook,
  faLinkedin,
  faSquareGooglePlus,
  faSquarePinterest,
  faFlickr,
} from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(
  faTrophy,
  faBoltLightning,
  faQuestion,
  faAngleRight,
  faAngleLeft,
  faClock,
  faLocationArrow,
  faUser,
  faMagnifyingGlass,
  faPhone,
  faEnvelope,
  faTwitter,
  faGear,
  faPlay,
  faSquareTwitter,
  faSquareFacebook,
  faLinkedin,
  faSquareGooglePlus,
  faSquarePinterest,
  faFlickr
);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
