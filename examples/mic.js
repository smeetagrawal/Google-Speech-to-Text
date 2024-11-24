require("dotenv").config();
const recorder = require("node-record-lpcm16");
const { recognizeLiveStreamingV2 } = require("../stt_recognizer/google");

const recognizeStream = recognizeLiveStreamingV2();

recognizeStream.on("data", (data) => {
  console.log("isFinal", data);
  console.log("data", data.results[0].alternatives);
  if (data?.results[0]?.isFinal) {
    console.log(JSON.stringify(data.results[0].alternatives, null, 2));
  }
});

/**
 * These are the options for the recording from your machine,
 * so this will be used by "node-record-lpcm16" package and not by Google Speech to Text
 */
const recordingOptions = {
  sampleRateHertz: 8000,
  threshold: 0,
  verbose: true,
  recordProgram: "sox",
  silence: "1.0",
  audioType: "wav",
};

recorder
  .record(recordingOptions)
  .stream()
  .on("error", (error) => {
    console.error("Recording Error:", error);
  })
  .on("data", (chunk) => {
    recognizeStream.write({
      audio: chunk.toString("base64"),
    });
  });

console.log("Listening, press Ctrl+C to stop.");
