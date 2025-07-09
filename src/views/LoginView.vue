<script setup>
import { LoginForm } from '@/components';
</script>

<template>
    <v-card flat max-width="600" class="mx-auto my-10">
        <v-card-title class="text-h4 font-weight-bold" tag="text-h4">
            Inicio de sesión
        </v-card-title>
        <v-card-subtitle class="text-h6">
            Inicia sesión con tu cuenta <span class="font-italic font-weight-bold">Libro Virtual</span>
        </v-card-subtitle>
        <LoginForm />
    </v-card>
</template>