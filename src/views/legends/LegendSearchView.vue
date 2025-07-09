<script setup>
import { onMounted } from 'vue';
import { CardLegend, PageTitle, SearchForm } from '@/components';
import { useLegendStore } from '@/stores';

const legendStore = useLegendStore();

onMounted(() => {
    legendStore.resetSearch();
});

const onSearch = ({ textSearch, dateSearch }) => {
    legendStore.searchLegends(textSearch, dateSearch);
}

const onReset = () => {
    legendStore.resetSearch();
}

</script>
<template>
    <PageTitle>
        Libros Virtuales <span class="font-weight-light font-italic text-cyan">Leyendas costarricenses</span>
    </PageTitle>
    <v-card class="mx-auto my-10">
        <v-card-title class="text-body-1 text-md-h6 text-wrap  px-4">
            Búsqueda
        </v-card-title>
        <v-card-subtitle class="text-body-1 text-md-h6 text-wrap px-4">
            Encuentre un libro virtual de una leyenda con el siguiente formulario.
        </v-card-subtitle>
        <SearchForm @search="onSearch" @reset="onReset" />
    </v-card>

    <v-row v-if="legendStore.isSearching" justify="center" align="center" class="my-4">
        <v-col cols="auto">
            <v-progress-circular v-if="legendStore.isSearching" indeterminate color="cyan" size="48" />
        </v-col>
    </v-row>

    <div v-else>
        <div v-if="legendStore.hasSearched && legendStore.filteredLegends.length === 0">
            <p class="text-center">No se encontraron resultados.</p>
        </div>
        <div v-else class="pa-5">
            <v-row dense>
                <v-col v-for="item in legendStore.filteredLegends" :key="item.id" cols="12" sm="6" md="4" lg="3">
                    <CardLegend :legend="item" />
                </v-col>
            </v-row>
        </div>
    </div>
</template>