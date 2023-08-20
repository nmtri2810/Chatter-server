import userService from "../services/userService";

const getUsers = async (req, res) => {
    let data = await userService.getUsersFromDB();

    return res.status(200).json({
        message: "ok",
        data,
    });
};

export default {
    getUsers,
};
