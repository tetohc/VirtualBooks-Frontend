<script setup>
import { onMounted, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useForm, useField } from 'vee-validate';
import Swal from 'sweetalert2';

import { LocationSelector, ButtonLink } from '@/components/';
import { createValidation, imageValidation } from '@/validations';
import { useCategoryStore, useLegendStore, useImageStore } from '@/stores';

const router = useRouter();
const route = useRoute();
const legendId = route.params.id;

const categoryStore = useCategoryStore();
const legendStore = useLegendStore();
const imageStore = useImageStore();

onMounted(() => {
    if (legendId) {
        legendStore.loadLegendDetailById(legendId);
    }
    categoryStore.loadCategories();
});

const { handleSubmit, setValues } = useForm({
    validationSchema: {
        ...createValidation,
        ...imageValidation
    }
});

watch(
    [() => legendStore.legendDetail, () => categoryStore.categories],
    ([legend, categories]) => {
        if (legendId && legend && categories.length) {
            setValues({
                id: legendId,
                name: legend.name,
                imageUrl: legend.imageUrl,
                category: legend.categoryId,
                date: legend.date,
                province: legend.provinceId,
                canton: legend.cantonId,
                district: legend.districtId,
                description: legend.description,
            });
        }
    }, { immediate: true });

const name = useField("name");
const imageUrl = useField("imageUrl");
const image = useField("image");
const category = useField("category");
const date = useField("date");
const province = useField("province");
const canton = useField("canton");
const district = useField("district");
const description = useField("description");

watch(() => image.value.value, (value) => {
    if (value) {
        imageStore.upload(value).then(success => {
            if (success) {
                imageUrl.value.value = imageStore.currentImageUrl;
            }
        });
    }
});

const onSubmit = handleSubmit((values) => {
    const storeMethod = values.id ? legendStore.updateLegend : legendStore.createLegend;
    storeMethod(values).then(success => {
        if (success) {
            Swal.fire({
                position: "center",
                icon: "success",
                text: values.id
                    ? "El Libro Virtual de la leyenda se ha actualizado correctamente."
                    : "El Libro Virtual de la leyenda se ha creado correctamente.",
                showConfirmButton: false,
                timer: 1500,
            }).then(() => {
                router.push('/index');
            });
        } else {
            Swal.fire({
                icon: "warning",
                title: "Operación fallida",
                text: legendStore.error || "Ocurrió un error inesperado",
                showConfirmButton: true,
                confirmButtonColor: "#B0BEC5",
                confirmButtonText: "Cerrar",
            });
        }
    });
});

</script>

<template>
    <v-form class="my-10">
        <v-container>
            <v-text-field label="Nombre de la leyenda" bg-color="blue-grey-lighten-5" class="mb-2"
                v-model="name.value.value" :error-messages="name.errorMessage.value"></v-text-field>

            <v-file-input prepend-icon="mdi-camera" bg-color="blue-grey-lighten-5" label="Imagen" class="mb-2"
                variant="filled" accept="image/*" v-model="image.value.value"
                :error-messages="image.errorMessage.value"></v-file-input>

            <div v-if="imageUrl.value.value" class="my-5">
                <p>Imagen actual:</p>
                <v-img :width="311" aspect-ratio="16/9" cover :src="imageUrl.value.value"></v-img>
            </div>

            <v-row>
                <v-col cols="12" md="6">
                    <v-select bg-color="blue-grey-lighten-5" label="Categoría" :items="categoryStore.categories"
                        item-title="name" item-value="id" v-model="category.value.value"
                        :error-messages="category.errorMessage.value" clearable />
                </v-col>
                <v-col cols="12" md="6">
                    <v-text-field type="date" bg-color="blue-grey-lighten-5" label="Fecha" v-model="date.value.value"
                        :error-messages="date.errorMessage.value"></v-text-field>
                </v-col>
            </v-row>

            <LocationSelector v-model:province="province.value.value" v-model:canton="canton.value.value"
                v-model:district="district.value.value" :province-error="province.errorMessage.value"
                :canton-error="canton.errorMessage.value" :district-error="district.errorMessage.value" />

            <v-textarea class="mb-3" bg-color="blue-grey-lighten-5" label="Descripción de la leyenda" auto-grow
                clearable v-model="description.value.value"
                :error-messages="description.errorMessage.value"></v-textarea>

            <v-row>
                <v-col cols="12" md="6">
                    <v-hover v-slot="{ isHovering, props }">
                        <v-btn v-bind="props" block :color="isHovering ? 'cyan-darken-1' : 'cyan'"
                            prepend-icon="mdi-book-plus" class="text-none text-subtitle-1" variant="flat"
                            @click="onSubmit">
                            {{ legendId ? 'Actualizar libro' : 'Crear libro' }}
                        </v-btn>
                    </v-hover>
                </v-col>
                <v-col cols="12" md="6">
                    <ButtonLink block text-button="Cancelar" class="text-none text-subtitle-1" color="blue-grey-lighten-3"
                        :to="{ name: 'index' }">
                    </ButtonLink>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>