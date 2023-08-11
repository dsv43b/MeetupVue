import { unref, watchEffect, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';

export function useQuerySync(filter, view) {
  const router = useRouter();
  const route = useRoute();

  watchEffect(() => {
    const result = {};

    if (unref(view) !== 'list') {
      result.view = unref(view);
    }
    if (filter.value.date !== 'all') {
      result.date = filter.value.date;
    }
    if (filter.value.participation !== 'all') {
      result.participation = filter.value.participation;
    }
    if (filter.value.search !== '') {
      result.search = filter.value.search;
    }

    router.push({
      name: 'index',
      query: {
        ...result,
      },
    });
  });

  watch(
    () => route.query,
    (newVal, oldVal) => {
      for (let key in newVal) {

        if (key === 'view') {
          view.value = newVal[key];
        } else {
          filter.value[key] = newVal[key];
        }
      }
    },
    { immediate: true },
  );
}
