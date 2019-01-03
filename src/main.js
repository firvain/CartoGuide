import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import router from './router';
import store from './store';
import App from './App.vue';
import 'vuetify/dist/vuetify.min.css';
import 'ol/ol.css';

Vue.use(Vuetify);
Vue.use(Vuex);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
