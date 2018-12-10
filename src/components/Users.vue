<template>
  <div class="users">
    <h1>hello users</h1>
    <!--01非传值的方式获取数据(在本vue中)-->
    <!--<ul>-->
      <!--<li v-for="user in users" v-on:click="user.show = !user.show">-->
        <!--<h4>{{user.name}}</h4>-->
        <!--<h4 v-show="user.show">{{user.position}}</h4>-->
      <!--</li>-->
    <!--</ul>-->
    <!--02传值的方式获取数据(从父组件传值给子组件)-->
    <ul>
      <!--<li v-for="user in users_bind" v-on:click="user.show = !user.show">-->
        <!--<h4>{{user.name}}</h4>-->
        <!--<h4 v-show="user.show">{{user.position}}</h4>-->
      <!--</li>-->
      <!--网络获取的user数据-->
      <li v-for="user in users_bind">
        <h4>{{user.name}}</h4>
        <h4>{{user.email}}</h4>
      </li>
    </ul>
    <!--演示传引用-->
    <button v-on:click="deleteUser">删除用户</button>
  </div>
</template>

<!--
  传值：string number boolean
  传引用：array object    [如果是传引用，一个地方数据的变化会影响其他地方，如上面的删除用户]
-->
<script>
export default {
  name: 'Users',
  data () {
    return {
      // 01非传值的方式获取数据(在本vue中)
      // users: [
      //   {name: 'zhangsan', position: '前端开发', show: false},
      //   {name: 'lisi', position: '后端开发', show: false},
      //   {name: 'wangwu', position: '大数据开发', show: false},
      //   {name: 'zhangliu', position: '算法开发', show: false},
      //   {name: 'zhangliu2', position: '算法开发2', show: false}
      // ]
    }
  },
  // 从父组件传值给子组件
  // 方式1:（不严谨）
  // props: ['users_bind']
  // 方式2:官方（指定对象）
  props: {
    users_bind: {
      // 类型：此处为数组
      type: Array,
      // 是否为必须
      required: true
    }
  },
  methods: {
    deleteUser: function () {
      this.users_bind.pop()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--scoped:域，可以指定对应的组件样式-->
<style scoped>
  h1{
    color: aqua;
  }
</style>
