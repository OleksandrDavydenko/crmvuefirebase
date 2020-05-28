import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router/index'
import store from './store'
import dateFilter from '@/filters/date.filter.js'
import currencyFilter from '@/filters/currency.filter.js'
import messagePlugin from '@/utils/message.plugin'
import Loader from '@/components/app/Loader'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.component('Loader', Loader)

// Your web app's Firebase configuration

firebase.initializeApp({
  apiKey: 'AIzaSyCDK9QLmjn6DnumUJzCzGnjzbkrJgDN-Uo',
  authDomain: 'crm-firebase-vue.firebaseapp.com',
  databaseURL: 'https://crm-firebase-vue.firebaseio.com',
  projectId: 'crm-firebase-vue',
  storageBucket: 'crm-firebase-vue.appspot.com',
  messagingSenderId: '667902802580',
  appId: '1:667902802580:web:8a84d9099fd825023d5281',
  measurementId: 'G-HXM3NW3L95'
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
