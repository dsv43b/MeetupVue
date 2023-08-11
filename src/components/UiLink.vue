<template>
  <component :is="tag">
    <slot />
  </component>
</template>

<script>
// TODO: Task 06-wrappers/01-UiLink - сделано

export default {
  name: 'UiLink',

  props: {
    tag: {
      type: [String, Object, Function],
      default: 'router-link',
    },
  },
};
</script>

<style scoped>
/* _link.css */
.link {
  color: var(--blue);
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}
</style>
