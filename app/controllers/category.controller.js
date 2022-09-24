const db = require("../models");
const Categories = db.category;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res, next) => {
  const newCategory = {
    name: req.body.name,
  };
  Categories.create(newCategory)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  Categories.findAll()
    .then((category) => {
      res.status(200).send(category);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

// Retrieve Tutorials with condition from the database
exports.findOne = (req, res) => {
  const name = req.params.name;
  const condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
  Categories.findAll({ where: condition })
    .then((data) => {
      res.send(data);
      // if (data) {
      //   res.send(data);
      // } else {
      //   res.status(404).send({
      //     message: `Cannot find category with name=${name}.`,
      //   });
      // }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving category with name=" + name,
      });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  Categories.update(req.body, {
    where: {
      id: id,
    },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Category was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Category with id=${id}. Maybe Category was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Category with id=" + id,
      });
    });
};

// Lock a Tutorial with the specified id in the request
exports.lock = (req, res) => {
  const id = req.params.id;
  Categories.update(
    { status: false },
    {
      where: {
        id: id,
      },
    }
  )
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Category was deleted successfully.",
        });
      } else {
        res.send({
          message: `Cannot delete Category with id=${id}. Maybe Category was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error deleting Category with id=" + id,
      });
    });
};
// Unlock a Tutorial with the specified id in the request
exports.unlock = (req, res) => {
  const id = req.params.id;
  Categories.update(
    { status: true },
    {
      where: {
        id: id,
      },
    }
  )
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Category was unlocked successfully.",
        });
      } else {
        res.send({
          message: `Cannot unlock Category with id=${id}. Maybe Category was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error unlocking Category with id=" + id,
      });
    });
};

// // Delete all Tutorials from the database.
// exports.deleteAll = (req, res) => {
//   res.status(200).send("deleteAll categories.");
// };

// // Find all published Tutorials
// exports.findAllPublished = (req, res) => {
//   res.status(200).send("findAllPublished categories.");
// };
