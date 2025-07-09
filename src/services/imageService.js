import { BASE_URL } from "./config/api";
import { useAuthStore } from "@/stores";

export const uploadImage = (file) => {
    const authStore = useAuthStore();

    return fetch(`${BASE_URL}/images/upload`, {
        method: "POST",
        headers: {
            'Authorization': `Bearer ${authStore.token}`,
        },
        body: file
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Error al subir la imagen.");
        });
};
