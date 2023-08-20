import authService from "../services/authService";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    await authService.handleUserRegister(req.body);

    return res.status(201).json({
        message: "created",
    });
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            message: "Invalid email or password",
        });
    }

    let { message, userId, accessToken } = await authService.handleUserLogin(
        email,
        password
    );

    switch (message) {
        case "Email not found":
        case "Wrong password":
            return res.status(401).json({
                message,
                userId,
                accessToken,
            });
        case "Ok":
            return res.status(200).json({
                message,
                userId,
                accessToken,
            });
    }
};

export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader.split(" ")[1];
    if (!token) res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) res.sendStatus(403);
        next();
    });
};
