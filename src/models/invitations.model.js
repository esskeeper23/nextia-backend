const { DataTypes } = require('sequelize')

const db = require('../utils/database')
const Users = require('./users.model')

const Invitations = db.define('invitations', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    entryDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    dateOfExpiry: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'user_id',
        references: {
            key: 'id',
            model: Users
        }
    },
}, {
    timestamps: false
})

module.exports = Invitations