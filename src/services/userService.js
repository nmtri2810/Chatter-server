import db from "../models/index";

const getUsersFromDB = async () => {
    try {
        const data = await db.User_Profile.findAll({
            raw: true,
        });

        return data;
    } catch (error) {
        console.log(error);
    }
};

export default {
    getUsersFromDB,
};
