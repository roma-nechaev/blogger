import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPhoneAlt,
  faSearch,
  faEnvelope,
  faLongArrowAltRight,
  faShoppingCart,
  faCheckCircle,
  faMinusCircle
} from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle as faCheckCircleReg } from '@fortawesome/free-regular-svg-icons';

import { faFacebookSquare, faGoogle, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(
  faPhoneAlt,
  faSearch,
  faEnvelope,
  faLongArrowAltRight,
  faShoppingCart,
  faCheckCircle,
  faMinusCircle,
  faCheckCircleReg,
  faFacebookSquare,
  faGoogle,
  faYoutube
);

Vue.component('font-awesome-icon', FontAwesomeIcon);
