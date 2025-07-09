<script setup>
import { storeToRefs } from 'pinia';
import Swal from 'sweetalert2';
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();
const { userIsAuth } = storeToRefs(authStore);

const logout = () => {
     Swal.fire({
      title: "Cerrar sesión",
      text: "¿Estás seguro que quiere cerrar la sesión?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#00BCD4",
      cancelButtonColor: "#B0BEC5",
      cancelButtonText: "No, cancelar",
      confirmButtonText: "Sí, cerrar sesión",
    }).then( (result) => {
        if (result.isConfirmed) {
            authStore.onLogout();
        }
    });
}
</script>

<template>
    <v-app-bar density="prominent">
        <template v-slot:image>
            <v-img src="/images/books_cover.avif" cover
                gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"></v-img>
        </template>

        <template v-slot:prepend>
            <v-btn v-if="!userIsAuth" :to="{ name: 'home' }" variant="text">
                <span class="font-weight-bold font-italic">Libro Virtual</span>
            </v-btn>
            <v-btn v-else :to="{ name: 'index' }" variant="text">
                <span class="font-weight-bold font-italic">Libro Virtual</span>
            </v-btn>
        </template>

        <template v-slot:append>
            <div v-if="userIsAuth">
                <v-btn :to="{ name: 'index' }">Gestión</v-btn>
                <v-btn :to="{ name: 'search' }">Búsqueda</v-btn>
                <v-btn @click="logout()">Cerrar sesión</v-btn>
            </div>
            <div v-else>
                <v-btn :to="{ name: 'home' }">Inicio</v-btn>
            </div>
        </template>
    </v-app-bar>
</template>