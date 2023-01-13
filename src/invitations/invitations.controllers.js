const uuid = require('uuid')

const Invitations = require('../models/invitations.model')

const createInvitation = async (data) => {
    const response = await Invitations.create({
        id: uuid.v4(),
        name: data.name,
        entryDate: data.entryDate,
        dateOfExpiry: data.dateOfExpiry,
        userId: data.userId
    })
    return response
}

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
    return data
}

module.exports = {
    getAllInvitations,
    getInvitationById,
    deteleInvitation,
    createInvitation
}