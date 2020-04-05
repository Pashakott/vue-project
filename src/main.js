import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import HelloWorld from "./components/HelloWorld"
import macpro from "./components/macpro"
import macbook from "./components/macbook"


Vue.use(VueRouter)
Vue.config.productionTip = false
const routes = [
  { path: '/', component:HelloWorld},
  { path: '/macpro',components:macpro  },
  { path: '/macbook',component:macbook }
]
const router = new VueRouter({
  mode:"history",
  routes // сокращённая запись для `routes: routes`
})




new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
