const uuid = require('uuid')

const Invitations = require('../models/invitations.model')

const getAllInvitations = async() => {
    const data = await Invitations.findAll()
    return data
}

const getInvitationById = async() => {
    const data = await Invitations.findOne({
        where: {
            id
        }
    })
    return data
}

const deteleInvitation = async(id) => {
    const data = await Invitations.destroy({
        where: {
            id
        }
    })
}

module.exports = {
    getAllInvitations,
    getInvitationById,
    deteleInvitation
}