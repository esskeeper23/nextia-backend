//? Dependencies
const uuid = require('uuid')

const Users = require('../models/users.model')
const { hashPassword } = require('../utils/crypto')

const getAllUsers = async () => {
    const data = await Users.findAll()
    return data
}

const getUserById = async (id) => {
    const data = await Users.findOne({
        where: {
            id: id
        }
    })
    return data
}


const createUser = async (data) => {
    const newUser = await Users.create({
        id: uuid.v4(),
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: hashPassword(data.password),
        birthday: data.birthday,
        gender: data.gender,
        apartmentNumber: data.apartmentNumber
    })
    return newUser
}

const updateUser = async (id, data) => {
    const result = await Users.update(data, {
        where: {
            id: id
        }
    })
    return result
}

const deleteUser = async (id) => {
    const data = await Users.destroy({
        where: {
            id: id
        }
    })
    return data
}

const deleteMyUser = async (id) => {
    const data = await Users.destroy({
        where: {
            id: id
        }
    })
    return data
}

const updateMyUser = async (id, data) => {
    const result = await Users.update(data, {
        where: {
            id: id
        }
    })
    return result
}

//? Un servidor contiene la API
//? Otro servidor contiene la Base de Datos

const getUserByEmail = async(email) => {
    //? SELECT * FROM users where email = 'sahid.kick@academlo.com'//
    const data = await Users.findOne({
        where: {
            email: email
        }
    })
    return data
}

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    getUserByEmail,
    deleteMyUser,
    updateMyUser
}