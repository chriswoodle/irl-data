import { RouteConfig } from 'vue-router';

import PageNotFound from './page-not-found.vue';
import Dashboard from './dashboard.vue';
import Search from './search.vue';
import About from './about.vue';

import Main from './main.vue';


// Routes resolved in order
export const Routes: RouteConfig[] = [
    {
        path: '/',
        component: Main,
        children: [
            {
                path: '/',
                component: Dashboard,
                name: 'dashboard'
            },
            {
                path: '/search',
                component: Search,
                name: 'search'
            },
            {
                path: '/about',
                component: About,
                name: 'about'
            }
        ],
    },
    { path: '**', component: PageNotFound }
];