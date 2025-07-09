<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

defineProps({
    legend: Object
});

const router = useRouter();
</script>

<template>
    <v-container class="mt-5">
        <v-row>
            <v-col cols="12" md="12">
                <template v-if="legend">
                    <template v-if="legend.imageUrl">
                        <v-img :src="legend.imageUrl" :alt="legend.name" class="rounded-lg elevation-4" height="250"
                            cover />
                    </template>
                    <template v-else>
                        <p>Imagen no disponible</p>
                    </template>
                </template>
                <template v-else>
                    <p>Cargando...</p>
                </template>
            </v-col>

            <v-col cols="12" md="12">
                <template v-if="legend">
                    <h2 class="text-h5 font-weight-bold mb-4">{{ legend.name }}</h2>

                    <v-list density="comfortable">
                        <v-list-item>
                            <v-list-item-title><b>Categoría:</b> {{ legend.category }}</v-list-item-title>
                        </v-list-item>
                        
                        <v-divider></v-divider>
                        
                        <v-list-item>
                            <v-list-item-title><b>Descripción:</b></v-list-item-title>
                            <v-card-text>
                                {{ legend.description }}
                            </v-card-text>
                        </v-list-item>
                        
                        <v-divider></v-divider>
                        
                        <v-list-item>
                            <v-list-item-title><b>Provincia:</b> {{ legend.province }}</v-list-item-title>
                        </v-list-item>
                        
                        <v-divider></v-divider>

                        <v-list-item>
                            <v-list-item-title><b>Cantón:</b> {{ legend.canton }}</v-list-item-title>
                        </v-list-item>
                        
                        <v-divider></v-divider>

                        <v-list-item>
                            <v-list-item-title><b>Distrito:</b> {{ legend.district }}</v-list-item-title>
                        </v-list-item>
                    </v-list>

                    <h4 class="text-subtitle-1 mt-4 font-weight-bold">Fecha:</h4>
                    <p class="mb-6">{{ legend.date }}</p>
                    
                    <v-hover v-slot="{ isHovering, props }">
                        <v-btn v-bind="props" :color="isHovering ? 'cyan-darken-1' : 'cyan'"
                            prepend-icon="mdi-arrow-left" variant="flat"
                            @click="router.back()">
                            Regresar
                        </v-btn>
                    </v-hover>
                </template>
                <template v-else>
                    <p>Cargando...</p>
                </template>
            </v-col>
        </v-row>
    </v-container>
</template>