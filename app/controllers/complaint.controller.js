// const db = require("../models");
// const Complaint = db.complaints;
// const Op = db.Sequelize.Op;

// // //image upload
// // const multer=require('multer')
// // const path=require('path')
// // Create and Save a new Tutorial
// exports.create = (req, res) => {
//   // Validate request
//   if (!req.body.full_name) {
//     res.status(400).send({
//       message: "Content can not be empty!"
//     });
//     return;
//   }

//   //image upload
// //   const storage = multer.diskStorage({
// //     destination: (req, file, cb) => {
// //         cb(null, 'Images')
// //     },
// //     filename: (req, file, cb) => {
// //         cb(null, Date.now() + path.extname(file.originalname))
// //     }
// // })

// // const upload = multer({
// //     storage: storage,
// //     limits: { fileSize: '1000000' },
// //     fileFilter: (req, file, cb) => {
// //         const fileTypes = /jpeg|jpg|png|gif/
// //         const mimeType = fileTypes.test(file.mimetype)  
// //         const extname = fileTypes.test(path.extname(file.originalname))

// //         if(mimeType && extname) {
// //             return cb(null, true)
// //         }
// //         cb('Give proper files formate to upload')
// //     }
// // }).single('image')


//   // Create a Tutorial
//   const complaint = {
//     District: req.body.District,
//     Tehsil: req.body.Tehsil,
//     Address: req.body.  Address,
//     Type: req.body. Type,
//     Complaint_type: req.body. Complaint_type,
//     Sub_type: req.body. Sub_type,
    
//     Images: req.body. Images,
//     published: req.body.published ? req.body.published : false
//   };

//   // Save Tutorial in the database
//   Complaint.create(complaint)
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while creating the Complaint."
//       });
//     });
// };


// // Retrieve all Tutorials from the database.
// exports.findAll = (req, res) => {
//   const District = req.query.District;
//   var condition = District? { full_name: { [Op.iLike]: `%${District}%` } } : null;

//   Complaint.findAll({ where: condition })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving users."
//       });
//     });
// };


// // Find a single Tutorial with an id
// exports.findOne = (req, res) => {
//   const id = req.params.id;

//   Complaint.findByPk(id)
//     .then(data => {
//       if (data) {
//         res.send(data);
//       } else {
//         res.status(404).send({
//           message: `Cannot find user with id=${id}.`
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error retrieving user with id=" + id
//       });
//     });
// };


// // Update a Tutorial by the id in the request
// exports.update = (req, res) => {
//   const id = req.params.id;

//   Complaint.update(req.body, {
//     where: { id: id }
//   })
//     .then(num => {
//       if (num == 1) {
//         res.send({
//           message: "Complaint was updated successfully."
//         });
//       } else {
//         res.send({
//           message: `Cannot update Complaint with id=${id}. Maybe Complaint was not found or req.body is empty!`
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error updating Complaint with id=" + id
//       });
//     });
// };

// // Delete a Tutorial with the specified id in the request
// exports.delete = (req, res) => {
//   const id = req.params.id;
//   Complaint.destroy({
//     where: { id: id }
//   })
//     .then(num => {
//       if (num == 1) {
//         res.send({
//           message: "Complaint was deleted successfully!"
//         });
//       } else {
//         res.send({
//           message: `Cannot delete Complaint with id=${id}. Maybe Complaint was not found!`
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Could not delete Complaint with id=" + id
//       });
//     });
// };

// // Delete all Tutorials from the database.
// exports.deleteAll = (req, res) => {
//     Complaint.destroy({
//     where: {},
//     truncate: false
//   })
//     .then(nums => {
//       res.send({ message: `${nums} Complaints were deleted successfully!` });
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while removing all Complaints."
//       });
//     });
// };

// // Find all published Tutorials
// exports.findAllPublished = (req, res) => {
//     Complaint.findAll({ where: { published: true } })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving Complaints."
//       });
//     });
// };
// // module.exports={
// //     upload
// // }