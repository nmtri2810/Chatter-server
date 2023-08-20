import express from "express";

import {
    register,
    login,
    authenticateToken,
} from "../controllers/authController";
import userController from "../controllers/userController";

const router = express.Router();

const initWebRoutes = (app) => {
    router.post("/register", register);
    router.post("/login", login);

    router.get("/users", authenticateToken, userController.getUsers);

    return app.use("/api/v1", router);
};

export default initWebRoutes;
