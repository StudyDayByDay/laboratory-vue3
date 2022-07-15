import {defineStore} from 'pinia';
export const useUserStore = defineStore({
  id: 'user',
  state: () => {
    return {
      name: '李鲲'
    };
  },
  actions: {
    updateName(name) {
      this.name = name;
    }
  },
});