const speechV2 = require("@google-cloud/speech").v2;
const credPath = require("path").join(__dirname, "../google_cred.json");

const clientV2 = new speechV2.SpeechClient({
  keyFilename: credPath,
});

const recognizeLiveStreamingV2 = () => {
  const recognizerName = `projects/${process.env.GOOGLE_CLOUD_PLATFORM_PROJECT_NAME}/locations/global/recognizers/_`;

  const streamingConfig = {
    config: {
      languageCodes: ["en-IN"],
      model: "telephony",
      autoDecodingConfig: {},
      explicitDecodingConfig: {
        encoding: "LINEAR16",
        sampleRateHertz: 16000,
        audioChannelCount: 1,
      },
    },
    streamingFeatures: {
      interimResults: true,
    },
  };

  const configRequest = {
    recognizer: recognizerName,
    streamingConfig,
  };

  const recognizeStream = clientV2
    ._streamingRecognize()
    .on("error", (error) => {
      console.error("Error in _streamingRecognize:", error);
    });

  recognizeStream.write(configRequest);

  return recognizeStream;
};

module.exports = { recognizeLiveStreamingV2 };
