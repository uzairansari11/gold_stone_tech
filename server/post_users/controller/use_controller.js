const express = require("express");
const { UserModel } = require("../Model/UserModel");
require("dotenv").config();

const userRouter = express.Router();

userRouter.post("/users", async (req, res) => {
    const { name, email, gender, status } = req.body;
    if (name && email && gender && status) {
        try {
            const user = await new UserModel(req.body)
            user.save()
            res.status(200).send(user)
        } catch (err) {
            return res.status(500).send({
                error: "Something went wrong",
            });
        }
    } else {
        return res.send(404).send("provide all details")
    }

});

module.exports = { userRouter };
