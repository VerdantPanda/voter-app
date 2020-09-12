const http = require ("http");
const express = require ("express");
const mongoose = require("mongoose");
const bodyPareser = require ("body-parser");
const cors = require ("cors")
const State = require ("Routes/state");




const app = express();

app.use (bodyPareser.json());
app.use(cors());
app.use("/api/state", State);

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log("listening on port " + port + "...")
})