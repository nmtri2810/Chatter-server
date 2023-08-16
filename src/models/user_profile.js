"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class User_Profile extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            User_Profile.hasOne(models.Role);
            User_Profile.hasMany(models.Friendship, {
                as: "profile_request",
            });
            User_Profile.hasMany(models.Friendship, {
                as: "profile_accept",
            });
            User_Profile.hasMany(models.User_Post);
            User_Profile.hasMany(models.Post_Like);
            User_Profile.hasMany(models.Post_Comment);
        }
    }
    User_Profile.init(
        {
            email: DataTypes.STRING,
            phone_number: DataTypes.STRING,
            password: DataTypes.STRING,
            first_name: DataTypes.STRING,
            last_name: DataTypes.STRING,
            gender: DataTypes.CHAR(1),
            dob: DataTypes.DATEONLY,
        },
        {
            sequelize,
            modelName: "User_Profile",
        }
    );
    return User_Profile;
};
