const { getResponseText } = require("./dialog.controllers");

const messageController = async (messageString, commandPrefix) => {
  if (messageString.startsWith(commandPrefix)) {
    const query = messageString.slice(1).trim();
    const messageResponse = await getResponseText(query);
    console.log(messageResponse);
    return messageResponse;
  } else {
    return null;
  }
};

module.exports = { messageController };
