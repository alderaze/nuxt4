import Vue from 'vue'
import VAnimateCss from "v-animate-css";
Vue.use(VAnimateCss);

import AOS from 'aos';
export default ({ app }, inject) => {

    app.AOS = AOS.init();
  }