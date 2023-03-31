import { createRouter, createWebHistory } from 'vue-router'
import MainResume from "@/components/MainResume";
import ResumeList from "@/components/ResumeList";
import EditResume from "@/components/EditResume";

const routes = [
  {
    path: '/home',
    name: 'home',
    component: ResumeList
  },
  {
    path: '/add',
    name: 'add',
    component: MainResume
  },
  {
    path: '/edit/:id',
    props: true,
    name: 'edit',
    component: EditResume
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
