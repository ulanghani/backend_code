module.exports = app => {
  const users = require("../controllers/user.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", users.create);

  // Retrieve all Tutorials
  router.get("/", users.findAll);

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

  app.use("/api/users", router);
};


// module.exports = app => {
//   const complaints = require("../controllers/complaint.controller.js");

//   var router = require("express").Router();

//   // Create a new Tutorial
//   router.post("/", complaints.create);

//   // Retrieve all Tutorials
//   router.get("/", complaints.findAll);

//   // Retrieve all published Tutorials
//   router.get("/published", complaints.findAllPublished);

//   // Retrieve a single Tutorial with id
//   router.get("/:id",complaints.findOne);

//   // Update a Tutorial with id
//   router.put("/:id", complaints.update);

//   // Delete a Tutorial with id
//   router.delete("/:id", complaints.delete);

//   // Create a new Tutorial
//   router.delete("/", complaints.deleteAll);

//   app.use("/api/complaints", router);
// };