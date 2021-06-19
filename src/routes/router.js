import {createRouter, createWebHistory} from 'vue-router';
import MainPage from "@/components/MainPage";
import About from "@/components/About";

const routes = [
    { path: '/', component: MainPage },
    { path: '/about', component: About }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

export default router;
