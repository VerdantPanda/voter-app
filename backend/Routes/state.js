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

router.get("/byletters/:state", (req, res) => {
    State.findOne({"letters" : req.params.state}, (err, docs) => {
        if (err) {
            console.log("not-found");
            res.status(404).send(err);
        }
        else{
           
            res.status(200).send(docs);
        }
    } )
})

router.get("/registerlink/:state", (req, res) => {
    State.findOne({"letters" : req.params.state}, (err, docs) => {
        if (err) {
            console.log("not-found");
            res.status(404).send(err);
        }
        else{
           if (docs){
            res.status(200).send(docs.registerlink);
           }
           else{
               res.status(400).end();
           }
        }
    } )
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
