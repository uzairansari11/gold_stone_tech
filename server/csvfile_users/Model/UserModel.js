const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,

    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
        type: String,
        emun: {
            values: ['male', 'female']
        }
    },
    status: {
      type: String,
      enmu: {
        values: ["active", "inactive"]
      },
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("User", UserSchema);
module.exports = { UserModel };
