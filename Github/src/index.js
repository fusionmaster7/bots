const express = require("express");
const axios = require("axios");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const createJWTString = () => {};

const createIssueComment = async (req, res) => {
  try {
    const result = await axios.post(
      "https://api.github.com/repos/fusionmaster7/bots/issues/10/comments",
      { body: "Comment#2" },
      { headers: { Accept: "application/vnd.github.v3+json" } }
    );
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

app.get("/", (req, res) => {
  res.send("Working");
});

app.get("/callback", (req, res) => {
  console.log("callback called at get route");
  res.send("Working");
});

app.post("/callback", (req, res) => {
  console.log("callback called at post route");
  res.send("Working");
});

app.post("/webhook", (req, res) => {
  console.log("Webhook called");
  console.log(req.body);
});

app.get("/trial", (req, res) => {
  createIssueComment(req, res);
  res.send("Working");
});

app.listen(3000, () => {
  console.log("Listening on 3000");
});
