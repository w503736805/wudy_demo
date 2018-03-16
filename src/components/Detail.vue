<template>
  <div class="hello">
    <divider>我是有底线的</divider>
    <grid>
      <grid-item label="Grid" v-for="(i,index) in 7" key="index">
        <img slot="icon" src="../assets/images/logo.png">
      </grid-item>
    </grid>
    <!--<divider>{{ $t('I have bottom line') }}</divider>-->
    <div class="swiper-container">
      <div>这是详情页</div>
      <router-link to="Home">咋们回到home</router-link>
      <div>{{userDetail}}</div>
    </div>
  </div>
</template>

<script>
import { Divider, Grid, GridItem } from 'vux'
import { mapGetters } from 'vuex'
export default {
  name: 'Detail',
  components: {
    Divider,
    Grid,
    GridItem
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    ...mapGetters([
      'userDetail'
    ])
  },
  methods: {
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
