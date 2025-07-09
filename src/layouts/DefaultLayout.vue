<script setup>
import { Navbar } from '@/components';
</script>

<template>
    <v-app>
        <Navbar />
        <v-main>
            <v-container class="mx-auto px-4 py-12" style="max-width: 96rem;">
                <RouterView />
            </v-container>
        </v-main>
    </v-app>
</template>
