"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Post_Comment extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Post_Comment.belongsTo(models.User_Post, {
                as: "post_id",
            });
            Post_Comment.belongsTo(models.User_Profile, {
                as: "profile_id",
            });
        }
    }
    Post_Comment.init(
        {
            text: DataTypes.STRING,
            post_id: DataTypes.INTEGER,
            profile_id: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Post_Comment",
        }
    );
    return Post_Comment;
};
