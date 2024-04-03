import './assets/main.scss';
import { createApp, provide, h } from 'vue';
import App from './App.vue';
import { createMemoryHistory, createRouter } from 'vue-router';

import HomeComponent from './components/Welcome.vue';
import DrawingComponent from './components/Drawing.vue';

const routes = [
    { path: '/', component: HomeComponent },
    { path: '/drawing', component: DrawingComponent },
];

const router = createRouter({
    history: createMemoryHistory(),
    routes,
});

createApp({
    render: () => h(App),
}).use(router).mount('#app');
