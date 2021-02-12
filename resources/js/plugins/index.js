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

/*
vue currency filter
obtenido de https://parzibyte.me/blog/2018/04/16/filtro-moned-dinero-vuejs/
*/
import VueCurrencyFilter from 'vue-currency-filter'
Vue.use(VueCurrencyFilter, {
  symbol: '$', // El símbolo, por ejemplo €
  thousandsSeparator: ',', // Separador de miles
  fractionCount: 2, // ¿Cuántos decimales mostrar?
  fractionSeparator: '.', // Separador de decimales
  symbolPosition: 'front', // Posición del símbolo. Puede ser al inicio ('front') o al final ('') es decir, si queremos que sea al final, en lugar de front ponemos una cadena vacía ''
  symbolSpacing: true // Indica si debe poner un espacio entre el símbolo y la cantidad
})
