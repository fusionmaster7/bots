const express = require("express");
const router = express.Router();

const {
  validationController,
  messageController,
} = require("../controllers/controllers");

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
  console.log("Getting Post request");
  messageController(req, res);
});

module.exports = router;
