const express = require("express");
const State = require("../Schemas/state");
const VisionAPI = require("../visionapi.js");
const router = express.Router();
const multer = require("multer");
var upload = multer({ dest: "uploads/" });
const cors = require('cors');
const axios = require('axios');
router.use(cors({ origin: true }));





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
  State.findOne({ name: req.params.state }, (err, docs) => {
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

router.get("/linkregister/:state", (req, res) => {
    State.findOne({ name: req.params.state }, (err, docs) => {
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

router.post("/", async (req, res) => {
  const newState = await Object.assign(new State(), req.body);
  newState.save((err, docs) => {
    if (err) {
      console.log("An error occured saving the new state data");
      res.status(400).send(err);
    } else {
      res.send(docs).status(200);
    }
  });
});

router.put("/:id", async (req, res) => {
    
  const state = await State.findByIdAndUpdate(req.params.id, req.body, {new: true});
  console.log(state);
  res.send(state).status(200)
});

router.delete("/:id", async (req, res) => {
    
    const result = await State.findByIdAndDelete(req.params.id);
    res.send(result).status(200)
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


router.use("/news", (req, res) => {
  
    axios.get('https://news.google.com/rss/search?q=Voter%20Suppression%20'+req.query.state+'&hl=en-PK&gl=PK&ceid=PK:en')
    .then(response => {
      console.log(response.data);
      res.json(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  });


router.post("/detectState", upload.single("avatar"), async (req, res, next) => {
  console.log("_________");
  console.log("_________");
  const state = await VisionAPI(req.file);
  //   console.log("req.file.originalname:");
  //   console.log(req.file.originalname);

  console.log("state:");
  console.log(state);
  console.log("_________");
  console.log("_________");

  if (state === "No State Found!" || state === "Image Error, No state.") {
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
});
module.exports = router;
