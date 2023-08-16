"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class User_Post extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            User_Post.belongsTo(models.User_Profile);
            User_Post.hasMany(models.Post_Like);
            User_Post.hasMany(models.Post_Comment);
        }
    }
    User_Post.init(
        {
            text: DataTypes.STRING,
            media_location: DataTypes.STRING,
            profile_id: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "User_Post",
        }
    );
    return User_Post;
};
