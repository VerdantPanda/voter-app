const http = require ("http");
const express = require ("express");
const mongoose = require("mongoose");
const bodyPareser = require ("body-parser");
const cors = require ("cors")

const app = express();

app.use (bodyPareser.json());
app.use(cors());

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log("listening on port " + port + "...")
})