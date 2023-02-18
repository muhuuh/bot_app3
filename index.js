//https://www.youtube.com/watch?v=qwM23_kF4v4   min29:20

const { Configuration, OpenAIApi } = require("openai");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

//connect to OpenAI
const configuration = new Configuration({
  organization: "org-MilsZjmhcGi0CzP9I70FfIXK",
  apiKey: process.env.OPENAI_KEY2,
});
const openai = new OpenAIApi(configuration);
//const response = await openai.listEngines();

//create API

const app = express();
//app.use(express.json());
//app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
const port = 3080;

app.post("/", async (req, res) => {
  const { message } = req.body;
  console.log(message);

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${message}`,
    max_tokens: 100,
    temperature: 0.5,
  });
  console.log(response.data.choices[0].text);

  res.json({
    //data: response.data
    message: response.data.choices[0].text,
  });
});

app.listen(port, () => {
  console.log(`App listening at localhost ${port}`);
});
