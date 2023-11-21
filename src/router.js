import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "./components/LoginPage.vue";
import FirstPage from "./components/FirstPage.vue";
import SideBar from "./components/SideBar.vue";
import SideNavbar from "./components/SideNavbar.vue";
import EmployeeSummary from "./components/EmployeeSummary.vue";
import DetailsPage from "./components/DetailsPage.vue";

const routes = [
    {
        path: '/',
        component: LoginPage
    },
    {
        path: "/shiftpage",
        component: FirstPage
    },
    {
        path: "/sidebar",
        component: SideBar
    },
    {
        path: "/sidenavbar",
        component: SideNavbar
    },
    {
        path: "/employeesummary",
        component: EmployeeSummary
    }, {
        path: '/detailspage',
        component: DetailsPage
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes

});
export default router;
