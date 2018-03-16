<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="../assets/images/vux_logo.png">
      <h1> </h1>
    </div>
    <group title="cell demo">
      <cell title="VUX" value="cool" is-link></cell>
    </group>
    <div id="ni"></div>
    <!--<div v-on:mouseenter="stopPlay()" v-on:mouseleave="play()" class="swiper-container gallery-top swiper-container-horizontal">-->
      <!--<div class="swiper-wrapper">-->
        <!--<div v-for="value in lbt" class="swiper-slide swiper-slide-next" style="width: 100%; margin-right: 10px;" v-bind:style="{backgroundImage: 'url(' + value.imgs + ')'}"></div>-->
      <!--</div>-->
      <!--<div class="swiper-button-next swiper-button-white"></div>-->
      <!--<div class="swiper-button-prev swiper-button-white swiper-button-disabled"></div>-->
    <!--</div>-->
    <!--<div class="swiper-container gallery-thumbs swiper-container-horizontal">-->
      <!--<div class="swiper-wrapper">-->
        <!--<div v-for="value in lbt" class="swiper-slide swiper-slide-next" style="margin-right: 10px;" v-bind:style="{backgroundImage: 'url(' + value.imgs + ')'}"></div>-->
      <!--</div>-->
    <!--</div>-->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

      <!-- 如果需要滚动条 -->
      <div class="swiper-scrollbar"></div>
    </div>
    <div @click="dianji">点击</div>
  </div>
</template>

<style scoped>
  @import url("../assets/js/swiper-3.4.2.min.css");
  /*.gallery-top{*/
    /*height:32rem;*/
    /*width:100%;*/
  /*}*/
  /*.gallery-thumbs{*/
    /*height:20%;*/
    /*box-sizing:border-box;*/
    /*padding:10px 0;*/
    /*background: rgba(0, 0, 0, 0.4);*/
    /*cursor: pointer;*/
  /*}*/
  /*.gallery-thumbs .swiper-slide{*/
    /*width:30%;*/
    /*height:6rem;*/
    /*opacity:0.3;*/
  /*}*/
  /*.gallery-thumbs .swiper-slide-active{*/
    /*opacity:1;*/
  /*}*/
  /*.swiper-slide{*/
    /*background-size: 100% 160%;*/
    /*-webkit-background-size: 100% 160%;*/
  /*}*/
  .swiper-container {
    width: 600px;
    height: 300px;
    background: yellow;
  }
</style>

<script>
  import Swiper from '../assets/js/swiper-3.4.2.min.js'
  import Bus from '../assets/js/bus'
  import { Group, Cell } from 'vux'
  import { headerObj } from '../assets/js/common.js'
  import $ from 'jquery'
  export default {
    components: {Group, Cell, Bus},
    data () {
      return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
        msg: 'Hello World!',
        lbt: [
          {
            'imgs': '../assets/vux_logo.png'
          }, {
            'imgs': '../assets/vux_logo.png'
          }, {
            'imgs': '../assets/vux_logo.png'
          }
        ]
      }
    },
    methods: {
      swiper: function () {
        var mySwiper = new Swiper('.swiper-container', {
          loop: this.isloop,
          autoplay: 2000,
          autoplayDisableOnInteraction: false,
          pagination: '.swiper-pagination',
        })
      },
      postData: function () {
        this.$http.post('user/login', JSON.stringify(this.item))
          .then(function (response) {
            console.log(response)
          })
      },
      dianji: function () {
        alert(2)
      }
    },
    mounted () {
      this.swiper()
      this.globalMethod()
      this.postData()
      console.log(headerObj)
//      console.log(url)
    },
    created () {
      Bus.$on('getTarget', target => {
        console.log(target)
        console.log(11)
      })
    },
    beforeDestroy () {
      Bus.$off('getTarget', 'target')
    }
  }
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
