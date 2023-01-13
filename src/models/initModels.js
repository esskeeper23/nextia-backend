const User = require('./users.model')
const Invitations = require('./invitations.model')
const Users = require('./users.model')

const initModels = () => {
    User.hasMany(Invitations)
    Invitations.belongsTo(Users)
}

module.exports = initModels