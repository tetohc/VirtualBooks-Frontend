import { ref } from "vue";
import { defineStore } from "pinia";
import { getLegends, getLegendById, getLegendDetailById, postLegend, putLegend, deleteLegend } from "@/services";

export const useLegendStore = defineStore("legend", () => {
    const legends = ref([]);
    const legendDetail = ref({});
    const filteredLegends = ref([]);
    const isSearching = ref(false);
    const hasSearched = ref(false);
    const errorMessage = ref("");

    const loadLegends = () => {
        errorMessage.value = "";

        getLegends()
            .then(response => {
                if (!response.success) {
                    errorMessage.value = response.message;
                    return;
                }
                legends.value = response.data;
                return true;
            })
            .catch(error => {
                errorMessage.value = "No se pudieron cargar los libros virtuales de las leyendas.";
                return false;
            });
    }

    const loadLegendById = (id) => {
        errorMessage.value = "";

        getLegendById(id)
            .then(response => {
                if (!response.success) {
                    errorMessage.value = response.message;
                    return;
                }
                legendDetail.value = response.data;
                return true;
            })
            .catch(error => {
                errorMessage.value = "No se pudo obtener el libro virtual de la leyenda.";
                return false;
            });
    }

    const loadLegendDetailById = (id) => {
        errorMessage.value = "";

        getLegendDetailById(id)
            .then(response => {
                if (!response.success) {
                    errorMessage.value = response.message;
                    return;
                }
                legendDetail.value = response.data;
                return true;
            })
            .catch(error => {
                errorMessage.value = "No se pudo obtener el detalle de la leyenda.";
                return false;
            });
    }

    const createLegend = (legend) => {
        errorMessage.value = "";

        const data = {
            categoryId: legend.category,
            districtId: legend.district,
            name: legend.name,
            description: legend.description,
            imageUrl: legend.imageUrl,
            date: legend.date
        };

        return postLegend(data)
            .then(response => {
                if (!response.success) {
                    errorMessage.value = response.message;
                    return false;
                }
                return true;
            })
            .catch(error => {
                errorMessage.value = "No se pudo crear la leyenda";
                return false;
            });
    }

    const updateLegend = (legend) => {
        errorMessage.value = "";
        const data = {
            id: legend.id,
            categoryId: legend.category,
            districtId: legend.district,
            name: legend.name,
            description: legend.description,
            imageUrl: legend.imageUrl,
            date: legend.date,
            isActive: true
        };

        return putLegend(data)
            .then(response => {
                if (!response.success) {
                    errorMessage.value = response.message;
                    return false;
                }
                return true;
            })
            .catch(error => {
                errorMessage.value = "No se pudo actualizar la leyenda.";
                return false;
            });
    };

    const removeLegend = (id) => {
        errorMessage.value = null;
        return deleteLegend(id)
            .then(result => {
                if (!result.success) {
                    errorMessage.value = result.message;
                    return false;
                }
                legends.value = legends.value.filter(x => x.id !== id);
                return true;
            })
            .catch(err => {
                errorMessage.value = err.message || "Error al eliminar la leyenda.";
                return false;
            });
    }

    const searchLegends = (textInput, dateInput) => {
        isSearching.value = true;
        hasSearched.value = true;
        const normalizedText = textInput.trim().toLowerCase();

        setTimeout(() => {
            let results = legends.value;

            if (normalizedText) {
                results = legends.value.filter(legend =>
                    legend.name.toLowerCase().includes(normalizedText)
                    || legend.category.toLowerCase().includes(normalizedText)
                    || legend.province.toLowerCase().includes(normalizedText)
                    || legend.canton.toLowerCase().includes(normalizedText)
                    || legend.district.toLowerCase().includes(normalizedText)
                );
            }
            if (dateInput) {
                results = results.filter(legend =>
                    legend.normalDate === dateInput
                );
            }

            filteredLegends.value = results;
            isSearching.value = false;
        }, 300);
    };

    const resetSearch = () => {
        hasSearched.value = false;
        filteredLegends.value = [];
    };

    return {
        error: errorMessage,
        legends,
        loadLegends,
        legendDetail,
        loadLegendById,
        loadLegendDetailById,
        createLegend,
        updateLegend,
        removeLegend,
        searchLegends,
        filteredLegends,
        isSearching,
        hasSearched,
        resetSearch,
    }
})