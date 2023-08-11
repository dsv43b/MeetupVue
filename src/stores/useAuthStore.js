import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { getUser } from '../api/authApi';
import { addLocalStore } from '../services/authService';


export const useAuthStore = defineStore('auth', () => {
  const user = ref(null);
  const isAuthenticated = computed(() => !!user.value);

  const setUser = (value) => {
    user.value = value;
  };

  // TODO: Добавить метод актуализации данных пользователя с API
  const autUser =  () => {
   
     getUser().then( resp => {

       console.log('resp', resp.data);
       addLocalStore(resp.data);
       setUser(resp.data.name);

     }
     ).catch(err => {
      console.log('err', err)
     })
  
    
    /* setUser(userG.fullname); */
  };

  return {
    user,
    isAuthenticated,
    setUser,
    autUser,
  };
});
