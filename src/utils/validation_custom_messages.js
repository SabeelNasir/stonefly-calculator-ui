export default (extend) => {

    /* extending vee-validate messages */
    extend('required', value => {
        if (value != null) {
            return true
        }
        return '{_field_} cannot be empty'
    })
    extend('email', value => {
        if (value != null) {
            return true
        }
        return '{_field_} must a valid email'
    })

    extend('numeric', value => {
        if (value != null) {
            return true
        }
        return '{_field} must be a number'
    })

    /** Argument Placeholders */
    extend('min', {
        validate(value, { length }) {
            return value.length >= length;
        },
        params: ['length'],
        message: 'The {_field_} field must have at least {length} characters'
    });
    extend('minmax', {
        validate(value, { min, max }) {
            return value.length >= min && value.length <= max;
        },
        params: ['min', 'max'],
        message: 'The {_field_} field must have at least {min} characters and {max} characters at most'
    });
}