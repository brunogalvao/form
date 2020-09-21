import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://devclinipam.firebaseio.com/'


Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios
    }
})