import { BASE_URL } from "./config/api";
import { useAuthStore } from "@/stores";

export const getDistricts = (cantonId) => {
    const authStore = useAuthStore();

    return fetch(`${BASE_URL}/districts/${cantonId}`, {
        headers: {
            'Authorization': `Bearer ${authStore.token}`,
        }
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Error al obtener los distritos.');
        });
}

export const getCantons = (provinceId) => {
    const authStore = useAuthStore();

    return fetch(`${BASE_URL}/cantons/${provinceId}`, {
        headers: {
            'Authorization': `Bearer ${authStore.token}`,
        }
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Error al obtener los cantones.');
        });
}

export const getProvinces = () => {
    const authStore = useAuthStore();

    return fetch(`${BASE_URL}/provinces`, {
        headers: {
            'Authorization': `Bearer ${authStore.token}`,
        }
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Error al obtener las provincias.');
        });
}