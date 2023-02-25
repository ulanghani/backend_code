module.exports = (sequelize, Sequelize) => {
  const bcrypt=require('bcrypt')
  const User = sequelize.define("user", {
    full_name: {
      type: Sequelize.STRING
    },

    cnic: {
      type: Sequelize.INTEGER
    },
    district: {
      allowNull: false,
      type: Sequelize.STRING
    },
    tehsil: {
      type: Sequelize.STRING,
      allowNull: false
    },
    type: {
      type: Sequelize.STRING,
      allowNull: false
    },

    mobile: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,  
       allowNull: false,
      unique: true
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });
  User.beforeCreate(async (user, options) => {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
  });
  return User;
};