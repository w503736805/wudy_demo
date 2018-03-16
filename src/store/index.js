/**
 * Created by wdy on 2018/1/12.
 */
import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import detail from './modules/detail'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    home,
    detail
  },
  getters
})

export default store
