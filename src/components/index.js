import Vue from 'vue'
import WikitButton from './WikitButton.vue'

const components = {
  WikitButton
}


Object.keys(components).forEach(name => Vue.component(name, components[name]))

export default components