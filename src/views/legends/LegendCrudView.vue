<script setup>
import { ButtonLink, DataTable, PageTitle } from '@/components';

</script>

<template>
    <PageTitle>
        Libros Virtuales <span class="font-weight-light font-italic text-cyan">Leyendas costarricenses</span>
    </PageTitle>

    <ButtonLink text-button="Nuevo libro" color="cyan" icon-name="mdi-book-plus" :to="{ name: 'create' }"
        tooltip="Crear libro virtual de una leyenda" location="top"></ButtonLink>

    <div class="py-10">
        <DataTable />
    </div>
</template>