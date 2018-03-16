<template>
  <div class="hello">
    <divider>我是有底线的</divider>
    <grid>
      <grid-item label="Grid" v-for="(i,index) in 7" key="index">
        <img slot="icon" src="../assets/images/logo.png">
      </grid-item>
    </grid>
    <!--<divider>{{ $t('I have bottom line') }}</divider>-->
    <div>这是home页</div>
    <a @click="goDetail">咋们去详情页</a>
    <router-link to="Detail">咋们去详情页</router-link>
    <div>当前金额<span>{{count}}</span></div>
    <p>
      <button class="btn" @click="add">+</button>
      <button class="btn" @click="reduce">-</button>
    </p>
    <my-video></my-video>
  </div>
</template>
<style scoped>
  .btn{
    width: 60px;
  }
</style>
<script>
import { Divider, Grid, GridItem } from 'vux'
import { mapGetters, mapActions } from 'vuex'
import myVideo from './Video.vue'
export default {
  name: 'Home',
  components: {
    Divider,
    Grid,
    GridItem,
    myVideo
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      user: {
        userName: '张三',
        pwd: '123456'
      }
    }
  },
  computed: {
    ...mapGetters([
      'count'
    ])
  },
  methods: {
    ...mapActions(['add', 'reduce']),
    goDetail: function () {
      this.$router.push({path: '/detail'})
      this.$store.dispatch('userDetail', this.user)
    }
  },
  mounted () {
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
