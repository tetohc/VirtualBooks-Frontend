<script setup>
import { useRoute } from 'vue-router';
import { onMounted } from 'vue'

import { LegendDetail } from '@/components';
import { useLegendStore } from '@/stores'

const route = useRoute()
const legendStore = useLegendStore()

onMounted(() => {
    const id = route.params.id;
    legendStore.loadLegendDetailById(id);
});

</script>

<template>
    <LegendDetail :legend="legendStore.legendDetail" />
</template>