// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import HelloWorld from './components/HelloWorld'
import Home from './components/Home'
import Test from './components/Test'

Vue.config.productionTip = false
/// 中间件
// 使用路由
Vue.use(VueRouter)
// 各模块可以使用http【使用网络上的数据，常用:http://jsonplaceholder.typicode.com/】
Vue.use(VueResource)

// 配置路由(下面的写法是固定的) router定义好之后需要在下面引用
const router = new VueRouter({
  // 注意这里是routes，不是routers
  routes: [
    // 1.path:路由的地址；如根路径;
    // 2.component；路由的组件
    {path: '/', component: Home},
    {path: '/helloWorld', component: HelloWorld},
    {path: '/test', component: Test},
  ],
  // 去掉链接中的#号，如http://localhost:8080/#/
  mode: 'history'
}
)

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  // 在components中注册一个组件
  components: { App },
  template: '<App/>'
})

// 顺序流程:index.html -> main.js -> App.vue

// import tables from './components/tables/tables.vue'
// //全局注册组件(一般用局部组件，除非有特殊需求)
// Vue.component("tables",tables)
// import Users from './components/Users'
// 全局注册组件
// Vue.component('users', Users)
