<template>
  <LayoutMeetupForm title="Создание митапа | Meetups">
    <MeetupForm :meetup="meetup" />
  </LayoutMeetupForm>
</template>

<script>
import { ref } from 'vue';
import MeetupForm from '../components/MeetupForm.vue';
import { createMeetup } from '../services/meetupService.js';
import LayoutMeetupForm from '../components/LayoutMeetupForm.vue';

export default {
  name: 'PageCreateMeetup',

  components: {
    MeetupForm,
    LayoutMeetupForm,
  },

  setup() {
    // TODO: title "Создание митапа | Meetups"
    // TODO: Добавить LayoutMeetupForm
    const meetup = ref(createMeetup());

    // TODO: При сабмите формы создания митапа - добавить его через API и перейти на страницу созданного митапа
    // TODO: При нажатии на "Отмена" вернуться на главную страницу

    return {
      meetup,
    };
  },
};
</script>

<style scoped></style>
