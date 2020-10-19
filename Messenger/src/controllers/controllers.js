/*THIS FILE CONTAINS CONTROLLERS REQUIRED FOR THE VARIOUS ROUTES*/
const request = require("request");
require("dotenv").config();

const VALIDATION_TOKEN = process.env.VALIDATION_TOKEN;
const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;

//CONTROLLER TO VALIDATE WEBHOOK REQUEST
const validationController = (req, res) => {
  if (
    req.query["hub.mode"] &&
    req.query["hub.verify_token"] === VALIDATION_TOKEN
  ) {
    return res.status(200).send(req.query["hub.challenge"]);
  } else {
    return res.status(403).end();
  }
};

const sendMessage = (event) => {
  let sender = event.sender.id;
  let text = event.message.text;
  request(
    {
      url: "https://graph.facebook.com/me/messages",
      qs: { access_token: PAGE_ACCESS_TOKEN },
      method: "POST",
      json: {
        recipient: { id: sender },
        message: { text: text },
      },
    },
    function (err, res) {
      if (err) {
        console.log("Error sending message: ", err);
      } else if (res.body.err) {
        console.log("Error: ", res.body.err);
      }
    }
  );
};

//CONTROLLER TO ACTUALLY RESPOND TO A MESSAGE
const messageController = (req, res) => {
  console.log(req.body);
  if (req.body.object === "page") {
    req.body.entry.forEach((entry) => {
      entry.messaging.forEach((event) => {
        if (event.message && event.message.text) {
          sendMessage(event);
        }
      });
    });
    return res.status(200).end();
  }
};

module.exports = { validationController, messageController };
