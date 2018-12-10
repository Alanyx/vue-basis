<!--基础语法测试-->
<template>
  <div class="test">
    <!--<h1>test</h1>-->
    <!--1.模版语法-->
    <!--<p>{{title}}</p>-->
    <!--<p>{{user.firstname}}</p>-->
    <!--<p>{{user.lastname}}</p>-->
    <!--<p v-text="user.lastname"></p>-->

    <!--2.v-if/ v-else-->
    <!--<p v-if="showName">{{user.firstname}}</p>-->
    <!--<p v-else>Nobody</p>-->

    <!--3.v-for-->
    <!--<ul>-->
      <!--<li v-for="item in items">{{item}}</li>-->
      <!--<li v-for="item in items">{{item.title}}</li>-->
    <!--</ul>-->

    <!--4.v-on-->
    <!--<button v-on:click="greet('hello greet')">say hello</button>-->

    <!--5.键盘事件-->
    <!--<input type="text" v-on:keyup="pressKey" v-on:keyup.enter="enterHit"/>-->

    <!--6.计算属性：发生变化时触发，但是平时更常用的是methods-->
    <!--<label>First name:</label>-->
    <!--<input type="text" v-model="user.firstname"/>-->
    <!--<br>-->
    <!--<label>Last name:</label>-->
    <!--<input type="text" v-model="user.lastname"/>-->
    <!--<h3>{{fullName}}</h3>-->

    <!--7.props属性-->
    <h2>{{msg}}</h2>

  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      title: 'hello test',
      user: {
        'firstname': 'xing',
        'lastname': 'yin'
      },
      showName: false,
      items:[
        {title:'item1'},
        {title:'item2'},
        {title:'item3'}
      ]
    }
  },
  methods:{
    greet: function (param) {
      alert(param)
    },
    // 鼠标落下键触发
    pressKey: function () {
      console.log("press.....")
    },
    // 鼠标触发回车键触发
    enterHit: function () {
      console.log('you press enter')
    }
  },
  computed: {
    fullName: function () {
      return this.user.firstname +':' + this.user.lastname
    }
  },
  props: {
    msg: {
      type: String,
      default: '这是默认的值'
    }
  }
}
</script>

<style>
h1{
  color: blueviolet;
}
</style>
