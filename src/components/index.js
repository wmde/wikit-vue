import Vue from 'vue'
import Button from './Button.vue'

const components = {
  Button
}


Object.keys(components).forEach(name => Vue.component(name, components[name]))

export default components