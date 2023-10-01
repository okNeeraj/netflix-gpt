import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true
});

export default openai;
