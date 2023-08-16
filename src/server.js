import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";

import initWebRoutes from "./routes/web";
import connectDB from "./config/connectDB";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

initWebRoutes(app);

connectDB();

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
