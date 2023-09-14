export const loginValidation = {
    required: 'Please enter text',
    validate: (value: string) => {
        if(value.match(/[а-яА-Я]/)) {
            return 'Only english text';
        }
        return true;
    } 
}

export const passwordValidation = {
    required: 'Please enter text',
    validate: (value: string) => {
        if(value.length < 6) {
            return 'Minimal 6'
        }

        return true
    }
}