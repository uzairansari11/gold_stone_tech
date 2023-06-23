const express = require("express");
const { UserModel } = require("../Model/UserModel");
require("dotenv").config();

const userRouter = express.Router();

userRouter.patch("/users/:id", async (req, res) => {
    const id = req.params.id;
    const paylaod = req.body;
    try {
        const data = await UserModel.findByIdAndUpdate({ _id: id }, paylaod, {
            new: true,
        });
        if (data) {
            res.status(200).send(data);
        } else {
            res.status(404).send("User not found")
        }
    } catch (err) {
        console.error(err.message);
        return res.status(500).send({
            error: "Something went wrong",
        });
    }
});

module.exports = { userRouter };
