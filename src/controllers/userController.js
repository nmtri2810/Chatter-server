import userService from "../services/userService";

const handleGetUsers = async (req, res) => {
    try {
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
    } catch (error) {
        console.log(error);
    }
};

const handleCreateUser = async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).json({
                message: "Missing required parameter",
            });
        }

        let message = await userService.createUser(req.body);

        return res.status(200).json({
            message,
        });
    } catch (error) {
        console.log(error);
    }
};

const handleEditUser = async (req, res) => {
    try {
        let data = req.body;

        if (!data) {
            return res.status(400).json({
                message: "Missing required parameter",
            });
        }

        let message = await userService.editUser(data);

        return res.status(200).json({
            message,
        });
    } catch (error) {
        console.log(error);
    }
};

const handleDeleteUser = async (req, res) => {
    try {
        let id = req.body.id;

        if (!id) {
            return res.status(400).json({
                message: "Missing required parameter",
            });
        }

        let message = await userService.deleteUser(id);

        return res.status(200).json({
            message,
        });
    } catch (error) {
        console.log(error);
    }
};

export default {
    handleGetUsers,
    handleCreateUser,
    handleEditUser,
    handleDeleteUser,
};
