<template>
  <div class="toasts">
    <!-- Без :key работает не правильно. Не смог понять как это обойти -->
    <UiToaster 
      v-for="toast in arrToasters" 
      :key="toast.id"
      :message="toast.message" 
      :toaster-type="toast.toasterType"
      @remove-toaster="removeToaster(toast.id)"
    />
  </div>
</template>

<script>
import UiToaster from './UiToaster.vue';
// TODO: Task 04-vue-router/02-TheToaster

export default {
  name: 'TheToaster',

  expose: ['success', 'error'],

  components: { UiToaster },

data() {
  return {
    arrToasters: [],
    counterId: 0,
  }
},

methods: {
  success(message) {
    this.arrToasters.push({message, toasterType: "success", id: this.counterId});
    this.counterId++;
  },

  error(message) {
    this.arrToasters.push({message, toasterType: "error", id: this.counterId});
    this.counterId++;
  },

  removeToaster(id) {
    this.arrToasters = this.arrToasters.filter(el => el.id !== id);
  }
}
};
</script>

<style scoped>
/* _toaster.css */
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}

.toast {
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 18px;
  line-height: 28px;
  width: auto;
}

.toast + .toast {
  margin-top: 20px;
}

.toast__icon {
  margin-right: 12px;
}

.toast.toast_success {
  color: var(--green);
}

.toast.toast_error {
  color: var(--red);
}
</style>
