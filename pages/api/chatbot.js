import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const chatlog = [];

export default async function handler(req, res) {
  const message = req.body.message;

  chatlog.push(message);

  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      max_tokens: 3060,
      messages: [
        {
          role: "system",
          content:
            "You are a helpful chatbot that helps with almost anything like answering questions about the weather or helping the user to find out specific data like how many goals cristiano Ronaldo has scored in Champions League.",
        },
        ...message,
      ],
    });
    const chatbotResponse = response.data.choices[0].message;

    chatlog.push(chatbotResponse);

    return res.json({ chatbotResponse });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ errMessage: "Error" });
  }
}
