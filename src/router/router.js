import MainPage from '@/pages/MainPage'
import MyPosts from '@/pages/MyPosts'
import PostById from '@/pages/PostById'
import AuthorizationPage from "@/pages/AuthorizationPage.vue";
import PostPageWithStore from '@/pages/PostPageWithStore'
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        component: MainPage,
    },
    {
        path: '/posts',
        component: MyPosts,
    },
    {
        path: '/posts/:id',
        component: PostById,
    },
    {
        path: '/store',
        component: PostPageWithStore,
    },
    {
        path: '/authorization',
        component: AuthorizationPage
    }

]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router