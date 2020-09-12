const http = require ("http");
const express = require ("express");
const mongoose = require("mongoose");
const bodyPareser = require ("body-parser");
const cors = require ("cors");
const State = require ("./Routes/state");

<<<<<<< HEAD
=======
mongoose.set("useCreateIndex", true);
const dbConnectionString = "mongodb+srv://2020fpennapps:VoterApp2020@voter-2020.nsemj.gcp.mongodb.net/State_Info?retryWrites=true&w=majority"
mongoose.connect (dbConnectionString, {useNewUrlParser:true, useFindAndModify: false, useUnifiedTopology:true}, (err)=> {
    if (err) {
        console.log("database connection failed");
    }
    else {
        console.log("connected to the database :)  ...");
    }
}  )

>>>>>>> bf9f71a90ac20030e99c637d743facaf06f3fc10
const app = express();

app.use (bodyPareser.json());
app.use(cors());
app.use("/api/state", State);

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log("listening on port " + port + "...")
})