import Vue from 'vue'
import Router from 'vue-router'

import Page from './components/Page'
import Usuario from './components/adm/Root'
import Troque from './components/adm/Troque'


Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component: Page
    },{
        path: '/adm',
        component: Usuario
    },{
        path: '/troque',
        component: Troque
    }]
})