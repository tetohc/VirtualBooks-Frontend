<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    textButton: String,
    color: {
        type: String,
        default: 'cyan'
    },
    iconName: {
        type: String,
        default: ''
    },
    to: {
        type: [String, Object],
        default: null
    },
    tooltip: {
        type: String,
        default: ''
    },
    location: {
        type: String,
        default: 'top'
    }
});
</script>

<template>
    <v-tooltip :text="tooltip" :location="location" v-if="tooltip">
        <template v-slot:activator="{ props: tooltipProps }">
            <v-btn v-bind="tooltipProps" :color="color" variant="flat" :to="to">
                <v-icon v-if="iconName" start>{{ iconName }}</v-icon>
                {{ textButton }}
            </v-btn>
        </template>
    </v-tooltip>

    <v-btn v-else :color="color" variant="flat" :to="to">
        {{ textButton }}
    </v-btn>
</template>