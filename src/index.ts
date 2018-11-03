import Vue from 'vue';

// Libraries

// @ts-ignore
import moment from 'vue-moment';
Vue.use(moment);

import VueRouter from 'vue-router';
import VueRx from 'vue-rx';

Vue.use(VueRouter);
Vue.use(VueRx);

import './styles.scss';

// @ts-ignore
import Vuikit from 'vuikit';
// @ts-ignore
import VuikitIcons from '@vuikit/icons';
// import '@vuikit/theme';

Vue.use(Vuikit);
Vue.use(VuikitIcons);

import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)

// App

import { Routes } from './routes';

console.log(window.location.host);

export const router = new VueRouter({
    base: '/irl-data/',
    mode: 'history',
    routes: Routes
});

router.beforeEach((to, from, next) => {
    console.log(to, from);
    next();
});

const app = new Vue({
    router
}).$mount('#app');