<script setup>
import { useForm, useField } from 'vee-validate';
import router from '@/router';
import { loginValidation } from '@/validations';
import { useAuthStore } from '@/stores';
import Swal from 'sweetalert2';

const authStore = useAuthStore();
const { handleSubmit } = useForm({ validationSchema: loginValidation });

const email = useField("email");
const password = useField("password");

const onSubmit = handleSubmit((values) => {
    authStore.onLogin(values).then(success => {
        if (success) {
            Swal.fire({
                position: "center",
                icon: "success",
                text: "¡Ha iniciado sesión con éxito!",
                showConfirmButton: false,
                timer: 1500,
            }).then(() => {
                router.push('/index');
            });
        } else {
            Swal.fire({
                icon: "warning",
                title: "Operación fallida",
                text: "El correo o la contraseña son incorrectos.",
                showConfirmButton: true,
                confirmButtonColor: "#B0BEC5",
                confirmButtonText: "Cerrar",
            });
        }
    });
});

</script>

<template>
    <v-form class="mt-5">
        <v-text-field type="email" label="Correo electrónico" bg-color="blue-grey-lighten-5" class="mb-2"
            v-model="email.value.value" :error-messages="email.errorMessage.value"></v-text-field>

        <v-text-field type="password" label="Contraseña" bg-color="blue-grey-lighten-5" class="mb-2"
            v-model="password.value.value" :error-messages="password.errorMessage.value"></v-text-field>

        <v-hover v-slot="{ isHovering, props }">
            <v-btn v-bind="props" block :color="isHovering ? 'cyan-darken-1' : 'cyan'"
                class="text-none text-subtitle-1" variant="flat" @click="onSubmit">
                Iniciar sesión
            </v-btn>
        </v-hover>
    </v-form>
</template>