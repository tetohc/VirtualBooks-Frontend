<script setup>
import { onMounted, ref, watch } from 'vue';
import { useLocationStore } from '@/stores';

const props = defineProps({
    province: Number,
    canton: Number,
    district: Number,
    provinceError: String,
    cantonError: String,
    districtError: String
});

const emit = defineEmits(["update:province", "update:canton", "update:district"]);

const locationStore = useLocationStore();
const selectedProvince = ref(props.province);
const selectedCanton = ref(props.canton);
const selectedDistrict = ref(props.district);

onMounted(() => {
    locationStore.loadProvinces();

    // establecer valor de selects
    if (props.province) {
        selectedProvince.value = props.province;
        locationStore.loadCantons(props.province);
    }

    if (props.canton) {
        selectedCanton.value = props.canton;
        locationStore.loadDistricts(props.canton);
    }

    if (props.district) {
        selectedDistrict.value = props.district;
    }
});

watch(selectedProvince, (provinceId) => {
    emit("update:province", provinceId);

    if (provinceId) {
        locationStore.loadCantons(provinceId);
    } else {
        locationStore.cleanAll();
    }
    selectedCanton.value = null;
    selectedDistrict.value = null;
});

watch(selectedCanton, (cantonId) => {
    emit("update:canton", cantonId);

    if (cantonId) {
        locationStore.loadDistricts(cantonId);
        selectedDistrict.value = null;
    }
});

watch(selectedDistrict, (districtId) => {
    emit("update:district", districtId);
});
</script>

<template>
    <v-row>
        <v-col cols="12" md="4">
            <v-select bg-color="blue-grey-lighten-5" label="Provincia" :items="locationStore.provinces"
                item-title="name" item-value="id" v-model="selectedProvince" :error-messages="props.provinceError"
                clearable />
        </v-col>
        <v-col cols="12" md="4">
            <v-select bg-color="blue-grey-lighten-5" label="Cantón" :items="locationStore.cantons" item-title="name"
                item-value="id" v-model="selectedCanton" :disabled="!selectedProvince"
                :error-messages="props.cantonError" clearable />
        </v-col>
        <v-col cols="12" md="4">
            <v-select class="mb-3" bg-color="blue-grey-lighten-5" label="Distrito" :items="locationStore.districts" item-title="name"
                item-value="id" v-model="selectedDistrict" :disabled="!selectedCanton"
                :error-messages="props.districtError" clearable />
        </v-col>
    </v-row>
</template>