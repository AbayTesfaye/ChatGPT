const { Configuration, OpenAIApi } = require("openai");

// Create a new configuration object with your API key
const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY, // API key stored in an environment variable
});

// Create an instance of the OpenAIApi using the configuration
const openai = new OpenAIApi(configuration);

// Now you can use the `openai` instance to make API requests, like this:
export async function sendMsgToOpenAI(message) {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: message,
    tempreture: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presense_penalty: 0,
  });
  return response.data.choices[0].text;
}
