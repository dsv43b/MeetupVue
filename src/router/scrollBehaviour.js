// TODO: Task 05-vue-router/03-ScrollBehavior - сделано

/** @implements {import('vue-router').RouterScrollBehavior} */
export function scrollBehavior(to, from, savedPosition) {
  if (to.hash) {
    return { el: to.hash };
  }

  if (savedPosition) {
    return savedPosition;
  }

  if (to.meta.saveScrollPosition && from.meta.saveScrollPosition) {
    return false;
  }

  return { left: 0, top: 0 };
}
