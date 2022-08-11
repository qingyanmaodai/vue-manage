import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const routes = [
    {
        name: 'Main',
        path: '/',
        component:() => import('@/views/Main/index.vue'),
        children: [
            // {
            //     name: 'Home',
            //     path: '/Home',
            //     component: () => import('@/views/Home'),
            // },
            // {
            //     name: 'User',
            //     path: '/User',
            //     component: () => import('@/views/User'),
            // },
            // {
            //     name: 'Mall',
            //     path: '/Mall',
            //     component: () => import('@/views/Mall'),
            // },
            // {
            //     name: 'page1',
            //     path: '/page1',
            //     component: () => import('@/views/Other/pageOne.vue'),
            // },
            // {
            //     name: 'page2',
            //     path: '/page2',
            //     component: () => import('@/views/Other/pageTwo.vue'),
            // },
        ]
    },
    {
        name: 'Login',
        path: '/Login',
        component:() => import('@/views/Login'),
    }
]


const router = new VueRouter({
    mode: 'history',
    routes
})

export default router