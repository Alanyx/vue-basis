<!--基础语法测试-->
<template>
  <div class="userTest">
    <!--1.展示用户信息-->
    <ul>
      <li v-for="user in users">
        {{user.name}}:{{user.position}}
      </li>
    </ul>
    <!--2.添加用户信息-->
    <form v-on:submit="addUser">
      <input type="text" v-model="newUser.name" placeholder="enter name"/>
      <input type="text" v-model="newUser.position" placeholder="enter position"/>
      <input type="submit" value="提交"/>
    </form>
    <!--3.删除用户信息-->
    <ul>
      <li v-for="user in users">
        <!--构建一个复选框，选中之后就会删除线删除-->
        <input type="checkbox" class="toggle" v-model="user.show"/>
        <span :class="{contacted:user.show}">
        {{user.name}}:{{user.position}}
        <button v-on:click="deleteUser(user)">删除用户信息</button>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'userTest',
  data () {
    return {
      users: [
        {name: 'zhangsan', position: '前端开发', show: false},
        {name: 'lisi', position: '后端开发', show: false},
        {name: 'wangwu', position: '大数据开发', show: false},
        {name: 'zhangliu', position: '算法开发', show: false}
      ],
      newUser: {}
    }
  },
  methods: {
    addUser: function (e) {
      // console.log('hello')
      this.users.push({
        name:this.newUser.name,
        position:this.newUser.position,
        show:false
      })
      e.preventDefault()
    },
    deleteUser: function (user) {
      // console.log('delete')
      // 数组的删除常用方法splice,通过indexOf获取索引，删除的长度为1
      this.users.splice(this.users.indexOf(user),1)
    }
  }
}
</script>

<style>
  .contacted{
    text-decoration: line-through;
  }
</style>
