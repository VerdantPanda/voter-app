const express = require ("express");
const State = require ("../Schemas/state")
const router = express.Router();

router.get ("/", (req, res) => {
    
    State.find((err, docs) => {
        if (err) {
            res.status(400).send(err);
            console.log("Oops, and error occured");
        }
        else {
            res.send(docs).status(200);
        }
    })
})

router.post ("/", (req,res) => {
    const newState = Object.assign(new State(), req.body);
    newState.save((err, docs) => {
        if (err){
            console.log ("An error occured saving the new state data");
            res.status(400).send(err)
        }
        else {
            res.send(docs).status(200);
        }
    })
})

router.put ("/:id", (req, res) => {
    const oldState = State.findByIdAndUpdate(
        req.params.id,
            req.body
        ) 
})

module.exports = router;
