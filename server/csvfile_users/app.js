const express = require("express");
const fs = require("fs");
require("dotenv").config();
const cors = require("cors");
const { createObjectCsvWriter } = require("csv-writer");
const { connection } = require("./config/db");
const { UserModel } = require("./Model/UserModel");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/csv", async (req, res) => {
    try {
        let usersData = await UserModel.find();

        if (usersData.length) {
            const csvfile = createObjectCsvWriter({
                path: "users.csv",
                header: [
                    { id: "_id", title: "Id" },
                    { id: "name", title: "Name" },
                    { id: "email", title: "Email" },
                    { id: "gender", title: "Gender" },
                    { id: "status", title: "Status" },
                    { id: "createdAt", title: "Created" },
                    { id: "updatedAt", title: "Updated" },
                ],
            });
            csvfile.writeRecords(usersData).then(() => {
                const data = fs.createReadStream("users.csv");
                res.setHeader("Content-Type", "text/csv");
                res.setHeader("Content-Disposition", "attachment; filename=users.csv");
                data.pipe(res);
            });
        } else {
            res.send("No user found");
        }
    } catch (error) {
        console.error("An error occurred:", error);
        res.status(500).send(error.message);
    }
});

app.listen(3003, async () => {
    try {
        await connection();
    } catch (error) {
        console.log(error);
    }
    console.log("server is running at 3003");
});
