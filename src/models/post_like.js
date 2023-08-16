"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Post_Like extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Post_Like.belongsTo(models.User_Post, {
                as: "post",
            });
            Post_Like.belongsTo(models.User_Profile, {
                as: "profile",
            });
        }
    }
    Post_Like.init(
        {
            post_id: DataTypes.INTEGER,
            profile_id: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Post_Like",
        }
    );
    return Post_Like;
};
