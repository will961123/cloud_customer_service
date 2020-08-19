import Vue from 'vue'
import App from './App'
import willTabbar from './components/will_tabbar/will_tabbar.vue'

Vue.config.productionTip = false

Vue.component('willTabbar',willTabbar)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
