import Vue from 'vue'
import Card from './Card'
import Child from './Child'
import Button from './Button'
import Checkbox from './Checkbox'
import menuPos from './menuPos'
import EncabezadoPrincipal from './EncabezadoPrincipal'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import { HasError, AlertError, AlertSuccess } from 'vform'

// Components that are registered globaly.
[
  Card,
  Child,
  Button,
  Checkbox,
  HasError,
  AlertError,
  AlertSuccess,
  menuPos,
  EncabezadoPrincipal
].forEach(Component => {
  Vue.component(Component.name, Component)
})

const requireComponent = require.context('~/components',true, /Base[A-Z]\w+\.(vue|js)$/)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  const componentName = upperFirst(
    camelCase(
      fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
    )
  )
  Vue.component( componentName, componentConfig.default || componentConfig )
})
