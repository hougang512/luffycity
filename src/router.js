import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Courses from '@/components/Courses/Courses'
import LightCourse from '@/components/LightCourse/LightCourse'
import Micro from '@/components/Micro/Micro'
import PersonalTest from '@/components/PersonalTest/PersonalTest'
import Students from '@/components/Students/Students'
Vue.use(Router);

export default new Router({
    linkActiveClass:'is-active',
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: '/home'
            // component: HelloWorld
        },
        {
            path: "/home",
            name:'home',
            component: Home
        },
        {
            path: "/courses",
            name: 'courses',
            component: Courses
        },
        {
            path: "light-course",
            name: 'lightCourse',
            component: LightCourse
        },
        {
            path: "/micro",
            name: 'micro',
            component: Micro
        },
        {
            path: "/personal-test",
            name: 'personalTest',
            component: PersonalTest
        },
        {
            path: "/students",
            name: 'students',
            component: Students
        },
    ]
})
