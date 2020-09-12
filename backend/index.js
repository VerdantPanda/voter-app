const http = require ("http");
const express = require ("express");
const mongoose = require("mongoose");
const bodyPareser = require ("body-parser");
const cors = require ("cors");
const State = require ("./Routes/state");
require('dotenv').config()

console.log (process.env.DB_CONNECTION_STRING);

mongoose.set("useCreateIndex", true);
mongoose.connect (process.env.DB_CONNECTION_STRING, {useNewUrlParser:true, useFindAndModify: false, useUnifiedTopology:true}, (err)=> {
    if (err) {
        console.log("database connection failed");
    }
    else {
        console.log("connected to the database :)  ...");
    }
}  )

const app = express();

app.use (bodyPareser.json());
app.use(cors());
app.use("/api/state", State);

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log("listening on port " + port + "...")
})