const mongoose = require ("mongoose");

const stateSchema = new mongoose.Schema({
    registerlink: String,
    supressionHistory : [String],
    acceptedIdForms : [String],
    changeLocation : Boolean,
    commonErrors : [String],
    localVolunterrLinks : [String],
    trackingLink : String,
    requiredBallotFields : [String],


})

const State = mongoose.model("state", stateSchema);
module.exports = State;