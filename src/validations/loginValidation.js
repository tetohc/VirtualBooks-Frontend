export const loginValidation = {
    email(value) {
        if (!value) {
            return `El correo electrónico es requerido.`
        } else {
            if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value))
                return true;
            return 'El correo electrónico no tiene un formato válido.';
        }
    },
    password(value) {
        if (!value) {
            return `La contraseña es requerida.`
        } else {
            const limit = 6;
            if (value?.length >= limit)
                return true
            return `La contraseña debe tener al menos ${limit} caracteres.`
        }
    }
}