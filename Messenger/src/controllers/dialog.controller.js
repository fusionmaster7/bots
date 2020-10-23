// Imports the Dialogflow library
const dialogflow = require("@google-cloud/dialogflow");
const configObj = require("../config");

require("dotenv").config();

// Instantiates a session client
const sessionClient = new dialogflow.SessionsClient(configObj);
const sessionId = "123456";

const projectId = process.env.PROJECT_ID;
const languageCode = "en";

const detectIntent = async (projectId, sessionId, query, languageCode) => {
  // The path to identify the agent that owns the created intent.
  const sessionPath = sessionClient.projectAgentSessionPath(
    projectId,
    sessionId
  );

  // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: query,
        languageCode: languageCode,
      },
    },
  };
  const responses = await sessionClient.detectIntent(request);
  const result = responses[0].queryResult;
  return result.fulfillmentText;
};

const getResponseText = async (query) => {
  try {
    const textResponse = await detectIntent(
      projectId,
      sessionId,
      query,
      languageCode
    );
    return textResponse;
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
};

module.exports = { getResponseText };
