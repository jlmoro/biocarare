import Vue from 'vue'

import './axios'
import './fontawesome'
import 'bootstrap'

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

import Vuesax from 'vuesax'
Vue.use(Vuesax)

/*
obtenido de https://dm4t2.github.io/vue-currency-input/
*/
import VueCurrencyInput from 'vue-currency-input'
const pluginOptions = {
  globalOptions: {
    // currency: 'COP',
    prefix: '$',

  }
}
Vue.use(VueCurrencyInput, pluginOptions)

/*
obtenido de https://www.npmjs.com/package/vue-numeric
*/
import VueNumeric from 'vue-numeric'
Vue.use(VueNumeric)
