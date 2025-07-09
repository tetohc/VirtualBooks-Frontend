<script setup>
import { ref } from 'vue';

const emit = defineEmits(["search", "reset"]);

const searchText = ref("");
const selectedDate = ref("");

const onSearch = () => {
    emit("search", {
        textSearch: searchText.value,
        dateSearch: selectedDate.value
    });
}

const onReset = () => {
    searchText.value = "";
    selectedDate.value = "";
    emit("reset");
}

</script>
<template>
    <v-form class="mt-5">
        <v-container>
            <v-row>
                <v-col cols="12" md="8">
                    <v-text-field v-model="searchText" label="Nombre, categoría, provincia, cantón o distrito."
                        bg-color="blue-grey-lighten-5" class="mb-2"></v-text-field>

                </v-col>
                <v-col cols="12" md="4">
                    <v-text-field v-model="selectedDate" type="date" bg-color="blue-grey-lighten-5"
                        label="Fecha"></v-text-field>

                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="6">
                    <v-hover v-slot="{ isHovering, props }">
                        <v-btn block v-bind="props" :color="isHovering ? 'cyan-darken-1' : 'cyan'"
                            prepend-icon="mdi-magnify" class="text-none text-subtitle-1" @click="onSearch()">
                            Buscar
                        </v-btn>
                    </v-hover>
                </v-col>
                <v-col cols="12" md="6">
                    <v-hover v-slot="{ isHovering, props }">
                        <v-btn block v-bind="props" :color="isHovering ? 'blue-grey-darken-1' : 'blue-grey'"
                            prepend-icon="mdi-eraser" class="text-none text-subtitle-1" @click="onReset()">
                            Limpiar
                        </v-btn>
                    </v-hover>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>