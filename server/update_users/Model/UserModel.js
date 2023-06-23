const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
    {
        name: {
            type: String,
            unique: true,
        },
        email: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
        },
        status: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const UserModel = mongoose.model("User", UserSchema);
module.exports = {UserModel};
