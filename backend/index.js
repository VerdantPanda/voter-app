
const express = require ("express");
const mongoose = require("mongoose");
const bodyPareser = require ("body-parser");
const cors = require ("cors");
const config = require ("config");
const State = require ("./Routes/state");

const dbConnectionString = config.get("dbConnectionString")
mongoose.set("useCreateIndex", true);
mongoose.connect (dbConnectionString, {useNewUrlParser:true, useFindAndModify: false, useUnifiedTopology:true}, (err)=> {
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



const port = process.env.PORT || 3002;

app.listen(port, () => {
    console.log("listening on port " + port + "...")
})