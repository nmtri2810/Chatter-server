"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("User_Posts", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            text: {
                type: Sequelize.STRING,
            },
            media_location: {
                type: Sequelize.STRING,
            },
            profile_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "User_Profiles",
                    key: "id",
                },
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
        await queryInterface.dropTable("User_Posts");
    },
};
