const Invitations = require('./invitations.model')
const Users = require('./users.model')

const initModels = () => {
    Users.hasMany(Invitations)
    Invitations.belongsTo(Users)
}

module.exports = initModels