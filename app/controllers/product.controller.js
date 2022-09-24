const db = require("../models");
const product = db.product;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  res.status(200).send("Public Content.");
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  res.status(200).send("findAll products.");
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  res.status(200).send("findOne products.");
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  res.status(200).send("update products.");
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  res.status(200).send("delete products.");
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  res.status(200).send("deleteAll products.");
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  res.status(200).send("findAllPublished products.");
};
