import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PublicLayout from '@/layouts/PublicLayout.vue'
import { useAuthStore } from '@/stores'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: PublicLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView,
        },
      ]
    },
    {
      path: '/',
      component: () => import('../layouts/DefaultLayout.vue'),
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import('../views/LoginView.vue'),
        },
        {
          path: '/index',
          name: 'index',
          component: () => import('../views/legends/LegendCrudView.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: '/search',
          name: 'search',
          component: () => import('../views/legends/LegendSearchView.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: '/create',
          name: 'create',
          component: () => import('../views/legends/LegendCreateView.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: '/update/:id',
          name: 'update',
          component: () => import('../views/legends/LegendUpdateView.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: '/detail/:id',
          name: 'detail',
          component: () => import('../views/legends/LegendDetailView.vue'),
          meta: { requiresAuth: true },
        },
      ]
    },
  ],
})

// Guard de navegación para proteger rutas que requieren autenticación
router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);

  if (requiresAuth) {
    if (authStore.userIsAuth) {
      return next();
    } else {
      return next({ name: 'login' });
    }
  }
  return next();
});

export default router
