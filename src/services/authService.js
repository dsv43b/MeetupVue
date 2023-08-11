// TODO: реализовать функции, необходимые для авторизации, помимо работы с API
// Например, сохранения данных пользователя в LS, восстановления и удаления


export function addLocalStore(userInfo) {
  localStorage.user = JSON.stringify(userInfo);
}

export function removeLocalStore() {
  localStorage.removeItem('user');
}

export function getLocalStore() {
  return JSON.parse(localStorage.getItem('user'));
  
}
