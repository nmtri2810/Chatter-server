import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";
import cors from "cors";

import initApiRoutes from "./routes/api";
import connectDB from "./config/connectDB";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
    cors({
        origin: true,
    })
);

const port = process.env.PORT || 8080;

initApiRoutes(app);

connectDB();

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
