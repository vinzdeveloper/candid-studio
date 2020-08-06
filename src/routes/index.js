import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import Blog from '../views/Blog.vue';
import Contact from '../views/Contact.vue';
import Portfolio from '../views/Portfolio.vue';

Vue.use(Router);

const router = new Router({
    routes: [
        { path: '/home', component: Home },
        { path: '/blog', component: Blog },
        { path: '/portfolio', component: Portfolio },
        { path: '/contact', component: Contact },
        { path: '/', component: Home},
    ]
});

export default router;