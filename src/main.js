import { createApp } from "vue";

// entry point css
import "./assets/css/style.scss";
import App from "./App.vue";

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
} from "@fortawesome/free-solid-svg-icons";

import { faClock } from "@fortawesome/free-regular-svg-icons";

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
  faMagnifyingGlass
);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
