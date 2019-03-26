import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    /*
    参数:"hash"、 "history"、"abstract"
    hash: 默认参数，链接地址带#
    history: 地址不带#
    abstract: 不显示使用路由的地址
    */
    // mode: 'abstract',
    routes: [
        {
            path: '/',
            name: 'detail',
            // component: test1
            component: (resolve) => require(['@/components/cuihua/ch_detail.vue'], resolve)
        },
        {
            path: '/detail',
            name: 'detail',
            // component: test1
            component: (resolve) => require(['@/components/cuihua/ch_detail.vue'], resolve)
        }, {
            path: '/lunch',
            name: 'lunch',
            component: (resolve) => require(['@/components/cuihua/ch_lunch.vue'], resolve)
        }
    ]
})
