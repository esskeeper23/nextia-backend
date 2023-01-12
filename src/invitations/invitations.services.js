const invitationsControllers = require('./invitations.controllers')

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
    getInvitationById
}