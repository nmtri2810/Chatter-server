"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("User_Profiles", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            email: {
                type: Sequelize.STRING,
            },
            phone_number: {
                type: Sequelize.STRING,
            },
            password: {
                type: Sequelize.STRING,
            },
            first_name: {
                type: Sequelize.STRING,
            },
            last_name: {
                type: Sequelize.STRING,
            },
            gender: {
                type: Sequelize.CHAR(1),
            },
            dob: {
                type: Sequelize.DATEONLY,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("User_Profiles");
    },
};
