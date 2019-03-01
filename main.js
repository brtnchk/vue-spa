import Vue from 'vue';
import VeeValidate from 'vee-validate';
import { Validator } from 'vee-validate';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import VueAxios from 'vue-axios';
import Notifications from 'vue-notification';
import VueMoment from 'vue-moment'
import { MdProgress } from 'vue-material/dist/components'
import 'bootstrap';

import App from './App';
import router from './router';
import store from './store';
import {setHttpToken} from "./helpers";

//global styles
import './assets/css/vendor.css';
import './assets/css/app.css';

//global js
import './assets/js/app.js';
import './util/helpers';
import './pipes/httpErrors/errorsPipe';
import './pipes/fullscreen/fullscreenPipe';

Vue.config.productionTip = false;

Validator.extend('checkSpaces', {
  getMessage: field => 'The ' + field + ' field should not have spaces.',
  validate: value => !~value.trim().search(/ /g)
});
Validator.extend('username', {
  getMessage: field => 'The ' + field + ' field contains prohibited characters.',
  validate: value => !~value.replace(/ +/g, "").search(/[^A-Za-z0-9]+/)
});

Vue.use(VeeValidate, {fieldsBagName: 'formFields'});
Vue.use(VueAxios, axios);
Vue.use(Notifications);
Vue.use(VueMoment);
Vue.use(MdProgress);

axios.defaults.baseURL = process.env.API_URL;

const jwtToken = localStorage.authtoken;

if ('null' !== jwtToken && 'undefined' !== jwtToken && ('undefined' !== typeof jwtToken)) {
  const decoded = jwt_decode(jwtToken);

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch('auth/clearAuth');
    createApp().then(() => {
      router.replace({ name: 'login' });
    });
  } else {
    store.dispatch('auth/setAuthentication', decoded);
    setHttpToken(jwtToken);
    store.dispatch('auth/getUser').then(() => {
      createApp();
    });
  }
} else {
  createApp();
}

async function createApp() {
  new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
  });
}
