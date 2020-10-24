const messageController = (messageString, commandPrefix) => {
  if (messageString.startsWith(commandPrefix)) {
    return messageString.slice(1).trim();
  } else {
    return null;
  }
};

module.exports = { messageController };
