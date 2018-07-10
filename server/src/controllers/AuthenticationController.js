const {User} = require('../models');

module.exports = {
    register: async function(req, res) {
        try {
            const user = await User.create(req.body);
            res.send(user.toJSON());
        } catch (err) {
            res.status(400).send({
                error: 'This email account is already in use.',
                debug: err,
                incomingRequest: req.body
            });
        }
    },
    login: async function(req, res) {
        try {
            const {email, password} = req.body
            const user = await User.findOne({
                where: {
                    email: email
                }
            })
            if (!user) {
                return res.status(403).send({
                    error: "The login information was incorrect"
                })
            }

            const isPasswordValid = password === user.password
            if (!isPasswordValid) {
                return res.status(403).send({
                    error: "The login information was incorrect"
                })
            }

            const userJson = user.toJSON()
            res.send({
                user: userJson
            })
        } catch (err) {
            res.status(500).send({
                error: "An error has occurred while trying to log in"
            })
        }
    }
}
