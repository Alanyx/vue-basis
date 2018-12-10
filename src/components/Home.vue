<!--一共有3个主要部分-->
<!--1模版:html结构-->
<!--注意:只能有一个根标签(如下面的<div></div>)-->
<!--template就是模版标签-->
<template>
  <div id="home">
    <!--01全局注册组件的使用-->
    <!--<users></users>-->
    <!--02局部注册组件-->
    <!--05传值引用不会更改其他地方的父传子的值-->
    <!--<app-header v-bind:title_bind="title"></app-header>-->
    <!--06 子传父组件 v-on:titleChanged="updateTitle($event)" 绑定子组件事件名,
    同时，updateTitle($event)为父方法名，$event固定写法接受参数-->
    <app-header v-on:titleChanged="updateTitle($event)" v-bind:title_bind="title"></app-header>
    <!--03非传值的方式获取数据(在./components/Users中)-->
    <!--<users2></users2>-->
    <!--04传值的方式获取数据,用v-bind绑定值，users_bind自定义即可-->
    <users2 v-bind:users_bind="users"></users2>
    <users2 v-bind:users_bind="users"></users2>
    <!--05传值引用不会更改其他地方的父传子的值-->
    <app-footer v-bind:title_bind="title"></app-footer>
  </div>
</template>

<!--2行为:处理逻辑-->
<!--组件之间要产生关联，需要先注册(如import HelloWord from 'XXXXX'),然后再调用-->
<script>
// 局部注册组件
import Users from './Users'
import Header from './Header'
import Footer from './Footer'

export default {
  name: 'home',
  components: {
    'users2': Users,
    'app-header': Header,
    'app-footer': Footer
  },
  data () {
    return {
      // title: '这是我的脚手架项目'
      // users: [
      //   {name: 'zhangsan', position: '前端开发', show: false},
      //   {name: 'lisi', position: '后端开发', show: false},
      //   {name: 'wangwu', position: '大数据开发', show: false},
      //   {name: 'zhangliu', position: '算法开发', show: false},
      //   {name: 'zhangliu2', position: '算法开发2', show: false}
      // ],
      users: [],
      title: '传递的是一个值（string number boolean）'
    }
  },
  methods: {
    updateTitle (titleParam) {
      this.title = titleParam
    }
  },
  // 使用created在页面加载之前获取网络上的接口数据，实现http；http://jsonplaceholder.typicode.com/users
  created: function () {
    // es6的语法
    // this.$http.get('http://jsonplaceholder.typicode.com/users')
    //   .then((data) => {
    //     // 会将接口的数据赋给data
    //     console.log(data)
    //     this.users = data.body
    //   })

    // 另一种写法
    this.$http.get('http://jsonplaceholder.typicode.com/users')
      .then(function (response) {
        this.users = response.data
      }
      )
  }
}
</script>

<!--3样式:解决样式-->
<style scoped>
  h1{
    color: blueviolet;
  }
</style>
