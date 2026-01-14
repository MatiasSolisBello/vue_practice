import Home from "@/pages/Home.vue";
import Details from "@/pages/Details.vue";

import {createRouter, createWebHistory} from "vue-router"


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", name: "home", component: Home },
        { path: "/details/:id", name: "details", component: Details }
    ]
})
export default router;