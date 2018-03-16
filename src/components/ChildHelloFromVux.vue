<template>
  <div class="hello">
    <divider>我是有底线的</divider>
    <div>这是子组件</div>
    <div>这是父组件传回来的的值{{childMsg}}</div>
    <div @click="up">点击（向父组件传值）</div>
    <!--<divider>{{ $t('I have bottom line') }}</divider>-->
  </div>
</template>

<script>
  import { Divider, Grid, GridItem } from 'vux'
  export default {
    name: 'HelloWorld',
    props: ['childMsg'],
    components: {
      Divider,
      Grid,
      GridItem
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        resData: '你好'
      }
    },
    methods: {
      up: function () {
        this.$emit('upup', 'hehe')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
