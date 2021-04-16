import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts:[],
    registerData:[],
    userName:[]
  },
  mutations: {
    SET_POSTS(state,posts){
      state.posts=posts
    }
  },
  actions: {
    async getData({commit}){
      try {
          await axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
            commit('SET_POSTS',response.data)
          });
      } catch (error) {
          console.log("error");
      }
  }
  },
  modules: {
  },
})
