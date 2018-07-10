const Joi = require('joi')

module.exports = {
    register(req, res, next) {
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(
                // Constrain the password to contain alphanumeric chars and 8 to 32 chars.
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        }

        const {error, value} = Joi.validate(req.body, schema)

        if (error) {
            switch (error.details[0].context.key) {
            case 'email':
                res.status(400).send({
                    error: 'You must provide a valid email address.'
                })
                break
            case 'password':
                res.status(400).send({
                    error: `The provided password failed to match the following rules:
<br>
1. It must contain ONLY the following characters: lower case, upper case, numerics.
<br>
2. It must be at least 8 characters in length and not greater than 32 characters in length.`
                })
                break
            default:
                res.status(400).send({
                    error: 'Invalid registraion information.'
                })
            }
        } else {
            next()
        }
    }
}