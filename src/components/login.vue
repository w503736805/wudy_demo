<template>
  <div class="loginBg" data-title="登录">
    <div class="content">
      <div class="loginBox">
        <h2>{{msg}}</h2>
        <group>
          <x-input type="text" placeholder-align="right" v-model="userName">
            <div slot="label" style="width: 70px">
              <div style="width: 60px;height: 24px;text-align: justify;text-justify:inter-ideograph;float: left">
                用户名
                <span style="display: inline-block; width: 100%;"></span>
              </div>
              <div style="float: right;margin-right: 5px;">:</div>
            </div>
          </x-input>
        </group>
        <group>
          <x-input type="password" placeholder-align="right" v-model="pwd">
            <div slot="label" style="width: 70px">
              <div style="width: 60px;height: 24px;text-align: justify;text-justify:inter-ideograph;float: left">
                密码
                <span style="display: inline-block; width: 100%;"></span>
              </div>
              <div style="float: right;margin-right: 5px;">:</div>
            </div>
          </x-input>
        </group>
        <div>
          <checker v-model="recodeUser" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
            <checker-item value="1"></checker-item>
            <checker-item value="2">闲</checker-item>
            <checker-item value="3">邓</checker-item>
            <checker-item value="4">小</checker-item>
            <checker-item value="5">驴</checker-item>
          </checker>
        </div>
        <group title="使用icon代替title">
          <x-input title="必须输入2333" :is-type="be2333" placeholder="I'm placeholder">
            <img slot="label" style="padding-right:10px;display:block;" src="http://dn-placeholder.qbox.me/110x110/FF2D55/000" width="24" height="24">
          </x-input>
        </group>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .loginBox .weui-label{
    width: 5em!important;
  }
  .demo1-item {
    border: 1px solid #ececec;
    padding: 5px 15px;
  }
  .demo1-item-selected {
    border: 1px solid green;
  }
</style>
<script>
import '../assets/css/login.css'
import { Group, XInput, Checker, CheckerItem } from 'vux'
export default {
  name: 'login',
  components: {
    Group,
    XInput,
    Checker,
    CheckerItem
  },
  data () {
    return {
      msg: '登录',
      userName: '',
      pwd: '',
      recodeUser: '',
      be2333: function (value) {
        return {
          valid: value === '2333',
          msg: 'Must be 2333'
        }
      }
    }
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
