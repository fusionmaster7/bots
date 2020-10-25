const Discord = require("discord.js");
const config = require("./config.json");

const { messageController } = require("./controllers/response.controllers");
const startBot = () => {
  const client = new Discord.Client();

  client.once("ready", () => {
    console.log("Bot Ready");
  });

  client.on("message", async (message) => {
    const messageString = message.content;
    const messageResponse = await messageController(
      messageString,
      config.prefix
    );
    if (messageResponse !== null) {
      message.channel.send(messageResponse);
    }
  });

  client.login(config.token);
};

module.exports = { startBot };
