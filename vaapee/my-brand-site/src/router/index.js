// Router definitions for the Vapanda website
// Each route points to a page component stored in ../pages
import Home from '../pages/Home.vue';
import Products from '../pages/Products.vue';
import ProductDetail from '../pages/ProductDetail.vue';
import Wholesale from '../pages/Wholesale.vue';
import Brand from '../pages/Brand.vue';
import Contact from '../pages/Contact.vue';
import Legal from '../pages/Legal.vue';

export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
  },
  {
    // slug allows dynamic product pages, e.g. /products/vapanda-4-in-1-120k
    path: '/products/:slug',
    name: 'ProductDetail',
    component: ProductDetail,
  },
  {
    path: '/wholesale',
    name: 'Wholesale',
    component: Wholesale,
  },
  {
    path: '/brand',
    name: 'Brand',
    component: Brand,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/legal',
    name: 'Legal',
    component: Legal,
  },
];