import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({

    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        
        {
            path: '/login',
            name: 'login',
            component: './views/productos.html'
        },
        
        {
            path: '/logout',
            name: 'logout',
            component: () => import('./index.html')
        }

    ]

})