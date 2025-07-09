<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const show = ref(false)
const router = useRouter();

defineProps({
    legend: Object
});

const viewDetail = (id) => {
    router.push({ name: "detail", params: { id } });
}
</script>

<template>
    <v-card class="mx-auto mb-2" max-width="344">
        <v-img height="200px" :src="legend.imageUrl" cover></v-img>

        <v-card-title>
            {{ legend.name }}
        </v-card-title>
        <v-card-subtitle>
            {{ legend.date }}
        </v-card-subtitle>

        <v-card-actions>
            <v-btn color="orange-lighten-2" text="Ver detalle" @click="viewDetail(legend.id)"></v-btn>

            <v-spacer></v-spacer>

            <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
        </v-card-actions>

        <v-expand-transition>
            <div v-show="show">
                <v-divider></v-divider>
                <v-card-text>
                    {{ legend.description }}
                </v-card-text>
            </div>
        </v-expand-transition>
    </v-card>
</template>
