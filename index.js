//https://www.youtube.com/watch?v=qwM23_kF4v4   min29:20

//api key: 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
const dotenv = require("dotenv");
dotenv.config();

const { Configuration, OpenAIApi } = require("openai");
console.log("process.env.REACT_APP_OPENAI_KEY");
console.log(process.env.TEST);
//console.log(process.env);
const configuration = new Configuration({
  organization: "org-MilsZjmhcGi0CzP9I70FfIXK",
  apiKey: process.env.OPENAI_KEY,
});
const openai = new OpenAIApi(configuration);
//const response = await openai.listEngines();

async function callApi() {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Say this is a test",
    max_tokens: 7,
    temperature: 0,
  });
  console.log(response.data.choices[0].text);
}

callApi();
