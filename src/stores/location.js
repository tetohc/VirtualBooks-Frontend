import { ref } from "vue";
import { defineStore } from "pinia";
import { getProvinces, getCantons, getDistricts } from "@/services";

export const useLocationStore = defineStore("location", () => {
    const provinces = ref([]);
    const cantons = ref([]);
    const districts = ref([]);
    const error = ref(null);

    const loadProvinces = () => {
        error.value = null;
        getProvinces()
            .then(response => {
                if (!response.success) {
                    error.value = response.message;
                    return;
                }
                provinces.value = response.data;
            })
            .catch(error => {
                console.log(error);
                error.value = "No se pudieron cargar las provincias";
            });
    }

    const loadCantons = (provinceId) => {
        getCantons(provinceId)
            .then(response => {
                if (!response.success) {
                    error.value = response.message;
                    return;
                }
                cantons.value = response.data.filter(x => x.province_id == provinceId);
            })
            .catch(error => {
                console.log(error);
                error.value = "No se pudieron cargar los cantones";
            });
    }

    const loadDistricts = (cantonId) => {
        getDistricts(cantonId)
            .then(response => {
                if (!response.success) {
                    error.value = response.message;
                    return;
                }
                districts.value = response.data.filter(x => x.canton_id == cantonId);
            })
            .catch(error => {
                console.log(error);
                error.value = "No se pudieron cargar los distritos";
            });
    }

    const cleanAll = () => {
        cantons.value = [];
        districts.value = [];
    }

    return {
        provinces,
        loadProvinces,
        cantons,
        loadCantons,
        districts,
        loadDistricts,
        cleanAll,
    }
});