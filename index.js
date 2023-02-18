//https://www.youtube.com/watch?v=qwM23_kF4v4   min29:20

const { Configuration, OpenAIApi } = require("openai");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

//connect to OpenAI
const configuration = new Configuration({
  organization: "org-MilsZjmhcGi0CzP9I70FfIXK",
  apiKey: process.env.OPENAI_KEY,
});
const openai = new OpenAIApi(configuration);
//const response = await openai.listEngines();

//create API

const app = express();
const port = 3080;

app.post("/", async (req, res) => {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Say this is a test",
    max_tokens: 7,
    temperature: 0,
  });
  console.log(response.data.choices[0].text);
  res.json({ data: response.data });
});

app.listen(port, () => {
  console.log(`App listening at localhost ${port}`);
});
