import Vue from "vue";
import VueRouter from "vue-router";
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Product from '../views/Product.vue';
import PalletDetails from '../views/PalletDetails.vue';
import Applications from '../views/Applications.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about/',
    name: 'About',
    component: About,
    props: true
  },
  {
    path: '/product/',
    name: 'Product',
    component: Product,
    props: true
  },
  {
    path: '/product/:series/:id',
    name: 'PalletDetails',
    component: PalletDetails,
    props: true
  },
  {
    path: '/applications',
    name: 'Applications',
    component: Applications,
  }
]

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
