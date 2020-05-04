import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Product from './components/Product.vue'


Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact
        },
        {
            path: '/product/:id',
            name: 'Product',
            component: Product
        }
    ]
})