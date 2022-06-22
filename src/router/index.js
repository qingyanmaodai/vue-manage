import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const routes = [
    {
        name: 'Main',
        path: '/',
        component:() => import('@/views/Main/index.vue'),
        children: [
            {
                name: 'Home',
                path: '/Home',
                component: () => import('@/views/Home'),
                // meta:{name:'首页'}
            },
            {
                name: 'User',
                path: '/User',
                component: () => import('@/views/User'),
                // meta:{name:'首页'}
            },
        ]
    },
    {
        name: 'User',
        path: '/user',
        component:() => import('@/views/User/index.vue'),
    }
]


const router = new VueRouter({
    mode: 'history',
    routes
})

export default router