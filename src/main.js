// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'
import ElementUI from 'element-ui'
import titleMixin from './util/title'
import * as filters from './util/filters'
import 'element-ui/lib/theme-chalk/index.css'

// 是否开启vue生产报告提示信息
Vue.config.productionTip = false

// sync the router with the vuex store.
// this registers `store.state.route`
// 主要是把 vue-router 的状态放进 vuex 的 state 中
sync(store, router)

// 使用ElementUI作为项目的ui框架
Vue.use(ElementUI)

// 标题使用混合模式
Vue.mixin(titleMixin)

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
