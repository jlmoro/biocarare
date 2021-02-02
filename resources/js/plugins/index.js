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

/*
vee-validate obtenido de https://vee-validate.logaretm.com/v3/overview.html#usage
*/
import { ValidationObserver,ValidationProvider, extend } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules'
import es from 'vee-validate/dist/locale/es'
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver)
for (let rule in rules){
  extend(rule, {
    ...rules[rule], // add the rule
    message: es.messages[rule] // add its message
  })
}

/*
vue croppa obtenido de https://zhanziyang.github.io/vue-croppa/#/quick-start
*/
import Croppa from 'vue-croppa'
import 'vue-croppa/dist/vue-croppa.css'
Vue.use(Croppa)
