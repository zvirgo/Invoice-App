import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import invoiceView from "../views/invoiceView.vue";

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/invoice/:invoiceId",
        name: "Invoice",
        component: invoiceView,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;