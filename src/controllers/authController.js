import authService from "../services/authService";
import jwt from "jsonwebtoken";

export const handleRegister = async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).json({
                message: "Missing required parameter",
            });
        }

        let message = await authService.registerUser(req.body);

        return res.status(200).json({
            message,
        });
    } catch (error) {
        console.log(error);
    }
};

export const handleLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Invalid email or password",
            });
        }

        let { message, userId, accessToken } = await authService.loginUser(
            email,
            password
        );

        res.cookie("jwt", accessToken, { maxAge: 1000 * 60 * 60 * 24 });

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
    } catch (error) {
        console.log(error);
    }
};

export const handleAuthenticateToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader.split(" ")[1];
    if (!token) res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) res.sendStatus(403);
        next();
    });
};
