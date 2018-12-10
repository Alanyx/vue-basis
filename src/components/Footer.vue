<template>
  <footer>
    <p>{{copyright}}</p>
    <p>{{title_bind}}</p>
  </footer>
</template>

<script>
export default {
  name: 'app-footer',
  data () {
    return {
      copyright: 'copyright 2017 vue footer'
    }
  },
  props: {
    title_bind: {
      type: String,
      required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  footer{
    background: brown;
    padding: 5px;
  }
  p{
    color: lightgreen;
    text-align: left;
  }
</style>
