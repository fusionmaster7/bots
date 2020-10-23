const express = require("express");
const router = express.Router();

const {
  validationController,
  messageController,
} = require("../controllers/message.controller");

const { getResponseText } = require("../controllers/dialog.controller");

router.get("/", (req, res) => {
  res.send("Working");
});

//ONLY VALIDATION WILL BE DONE THROUGH GET ROUTE
//REST ALL INTERACTION WILL BE THROUGH POST ROUTE
router.get("/webhook", (req, res) => {
  console.log("Webhook called");
  validationController(req, res);
});

router.post("/webhook", (req, res) => {
  messageController(req, res);
});

router.get("/trial", (req, res) => {
  getResponseText("hello").then((text) => {
    console.log(text);
  });
  res.send("Working");
});

module.exports = router;
