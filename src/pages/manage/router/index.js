import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    // mode: 'abstract',
    routes: [
        {
            path: '/',
            name: 'weather',
            component: (resolve) => require(['@/components/manage/MaWeather.vue'], resolve)
        }, {
            path: '/weather',
            name: 'weather',
            component: (resolve) => require(['@/components/manage/MaWeather.vue'], resolve)
        }, {
            path: '/news',
            name: 'news',
            component: (resolve) => require(['@/components/manage/MaNews.vue'], resolve)
        }, {
            path: '/notepad',
            name: 'notepad',
            component: (resolve) => require(['@/components/manage/MaNotepad.vue'], resolve)
        }
    ]
})
