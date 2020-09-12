const express = require ("express");
const State = require ("./Schemas/state");
const router = express.Router();

router.get ("/", async (req, res) => {
    State.Find((err, docs) => {
        if (err) {
            res.status(400).send(err);
            console.log("Oops, and error occured");
        }
        else {
            res.send(docs).status(200);
        }
    })
})

module.exports = router;
