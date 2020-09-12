const mongoose = require ("mongoose");

const stateSchema = new mongoose.Schema({
    name : String,
    letters : String,
    registerlink: String,
    demographics : {
        ethnicity: [String],
        gender : [String],
    },
    supressionHistory : [String],
    acceptedIdForms : [String],
    changeLocation : Boolean,
    commonErrors : [String],
    localVolunterrLinks : [String],
    trackingLink : String,
    requiredBallotFields : [String],
    locationLink : String,


})

const State = mongoose.model("state", stateSchema);
module.exports = State;