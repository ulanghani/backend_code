module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    full_name: {
      type: Sequelize.STRING
    },

    cnic: {
      type: Sequelize.INTEGER
    },
    district: {
      type: Sequelize.STRING
    },
    tehsil: {
      type: Sequelize.STRING
    },
    type: {
      type: Sequelize.STRING
    },

    mobile: {
      type: Sequelize.INTEGER
    },
    password: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });

  return User;
};