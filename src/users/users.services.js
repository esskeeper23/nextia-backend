const usersControllers = require("./users.controllers");

const getAllUsers = (req, res) => {
  usersControllers
    .getAllUsers()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const getUserById = (req, res) => {
  const id = req.params.id;
  usersControllers
    .getUserById(id)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
};

const registerUser = (req, res) => {
  const {firstName, lastName, email, password, birthday, apartmentNumber } = req.body;

    if (
        firstName &&
        lastName &&
        email &&
        password &&
        birthday &&
        apartmentNumber
    ) {
        //? Ejecutamos el controller
        usersControllers.createUser({
            firstName, lastName, email, password, birthday, apartmentNumber
        })
            .then( data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(400).json(err.message)
            })
    } else {
    //? Error cuando no mandan todos los datos necesarios para crear un usuario
        res.status(400).json({message: 'All fields must be completed', fields: {
            firstName: 'string',
            lastName: 'string',
            email: 'example@example.com',
            password: 'string',
            birthday: 'YYYY/MM/DD',
            apartmentNumber: 'string'
        }})
    }
};

const patchUser = (req, res) => {
  const id = req.params.id;
  const { firstName, lastName } = req.body;

  usersControllers
    .updateUser(id, { firstName, lastName })
    .then((data) => {
      if (data[0]) {
        res
          .status(200)
          .json({ message: `User with ID: ${id}, edited succesfully!` });
      } else {
        res.status(404).json({ message: "Invalid ID" });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const deleteUser = (req, res) => {
  const id = req.params.id;
  usersControllers
    .deleteUser(id)
    .then((data) => {
      if (data) {
        res.status(204).json();
      } else {
        res.status(404).json({ message: "Invalid ID" });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const deleteMyUser = (req, res) => {
  const id = req.user.id;
  usersControllers
    .deleteUser(id)
    .then((data) => {
      if (data) {
        res.status(204).json();
      } else {
        res.status(404).json({ message: "Invalid ID" });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const updateMyUser = (req, res) => {
  const id = req.user.id;
  const { firstName, lastName } = req.body;

  usersControllers
    .updateUser(id, { firstName, lastName })
    .then((data) => {
      if (data[0]) {
        res
          .status(200)
          .json({ message: `User with ID: ${id}, edited succesfully!` });
      } else {
        res.status(404).json({ message: "Invalid ID" });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const getMyUser = (req, res) => {
  const id = req.user.id

  usersControllers.getUserById(id)
    .then(data => {
      if (data) {
        res.status(200).json(data)
      }else {
        res.status(400).json({message: 'invalid ID'})
      }
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}


module.exports = {
    getAllUsers,
    getUserById,
    patchUser,
    registerUser,
    deleteUser,
    getMyUser,
    deleteMyUser,
    updateMyUser
}