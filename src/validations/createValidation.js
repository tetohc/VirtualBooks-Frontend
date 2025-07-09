export const createValidation = {
    name(value) {
        if (value) {
            if (value.length >= 3) {
                return true;
            } else {
                return "El nombre debe tener 3 o más caracteres.";
            }
        }
        return "El nombre es requerido.";
    },
    description(value) {
        if (value) {
            return true;
        }
        return "La descripción es requerida."
    },
    category(value) {
        if (value) return true
        return 'La categoría es requerida.'
    },
    date(value) {
        if (value) return true
        return 'La fecha es requerida.'
    },
    province(value) {
        if (value) return true
        return 'La provincia es requerida.'
    },
    canton(value) {
        if (value) return true
        return 'El cantón es requerido.'
    },
    district(value) {
        if (value) return true
        return 'El distrito es requerido.'
    },
}

export const imageValidation = {
    imageUrl(value) {
        if (value) return true;
        return 'La imagen es requerida.';
    }
};
