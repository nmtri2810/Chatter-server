import express from "express";

import {
    handleRegister,
    handleLogin,
    handleAuthenticateToken,
} from "../controllers/authController";
import userController from "../controllers/userController";

const router = express.Router();

const initApiRoutes = (app) => {
    router.post("/register", handleRegister);
    router.post("/login", handleLogin);

    // router.get("/users", authenticateToken, userController.handleGetUsers);
    router.get("/users", userController.handleGetUsers);
    router.post("/create-user", userController.handleCreateUser);
    router.put("/edit-user", userController.handleEditUser);
    router.delete("/delete-user", userController.handleDeleteUser);

    return app.use("/api/v1", router);
};

export default initApiRoutes;
