const express = require("express");
const { connection } = require("./config/db");
require('dotenv').config();
const cors = require('cors');
const { userRouter } = require('./controller/use_controller');


const app = express();
app.use(cors());
app.use(express.json());

app.use("/get", userRouter);

app.listen(3001, async () => {
    try {
        await connection();
        console.log("Connected to the database");
    } catch (error) {
        console.log("Error connecting to the database:", error);
    }
    console.log("User service 3001");
});
