import userService from "../services/userService";

const getUsers = async (req, res) => {
    let id = req.query.id; //ALL || id

    if (!id) {
        return res.status(400).json({
            message: "Missing required parameter",
        });
    }

    let users = await userService.getUsersFromDB(id);

    return res.status(200).json({
        message: "Ok",
        users,
    });
};

export default {
    getUsers,
};
