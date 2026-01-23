import Home from "@/pages/Home.vue";
import Details from "@/pages/Details.vue";
import Grafics from "@/pages/Grafics.vue";
import TecnoMarket from "@/pages/TecnoMarket.vue";

import {createRouter, createWebHistory} from "vue-router"


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", name: "home", component: Home },
        { path: "/details/:id", name: "details", component: Details },
        { path: "/grafics", name: "grafics", component: Grafics },
        { path: "/tecno-market", name: "tecno-market", component: TecnoMarket }
    ]
})
export default router;