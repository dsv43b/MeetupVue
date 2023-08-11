<template>
  <Transition name="fade" mode="out-in">
    <slot />
  </Transition>
</template>

<script>
// TODO: Task 03-sfc/04-UiTransition - сделано

export default {
  name: 'UiTransitionFade',
};
</script>

<style scoped>
/* _transitions.css */
.fade > :deep(*) {
    opacity: 1;
    transition: opacity 0.3s ease-out;
  }

  .fade :deep(.fade-leave-active) {
    position: absolute !important;
    left: 0;
    right: 0;
  }

  .fade :deep(.fade-enter-from),
  .fade :deep(.fade-leave-to) {
    opacity: 0;
  }

  .fade :deep(.fade-move) {
    transition: transform 0.3s;
  }
</style>
