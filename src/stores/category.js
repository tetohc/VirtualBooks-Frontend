import { ref } from "vue";
import { defineStore } from "pinia";
import { getCategories } from "@/services";

export const useCategoryStore = defineStore("category", () => {
    const categories = ref([]);
    const error = ref(null);

    const loadCategories = () => {
        error.value = null;
        getCategories()
            .then(response => {
                if (!response.success) {
                    error.value = response.message;
                    return;
                }
                categories.value = response.data;
            })
            .catch(error => {
                console.log(error);
                error.value = "No se pudieron cargar las categorías";
            });
    }

    return {
        categories,
        loadCategories,
    }
});