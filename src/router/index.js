import Vue from "vue";
import Router from "vue-router";

import Goods from "@/views/goods/main-goods.vue";
import My from "@/views/myMenu/my-wong.vue";
import Login from "@/views/login-wong.vue";

import { Toast } from 'vant';

Vue.use(Router);

const routes = [{
        path: "/",
        component: Goods,
        meta: {
            title: "",
        },
    },
    {
        path: "/my",
        component: My,
        meta: {
            title: "",
        },
    },

    {
        path: "/login",
        component: Login,
        meta: {
            title: "",
        },
    },
];

const router = new Router({ mode: "hash", routes });

router.beforeEach((to, from, next) => {
    let token = localStorage.getItem('username')
    if (!token) {
        if (to.path == '/login') return next()
        Toast({
            message: '',
            icon: '',
        });
        return next('/login')
            // 如果token没有过期，又是选择了登录页面就直接重定向到首页，不需要重新输入账户密码
    } else if (to.path == '/login') {
        return next('')
    }
    next()
});
export default router;