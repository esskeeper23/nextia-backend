const router = require('express').Router()
const passport = require('passport')

const invitationServices = require('./invitations.services')
require('../middlewares/auth.middleware')(passport)

router.route('/')
    .get(
        passport.authenticate("jwt", {session: false}),
        invitationServices.getAllInvitations
    )
    .post(
        passport.authenticate("jwt", {session: false}),
        invitationServices.postInvitation
    )


router.route('/:invitation_id')
    .get(
        passport.authenticate("jwt", {session: false}),
        invitationServices.getInvitationById
    )
    .delete(
        passport.authenticate("jwt", {session: false}),
        invitationServices.deteleInvitation
    )


module.exports = router