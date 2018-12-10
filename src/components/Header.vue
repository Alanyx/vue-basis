<template>
  <header v-on:click="changeTitle">
    <h1>{{title}}</h1>
    <h1>{{title_bind}}</h1>
  </header>
</template>

<script>
export default {
  name: 'app-header',
  data () {
    return {
      title: 'vue header'
    }
  },
  props: {
    title_bind: {
      type: String,
      required: true
    }
  },
  // methods: {
  //   changeTitle: function () {
  //     this.title_bind = 'title change'
  //   }
  // }
  methods: {
    changeTitle: function () {
      // 1.注册一个事件：titleChanged-自定义方法名，"子向父传值"-参数
      this.$emit('titleChanged', '子向父传值')
      // 2.在父组件中实现titleChanged
    }
  },
  // 以下为生命周期
  // beforeCreate: function () {
  //   alert('组件实例化之前')
  // },
  // created: function () {
  //   alert('组件实例化完毕，但页面还没有显示')
  // },
  // beforeMount: function () {
  //   alert('组件挂载前，页面仍未展示，但虚拟don已经配置')
  // },
  // mounted: function () {
  //   alert('组件挂载后，此方法执行后，页面展示')
  // },
  // beforeUpdate: function () {
  //   alert('组件更新前，页面未更新')
  // },
  // updated: function () {
  //   alert('组件更新后，此方法执行后，页面更新')
  // },
  // beforeDestroy: function () {
  //   alert('组件销毁前')
  // },
  // destroyed: function () {
  //   alert('组件销毁')
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
  background: lightgreen;
  padding: 6px;
}
  h1{
    color: #222;
    text-align: center;
  }
</style>
