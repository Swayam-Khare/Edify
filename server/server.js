import express from "express";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";
import router from "./router/route.js";

/** import connection file */
import connect from "./database/conn.js";

const app = express();

/** app middlewares */
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
config();

/** application port */
const port = process.env.PORT || 5050;

/** routes */
app.use("/api", router); /** apis */

app.get("/", (req, res) => {
    try {
        res.json("Get Request");
    } catch (error) {
        res.json(error);
    }
});

/** Start the server only when we have a valid connection to database */
connect()
    .then(() => {
        try {
            app.listen(port, () => {
                console.log(`Server is connected to http://localhost:${port}`);
            });
        } catch (error) {
            console.log("Cannot connect to the server");
        }
    })
    .catch((error) => {
        console.log("Invalid Database connection");
    });
