"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Friendship extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Friendship.belongsTo(models.User_Profile, {
                as: "request",
            });
            Friendship.belongsTo(models.User_Profile, {
                as: "accept",
            });
        }
    }
    Friendship.init(
        {
            profile_request: DataTypes.INTEGER,
            profile_accept: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Friendship",
        }
    );
    return Friendship;
};
