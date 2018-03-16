<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <router-link :to="{path: 'HelloFromVux'}">走你</router-link>
    <div v-on:click="addCart">addCart</div>
    <div>这是从子组件传回的值{{ resData }}</div>
    <ChildHelloFromVux :child-msg="msgs" @upup="changeee" :msg="msg"></ChildHelloFromVux>
  </div>
</template>

<script>
import ChildHelloFromVux from './ChildHelloFromVux.vue'
import Bus from '../assets/js/bus'
export default {
  name: 'HelloWorld',
  components: { ChildHelloFromVux, Bus },
  data () {
    return {
      msgs: 'Welcome to Your Vue.js App',
      resData: '',
      msg: ''
    }
  },
  methods: {
    changeee: function (msg) {
      this.msg = msg
    },
    addCart (event) {
      Bus.$emit('getTarget', 'nihao')
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
