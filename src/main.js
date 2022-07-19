import Vue from "vue";
// import Vuex from "vuex"
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import store from "./store"
import VueHtmlToPaper from 'vue-html-to-paper';
Vue.config.productionTip = false;


const options = {
  name: '_blank',
  specs: [
    'fullscreen=yes',
    'titlebar=yes',
    'scrollbars=yes'
  ],
  styles: [
    'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css',
  ],
  timeout: 1000, // default timeout before the print window appears
  autoClose: true, // if false, the window will not close after printing
  windowTitle: window.document.title, // override the window title
}

Vue.use(VueHtmlToPaper, options);

// or, using the defaults with no stylesheet
Vue.use(VueHtmlToPaper);

new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(App),
}).$mount("#app");
