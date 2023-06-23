const express = require("express");
const { UserModel } = require("../Model/UserModel");
require("dotenv").config();

const userRouter = express.Router();

userRouter.get("/users", async (req, res) => {
    try {
        const data = await UserModel.find();
        res.status(200).send(data);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send({
            error: "Something went wrong",
        });
    }
});

module.exports = { userRouter };
