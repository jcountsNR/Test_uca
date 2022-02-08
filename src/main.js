import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueExpandableImage from 'vue-expandable-image'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import VuePdfEmbed from 'vue-pdf-embed' 

Vue.use(VueMaterial)
Vue.use(vuetify)

library.add(faUserSecret)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueExpandableImage)

Vue.config.productionTip = false
Vue.config.productionTip = false

new Vue({
  router,
  store,
  VuePdfEmbed,
  VueExpandableImage,
  vuetify,
  render: h => h(App)
}).$mount('#app')
