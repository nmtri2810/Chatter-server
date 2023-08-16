"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Friendships", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            profile_request: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "User_Profiles",
                    key: "id",
                },
            },
            profile_accept: {
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
        await queryInterface.dropTable("Friendships");
    },
};
