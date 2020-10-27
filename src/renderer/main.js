import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import firebase from 'firebase/app'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

export const firebaseConfig = {
  apiKey: 'AIzaSyCbsJTh9uzknT8zv6QON6pBzR3VDf7iZnk',
  authDomain: 'chathub-656c4.firebaseapp.com',
  databaseURL: 'https://chathub-656c4.firebaseio.com',
  projectId: 'chathub-656c4',
  storageBucket: 'chathub-656c4.appspot.com',
  messagingSenderId: '803132677884',
  appId: '1:803132677884:web:4162c395236906c23d0179'
}

// Firebase設定
firebase.initializeApp(firebaseConfig)
window.firebase = firebase

new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
