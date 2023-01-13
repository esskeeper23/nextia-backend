const invitationsControllers = require('./invitations.controllers')

const postInvitation = (req, res) => {
    const userId = req.user.id
    const {name, entryDate, dateOfExpiry} = req.body

    if (name && entryDate && dateOfExpiry) {
        invitationsControllers.createInvitation({
            name, entryDate, dateOfExpiry, userId
        })
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(400).json({message: err.message})
            })
    }else {
        res.status(400).json({
            message: 'Missing Data',
            fields: {
                name: 'string',
                entryDate: 'date',
                dateOfExpiry: 'date'
            }
        })
    }
}

const getAllInvitations = (req, res) => {
    invitationsControllers.getAllInvitations()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const getInvitationById = (req, res) => {
    const id = req.params.invitation_id
    invitationsControllers.getInvitationById(id)
        .then(data => {
            if(data) {
                res.status(200).json(data)
            }else {
                res.status(400).json({message: `ID: ${id}, not exist`})
            }
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const deteleInvitation = (req, res) => {
    const id = req.params.invitation_id
    invitationsControllers.deteleInvitation(id)
        .then(data => {
            if (data) {
                res.status(204).json()
            }else {
                res.status(400).json({message: 'Invalid ID'})
            }
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

module.exports = {
    getAllInvitations,
    deteleInvitation,
    getInvitationById,
    postInvitation
}