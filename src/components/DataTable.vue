<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import Swal from 'sweetalert2';
import { useLegendStore } from "@/stores";

const router = useRouter();
const legendStore = useLegendStore();
const search = ref("");

onMounted(() => {
    legendStore.loadLegends();
});

const headers = [
    {
        align: "start",
        key: "name",
        sortable: false,
        title: "Título",
    },
    { key: "category", title: "Categoría" },
    { key: "date", title: "Fecha" },
    { key: "province", title: "Provincia" },
    { key: "actions", title: "Actions", sortable: false },
];

const viewDetail = (id) => {
    router.push({ name: "detail", params: { id } });
}

const updateLegend = (id) => {
    router.push({ name: "update", params: { id } });
}

const deleteLegend = (id) => {
    Swal.fire({
        text: "¿Estás seguro que quieres eliminar el este Libro Virtual?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#00BCD4",
        cancelButtonColor: "#B0BEC5",
        cancelButtonText: "No, cancelar",
        confirmButtonText: "Sí, eliminar",
    }).then(async (result) => {
        if (result.isConfirmed) {
            try {
                await legendStore.removeLegend(id);
                Swal.fire({
                    title: "¡Eliminado con éxito!",
                    text: "El Libro Virtual de la leyenda se ha eliminado con éxito.",
                    icon: "success",
                })
            } catch (error) {
                Swal.fire({
                    icon: "warning",
                    text: "No se pudo eliminar el Libro Virtual de leyenda.",
                    showConfirmButton: true,
                    confirmButtonColor: "#B0BEC5",
                    confirmButtonText: "Cerrar",
                });
            }
        }
    });
}

</script>

<template>
    <v-card>
        <v-card-title>Lista de libros virtuales</v-card-title>

        <v-card-text>
            <v-text-field v-model="search" label="Buscar por nombre, categoría, fecha, provincia, cantón y distrito."
                prepend-inner-icon="mdi-magnify" variant="outlined" hide-details single-line />
        </v-card-text>

        <v-data-table :headers="headers" :items="legendStore.legends" :search="search" :items-per-page="10"
             class="elevation-1">
            <template v-slot:item.actions="{ item }">
                <v-menu>
                    <template v-slot:activator="{ props }">
                        <v-btn icon size="small" v-bind="props">
                            <v-icon size="18">mdi-dots-vertical</v-icon>
                        </v-btn>
                    </template>

                    <v-list>
                        <v-list-item @click="viewDetail(item.id)">
                            <v-list-item-title>
                                <v-icon start size="18" class="mr-2">mdi-eye</v-icon>
                                Ver detalle
                            </v-list-item-title>
                        </v-list-item>

                        <v-list-item @click="updateLegend(item.id)">
                            <v-list-item-title>
                                <v-icon start size="18" class="mr-2">mdi-pencil</v-icon>
                                Editar
                            </v-list-item-title>
                        </v-list-item>

                        <v-list-item @click="deleteLegend(item.id)">
                            <v-list-item-title>
                                <v-icon start size="18" class="mr-2">mdi-delete</v-icon>
                                Eliminar
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </template>
        </v-data-table>
    </v-card>
</template>
