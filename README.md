# Google Speech-to-Text Setup Guide

This guide provides instructions on setting up Google Speech-to-Text v2 for transcribing audio to text.

## Project Setup

### 1. Install Dependencies

Run the following command to install all necessary packages:

`npm install`

### 2. Microphone Access

- This project uses the [node-record-lpcm16](https://www.npmjs.com/package/node-record-lpcm16)  package for accessing the microphone. This package requires sox to be installed on your machine. Refer to the node-record-lpcm16 documentation for installation instructions specific to your operating system.

Note: You can use any other package for microphone access, but node-record-lpcm16 has been tested and is compatible with Google Speech-to-Text.

### 3. Environment Variables

- Create a .env file in the root directory of the project. Copy the contents of .env-sample into your 
.env file and set the appropriate values.

### 4. Google Credentials

- Google Speech-to-Text services require authentication and are paid services. To authenticate, you need a "google_cred.json" file.

- Obtain your "google_cred.json" file from the Google Cloud Console.

- Place this file in the root directory of the project. Ensure the file is named "google_cred.json". If your credentials file has a different name, rename it accordingly.


## Run the project

- To run the example of using the mic then run this command - `npm run mic`