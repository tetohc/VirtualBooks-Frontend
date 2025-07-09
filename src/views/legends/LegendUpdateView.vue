<script setup>
import { Form, PageTitle } from '@/components';


</script>

<template>
    <PageTitle>
        Libro Virtual <span class="font-weight-light font-italic text-cyan">Leyenda costarricense</span>
    </PageTitle>

    <v-card flat class="mx-auto my-10">
        <v-card-title class="text-body-1 text-md-h6 text-wrap text-center" tag="h4">
            Actualizar leyenda 
        </v-card-title>
        <v-card-subtitle class="text-body-1 text-md-h6 text-wrap text-center px-4">
            Actualiza un libro virtual de una leyenda con el siguiente formulario.
        </v-card-subtitle>

         <Form />
    </v-card>
</template>