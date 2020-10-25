const dialogflow = require("@google-cloud/dialogflow");
const {
  dialog_private_key,
  dialog_client_email,
  dialog_project_id,
} = require("../config.json");

const sessionId = "123456";
const languageCode = "en";
const projectId = dialog_project_id;

const sessionClient = new dialogflow.SessionsClient({
  credentials: {
    private_key: dialog_private_key,
    client_email: dialog_client_email,
  },
});

const detectIntent = async (projectId, sessionId, query, languageCode) => {
  const sessionPath = sessionClient.projectAgentSessionPath(
    projectId,
    sessionId
  );

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
