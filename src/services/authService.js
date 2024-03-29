import bcrypt from "bcrypt";
import db from "../models/index";
import jwt from "jsonwebtoken";

const registerUser = async (data) => {
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

const loginUser = async (email, password) => {
    try {
        let message, userId, accessToken;
        let user = await checkUserEmailFromDB(email);
        if (user) {
            let checkPassword = bcrypt.compareSync(password, user.password);
            if (checkPassword) {
                message = "Ok";
                userId = user.id;
                accessToken = jwt.sign(
                    { userId },
                    process.env.ACCESS_TOKEN_SECRET,
                    {
                        expiresIn: "7d",
                    }
                );
            } else {
                message = "Wrong password";
            }
        } else {
            message = "Email not found";
        }

        return { message, userId, accessToken };
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

export default {
    registerUser,
    loginUser,
};
