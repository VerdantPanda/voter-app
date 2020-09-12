const express = require("express");
const State = require("../Schemas/state");
const VisionAPI = require("../visionapi.js");
const router = express.Router();
const multer = require("multer");
var upload = multer({ dest: "uploads/" });

router.get("/", (req, res) => {
  State.find((err, docs) => {
    if (err) {
      res.status(400).send(err);
      console.log("Oops, and error occured");
    } else {
      res.send(docs).status(200);
    }
  });
});

router.get("/getstate/:state", (req, res) => {
  State.findOne({ letters: req.params.state }, (err, docs) => {
    if (err) {
      console.log("not-found");
      res.status(404).send(err);
    } else {
      res.status(200).send(docs);
    }
  });
});

router.get("/registerlink/:state", (req, res) => {
  State.findOne({ letters: req.params.state }, (err, docs) => {
    if (err) {
      console.log("not-found");
      res.status(404).send(err);
    } else {
      if (docs) {
        res.status(200).send(docs.registerlink);
      } else {
        res.status(400).end();
      }
    }
  });
});

router.post("/", (req, res) => {
  const newState = Object.assign(new State(), req.body);
  newState.save((err, docs) => {
    if (err) {
      console.log("An error occured saving the new state data");
      res.status(400).send(err);
    } else {
      res.send(docs).status(200);
    }
  });
});

router.put("/:id", (req, res) => {
  const oldState = State.findByIdAndUpdate(req.params.id, req.body);
});

router.post("/", (req, res) => {
  const newState = Object.assign(new State(), req.body);
  newState.save((err, docs) => {
    if (err) {
      console.log("An error occured saving the new state data");
      res.status(400).send(err);
    } else {
      res.send(docs).status(200);
    }
  });
});

router.put("/:id", (req, res) => {
  const oldState = State.findByIdAndUpdate(req.params.id, req.body);
});

router.post("/detectState", upload.single("avatar"), (req, res, next) => {
  const state = VisionAPI(req.file);
  console.log("req.file.originalname:");
  console.log(req.file.originalname);

  console.log("state:");
  console.log(state);

  if (state == "No state found!" || state == "Image error!!!") {
    res.send("Error occurred!").status(400).end();
  } else {
    res
      .send({
        TestStateResponse: state,
        fileName: req.file.originalname,
        TestStringResponse: "test-string",
      })
      .status(200)
      .end();
  }
  console.log("_________");
});
module.exports = router;
