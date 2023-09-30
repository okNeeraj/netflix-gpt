import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "YOUR_API_KEY", // defaults to process.env["OPENAI_API_KEY"]
  dangerouslyAllowBrowser: true
});

export default openai;
