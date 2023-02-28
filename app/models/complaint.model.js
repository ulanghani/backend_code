module.exports = (sequelize, Sequelize) => {
    const Complaint = sequelize.define("complaint", {
        District: {
            type: Sequelize.STRING
        },

        Tehsil: {
            type: Sequelize.STRING
        },
        Address: {
            type: Sequelize.STRING
        },
        Type: {
            type: Sequelize.STRING
        },

        Complaint_type: {
            type: Sequelize.STRING
        },

        Sub_type: {
            type: Sequelize.STRING
        },
        Image_url_1: {
            type: Sequelize.STRING
        },
        Image_url_2: {
            type: Sequelize.STRING
        },
        Image_url_3: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        }
    });

    return Complaint;
};