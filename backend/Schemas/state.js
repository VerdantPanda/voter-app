const mongoose = require ("mongoose");

const stateSchema = new mongoose.Schema({
    name : String,
    abv : String,
    registerLink: String,
    demographics : {
        ethnicity: [String],
        gender : [String],
    },
    supressionHistory : [String],
    idForms : [String],
    ballotErrors : [String],
    volunteer : [String],
    trackingLink : String,
    deadlines : [String],
    pollingLocation : String,


})

const State = mongoose.model("state", stateSchema);
module.exports = State;