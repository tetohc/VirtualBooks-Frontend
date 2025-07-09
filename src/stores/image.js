import { ref } from "vue";
import { defineStore } from "pinia";
import { uploadImage } from "@/services";

export const useImageStore = defineStore("image", () => {
    const currentImageUrl = ref("");
    const error = ref("");

    const upload = (image) => {

        const data = new FormData();
        data.append("file", image);

        return uploadImage(data)
            .then(response => {
                if (!response.success) {
                    error.value = response.message;
                    return false;
                }
                currentImageUrl.value = response.data;
                return true;
            })
            .catch(() => {
                error.value = "Error al subir imagen.";
                return false;
            });
    }

    return {
        currentImageUrl,
        upload,
        error
    }
});