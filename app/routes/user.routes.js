module.exports = app => {
  const users = require("../controllers/user.controller.js");
  const Complaints = require("../controllers/complaint.controller.js");
  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", users.create);

  // Retrieve all Tutorials
  router.get("/users", users.findAll);

  // Retrieve all published Tutorials
  router.get("/published", users.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id",users.findOne);

  // Update a Tutorial with id
  router.put("/:id", users.update);

  // Delete a Tutorial with id
  router.delete("/:id", users.delete);

  // Create a new Tutorial
  router.delete("/", users.deleteAll);


  router.post("/create-complaints", Complaints.create);

  // Retrieve all Tutorials
  router.get("/complaints", Complaints.findAll);
  // Retrieve all published Tutorials
  router.get("/published",Complaints.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/complaint/:id",Complaints.findOne);

  // Update a Tutorial with id
  router.put("/complaint/update/:id", Complaints.update);

  // Delete a Tutorial with id
  router.delete("/complaint/:id", Complaints.delete);

  // Create a new Tutorial
  router.delete("/complaint/del", Complaints.deleteAll);
  router.post('/login', users.login);

  app.use("/api/users", router);
};

// const express = require('express');
// const { login } = require('../controllers/user.controller.js');

// const router = express.Router();


// // module.exports = router;

// module.exports = app => {
//   const complaints = require("../controllers/complaint.controller.js");

//   var router = require("express").Router();

//   // Create a new Tutorial
 

//   app.use("/api/complaints", router);
// };