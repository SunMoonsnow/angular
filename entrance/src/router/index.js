import Vue from 'vue'
import Router from 'vue-router'
import Ios from '@/components/Ios'
import Android from '@/components/Android'
import Pc from '@/components/Pc'

Vue.use(Router)

export default new Router({
  routes: [{
    path: './Ios',
    name: 'ios',
    component: Ios
  }, {
    path: './Android',
    name: "android",
    component: Android
  }, {
    path: './Pc',
    name: "pc",
    component: Pc
  }]
})
