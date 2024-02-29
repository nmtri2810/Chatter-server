import db from "../models/index";
import bcrypt from "bcrypt";

const getUsersFromDB = async (id) => {
    try {
        let users;
        if (id === "ALL") {
            users = await db.User_Profile.findAll();
        }
        if (id && id !== "ALL") {
            users = await db.User_Profile.findOne({
                where: { id },
            });
        }

        return users;
    } catch (error) {
        console.log(error);
    }
};

const createUser = async (data) => {
    try {
        let message;
        let user = await checkUserEmailFromDB(data.email);
        if (user) {
            message = "Email already exists";
            return message;
        }

        const hashPassword = await hashUserPassword(data.password);
        await db.User_Profile.create({
            email: data.email,
            phone_number: data.phone_number,
            password: hashPassword,
            first_name: data.first_name,
            last_name: data.last_name,
            gender: data.gender,
            dob: data.dob,
        });

        message = "Created";
        return message;
    } catch (error) {
        console.log(error);
    }
};

const hashUserPassword = async (password) => {
    try {
        const salt = await bcrypt.genSalt(+process.env.PASSWORD_SALT_ROUND);
        const hashPassword = await bcrypt.hash(password, salt);
        return hashPassword;
    } catch (error) {
        console.log(error);
    }
};

const checkUserEmailFromDB = async (email) => {
    try {
        let user = await db.User_Profile.findOne({
            where: { email },
        });

        if (user) {
            return user;
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
    }
};

const editUser = async (data) => {
    try {
        let message;
        let user = await db.User_Profile.findOne({
            where: { id: data.id },
            raw: false,
        });

        if (user) {
            user.phone_number = data.phone_number;
            user.first_name = data.first_name;
            user.last_name = data.last_name;
            user.gender = data.gender;
            user.dob = data.dob;

            await user.save();

            message = "Updated";
            return message;
        } else {
            message = "User not exist";
            return message;
        }
    } catch (error) {
        console.log(error);
    }
};

const deleteUser = async (id) => {
    try {
        let message;
        let user = await db.User_Profile.findOne({
            where: { id },
        });

        if (!user) {
            message = "User not exist";
            return message;
        }

        await db.User_Profile.destroy({
            where: { id },
        });

        message = "Deleted";
        return message;
    } catch (error) {
        console.log(error);
    }
};

export default {
    getUsersFromDB,
    createUser,
    editUser,
    deleteUser,
};
