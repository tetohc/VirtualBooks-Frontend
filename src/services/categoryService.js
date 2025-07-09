import { BASE_URL } from "./config/api";
import { useAuthStore } from "@/stores";

export const getCategories = () => {
    const authStore = useAuthStore();
    
    return fetch(`${BASE_URL}/categories`, {
        headers: {
            'Authorization': `Bearer ${authStore.token}`,
        }
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Error al obtener las categorías');
        });
}