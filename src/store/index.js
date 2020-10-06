import { createStore } from 'vuex'
import {UserModule} from './User'

export default createStore({
  state: {
   
  },

  //functions that affect the state
  mutations: {
    
  },
  
  //functions that you call throughout the app that call mutations
  actions: {
    
  },

  modules: {
    User: UserModule
  }
}) 
