<template>
  <LayoutAuth title="Вход | Meetups">
    <UiForm @submit.prevent="handleSubmit">
      <UiFormGroup label="Email">
        <UiInput v-model="email" name="email" type="email" placeholder="demo@email" required />
      </UiFormGroup>
      <UiFormGroup label="Пароль">
        <UiInput v-model="password" name="password" type="password" placeholder="password" required />
      </UiFormGroup>

      <template #buttons>
        <UiButton variant="primary" type="submit" block>Войти</UiButton>
      </template>

      <template #append> Нет аккаунта? <UiLink to="/register" class="link">Зарегистрируйтесь</UiLink> </template>
    </UiForm>
  </LayoutAuth>
</template>

<script>
// TODO: Task 05-vue-router/01-AuthPages
// TODO: Добавить именованные маршруты
import { ref, inject } from 'vue';
import UiFormGroup from '../components/UiFormGroup.vue';
import UiLink from '../components/UiLink.vue';
import UiInput from '../components/UiInput.vue';
import UiButton from '../components/UiButton.vue';
import UiForm from '../components/UiForm.vue';
import LayoutAuth from '../components/LayoutAuth.vue';
import { loginUser } from '../api/authApi'
import { addLocalStore } from '../services/authService';
import { useAuthStore } from '../stores/useAuthStore';
import { TOASTER_KEY } from '../plugins/toaster/index.js';
import { useRouter } from 'vue-router';

export default {
  name: 'PageLogin',

  components: {
    LayoutAuth,
    UiForm,
    UiButton,
    UiInput,
    UiLink,
    UiFormGroup,
  },

  setup() {
    // TODO: <title> "Вход | Meetups"
    // TODO: Добавить LayoutAuth

    /*
      TODO: Добавить обработчик сабмита
            - В случае успешной аутентификации:
              - Перейти на главную страницу или from (Task 05-vue-router/01-AuthPages)
              - Вывести тост "Авторизация прошла успешно"
            - В случае неуспешной аутентификации:
              - Вывести тост "Неверные учётные данные..."
     */

    const email = ref('');
    const password = ref('');
    const toaster = inject(TOASTER_KEY);
    const router = useRouter();

    function handleSubmit() {
      const userData = loginUser(email.value, password.value);

      userData
      .then(response => {
        addLocalStore(response.data);
        const authStore = useAuthStore();
        authStore.setUser(response.data.fullname);
        toaster.success('Авторизация прошла успешно');
        router.push({name: 'index'});
      })
      .catch(err => {
        toaster.error('Неверные учётные данные...');
      })
      
    }

    return {
      email,
      password,
      handleSubmit,
    };
  },
};
</script>

<style scoped></style>
