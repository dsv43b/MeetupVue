import { useAuthStore } from '../stores/useAuthStore'; 

/** @implements {import('vue-router').NavigationGuard} */
export function authGuard(to) {
  
  const store = useAuthStore();
  const isAuth = store.isAuthenticated;

  if (to.meta.requireAuth && !isAuth) {
    return { name: 'login', query: { from: to.fullPath } };
  }

  if (to.meta.requireGuest && isAuth) {
    return { name: 'index' };
  }

  return true;
}
