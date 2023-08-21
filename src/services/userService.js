import db from "../models/index";

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

export default {
    getUsersFromDB,
};
