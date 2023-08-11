<template>
  <ul class="agenda">
    <li class="agenda__item">
      <MeetupAgendaItem v-for="agendaItem of agenda" :agenda-item="agendaItem" />
    </li>
  </ul>
</template>

<script>
import MeetupAgendaItem from './MeetupAgendaItem.vue';
// TODO: Task 02-components/05-MeetupAgenda

export default {
  name: 'MeetupAgenda',

  components: {
    MeetupAgendaItem
  },

  props: {
    agenda: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
/* _agenda.css */
.agenda {
  margin: 0;
  padding: 0;
  list-style: none;
}

.agenda__item {
  border-top: 1px solid var(--grey-3);
}

.agenda__item:first-child {
  border-top: none;
}
</style>
