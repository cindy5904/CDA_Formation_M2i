import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
    const user = ref(null);
  
    const loadUser= () => {
      const saveUser = localStorage.getItem("user");
      if (saveUser) {
        user.value = JSON.parse(saveUser);
      }
    };
  
    const saveUser = () => {
      if (user.value) {
        localStorage.setItem("user", JSON.stringify(user.value));
      }
    };
  
    loadUser();
  
    const isLoggedIn = computed(() => !!user.value);
  
    const login = ({ username, password }) => {
      user.value = { username, password };
      saveUser();
    };
  
    const register = ({ username, password }) => {
     
      login({ username, password });
    };
  
    const logout = () => {
      user.value = null;
      localStorage.removeItem("user");
      
         router.push('/'); 
      
    };

  
    return { user, isLoggedIn, login, register, logout };
  });
