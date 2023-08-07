import db from "../models/index";

const getHomePage = async (req, res) => {
    let data = await db.User.findAll();
    console.log(data);
    return res.status(200).json({
        data,
    });
};

export default { getHomePage };
