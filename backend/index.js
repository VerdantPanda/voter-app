
const express = require ("express");
const mongoose = require("mongoose");
const bodyPareser = require ("body-parser");
const cors = require ("cors");
const State = require ("./Routes/state");

mongoose.set("useCreateIndex", true);
const dbConnectionString = "mongodb+srv://2020fpennapps:VoterApp2020@voter-2020.nsemj.gcp.mongodb.net/State_Info?retryWrites=true&w=majority"
mongoose.connect (dbConnectionString, {useNewUrlParser:true, useFindAndModify: false, useUnifiedTopology:true}, (err)=> {
    if (err) {
        console.log("database connection failed");
    }
    else {
        console.log("connected to the database :)");
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