<script setup lang="ts">
import ButtonLink from './ButtonLink.vue';

</script>

<template>
  <v-main class="hero">
    <v-container class="content-container text-center d-flex align-center justify-center">
      <div class="text-white w-100 w-md-50">
        <h1 class="text-h4 text-md-h2 font-weight-bold my-6">
          Libro Virtual Leyendas Costarricenses
        </h1>

        <p class="text-body-1 mb-6">
          Explora las leyendas costarricenses desde cualquier lugar con acceso digital e interactivo.
        </p>
        <ButtonLink text-button="Iniciar sesión" color="cyan" :to="{ name: 'login' }"></ButtonLink>
      </div>
    </v-container>
  </v-main>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  background-image: url('/images/books_cover.avif'); 
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4); 
  z-index: 1;
}

.content-container {
  position: relative;
  z-index: 2;
}
</style>
