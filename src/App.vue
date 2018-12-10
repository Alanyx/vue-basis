<!--一共有3个主要部分-->
<!--1模版:html结构-->
<!--注意:只能有一个根标签(如下面的<div></div>)-->
<!--template就是模版标签-->
<template>
  <div id="app">
    <ul>
      <!--01用a标签跳转-->
      <!--<li>-->
        <!--<a href="/">Home</a><br>-->
        <!--<a href="/helloWorld">Hello</a>-->
      <!--</li>-->
      <!--02用路由跳转-->
    <!--<li><router-link to="/">Home</router-link></li>-->
    <!--<li><router-link to="/helloWorld">Hello</router-link></li>-->
    </ul>
    <!--03引入路由的组件：固定写法-->
    <!--<router-view></router-view>-->
    <!--04以下为深入浅出基础和小demo-->
    <!--<test1 msg="这是新的属性值"></test1>-->
    <userTest></userTest>
    <router-view></router-view>
  </div>
</template>

<!--2行为:处理逻辑-->
<!--组件之间要产生关联，需要先注册(如import HelloWord from 'XXXXX'),然后再调用-->
<script>
import Test from './components/Test'
import UserTest from './components/UserTest'
export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: {
    'test1': Test,
    'userTest': UserTest
  }
}
</script>

<!--3样式:解决样式-->
<style scoped>
h1{
  color: blueviolet;
}
</style>
