import { ref, computed } from "vue";
import { useRouter } from 'vue-router';
import { defineStore } from "pinia";
import { login } from "@/services";

export const useAuthStore = defineStore("auth", () => {
    const router = useRouter();
    const token = ref(localStorage.getItem("auth_token") || "");
    const error = ref("");

    const userIsAuth = computed(() => {
        return !!token.value;
    });

    const onLogin = ({ email, password }) => {
        const credentials = {
            email: email.trim(),
            password: password.trim()
        }
        return login(credentials)
            .then(response => {
                if (!response.success) {
                    error.value = response.message;
                    return false;
                }
                token.value = response.data.token;
                localStorage.setItem("auth_token", token.value);
                return true;
            })
            .catch(err => {
                error.value = "No se pudo iniciar sesión."
                return false;
            })
    }

    const onLogout = () => {
        token.value = "";
        localStorage.removeItem("auth_token");
        router.push({ name: 'home' });
    }

    return {
        token,
        userIsAuth,
        onLogin,
        onLogout,
    }
});