// Dependancies
const express = require("express");
const fs = require("fs");
const cors = require("cors");
const serverless = require("serverless-http");
const util = require("./utils.js");

//App from here
const app = express();
app.use(express.json());
app.use(cors());

// Order function
app.post("/order", (req, res) => {
    const order = req.body.order;
    console.log(JSON.stringify(order));
    res.send(`Order received for ${order}`);
    console.log(util.getOrderID());
});

app.listen(3069);
console.log("Listening on port 3069");