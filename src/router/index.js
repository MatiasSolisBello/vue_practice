import Home from "@/pages/Home.vue";
import Details from "@/pages/Details.vue";
import Grafics from "@/pages/Grafics.vue";
import TecnoMarket from "@/pages/TecnoMarket.vue";
import FormProduct from '@/pages/FormProduct.vue'

import {createRouter, createWebHistory} from "vue-router"


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", name: "home", component: Home },
        { path: "/details/:id", name: "details", component: Details },
        { path: "/grafics", name: "grafics", component: Grafics },

        // Consumo de API Tecno Market
        { path: "/tecno-market", name: "tecno-market", component: TecnoMarket },
        { path: "/tecno-market/create", name: "create", component: FormProduct },
        { path: '/tecno-market/edit/:id', name: 'edit', component: FormProduct }
    ]
})
export default router;