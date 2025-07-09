import { BASE_URL } from "./config/api";
import { useAuthStore } from "@/stores";

export const getLegends = () => {
    const authStore = useAuthStore();

    return fetch(`${BASE_URL}/legends`, {
        headers: {
            'Authorization': `Bearer ${authStore.token}`,
        }
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Error al obtener los libros virtuales de las leyendas.');
        });
}

export const getLegendById = (id) => {
    const authStore = useAuthStore();

    return fetch(`${BASE_URL}/legends/${id}`, {
        headers: {
            'Authorization': `Bearer ${authStore.token}`,
        }
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Error al obtener el libro virtual de la leyenda.');
        });
}

export const getLegendDetailById = (id) => {
    const authStore = useAuthStore();

    return fetch(`${BASE_URL}/legends/detail/${id}`, {
        headers: {
            'Authorization': `Bearer ${authStore.token}`,
        }
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Error al obtener detalle del libro virtual de leyenda.');
        });
}

export const postLegend = (legend) => {
    const authStore = useAuthStore();

    return fetch(`${BASE_URL}/legends/create`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authStore.token}`,
        },
        body: JSON.stringify(legend)
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Error al crear el libro virtual de la leyenda.");
        });
};

export const putLegend = (legend) => {
    const authStore = useAuthStore();

    return fetch(`${BASE_URL}/legends/update/${legend.id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authStore.token}`,
        },
        body: JSON.stringify(legend)
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Error al actualizar el libro virtual de la leyenda.");
        });
};

export const deleteLegend = (id) => {
    const authStore = useAuthStore();

    return fetch(`${BASE_URL}/legends/${id}`, {
        method: "DELETE",
        headers: {
            'Authorization': `Bearer ${authStore.token}`,
        }
    })
        .then(async (response) => {
            if (response.status == 204) {
                return { success: true, message: "El libro virtual de la leyenda ha sido eliminado." }
            }

            const data = await response.json();
            if (!response.ok || !data.success) {
                throw new Error(data.message || "Error al eliminar el libro virtual de la leyenda.");
            }
        });
};